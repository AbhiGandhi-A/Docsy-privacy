'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShieldAlert, Lock, Eye, Trash2, AlertCircle } from 'lucide-react'
import Button from '@/components/Button'
import Card from '@/components/Card'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function PrivacyPolicy() {
  const sections = [
    {
      id: 'data-collection',
      title: '1. Data Collection',
      icon: Eye,
    },
    {
      id: 'google-drive',
      title: '2. Google Drive API Limited Use Disclosure',
      icon: AlertCircle,
    },
    {
      id: 'permissions',
      title: '3. Permissions Explanation',
      icon: ShieldAlert,
    },
    {
      id: 'vault-security',
      title: '4. Vault Security',
      icon: Lock,
    },
    {
      id: 'ai-processing',
      title: '5. AI Processing Disclosure',
      icon: Eye,
    },
    {
      id: 'ads',
      title: '6. Advertisements Disclosure',
      icon: AlertCircle,
    },
    {
      id: 'account-deletion',
      title: '7. Account Deletion',
      icon: Trash2,
    },
  ]

  return (
    <>
      {/* Header */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-primary-100/40 to-transparent dark:from-primary-950/30 dark:to-transparent border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Docsy - AI PDF Toolkit
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Last Updated: {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 sm:py-12 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Table of Contents</h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <motion.a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 smooth-transition group"
                  variants={itemVariants}
                >
                  <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:scale-110 smooth-transition" />
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 smooth-transition">
                    {section.title}
                  </span>
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Card>
              <p className="text-lg mb-4">
                <strong>Docsy</strong> ("we," "our," or "us") is committed to protecting your
                privacy. This Privacy Policy explains how our app collects, uses, discloses,
                and safeguards your information when you use our mobile application ("App").
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300">
                Please read this privacy policy carefully. If you do not agree with our
                policies and practices, please do not use our App.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Data Collection */}
      <section id="data-collection" className="py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">1. Data Collection</h2>

            <div className="space-y-6">
              <Card>
                <h3 className="text-xl font-bold mb-3">Firebase Authentication</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  When you sign in to Docsy, we collect:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>✓ Email address</li>
                  <li>✓ Firebase User ID (UID)</li>
                  <li>✓ Display name (if provided)</li>
                  <li>✓ Profile picture (if provided)</li>
                  <li>✓ Authentication method (Google Sign-In or Anonymous)</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-bold mb-3">Device Information</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  We automatically collect technical information:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>✓ Device model and OS version</li>
                  <li>✓ Device identifiers (IDFA, Android Advertising ID)</li>
                  <li>✓ IP address</li>
                  <li>✓ App version and build number</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-bold mb-3">Analytics & Crash Logs</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Firebase Analytics and Crashlytics collect:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>✓ App usage patterns and feature interactions</li>
                  <li>✓ Crash reports and error logs</li>
                  <li>✓ Performance metrics</li>
                  <li>✓ Session duration and frequency</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-bold mb-3">AdMob Advertising Data</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Google AdMob collects advertising identifiers and limited usage data for
                  personalized ad delivery.
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Google Drive API Limited Use */}
      <section id="google-drive" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              2. Google Drive API Limited Use Disclosure
            </h2>

            <div className="space-y-6">
              <Card>
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                  <h4 className="font-bold text-blue-900 dark:text-blue-200 mb-2">
                    Google API Services User Data Policy Compliance
                  </h4>
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    Docsy's use of information received from Google APIs adheres to the{' '}
                    <strong>Google API Services User Data Policy</strong>, including the Limited
                    Use requirements.
                  </p>
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold mb-3">Limited Use Disclosure</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Docsy requests access to your Google Drive to facilitate file backup and
                  synchronization features. Our use of this data is limited to:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-4">
                  <li>
                    ✓ <strong>Backup & Sync</strong>: Upload and download files at user request
                  </li>
                  <li>
                    ✓ <strong>File Management</strong>: List and organize your Google Drive files
                    within the app
                  </li>
                  <li>
                    ✓ <strong>User Authorization</strong>: Verify your identity and permissions
                  </li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-bold mb-3">Data Handling Commitments</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-primary-600 dark:text-primary-400 font-bold">✓</span>
                    <span>
                      <strong>No Human Reading</strong>: We do not read, review, or manually
                      inspect your Google Drive files
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary-600 dark:text-primary-400 font-bold">✓</span>
                    <span>
                      <strong>No Data Selling</strong>: We never sell, share, or transfer your
                      Google user data to third parties
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary-600 dark:text-primary-400 font-bold">✓</span>
                    <span>
                      <strong>No Unauthorized Use</strong>: Data is only used for the app
                      functionality you explicitly authorize
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary-600 dark:text-primary-400 font-bold">✓</span>
                    <span>
                      <strong>Compliance</strong>: We comply with all Google API Terms of Service
                      and usage policies
                    </span>
                  </li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-bold mb-3">Revoke Access</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  You can revoke Docsy's access to your Google Drive at any time by visiting:{' '}
                  <a
                    href="https://myaccount.google.com/permissions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    Google Account Permissions
                  </a>
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Permissions */}
      <section id="permissions" className="py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">3. Permissions Explanation</h2>

            <div className="space-y-6">
              <Card>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  📷 Camera Permission
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Purpose:</strong> OCR Scanning & Document Capture
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  We request camera access to allow you to scan documents and extract text
                  using optical character recognition (OCR). Photos taken for OCR are processed
                  locally or sent to our AI processing service for text extraction.
                </p>
              </Card>

              <Card>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  💾 Storage/File Access Permission
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Purpose:</strong> PDF & Document Management
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  We request storage access to allow you to read, edit, and manage PDF files
                  stored on your device. This includes accessing your file system for document
                  vault operations.
                </p>
              </Card>

              <Card>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  🌐 Internet Permission
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Purpose:</strong> AI Processing, Sync, & Cloud Services
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Internet access is required for:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4 mt-3">
                  <li>✓ Firebase authentication and synchronization</li>
                  <li>✓ Google Drive backup and sync</li>
                  <li>✓ AI-powered summaries (Groq AI, Google Gemini)</li>
                  <li>✓ OCR API calls</li>
                  <li>✓ Translation services</li>
                  <li>✓ AdMob advertisement loading</li>
                  <li>✓ Analytics and crash reporting</li>
                </ul>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Vault Security */}
      <section id="vault-security" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">4. Vault Security</h2>

            <div className="space-y-6">
              <Card>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-green-600" />
                  AES-256 Local Encryption
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Docsy's Secure Vault uses <strong>AES-256 encryption</strong> - military-grade
                  encryption - to protect sensitive files stored on your device.
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>✓ Files are encrypted locally on your device</li>
                  <li>✓ Encryption keys are derived from your device PIN/biometric</li>
                  <li>✓ Only you can decrypt your vault files</li>
                  <li>✓ Encrypted data remains on your device</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-bold mb-3">Data Protection Guarantee</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Vault data is NEVER uploaded to Docsy servers or external services.</strong>
                  All vault content remains locally encrypted on your device at all times. This
                  ensures maximum privacy and security for your most sensitive documents.
                </p>
              </Card>

              <Card>
                <h3 className="text-xl font-bold mb-3">Access Control</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Your Secure Vault requires authentication each time:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>✓ Device PIN or Password</li>
                  <li>✓ Biometric authentication (Fingerprint, Face ID)</li>
                  <li>✓ Emergency unlock codes</li>
                </ul>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: AI Processing */}
      <section id="ai-processing" className="py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">5. AI Processing Disclosure</h2>

            <div className="space-y-6">
              <Card>
                <h3 className="text-xl font-bold mb-3">Cloud AI Processing</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  When you use AI-powered features, your document content may be processed
                  through external AI services:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>
                    <strong>Groq AI</strong>: Document summarization and text analysis
                  </li>
                  <li>
                    <strong>Google Gemini</strong>: Advanced document understanding and
                    summaries
                  </li>
                  <li>
                    <strong>Google ML Kit</strong>: Local or cloud-based OCR processing
                  </li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-bold mb-3">Important Notice</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Temporary Cloud Processing:</strong>
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>
                    ✓ PDF text and images are temporarily transmitted to AI APIs for processing
                  </li>
                  <li>✓ These third-party services may retain data per their privacy policies</li>
                  <li>
                    ✓ We do NOT store your documents permanently on our servers after processing
                  </li>
                  <li>✓ Please review the privacy policies of Groq, Google, etc. for details</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-bold mb-3">Sensitive Content Warning</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Do not process sensitive or confidential documents through AI features
                  unless you understand and accept that content may be processed by third-party
                  services.</strong> Use the Secure Vault for documents requiring maximum
                  privacy.
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Ads */}
      <section id="ads" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">6. Advertisements Disclosure</h2>

            <div className="space-y-6">
              <Card>
                <h3 className="text-xl font-bold mb-3">Google AdMob</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Docsy displays personalized advertisements through <strong>Google AdMob</strong>.
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>
                    ✓ AdMob collects your advertising identifier and limited usage data
                  </li>
                  <li>✓ Ads may be personalized based on your interests</li>
                  <li>
                    ✓ Google shares this data with its advertising network partners
                  </li>
                  <li>
                    ✓ You can opt-out of personalized ads in your device settings
                  </li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-bold mb-3">Third-Party Advertising Partners</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Ads displayed in Docsy may come from:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>✓ Google Ads and AdMob network</li>
                  <li>✓ Other advertising networks integrated by AdMob</li>
                  <li>✓ These partners may set their own cookies/identifiers</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-bold mb-3">Control Advertising</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  You can manage advertising preferences:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4 mt-3">
                  <li>
                    ✓ Android: Settings → Google → Manage your Google Account → Ads →
                    Opt-out of personalized ads
                  </li>
                  <li>✓ Visit Google's ads privacy page for more options</li>
                </ul>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Account Deletion */}
      <section id="account-deletion" className="py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">7. Account Deletion</h2>

            <div className="space-y-6">
              <Card>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Trash2 className="w-6 h-6 text-red-600" />
                  Your Right to Delete
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  You have the right to request complete deletion of your Docsy account and
                  associated data at any time. We respect your privacy and will comply with
                  deletion requests per GDPR and other applicable regulations.
                </p>
              </Card>

              <Card>
                <h3 className="text-xl font-bold mb-3">What Gets Deleted</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  When you request account deletion, we will remove:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>✓ Your Firebase account and authentication data</li>
                  <li>✓ Your profile information</li>
                  <li>✓ Firestore database records associated with your account</li>
                  <li>✓ Files stored in Firebase Storage under your account</li>
                  <li>✓ Analytics and usage records</li>
                  <li>✓ All backups and copies within 30 days</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-bold mb-3">What is NOT Deleted</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Please note the following may not be deleted:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>
                    ✓ Files you have in your Google Drive (only deleted from Docsy sync)
                  </li>
                  <li>✓ Legal/compliance records required by law</li>
                  <li>✓ Data held by third parties (Google, Groq, etc.)</li>
                </ul>
              </Card>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link href="/delete-account">
                  <Button size="lg" variant="danger" className="w-full">
                    <Trash2 className="w-5 h-5" />
                    Request Account Deletion
                  </Button>
                </Link>
              </motion.div>

              <Card>
                <h3 className="text-xl font-bold mb-3">Deletion Process</h3>
                <ol className="space-y-3 text-gray-700 dark:text-gray-300 ml-4">
                  <li>
                    <strong>1.</strong> Fill out the deletion request form with your email
                  </li>
                  <li>
                    <strong>2.</strong> Confirmation email sent to your registered email address
                  </li>
                  <li>
                    <strong>3.</strong> Verify your request within 7 days
                  </li>
                  <li>
                    <strong>4.</strong> Your account will be completely deleted within 30 days
                  </li>
                  <li>
                    <strong>5.</strong> Confirmation email after deletion is complete
                  </li>
                </ol>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">8. Data Security</h2>

            <Card>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>✓ End-to-end encryption for sensitive data</li>
                <li>✓ Secure HTTPS connections for all communications</li>
                <li>✓ Firebase security features and compliance</li>
                <li>✓ Regular security audits and updates</li>
                <li>✓ Limited employee access to personal data</li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">9. Contact Us</h2>

            <Card>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have questions about this Privacy Policy or our privacy practices:
              </p>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  <strong>Developer:</strong> Abhi Gandhi
                </p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:abhi@docsy.app"
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    abhi@docsy.app
                  </a>
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-900 dark:to-accent-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Want to Delete Your Account?
            </h3>
            <p className="text-white/90 mb-6">
              Proceed to our secure account deletion page
            </p>
            <Link href="/delete-account">
              <Button size="lg" variant="secondary">
                <Trash2 className="w-5 h-5" />
                Delete Account
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
