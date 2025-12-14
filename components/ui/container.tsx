import { cn } from "@/libs/utils"

const Container = ({className, children}:{
    className?: string,
    children: React.ReactNode
} ) =>{
  return (
    <div
    // Mobile (Default): 
    // w-full: Takes 100% width of the parent (or screen).
    // px-4: Provides a standard 1rem (16px) of padding on the left and right sides.
    //
    // Desktop (md: breakpoint):
    // md:max-w-7xl: Constrains the width on large screens.
    // md:mx-auto: Centers the container.
    // md:px-0: Removes the mobile padding on desktop since the auto-margins handle the space.
    className={cn('w-full px-4 md:max-w-7xl md:mx-auto md:px-0 h-auto', className)}
    >
        {children}
    </div>
  )
}

export default Container