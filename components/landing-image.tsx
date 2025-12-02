'use client'

import { cn } from '@/libs/utils'
import Image from 'next/image'
import { motion } from 'framer-motion'

function LandingImage({ className }: { className?: string }) {
    
    return (
        <div className={cn('min-h-[360px] lg:min-h-[520px] w-[90%] mx-auto relative mt-20 md:mt-15 perspective-1000', className)}>

            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className='absolute inset-0'
            >
                {/* 1. Light Mode Back Image (Hidden in Dark Mode) */}
                <Image 
                    src='/Acertinity.png' 
                    alt='ACERTINITY Light' 
                    fill
                    className={cn(
                        'dark:hidden', 
                        'object-cover object-top border border-t-neutral-900 border-l-neutral-900 rounded-tl-[30px] shadow-2xl -ml-9',
                        'mask-b-from-50% mask-r-from-50%'
                        
                    )}
                    style={{ transform: 'rotateY(20deg) rotateX(40deg) rotateZ(-20deg)' }}
                />

                {/* 2. Dark Mode Back Image (Visible ONLY in Dark Mode) */}
                <Image 
                    src='/Acertinity-dark.png' 
                    alt='ACERTINITY Dark' 
                    fill
                    className={cn(
                        'hidden dark:block', // Shows when class="dark" is present
                        'object-cover object-top border border-tl-neutral-100 rounded-tl-[30px] shadow-none -ml-9',
                        'mask-b-from-50% mask-r-from-50%'
                        
                    )}
                    style={{ transform: 'rotateY(20deg) rotateX(40deg) rotateZ(-20deg)' }}
                />
            </motion.div>
            
            {/* --- FRONT IMAGE CONTAINER --- */}
            <motion.div
                initial={{ y: -300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className='absolute inset-0 translate-x-10 -translate-y-24 '
            >
                {/* 3. Light Mode Front Image */}
                <Image 
                    src='/ShadCN.png' 
                    alt='SHADCN Light' 
                    fill
                    className={cn(
                        'dark:hidden',
                        'object-cover object-top border border-t-neutral-900 border-l-neutral-900 -z-10 rounded-tl-[30px] mt-8 ml-3 lg:mt-0 lg:ml-0 shadow-2xl ',
                        'mask-b-from-90% mask-r-from-50%'
                    )}
                    style={{ transform: 'rotateY(20deg) rotateX(40deg) rotateZ(-20deg)' }}
                />

                {/* 4. Dark Mode Front Image */}
                <Image 
                    src='/ShadCN-dark.png' 
                    alt='SHADCN Dark' 
                    fill
                    className={cn(
                        'hidden dark:block',
                        'object-cover object-top border border-neutral-100 -z-10 rounded-tl-[30px] mt-8 ml-3 lg:mt-0 lg:ml-0 shadow-none',
                        'mask-b-from-90% mask-r-from-50%'
                    )}
                    style={{ transform: 'rotateY(20deg) rotateX(40deg) rotateZ(-20deg)' }}
                />
            </motion.div>
       </div>
  )
}

export default LandingImage