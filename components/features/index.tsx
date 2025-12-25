import Container from "../ui/container"
import Heading from "../ui/header"
import Subheading from "../ui/subheading"
import { Card, CardContent, CardCTA, CardSkeleton, CardTitle } from "./card"
import { SkeletonOne } from "./skeletons/first"
import { SkeletonTwo } from "./skeletons/second"
import { SkeletonThree } from "./skeletons/third"

export const Features = () => {
    return (
        <Container className="pt-10 md:pt-20 lg:pt-32">
            <div className="flex flex-col md:flex-row justify-center items-center gap:3 md:gap-8">
                <Heading as = "h2"
                className="text-xl md:text-2xl lg:text-5xl text-neutral-800 dark:text-neutral-200 font-bold font-display tracking-tight"
                >
                Built For Fast-Moving <br /> Teams That Need Control
            </Heading>
            <Subheading>
                Agents work inside your existing tool with built-in approvals, brand and policy guardrails, and full traceability. Every action is auditable, every outcome accountable. 
            </Subheading>
      
            </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 md:my-20">
                <Card className="rounded-tl-3xl rounded-bl-3xl">
                   <CardSkeleton >
                    <SkeletonOne />
                   </CardSkeleton>
                <CardContent className="flex  justify-between items-center gap-4">
                    <CardTitle>
                        Prebuilt Agents , Tuned to your worflows
                    </CardTitle>
                     <CardCTA>
                        <Plus  />
                    </CardCTA>


                </CardContent>
                    
                </Card>
                <Card>
                     <CardSkeleton >
                        <SkeletonTwo />
                     </CardSkeleton>
                    <CardContent className="flex justify-between items-center gap-2">
                    <CardTitle>
                        Automate Handoffs, Reduce Ops Friction
                    </CardTitle>
                     <CardCTA>
                        <Plus  />
                    </CardCTA>


                </CardContent>
                   
                </Card>
                    
                    
                    <Card className="rounded-tr-3xl rounded-br-3xl">

                     <CardSkeleton>
                      <SkeletonThree />
                     </CardSkeleton>
                    <CardContent className="flex justify-between items-center gap-4">
                    <CardTitle>
                        Approvals, Guardrails, and Full Auditability
                    </CardTitle>
                     <CardCTA>
                        <Plus  />
                    </CardCTA>


                </CardContent>
                </Card>
            </div>
        </Container>

        
    )
    
}
export const Plus = ({className}: {className?: string}) => {
    return (
        <svg 
        className={className}
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
    )
}