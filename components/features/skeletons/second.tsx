import { cn } from "@/lib/utils"
import { IconCheckbox, IconCircleCheckFilled, IconCircleDashedCheck, IconRipple, IconSquareCheckFilled } from "@tabler/icons-react"

export const SkeletonTwo = () => {
  return (
     <div className={cn("max-w-[90%] mask-r-from-90% mask-b-from-80% mask-l-from-90% mask-t-from-100%   mx-auto px-3 ml-9 dark:bg-transparent absolute left-6 right-2 top-0 h-[400px] md:h-[400px] w-full",
                         '[--pattern-fg:var(--color-neutral-950)]/5  dark:[--pattern-fg:var(--color-neutral-50)]/20 group',
                                 )}
           style={{
            transform: 'rotateX(30deg) rotateY(25deg) rotateZ(-27deg) '
        }}
           >
            <div className="border border-neutral-500 rounded-2xl px-5 pt-4 h-[calc(100%-5rem)] w-[calc()100%+10rem]  ">
            <div className="flex items-center gap-1 -mt-2 pb-2  lg:gap-3">
                <IconCircleDashedCheck className="size-6" />
                <p className="text-xs md:text-sm font-semibold"> Campaign Planner</p>
                

            </div>
            <div className=" min-h-60 relative flex-1  border border-neutral-400 rounded-lg shadow-2xl group-hover:shadow-none bg-neutral-50 dark:bg-neutral-900 ">
              <Pattern />
              <div className="absolute rounded-[9px] inset-0 border border-neutral-300 bg-white dark:bg-neutral-900  h-full w-full
              translate-x-6 translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0 transition-all delay-50 duration-300
              ">
                <Row 
                icon = {<IconCircleCheckFilled className="size-6 text-green-500" />}
                title = "Campaign Planner"
                time = "2 hours"
                />
                 <Row 
                icon = {<IconSquareCheckFilled className="size-6 text-green-500" />}
                title = "Feedback Manager"
                time = "2 hours"
                />
                 <Row 
                icon = {<IconCheckbox className="size-6 text-green-500" />}
                title = "Issue tracker"
                time = "2 hours"
                />
                 <Row 
                icon = {<IconCircleDashedCheck className="size-6 text-green-500" />}
                title = "Risk Management"
                time = "2 hours"
                />

              </div>
            </div>

            </div>


     </div>
  )
   
}

export const Pattern = () => {
  return (
     <div className=" absolute inset-0 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed"></div>

  )
}

export const Row = ({icon, title, time}:{
    icon: React.ReactNode,
    title: string,
    time: string
}) => {
  return (
                <div className="flex items-center justify-between px-4 py-2">
                  <div className="flex items-center gap-2">
                    {icon}
                    <p className="text-[10px] md:text-xs text-neutral-700 dark:text-neutral-200"> {title}</p>
                  </div>

                  <div className=" flex items-center gap-1 text-neutral-600 rounded-md px-2 bg-amber-200 dark:bg-amber-300/30 p-1">
                    <IconRipple className="size-2 text-black dark:text-amber-300" />
                    <p className="text-xs text-black dark:text-amber-300"> {time}</p>
                  </div>
                </div>
  )
}



