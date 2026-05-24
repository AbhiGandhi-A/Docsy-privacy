// Email validation
export function validateEmail(email: string): { valid: boolean; error?: string } {
  if (!email || typeof email !== 'string') {
    return { valid: false, error: 'Email is required' }
  }

  const trimmed = email.trim()
  if (!trimmed) {
    return { valid: false, error: 'Email cannot be empty' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(trimmed)) {
    return { valid: false, error: 'Invalid email format' }
  }

  if (trimmed.length > 254) {
    return { valid: false, error: 'Email is too long' }
  }

  return { valid: true }
}

// Firebase UID validation (optional)
export function validateFirebaseUID(uid?: string): {
  valid: boolean
  error?: string
} {
  if (!uid) {
    return { valid: true } // Optional field
  }

  if (typeof uid !== 'string') {
    return { valid: false, error: 'Firebase UID must be a string' }
  }

  const trimmed = uid.trim()
  if (!trimmed) {
    return { valid: true } // Empty is acceptable for optional field
  }

  // Firebase UIDs are typically 28 characters, but can vary
  if (trimmed.length < 1 || trimmed.length > 128) {
    return { valid: false, error: 'Invalid Firebase UID format' }
  }

  return { valid: true }
}

// Reason validation
export function validateReason(reason: string): { valid: boolean; error?: string } {
  if (!reason || typeof reason !== 'string') {
    return { valid: false, error: 'Reason is required' }
  }

  const trimmed = reason.trim()
  if (!trimmed) {
    return { valid: false, error: 'Reason cannot be empty' }
  }

  if (trimmed.length < 10) {
    return { valid: false, error: 'Please provide at least 10 characters' }
  }

  if (trimmed.length > 1000) {
    return { valid: false, error: 'Reason is too long (max 1000 characters)' }
  }

  return { valid: true }
}

// Checkbox validation
export function validateCheckbox(accepted: boolean): {
  valid: boolean
  error?: string
} {
  if (!accepted) {
    return {
      valid: false,
      error: 'You must accept the confirmation to proceed',
    }
  }

  return { valid: true }
}

// Validate entire deletion request
export function validateDeletionRequest(data: {
  email: string
  uid?: string
  reason: string
  accepted: boolean
}): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {}

  const emailValidation = validateEmail(data.email)
  if (!emailValidation.valid) {
    errors.email = emailValidation.error || 'Invalid email'
  }

  const uidValidation = validateFirebaseUID(data.uid)
  if (!uidValidation.valid) {
    errors.uid = uidValidation.error || 'Invalid UID'
  }

  const reasonValidation = validateReason(data.reason)
  if (!reasonValidation.valid) {
    errors.reason = reasonValidation.error || 'Invalid reason'
  }

  const checkboxValidation = validateCheckbox(data.accepted)
  if (!checkboxValidation.valid) {
    errors.accepted = checkboxValidation.error || 'Must accept confirmation'
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}
