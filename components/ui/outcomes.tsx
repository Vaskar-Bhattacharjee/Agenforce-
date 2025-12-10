

import Link from "next/link"
import Container from "./container"
import Heading from "./header"
import Subheading from "./subheading"
import { Button } from "./button"
import LandingImage from "../features/landing-image"


function Outcomes() {
  return (
   <Container className='mb-8 mt-10'>
    <Heading as = "h2">
        Governed AI<br />
        Trusted Outcomes 
    </Heading>
       <Subheading as = "h2">
        Deploy AI agents with built-in approvals, brand guardrails, and audit trails. Every step is visible, reviewable, and compliant. 
       </Subheading>
      
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

export default Outcomes