import { cn } from "@/libs/utils"

const Container = ({className, children}:{
    className?: string,
    children: React.ReactNode
} ) =>{
  return (
    <div
   
    className={cn('max-w-screen md:max-w-6xl mx-auto md:mx-auto px-4 md:px-6 h-auto', className)}
    >
        {children}
    </div>
  )
}

export default Container