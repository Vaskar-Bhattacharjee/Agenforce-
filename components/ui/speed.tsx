import { cn } from "@/lib/utils"
import Heading from "./header"
import Subheading from "./subheading"
import LandingImage from "../features/landing-image"

export const Speed = ({
  className
}: {
  className?: string
}) => {
  return (
    <div className={cn("p-4", className)}>
       <Heading
                       className="text-xl md:text-2xl lg:text-5xl text-neutral-800 dark:text-neutral-200 font-bold font-display tracking-tight"
>
          Built for speed, <br />
          Designed for scale.  
        </Heading>
        <Subheading>
            Deploy AI agents that plan, act through your tools, and report outcomes without changing how your team works. 
        </Subheading>
        <div className="pointer-events-none">
           <LandingImage
            className="pointer-events-none"
            BackImageAlt="Acertinity"
            BackImageDark="/Aceternity-dark.png"
            BackImageLight="/Aceternity.png"
            FrontImageAlt="ShadCN"
            FrontImageDark="/ShadCN-dark.png"
            FrontImageLight="/ShadCN.png"
          />
        </div>
        
    </div>
  )
}