import { DottedGlowBackground } from "@/components/ui/dotted-glow-background"
import { cn } from "@/libs/utils"

export const SkeletonThree = ({
  className,
  
}: {
  className?: string
  
}) => {
  return (
    <div className={cn("p-4", className)}>
      <DottedGlowBackground
        color="rgba(0, 0, 0, 0.7)"
        glowColor="rgba(0, 170, 255, 0.85)"
        
        darkColor="rgba(255, 255, 255, 0.5)" 
        darkGlowColor="rgba(100, 200, 255, 1)"

        className="mask-b-from-50% mask-t-from-50% mask-l-from-50% mask-r-from-50%"
/>
    </div>
  )
}