'use client'
import Container from "@/components/ui/container";
import { Features } from "@/components/features";
import Hero from "@/components/ui/hero";
import { Speed } from "@/components/ui/speed";
import { FeaturesSecondary } from "@/components/features-secondary";
import Outcomes from "@/components/ui/outcomes";
import { FeaturesTertiary } from "@/components/features-tertiary";
import { Pricing } from "@/components/Pricing";
import { FAQs } from "@/components/ui/faq";
  export default function Home() {
    return (
    <Container className="min-h-screen pt-10 md:pt-20 lg:pt-32 pl-18 lg:pl-0 "> 
     
       <Hero />
       <Features />
       <Speed />
       <FeaturesSecondary />
       <Outcomes />
       <FeaturesTertiary />
       <Pricing />
       <FAQs />

   </Container>
  );
}