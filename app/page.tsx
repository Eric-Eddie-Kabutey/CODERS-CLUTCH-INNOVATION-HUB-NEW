// import Image from "next/image";

import WhoWeAre from "@/components/home/WhoWeAre";
import CaseStudiesCarousel from "@/components/new-landing-page/CaseStudiesCarousel";
import Challenges from "@/components/new-landing-page/challenges";
import Events from "@/components/new-landing-page/Event";
import FoundersCompass from "@/components/new-landing-page/FoundersCompass";
import Hero from "@/components/new-landing-page/Hero";
import Innovation from "@/components/new-landing-page/innovation-process";
import NewFooter from "@/components/new-landing-page/NewFooter";
import Organization from "@/components/new-landing-page/organization";
import Testimonials from "@/components/new-landing-page/Testimonials";


export default function Home() {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <Challenges />
      {/* <CaseStudies /> */}
      <CaseStudiesCarousel />
      {/* <NetworkSection /> */}
      <Events />
      <Organization />
      <FoundersCompass />
      <Innovation />
      <Testimonials />      
      <NewFooter />
    </div>
  );
}
