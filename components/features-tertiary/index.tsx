import Container from "../ui/container"

import { IconAutomaticGearbox, IconLayersIntersect, IconUserCog } from "@tabler/icons-react"
import { First } from "./skeleton/first"
import { Second } from "./skeleton/second"

export const FeaturesTertiary = () => {
  return (
    <section className='pt-10 md:pt-20 lg:pt-32 relative overflow-hidden'>
        <Container className=" flex flex-col justify-center items-center gap-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-300 mx-auto
            border-y border-neutral-200 dark:border-neutral-800 divide-x-0 lg:divide-x 
            divide-neutral-200 dark:divide-neutral-800  pt-4 md:pb-5 overflow-hidden  ">
             
                <First  />
                <Second  />
            </div>
   
        </Container>
    </section>
  )
}




