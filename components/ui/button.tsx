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
        'px-2 md:px-4 py-2 rounded-sm cursor-pointer transition-all text-xs md:text-sm ',

        // Default variant styles
        variant === 'white' && 'ring-1 ring-neutral-300 bg-white hover:shadow-2xl hover:bg-neutral-200  dark:bg-neutral-200 text-black  hover:dark:shadow-xl  ',
        variant === 'black' && 'bg-neutral-800 dark:bg-neutral-200 dark:text-black hover:dark:bg-neutral-300 hover:dark:text-neutral-850  text-white hover:shadow-2xl  dark:hover:shadow-2xl transition-shadow border border-neutral-400 dark:border-neutral-800',

        className
      )}
    >
      {children}
    </button>
  )
}
