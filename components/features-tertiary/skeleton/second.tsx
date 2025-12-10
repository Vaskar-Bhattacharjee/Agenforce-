import { CardSkeleton } from "@/components/features/card"
import { cn } from "@/lib/utils"


export const Second = ({className}: {className?: string}) => {
  return (
      <div className={cn("p-4", className)}

                >
                    <h2 className="text-lg font-bold text-neutral-800 "> Multi-agent orchestration</h2>
                    <p className="text-neutral-600 mt-2">
                        Coordinate multiple agents across workflows using memory, interrupts, and conditional logic. 
                    </p>
                    <CardSkeleton className="h-full min-w-full "
                    > 
                  
                         
                    </CardSkeleton>
                </div>
  )
}



