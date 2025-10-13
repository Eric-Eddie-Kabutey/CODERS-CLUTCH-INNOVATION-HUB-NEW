import CollaborateSection from "@/components/impact-report/CollaborateSection";
import { ImpactReportHeroSection } from "@/components/impact-report/ImpactReportHeroSection";
import ImpactReportViewer from "@/components/impact-report/ImpactReportViewer";
import React from "react";

const page = () => {
  return (
    <div>
      <ImpactReportHeroSection />
      <ImpactReportViewer />
      <CollaborateSection />
    </div>
  );
};

export default page;
