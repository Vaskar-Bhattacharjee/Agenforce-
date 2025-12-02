import { cn } from "@/libs/utils"

const Container = ({className, children}:{
    className?: string,
    children: React.ReactNode
} ) =>{
  return (
    <div
    className={cn(' max-w-7xl h-auto mx-auto ', className)}
    >{children}</div>
  )
}

export default Container