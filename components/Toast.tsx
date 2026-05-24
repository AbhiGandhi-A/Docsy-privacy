'use client'

import { useEffect, useState } from 'react'
import { Check, AlertCircle, Info } from 'lucide-react'

interface Toast {
  id: string
  message: string
  type: 'success' | 'error' | 'info'
  duration?: number
}

let toastId = 0
let listeners: Array<(toast: Toast) => void> = []

export function useToast() {
  const addToast = (
    message: string,
    type: 'success' | 'error' | 'info' = 'info',
    duration = 3000
  ) => {
    const id = `toast-${++toastId}`
    const toast: Toast = { id, message, type, duration }
    listeners.forEach((listener) => listener(toast))
  }

  return {
    success: (message: string, duration?: number) =>
      addToast(message, 'success', duration),
    error: (message: string, duration?: number) =>
      addToast(message, 'error', duration),
    info: (message: string, duration?: number) =>
      addToast(message, 'info', duration),
  }
}

export default function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    const handleToast = (toast: Toast) => {
      setToasts((prev) => [...prev, toast])

      if (toast.duration) {
        setTimeout(() => {
          setToasts((prev) => prev.filter((t) => t.id !== toast.id))
        }, toast.duration)
      }
    }

    listeners.push(handleToast)

    return () => {
      listeners = listeners.filter((l) => l !== handleToast)
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>
  )
}

function Toast({ toast }: { toast: Toast }) {
  const bgColors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
  }

  const icons = {
    success: <Check className="w-5 h-5" />,
    error: <AlertCircle className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />,
  }

  return (
    <div
      className={`${bgColors[toast.type]} text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up pointer-events-auto`}
    >
      {icons[toast.type]}
      <span className="text-sm font-medium">{toast.message}</span>
    </div>
  )
}
