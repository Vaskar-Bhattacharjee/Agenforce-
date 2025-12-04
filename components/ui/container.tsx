import { cn } from "@/libs/utils"

const Container = ({className, children}:{
    className?: string,
    children: React.ReactNode
} ) =>{
  return (
    <div
    className={cn(' max-w-7xl h-auto pr-3 md:pr-0 mx-auto ', className)}
    >{children}</div>
  )
}

export default Container