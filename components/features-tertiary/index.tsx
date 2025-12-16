import Container from "../ui/container"
import { First } from "./skeleton/first"
import { Second } from "./skeleton/second"
import { Third } from "./skeleton/third"

export const FeaturesTertiary = () => {
  return (
    <section className='pt-10 md:pt-20 lg:pt-32 relative overflow-hidden'>
        <Container className=" flex flex-col justify-center items-center gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-screen md:w-250 mx-auto
             border-y-0 md:border-y divide-y  border-neutral-200 dark:border-neutral-800 divide-x-0 lg:divide-x 
            divide-neutral-200 dark:divide-neutral-800 pt-4 md:pb-5 overflow-hidden">
             
                <First  />
                <Second  />
                <Third />
            </div>
   
        </Container>
    </section>
  )
}




