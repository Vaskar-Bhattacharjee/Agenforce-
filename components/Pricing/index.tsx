import Container from "../ui/container"
import { GradientBadge } from "../ui/gradient"
import { Left } from "./Layout/left"
import { Right } from "./Layout/right"

export const Pricing = () => {
  return (
    <section className='pt-10 md:pt-20 lg:pt-32 relative overflow-hidden'>
        <Container className=" flex justify-between items-center gap-10 md:gap-28 w-full h-full rounded-lg py-10 md:py-0 lg:py-0 flex-col md:flex-row">
           
            <Left />
            <Right />

        </Container>
    </section>
  )
}