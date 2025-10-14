import WhoWeAre from "@/components/home/WhoWeAre";
import CaseStudiesCarousel from "@/components/new-landing-page/CaseStudiesCarousel";
import Challenges from "@/components/new-landing-page/challenges";
import Events from "@/components/new-landing-page/Event";
import Hero from "@/components/new-landing-page/Hero";
import HowWeHelp from "@/components/new-landing-page/HowWeHelp";
import NewFooter from "@/components/new-landing-page/NewFooter";
import ProcessSteps from "@/components/new-landing-page/ProcessSteps";
import Testimonials from "@/components/new-landing-page/Testimonials";


export default function Home() {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <Challenges />            
      <HowWeHelp />
      <Events />      
      <CaseStudiesCarousel />      
       <ProcessSteps />            
      <Testimonials />      
      <NewFooter />
    </div>
  );
}
