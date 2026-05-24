import Link from 'next/link'
import { Mail, Shield, AlertCircle } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-primary-600 to-accent-600 rounded flex items-center justify-center text-white text-sm font-bold">
                D
              </div>
              Docsy
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              AI-powered PDF toolkit with OCR scanning, encryption, and secure vault.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 smooth-transition text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/delete-account"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 smooth-transition text-sm flex items-center gap-1"
                >
                  <AlertCircle className="w-4 h-4" />
                  Delete Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Security */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Security
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600 dark:text-gray-400">
                AES-256 Encryption
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Firebase Security
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                GDPR Compliant
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Developer
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              <strong>Abhi Gandhi</strong>
              <br />
              <a
                href="mailto:abhi@docsy.app"
                className="hover:text-primary-600 dark:hover:text-primary-400 smooth-transition"
              >
                abhi@docsy.app
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div>
              <p>
                © {currentYear} <strong>Abhi Gandhi</strong>. All rights reserved.
              </p>
            </div>
            <div className="md:text-right">
              <p className="mb-2">
                <strong>Web Compliance</strong>
              </p>
              <p className="text-xs">
                This website complies with Google Play Data Safety and API Services User Data Policy.
              </p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
