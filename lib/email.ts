import nodemailer from 'nodemailer'

// Validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Create SMTP transporter
export function createEmailTransporter() {
  const host = process.env.SMTP_HOST
  const port = parseInt(process.env.SMTP_PORT || '587')
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !port || !user || !pass) {
    console.warn('SMTP not configured - email functionality disabled')
    return null
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // TLS for 587, SSL for 465
    auth: {
      user,
      pass,
    },
  })
}

// Send deletion request email
export async function sendDeletionRequestEmail({
  userEmail,
  uid,
  reason,
  timestamp,
}: {
  userEmail: string
  uid?: string
  reason: string
  timestamp: string
}) {
  const transporter = createEmailTransporter()
  const developerEmail = process.env.DEVELOPER_EMAIL

  if (!transporter || !developerEmail) {
    console.warn(`Deletion request from ${userEmail} would be emailed but SMTP is not configured`)
    return
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(to right, #6366f1, #0ea5e9); color: white; padding: 20px; border-radius: 8px; }
          .content { background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .field { margin: 15px 0; }
          .label { font-weight: bold; color: #4b5563; }
          .value { background: white; padding: 12px; border-left: 4px solid #6366f1; margin-top: 5px; }
          .footer { font-size: 12px; color: #999; text-align: center; padding: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Account Deletion Request - Docsy</h1>
          </div>

          <p>A user has submitted an account deletion request. Please process this request according to your privacy policy and legal obligations.</p>

          <div class="content">
            <div class="field">
              <div class="label">📧 User Email:</div>
              <div class="value">${escapeHtml(userEmail)}</div>
            </div>

            ${uid ? `
            <div class="field">
              <div class="label">🔑 Firebase UID:</div>
              <div class="value">${escapeHtml(uid)}</div>
            </div>
            ` : ''}

            <div class="field">
              <div class="label">📝 Reason for Deletion:</div>
              <div class="value">${escapeHtml(reason)}</div>
            </div>

            <div class="field">
              <div class="label">⏰ Request Timestamp:</div>
              <div class="value">${escapeHtml(timestamp)}</div>
            </div>
          </div>

          <h3>Required Actions:</h3>
          <ul>
            <li>Verify user identity (recommended: email confirmation)</li>
            <li>Delete all associated user data from Firebase</li>
            <li>Remove from Firestore and Firebase Storage</li>
            <li>Delete analytics records</li>
            <li>Send confirmation email to user</li>
            <li>Document deletion for compliance records</li>
          </ul>

          <p style="background: #fef3c7; padding: 12px; border-radius: 6px; margin: 20px 0;">
            <strong>⚠️ Important:</strong> This email contains a user's personal information. 
            Store securely and delete after processing per GDPR/privacy policy requirements.
          </p>

          <div class="footer">
            <p>Docsy - AI PDF Toolkit</p>
            <p>This is an automated message from the Docsy official website.</p>
          </div>
        </div>
      </body>
    </html>
  `

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: developerEmail,
    subject: `[GDPR] Account Deletion Request - ${userEmail}`,
    html: htmlContent,
    text: `Account Deletion Request\n\nUser Email: ${userEmail}\n${uid ? `Firebase UID: ${uid}\n` : ''}Reason: ${reason}\nTimestamp: ${timestamp}`,
  })
}

// Utility function to escape HTML
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}
