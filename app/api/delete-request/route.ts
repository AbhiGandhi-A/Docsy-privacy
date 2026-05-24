import { NextRequest, NextResponse } from 'next/server'
import { validateDeletionRequest } from '@/lib/validation'
import { sendDeletionRequestEmail } from '@/lib/email'

/**
 * POST /api/delete-request
 * Handles user account deletion requests and sends notification emails
 */
export async function POST(request: NextRequest) {
  try {
    // Verify request method
    if (request.method !== 'POST') {
      return NextResponse.json(
        { success: false, message: 'Method not allowed' },
        { status: 405 }
      )
    }

    // Parse request body
    let body
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { success: false, message: 'Invalid JSON body' },
        { status: 400 }
      )
    }

    // Validate request data
    const validation = validateDeletionRequest({
      email: body.email || '',
      uid: body.uid,
      reason: body.reason || '',
      accepted: body.accepted === true,
    })

    if (!validation.valid) {
      // Return first validation error
      const firstError = Object.values(validation.errors)[0]
      return NextResponse.json(
        {
          success: false,
          message: firstError || 'Validation failed',
          errors: validation.errors,
        },
        { status: 400 }
      )
    }

    // Generate timestamp
    const timestamp = new Date().toISOString()

    // Send email notification to developer
    try {
      await sendDeletionRequestEmail({
        userEmail: body.email,
        uid: body.uid,
        reason: body.reason,
        timestamp,
      })
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      // Log but don't fail the request if email fails
      // In production, you might want to implement a retry mechanism
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message:
          'Deletion request received. Check your email for confirmation instructions.',
        requestId: `del_${Date.now()}`,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Deletion request error:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred processing your request. Please try again.',
      },
      { status: 500 }
    )
  }
}

/**
 * Handle other HTTP methods
 */
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}

// For methods like GET, HEAD, etc
export async function GET() {
  return NextResponse.json(
    { success: false, message: 'This endpoint only accepts POST requests' },
    { status: 405 }
  )
}
