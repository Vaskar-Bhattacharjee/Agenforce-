'use client'
import Container from "@/components/container";
import { Features } from "@/components/features";
import Hero from "@/components/hero";
  export default function Home() {
    return (
    <Container className="min-h-screen pt-10 md:pt-20 lg:pt-32 pl-18 lg:pl-0 "> 
     
       <Hero />
       <Features />

   </Container>
  );
}