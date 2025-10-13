import { BoardMembersSection } from "@/components/about/BoardMembersSection";
import { ExperienceHighlightSection } from "@/components/about/ExperienceHighlightSection";
import { ProgramInquiriesCta } from "@/components/about/ProgramInquiriesCta";
import { TeamMembersSection } from "@/components/about/TeamMembersSection";
import HeroSection from "@/components/common/HeroSection";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection
        title="Team"
        subtitle="Our team is dedicated to ensuring you have an amazing experience in your journey with us."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      <ExperienceHighlightSection />
      <TeamMembersSection />
      <BoardMembersSection />
      <ProgramInquiriesCta />
    </div>
  );
};

export default page;
