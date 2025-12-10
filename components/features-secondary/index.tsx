import Container from "../ui/container"
import { SecondFeatures } from "./skeleton/second"
import { FirstFeature } from "./skeleton/first"
import { IconAutomaticGearbox, IconLayersIntersect, IconUserCog } from "@tabler/icons-react"

export const FeaturesSecondary = () => {
  return (
    <section className='pt-10 md:pt-20 lg:pt-32 relative overflow-hidden'>
        <Container className=" flex flex-col justify-center items-center gap-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2
            border-y border-neutral-200 dark:border-neutral-800 divide-x-0 lg:divide-x 
            divide-neutral-200 dark:divide-neutral-800 pb-30 pt-4 md:pb-5 overflow-hidden  ">
             
                <FirstFeature  />
                <SecondFeatures />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x  gap-4 mt-10 md:mt-20 pb-4">
                
                <div className="pb-4">
                  <div className="flex items-center gap-2">
                    <IconAutomaticGearbox className="size-5" />
                    <h3 className="font-semibold text-md"> Workflows automation</h3>
                </div >
                   <p className="text-neutral-500 text-base   mt-2 md:max-w-90">
                    Automate campaigns, tickets, and CRM updates. Without manual handoffs. 
                  </p>
                </div>
                <div className="pb-4">
                  <div className="flex items-center gap-2">
                    <IconLayersIntersect className="size-5" />
                    <h3 className="font-semibold text-md"> Integration Fabric</h3>
                </div>
                   <p className="text-neutral-500 text-base mt-2 max-w-90">
                      Connect CRMs, service desks, data warehouses, and cloud apps seamlessly. 
                  </p>
                </div>
                <div className="pb-4">
                  <div className="flex items-center gap-2">
                    <IconUserCog className="size-5" />
                    <h3 className="font-semibold text-md"> Human-in-the-loop </h3>
                </div>
                   <p className="text-neutral-500 text-base mt-2 max-w-90">
                    Add reviews, approvals, and escalations without slowing down work. 
                  </p>
                </div>
                
               
            </div>
        </Container>
    </section>
  )
}




