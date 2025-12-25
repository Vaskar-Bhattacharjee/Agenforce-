import { CardSkeleton } from "@/components/features/card"
import { cn } from "@/lib/utils"
import { IconCheckbox, IconCircleCheckFilled, IconCircleDashedCheck, IconSquareCheckFilled } from "@tabler/icons-react"
import { Sheets } from "./first"


export const SecondFeatures = ({className}: {className?: string}) => {
  return (
      <div className={cn("p-4 flex flex-col items-start lg:ml-5 max-w-120", className)}

                >
                    <h2 className="text-lg font-bold text-neutral-700 dark:text-neutral-300 "> Multi-agent orchestration</h2>
                    <p className="text-neutral-600 mt-2">
                        Coordinate multiple agents across workflows using memory, interrupts, and conditional logic. 
                    </p>
                    <CardSkeleton className="h-110 min-w-130"
                    > 
                    <div
                    className="w-full h-full -ml-15 flex items-center justify-center py-8 md:py-15  overflow-hidden mask-l-from-90% mask-r-from-90% mask-t-from-90% mask-b-from-90% "
                    style={{
                      transform: "rotateY(20deg) rotateX(30deg) rotateZ(-20deg)"
                    }}
                    >
                      <Circle className="size-30 md:size-40 bg-neutral-200/10 border shadow-md border-emerald-50 z-12 ">
                            <InsideCircle className="stroke-neutral-600 dark:stroke-neutral-300 size-12 " />
                        
                            <Revolving 
                                      className="size-9"
                                      icon={<Slack className="size-8 text-neutral-600" />} 
                                       translatePosition="120px"
                                       orbitDuration="8s"
                            />
                            <Revolving 
                                      className="size-9"
                                      icon={<Sheets className="size-8 text-green-600" />} 
                                      translatePosition="160px"
                                      orbitDuration="12s"
                            />
                             <Revolving 
                                      className="size-9"
                                      icon={<Meta className="size-8 text-blue-600" />} 
                                      translatePosition="150px"
                                      orbitDuration="17s"
                            />
                            <Revolving  
                                      className="size-0"
                                      translatePosition="130px"
                                      orbitDuration="13s"
                            >
                              <p className="text-xs text-neutral-600">Animate Project</p>
                            </Revolving>
                            <CardInsideSolar />
                         </Circle>
                          
                         <Circle  className="size-60 bg-neutral-400/10 border border-neutral-200 shadow-sm z-10" />
                         
                         
                         <Circle  className="size-80 bg-neutral-200/20 border border-neutral-100 shadow-sm  z-9" />
                         <Circle  className="size-100 bg-neutral-300/10 border border-neutral-300 shadow-sm  z-8" />
                    </div>
                         
                    </CardSkeleton>
                </div>
  )
}

export const Circle = ({children, className}:{children?: React.ReactNode, className?: string}) => {
  return (
        <div className={cn("rounded-full m-auto absolute inset-0 ", className)}>
            {children}
        </div>

  )
}

export const InsideCircle = ({ className}:{ className?: string}) => {
  return (

    <svg 
    className={cn('absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',className)}
    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M7 17l0 .01" /><path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M7 7l0 .01" /><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M17 7l0 .01" /><path d="M14 14l3 0" /><path d="M20 14l0 .01" /><path d="M14 14l0 3" /><path d="M14 20l3 0" /><path d="M17 17l3 0" /><path d="M20 17l0 3" /></svg>
  )
}


export const Meta = ({className}: {className?: string}) => {
    return(
        <svg 
        className={className} 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 10.174c1.766 -2.784 3.315 -4.174 4.648 -4.174c2 0 3.263 2.213 4 5.217c.704 2.869 .5 6.783 -2 6.783c-1.114 0 -2.648 -1.565 -4.148 -3.652a27.627 27.627 0 0 1 -2.5 -4.174z" /><path d="M12 10.174c-1.766 -2.784 -3.315 -4.174 -4.648 -4.174c-2 0 -3.263 2.213 -4 5.217c-.704 2.869 -.5 6.783 2 6.783c1.114 0 2.648 -1.565 4.148 -3.652c1 -1.391 1.833 -2.783 2.5 -4.174z" /></svg>
    )
}

export const Slack = ({className}: {className?: string}) => {
  return (
    <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12v-6a2 2 0 0 1 4 0v6m0 -2a2 2 0 1 1 2 2h-6" /><path d="M12 12h6a2 2 0 0 1 0 4h-6m2 0a2 2 0 1 1 -2 2v-6" /><path d="M12 12v6a2 2 0 0 1 -4 0v-6m0 2a2 2 0 1 1 -2 -2h6" /><path d="M12 12h-6a2 2 0 0 1 0 -4h6m-2 0a2 2 0 1 1 2 -2v6" /></svg>
  )
}


export const CardInsideSolar = ({className}: {className?: string}) => {
  return(
              <div className={cn("absolute rounded-[9px] inset-0 shadow-xl ring-1 ring-neutral-300 bg-white dark:bg-neutral-800 z-40 py-2 animate-orbit  h-fit w-full", className)}
               style={{
                                  '--translate-position': '150px',
                                  '--orbit-duration': '25s'
                                } as React.CSSProperties}
              >
              
              
                <Row 
                icon = {<IconCircleCheckFilled className="size-6 text-neutral-800 dark:text-neutral-50" />}
                title = "Campaign Planner"
                />
                 <Row 
                icon = {<IconSquareCheckFilled className="size-6 text-neutral-800 dark:text-neutral-50" />}
                title = "Feedback Manager"
                />
                 <Row 
                icon = {<IconCheckbox className="size-6 text-neutral-800 dark:text-neutral-50" />}
                title = "Issue tracker"
                />
                 <Row 
                icon = {<IconCircleDashedCheck className="size-6 text-neutral-800 dark:text-neutral-50" />}
                title = "Risk Management"
                />

              </div>
  )
}



export const Row = ({icon, title}:{
    icon: React.ReactNode,
    title: string,
}) => {
  return (
                <div className="flex items-center justify-between px-4 py-2 ">
                  <div className="flex items-center gap-2">
                    {icon}
                    <p className="text-[10px] md:text-xs tracking-tighter text-neutral-800 dark:text-neutral-200"> {title}</p>
                  </div>

                 
                </div>
  )
}

export const Revolving = ({className,
                           icon,
                           translatePosition = '120px',  // default value
                            orbitDuration = '13s',
                            children
                             
                           }: {
                            className?: string,
                            icon?: React.ReactNode,
                            translatePosition?: string,
                            orbitDuration?: string,
                            children?: React.ReactNode
                            
                            }) => {
  return(
    <div className={cn(" absolute inset-0 flex m-auto justify-center items-center border border-transparent shadow-sm ring-1 ring-neutral-300 rounded-sm animate-orbit bg-neutral-50 ", className)}
                              style={{
                                  '--translate-position': translatePosition,
                                  '--orbit-duration': orbitDuration
                                } as React.CSSProperties}

                            >
                              <div>
                                {icon}
                                {children && (  
                                  <div className="absolute rounded-lg inset-0 flex m-auto justify-center items-center w-30 h-6 text-neutral-700 text-xs bg-white border border-neutral-300">
                                    {children}
                                  </div>
                                )}

                              </div>
                              

                              
                            </div>
  )
}