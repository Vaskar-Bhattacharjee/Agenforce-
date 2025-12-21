import Link from "next/link"
import Container from "./container"
import Heading from "./header"
import Subheading from "./subheading"
import { Button } from "./button"
import LandingImage from "../features/landing-image"


function Hero() {
  return (
   <Container className='mb-8 pt-10 md:pt-20 lg:pt-15'>
    <Heading >
        Agents that do the work. <br />
         Approvals that keep you safe. 
    </Heading>
       <Subheading as = "h2">
        Deploy AI agents that plan, act, throw your tools, and report outcomes without changing how your team works. 
       </Subheading>
       <div className="flex gap-4 items-start z-30" >
        <Link href="/"><Button variant="white" className="shadow-lg">Get Started</Button></Link>
        <Link href="/learn"><Button variant="black" className="shadow-lg">Learn More</Button></Link>
       </div>
       <div className="pointer-events-none">
          <LandingImage
            className="pointer-events-none"
            BackImageAlt="Acertinity"
            BackImageDark="/Aceternity-dark.png"
            BackImageLight="/Aceternity.png"
            FrontImageAlt="ShadCN"
            FrontImageDark="/ShadCN-dark.png"
            FrontImageLight="/ShadCN.png"
          />
        </div>

   </Container>
  )
}

export default Hero