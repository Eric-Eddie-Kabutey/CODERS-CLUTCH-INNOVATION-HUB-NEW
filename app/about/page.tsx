import AboutHero from "@/components/about-us/AboutHero";
import AboutService from "@/components/about-us/AboutService";
import Belive from "@/components/about-us/Belive";
import CoreValues from "@/components/about-us/CoreValues";
import Intro from "@/components/about-us/Intro";
import Star from "@/components/about-us/Star";
import NewFooter from "@/components/new-landing-page/NewFooter";
import React from "react";

const AboutUS = () => {
  return (
    <div>
     
      <AboutHero />
      <Intro />
      <AboutService />
      <Belive />
      <Star />
      <CoreValues />
      <NewFooter />


    </div>
  );
};

export default AboutUS;
