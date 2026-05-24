'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FileText,
  Zap,
  Lock,
  Smartphone,
  Cloud,
  Shield,
  ArrowRight,
  Check,
} from 'lucide-react'
import Button from '@/components/Button'
import Card from '@/components/Card'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Home() {
  const features = [
    {
      icon: FileText,
      title: 'PDF Management',
      description: 'Organize, view, and manage PDF files with ease',
    },
    {
      icon: Zap,
      title: 'OCR Scanning',
      description: 'Extract text from images using advanced AI technology',
    },
    {
      icon: Smartphone,
      title: 'AI Summaries',
      description: 'Get intelligent summaries of your documents',
    },
    {
      icon: Cloud,
      title: 'Google Drive Sync',
      description: 'Backup and sync your files securely to Google Drive',
    },
    {
      icon: Lock,
      title: 'Translation',
      description: 'Translate documents into multiple languages',
    },
    {
      icon: Shield,
      title: 'Secure Vault',
      description: 'AES-256 encrypted local storage for sensitive files',
    },
  ]

  const keyPoints = [
    'Firebase Authentication with Google Sign-In',
    'AI-powered text extraction and processing',
    'End-to-end encryption for sensitive data',
    'Real-time Google Drive integration',
    'Cross-platform seamless experience',
    'Privacy-focused architecture',
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-28 md:py-32">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-100/40 to-transparent dark:from-primary-950/30 dark:to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Docsy</span> - AI-Powered{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-primary-600">
                PDF Toolkit
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Transform your documents with AI-powered OCR, intelligent summaries,
              and military-grade encryption. Seamlessly sync with Google Drive and
              keep your files secure.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link href="/privacy-policy">
                <Button size="lg">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/delete-account">
                <Button size="lg" variant="outline">
                  Request Account Deletion
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto text-center"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400">
                  100%
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Encrypted
                </p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400">
                  0ms
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Cloud Storage
                </p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400">
                  AI-Powered
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Processing
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-gray-900/50 border-t border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need to manage, organize, and protect your documents
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center text-white flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Image/Graphic */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 flex items-center justify-center p-8">
                  <div className="text-center">
                    <Shield className="w-32 h-32 text-primary-600 dark:text-primary-400 mx-auto mb-4 opacity-20" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Military-Grade Security
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Your Documents, <span className="gradient-text">Completely Secure</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Docsy uses AES-256 encryption to keep your sensitive documents
                protected. All processing happens on your device or through secure
                cloud APIs. Your privacy is our priority.
              </p>

              <ul className="space-y-4 mb-8">
                {keyPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <Link href="/privacy-policy">
                <Button>
                  Learn More About Privacy
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-900 dark:to-accent-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Documents?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Download Docsy today and experience the power of AI-driven document
              management with military-grade security.
            </p>
            <Link href="/privacy-policy">
              <Button size="lg" variant="secondary">
                Explore Docsy
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p className="mb-2">
            ✅ GDPR Compliant • Google Play Data Safety • Google API Services User Data Policy
          </p>
          <p>
            Developer: <strong>Abhi Gandhi</strong>
          </p>
        </div>
      </section>
    </>
  )
}
