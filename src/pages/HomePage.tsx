import React from "react";
import HeroSection from "../components/homepage/Hero";
// import Customers from "../components/homepage/Customers";
// import CloudSection from "../components/homepage/CloudSection";
// import JobTabs from "../components/homepage/JobsTabs";
// import OverLappingCards from "../components/homepage/OverLappingCards";
// import HowSection from "../components/homepage/HowSection";
import OverLappingCards2 from "../components/homepage/OverLappingCards2";
import ImpactSection from "../components/homepage/ImpactSection";
// import TestimonialSection from "../components/homepage/TestimonialSection";
// import NewsLetterPlusHowCards from "../components/homepage/NewsLetterPlusHowCards";
// import HorizontalScrollComponent from "../components/homepage/HorizontalComponent";
import SolutionCards from "../components/homepage/SolutionCards";
// import WhySection from "../components/homepage/WhySection";
// import OverLappingCards3 from "../components/homepage/OverLappingCards3";
// import Partners from "../components/homepage/Partners";
import SectorsAccordion from "../components/homepage/SectorsAccordion";
import FleetSection from "../components/homepage/FleetSection";
import PlacementsSection from "../components/homepage/PlacementsSection";
import CampusExperienceSection from "../components/homepage/CampusExperienceSection";
import Ranking from "../components/homepage/Ranking";
import ExplorePrograms from "../components/homepage/ExplorePrograms";

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <SectorsAccordion />
      <SolutionCards />
      {/* <JobTabs /> */}
      {/* <Partners /> */}
      {/* <Customers /> */}
      {/* <OverLappingCards /> */}
      {/* <HowSection /> */}
      <OverLappingCards2 />
      {/* <WhySection /> */}
      <FleetSection />
      <PlacementsSection />
      {/* <OverLappingCards3 /> */}
      <ImpactSection />
      <CampusExperienceSection />
      <Ranking />
      {/* <CloudSection /> */}
      {/* <TestimonialSection /> */}
      <ExplorePrograms />
      {/* <HorizontalScrollComponent /> */}
      {/* <NewsLetterPlusHowCards /> */}
    </div>
  );
};

export default HomePage;
