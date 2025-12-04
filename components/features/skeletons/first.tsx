import { cn } from "@/libs/utils"
import { IconCircleDashedCheck, IconClock, IconExclamationCircle, IconPrison, IconRipple } from "@tabler/icons-react"

export const SkeletonOne = () => {
    return (
        <div className="perspective-distant h-full w-full overflow-hidden  absolute top-0 left-0 -ml-7 "
        style={{
            transform: 'rotateX(30deg) rotateY(-20deg) rotateZ(15deg) scale(1.3)'
        }} 
        >
           <SkeletonCard 
           className="left-18 bottom-0 top-22 z-30 max-w-[85%]"
            icon = {<IconCircleDashedCheck className="size-6" />}
            title = "Campaign Planner"
            description = "Creates clear. Ready-to-use campaign briefs using product info, audience data, and past results. "
            Badge = {<Badge variant = "danger" text = "New" />}
            //tags = {["Google Ads", "Saas", "B2B"]}
           /> 

            <SkeletonCard 
            className="top-12 z-20 bottom-10 left-13 max-w-[80%]"
            icon = {<IconExclamationCircle className="size-6" />}
            title = "Issue tracker"
            description = "Creates clear. Ready-to-use campaign briefs using product info, audience data, and past results. "
            Badge = {<Badge variant = "success" text = "New" />}
            
           /> 
            <SkeletonCard 
            className="top-2 max-w-[75%] bottom-15 left-8"
            icon = {<IconPrison className="size-6 " />}
            title = "Risk Management"
            description = "Creates clear. Ready-to-use campaign briefs using product info, audience data, and past results. "
            Badge = {<Badge variant = "danger" text = "New" />}
            //tags = {["Google Ads", "Saas", "B2B"]}
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
        <div className={cn("max-w-[80%] mx-auto  p-3 rounded-lg border border-neutral-400 bg-neutral-100 dark:bg-neutral-700 dark:border-neutral-800 absolute h-[170px] w-full",
        'mask-radial-from-80%',
        className)}>
            <div className="flex items-center gap-1 lg:gap-3">
                {icon}
                <p className="text-xs md:text-sm font-semibold"> {title}</p>
                {Badge}

            </div>
            <p className="text-sm max-w-[80%] m-auto text-neutral-500 dark:text-neutral-400 font-medium mt-3">
                {description}
            </p>
            <div className="flex items-center gap-2  max-w-[80%] m-auto mt-3 flex-warp">
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
       <div className="px-2 text-xs py-1 rounded-sm bg-neutral-200 dark:bg-neutral-700 ">
            {text}
        </div>
  )
}
export const Badge = ({variant, text}: {
    variant: 'danger' | 'success' | 'warning',
    text?: string
}) => {
  return (
    <div className={cn("p-1 rounded-full flex items-center gap-1",
     variant === "danger" && "bg-red-300 text-red-800",
     variant === "success" && "bg-green-100 text-green-800",
     variant === "warning" && "bg-yellow-100 text-yellow-800")}>
      <IconClock className="size-4" />
      <IconRipple className="size-4" />
      <p className="text-xs">{text}</p>
    </div>
  )
}