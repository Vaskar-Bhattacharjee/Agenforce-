import { cn } from '@/libs/utils'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: React.ReactNode
  variant?: 'white' | 'black'
}

export const Button = ({
  className,
  children,
  variant = 'white',
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        'px-2 md:px-7 py-3 rounded-sm cursor-pointer transition-all text-xs md:text-base ',

        // Default variant styles
        variant === 'white' && 'ring-1 ring-neutral-300 bg-white hover:shadow-2xl hover:font-light dark:bg-neutral-200 text-black  hover:dark:shadow-brand  ',
        variant === 'black' && 'bg-neutral-800 dark:bg-neutral-200 dark:text-black text-white hover:shadow-2xl hover:font-light  dark:hover:shadow-brand transition-shadow border border-neutral-400 dark:border-neutral-800',

        className
      )}
    >
      {children}
    </button>
  )
}
