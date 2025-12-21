'use client'
import Logo from '@/components/ui/logo'
import Link from 'next/link'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ModeToggle from './mode-toggle'
import { Button } from './button'
import Container from './container'


 const navlinks = [
        {
            title: "Features",
            href: "/features "
        },
        {
            title: "Product",
            href: "/product."
        },
        {
            title: "Socials",
            href: "/socials "
        },
        {
            title: "Pricing",
            href: "/pricing "
        }
    ]
export default function Navbar(){
 
  return (
    <motion.div 
    initial={{
        opacity: 0,
    }}
    animate={{
        opacity: 1,
        backdropFilter: 'blur(10px)'
    }}
    exit={{
        opacity: 0,
        backdropFilter: 'blur(0px)'
    }}
    transition={{
        duration: 0.2 
    }}
    className='md:border-b md:border-neutral-200 md:dark:border-neutral-800 fixed inset-x-0 top-0 z-50 flex items-center justify-center' >
        
        <Container className='w-screen'>
            <DesktopNavbar />
            <MobileNavbar />
        </Container>
    </motion.div>
        

    
  )
}

export const MobileNavbar = () => {
    const [open, setOpen] = useState(false)
  return (
      <div className='absolute inset-x-0 flex items-center justify-between   lg:hidden px-0 md:px-12 py-2'>
        <Logo className=''/>
        <div  onClick={() => {setOpen(!open)}} className='hover:bg-neutral-300 hover:dark:bg-neutral-800 cursor-pointer p-1 border-transparent rounded-sm'>
        <SidebarSVG className=' text-neutral-800 dark:text-neutral-200 mr-5' />
        </div>
        <AnimatePresence>
        {open && (
            
            <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                backdropFilter: 'blur(15px)'
            }}
            exit={{
                opacity: 0,
                backdropFilter: 'blur(0px)'
            }}
            transition={{
                duration: 0.2 
            }}
            className='fixed inset-0 w-full h-160 bg-neutral-100/90 dark:bg-neutral-900 z-999 px-2 py-2'>
              <div className='flex justify-between  border-b border-neutral-200 dark:border-neutral-800'>
                  <Logo />

                <div className='cursor-pointer flex justify-between items-center mr-5'>
                    <ModeToggle
                    className='absolute top-5 right-24'
                    />
                    <button 
                    onClick={() => setOpen(false)}
                    
                    >
                        <Cross className='my-2   text-black dark:text-white cursor-pointer w-6 h-6' />
                    </button>
                    
                </div>  

              </div>
                <div className='absolute right-[35%] w-full left-[40%]'>
                    <div className='flex flex-col justify-end w-full gap-4 p-4 mt-10'>
                    {navlinks.map((item, index) => (
                            <motion.div
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1
                            }}
                            
                            transition={{
                                duration: 0.1,
                                delay: index * 0.1
                            }}
                            key={index + item.title} >
                                <Link href={ item.href} className='text-[30px] font-medium text-neutral-600 dark:text-neutral-300 border-b border-neutral-800 cursor-pointer pb-1 hover:ml-2 transition-all ease-in-out'>
                                { item.title}
                                </Link>
                            </motion.div>
                    ))}
                     </div>

                     <div className='flex items-center gap-4 mt-10'>
                           
                        <Link href="/sign-in"> <Button variant='white'>Sign In</Button> </Link>
                        <Link href="/sign-up"><Button variant='black'>Sign Up</Button></Link>
                     </div>


                     
                </div>

               
              
            </motion.div>
            
        )}
        </AnimatePresence>


         
        
        

    </div>
  )
}

  const SidebarSVG = ({ className }: { className?: string}) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg"
            className={className}
            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M9 4l0 16" /></svg>
        )
    }

  const Cross = ({ className }: { className?: string}) => {
      return(
        <svg xmlns="http://www.w3.org/2000/svg"
        className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
      )
  }
        
export const DesktopNavbar = () => {

    return (
            <Container className=' py-4 px-2 hidden lg:flex lg:justify-between lg:items-center '>
            <Logo />
            <div className='flex items-center gap-4'>
                {
                    navlinks.map((item, index) => (
                        <Link key ={index} href={item.href} className='text-[16px] font-medium text-neutral-600 dark:text-neutral-300'>    
                        {item.title}
                        </Link> 
                    ))
                }
            </div>

            <div className='flex items-center gap-4'>
                <ModeToggle />
                <Link href="/sign-in"> <Button variant='white'>Sign In</Button> </Link>
                <Link href="/sign-up"><Button variant='black'>Sign Up</Button></Link>
            </div>


       </Container>
       
    )

  
}