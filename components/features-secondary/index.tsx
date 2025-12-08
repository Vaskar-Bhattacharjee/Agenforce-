import Container from "../ui/container"
import { SecondFeatures } from "./skeleton/second"
import { FirstFeature } from "./skeleton/first"

export const FeaturesSecondary = () => {
  return (
    <section className='pt-10 md:pt-20 lg:pt-32 relative overflow-hidden'>
        <Container className="flex justify-center items-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            border-y border-neutral-200 dark:border-neutral-800 divide-x 
            divide-neutral-200 dark:divide-neutral-800  ">
             
                <FirstFeature className="md:pr-4" />
                <SecondFeatures className="md:col-span-2" />
            </div>
        </Container>
    </section>
  )
}



