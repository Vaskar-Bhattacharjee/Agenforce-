import { cn } from "@/lib/utils"
import { IconCheckbox, IconCircleCheckFilled, IconCircleDashedCheck, IconRipple, IconSquareCheckFilled } from "@tabler/icons-react"

export const SkeletonTwo = () => {
  return (
     <div className={cn("max-w-[80%]  mx-auto px-3 ml-9 bg-neutral-100  dark:bg-neutral-700 dark:border-neutral-800 absolute left-6 right-2 top-0 h-[300px] md:h-[400px] w-full",
      '[--pattern-fg:var(--color-neutral-950)]/8 dark:[pattern-fg:var(--color-neutral-50)]/10 group', 
           )}
           style={{
            transform: 'rotateX(30deg) rotateY(25deg) rotateZ(-27deg) '
        }}
           >

            <div className="flex items-center gap-1 lg:gap-3">
                <IconCircleDashedCheck className="size-6" />
                <p className="text-xs md:text-sm font-semibold"> Campaign Planner</p>
                

            </div>
            <div className=" min-h-60 relative flex-1 mt-4 border border-neutral-400 rounded-lg shadow-2xl group-hover:shadow-none ">
              <Pattern />
              <div className="absolute rounded-xl inset-0  bg-white h-full w-full
              translate-x-6 translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0 transition-all
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
                    <p className="text-[10px] md:text-xs "> {title}</p>
                  </div>

                  <div className=" flex items-center gap-1 text-neutral-600 rounded-lg bg-amber-200 p-1">
                    <IconRipple className="size-3" />
                    <p className="text-xs md:text-sm"> {time}</p>
                  </div>
                </div>
  )
}



