'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AlertTriangle, Shield, CheckCircle, ArrowLeft } from 'lucide-react'
import Button from '@/components/Button'
import Card from '@/components/Card'
import { useToast } from '@/components/Toast'

export default function DeleteAccount() {
  const { success, error } = useToast()
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    uid: '',
    reason: '',
    accepted: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    // Reason validation
    if (!formData.reason.trim()) {
      newErrors.reason = 'Please provide a reason for deletion'
    } else if (formData.reason.trim().length < 10) {
      newErrors.reason = 'Please provide at least 10 characters'
    } else if (formData.reason.length > 1000) {
      newErrors.reason = 'Reason is too long (max 1000 characters)'
    }

    // Checkbox validation
    if (!formData.accepted) {
      newErrors.accepted = 'You must accept the confirmation to proceed'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      error('Please fix the errors in the form')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/delete-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          uid: formData.uid || undefined,
          reason: formData.reason,
          accepted: formData.accepted,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitted(true)
        success(
          'Deletion request received! Check your email for confirmation.'
        )
        setFormData({ email: '', uid: '', reason: '', accepted: false })
      } else {
        error(data.message || 'Failed to submit deletion request')
      }
    } catch (err) {
      console.error('Error submitting deletion request:', err)
      error('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen py-12 sm:py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="text-center border-2 border-green-200 dark:border-green-900/50">
              <div className="mb-6">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Request Received!</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Your account deletion request has been successfully submitted.
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6 text-left">
                <h3 className="font-bold text-green-900 dark:text-green-200 mb-3">
                  Next Steps:
                </h3>
                <ol className="space-y-2 text-green-900 dark:text-green-200 text-sm">
                  <li>
                    <strong>1.</strong> Check your email at{' '}
                    <code className="bg-green-100 dark:bg-green-900/50 px-1 rounded">
                      {formData.email}
                    </code>
                  </li>
                  <li>
                    <strong>2.</strong> Verify your deletion request (link expires in 7 days)
                  </li>
                  <li>
                    <strong>3.</strong> Your account will be deleted within 30 days
                  </li>
                  <li>
                    <strong>4.</strong> You'll receive a confirmation email when complete
                  </li>
                </ol>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                If you don&apos;t see an email, check your spam folder or contact support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button variant="outline">
                    <ArrowLeft className="w-5 h-5" />
                    Back to Home
                  </Button>
                </Link>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({
                      email: '',
                      uid: '',
                      reason: '',
                      accepted: false,
                    })
                  }}
                  className="px-6 py-2 text-primary-600 dark:text-primary-400 hover:underline smooth-transition"
                >
                  Submit Another Request
                </button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <section className="py-12 sm:py-16 md:py-20 bg-red-50 dark:bg-red-950/20 border-b border-red-200 dark:border-red-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-red-900 dark:text-red-200 mb-2">
                  Delete Your Account
                </h1>
                <p className="text-lg text-red-800 dark:text-red-300">
                  Permanently remove your Docsy account and associated data
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Warning Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <Card className="border-2 border-red-200 dark:border-red-900/50 bg-red-50/50 dark:bg-red-950/20">
              <div className="flex gap-4 items-start">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-200 mb-2">
                    Warning: This Action Is Permanent
                  </h3>
                  <ul className="text-red-800 dark:text-red-300 space-y-1 text-sm">
                    <li>
                      ✓ All your data will be permanently deleted from our servers
                    </li>
                    <li>✓ This action cannot be undone</li>
                    <li>✓ You will lose access to all your files and vault</li>
                    <li>✓ You can create a new account with the same email later</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <h2 className="text-2xl font-bold mb-6">Deletion Request Form</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-2 rounded-lg border smooth-transition
                      ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500'
                      }
                      bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                      placeholder-gray-500 dark:placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-950`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    The email address associated with your Docsy account
                  </p>
                </div>

                {/* Firebase UID (Optional) */}
                <div>
                  <label htmlFor="uid" className="block font-semibold mb-2">
                    Firebase UID{' '}
                    <span className="text-gray-500 dark:text-gray-400 font-normal">
                      (Optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    id="uid"
                    name="uid"
                    value={formData.uid}
                    onChange={handleChange}
                    placeholder="Your Firebase UID if you have it"
                    className={`w-full px-4 py-2 rounded-lg border smooth-transition
                      ${
                        errors.uid
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500'
                      }
                      bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                      placeholder-gray-500 dark:placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-950`}
                  />
                  {errors.uid && (
                    <p className="text-red-500 text-sm mt-1">{errors.uid}</p>
                  )}
                </div>

                {/* Reason */}
                <div>
                  <label htmlFor="reason" className="block font-semibold mb-2">
                    Reason for Deletion *
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    placeholder="Please tell us why you want to delete your account (min 10 characters)"
                    rows={5}
                    className={`w-full px-4 py-2 rounded-lg border smooth-transition resize-none
                      ${
                        errors.reason
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500'
                      }
                      bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                      placeholder-gray-500 dark:placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-950`}
                  />
                  <div className="flex justify-between items-center mt-2">
                    {errors.reason && (
                      <p className="text-red-500 text-sm">{errors.reason}</p>
                    )}
                    <p className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
                      {formData.reason.length}/1000
                    </p>
                  </div>
                </div>

                {/* Confirmation Checkbox */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="accepted"
                      checked={formData.accepted}
                      onChange={handleChange}
                      className="w-5 h-5 rounded border-gray-300 dark:border-gray-600 text-red-600 focus:ring-2 focus:ring-red-500 smooth-transition mt-1"
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      I understand that this will permanently delete my account and all associated data. This action cannot be undone.
                    </span>
                  </label>
                  {errors.accepted && (
                    <p className="text-red-500 text-sm mt-2">{errors.accepted}</p>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <Link href="/privacy-policy" className="flex-1">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full"
                      disabled={loading}
                    >
                      <ArrowLeft className="w-5 h-5" />
                      Cancel
                    </Button>
                  </Link>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg smooth-transition disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:focus:ring-offset-gray-950 flex items-center justify-center gap-2"
                  >
                    {loading && (
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    )}
                    <AlertTriangle className="w-5 h-5" />
                    Request Deletion
                  </button>
                </div>
              </form>
            </Card>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8"
          >
            <Card>
              <div className="flex gap-4 items-start">
                <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-3">What Happens Next</h3>
                  <ol className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600 dark:text-blue-400 flex-shrink-0">
                        1.
                      </span>
                      <span>
                        We'll send a confirmation email to verify your identity
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600 dark:text-blue-400 flex-shrink-0">
                        2.
                      </span>
                      <span>
                        You have 7 days to verify the deletion request
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600 dark:text-blue-400 flex-shrink-0">
                        3.
                      </span>
                      <span>
                        After verification, your data will be deleted within 30 days
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600 dark:text-blue-400 flex-shrink-0">
                        4.
                      </span>
                      <span>
                        You'll receive a final confirmation when deletion is complete
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              If you have questions about account deletion or need assistance:
            </p>
            <a
              href="mailto:abhi@docsy.app"
              className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline font-semibold"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
