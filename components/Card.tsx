import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({
  children,
  className = '',
  hover = true,
}: CardProps) {
  return (
    <div
      className={`glass rounded-xl p-6 md:p-8 ${
        hover ? 'hover:shadow-lg hover:border-primary-200 dark:hover:border-primary-900' : ''
      } smooth-transition ${className}`}
    >
      {children}
    </div>
  )
}
