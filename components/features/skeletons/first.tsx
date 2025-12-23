import { cn } from "@/libs/utils"
import { IconCircleDashedCheck, IconClock, IconExclamationCircle, IconPrison, IconRipple } from "@tabler/icons-react"

export const SkeletonOne = () => {
    return (
        <div className="perspective-distant h-full w-full overflow-hidden group absolute top-0 left-0 -ml-2 sm:-ml-4 md:-ml-7"
        style={{
            transform: 'rotateX(20deg) rotateY(-15deg) rotateZ(15deg) scale(1.2) '
        }} 
        >
           <SkeletonCard 
           className="left-19 top-30 z-30 max-w-[90%] sm:max-w-[87%] md:max-w-[85%] transition-all ease-in-out duration-200"
            icon = {<IconCircleDashedCheck className="size-5 sm:size-6" />}
            title = "Campaign Planner"
            description = "Creates clear. Ready-to-use campaign briefs using product info, audience data, and past results."
            Badge = {<Badge variant = "danger" text = "New" />}
           /> 

            <SkeletonCard 
            className="left-14 top-20 z-20 max-w-[88%] sm:max-w-[84%] md:max-w-[80%] transition-all ease-in-out duration-200 delay-100" 
            icon = {<IconExclamationCircle className="size-5 sm:size-6" />}
            title = "Issue tracker"
            description = "Creates clear. Ready-to-use campaign briefs using product info, audience data, and past results."
            Badge = {<Badge variant = "success" text = "New" />}
            
           /> 
            <SkeletonCard 
            className="left-10 top-11 z-10 max-w-[85%] sm:max-w-[80%] md:max-w-[75%] transition-all ease-in-out duration-200 delay-200"
            icon = {<IconPrison className="size-5 sm:size-6" />}
            title = "Risk Management"
            description = "Creates clear. Ready-to-use campaign briefs using product info, audience data, and past results."
            Badge = {<Badge variant = "warning" text = "New" />}
           /> 
         </div>
    )
}


export const SkeletonCard = ({icon, title, description, Badge, className  }:{
    icon: React.ReactNode,
    title: string,
    description: string,
    Badge: React.ReactNode
    className?: string
}) => {
    return (
        <div className={cn(
            "max-w-[80%] mx-auto p-2 sm:p-3 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px]     border border-neutral-400 bg-neutral-100 dark:bg-neutral-700 dark:border-neutral-300 absolute w-full",
            "h-[140px] sm:h-40 md:h-[170px]",
            'mask-radial-from-90%',
            className
        )}>
            <div className="flex items-center gap-1 sm:gap-2 lg:gap-3">
                {icon}
                <p className="text-xs sm:text-sm font-semibold truncate flex-1"> {title}</p>
                {Badge}
            </div>
            <p className="text-xs sm:text-sm max-w-[90%] sm:max-w-[85%] md:max-w-[80%] m-auto text-neutral-500 dark:text-neutral-400 font-medium mt-2 sm:mt-3 line-clamp-2">
                {description}
            </p>
            <div className="flex items-center gap-1.5 sm:gap-2 max-w-[90%] sm:max-w-[85%] md:max-w-[80%] m-auto mt-2 sm:mt-3 flex-wrap">
             <Tags text = "Google Ads" />
             <Tags text = "Saas" />
             <Tags text = "B2B" />
            </div>
        </div>
    )
}

export const Tags = ({
  text
}: {
  text: string
}) => {
  return (
       <div className="px-1.5 sm:px-2 text-[10px] sm:text-xs py-0.5 sm:py-1 rounded-sm bg-neutral-200 dark:bg-neutral-700 whitespace-nowrap">
            {text}
        </div>
  )
}

export const Badge = ({variant, text}: {
    variant: 'danger' | 'success' | 'warning',
    text?: string
}) => {
  return (
    <div className={cn(
        "p-0.5 sm:p-1 rounded-full flex items-center gap-0.5 sm:gap-1",
        variant === "danger" && "bg-red-300 text-red-800",
        variant === "success" && "bg-green-100 text-green-800",
        variant === "warning" && "bg-yellow-100 text-yellow-800"
    )}>
      <IconClock className="size-3 sm:size-4" />
      <IconRipple className="size-3 sm:size-4" />
      <p className="text-[10px] sm:text-xs">{text}</p>
    </div>
  )
}