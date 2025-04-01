import React from "react";
import HeroSection from "../components/homepage/Hero";
import Customers from "../components/homepage/Customers";
import CloudSection from "../components/homepage/CloudSection";
// import JobTabs from "../components/homepage/JobsTabs";
import OverLappingCards from "../components/homepage/OverLappingCards";
import HowSection from "../components/homepage/HowSection";
import OverLappingCards2 from "../components/homepage/OverLappingCards2";
import ImpactSection from "../components/homepage/ImpactSection";
import TestimonialSection from "../components/homepage/TestimonialSection";
import NewsLetterPlusHowCards from "../components/homepage/NewsLetterPlusHowCards";
import HorizontalScrollComponent from "../components/homepage/HorizontalComponent";
import SolutionCards from "../components/homepage/SolutionCards";
import WhySection from "../components/homepage/WhySection";
import OverLappingCards3 from "../components/homepage/OverLappingCards3";

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <SolutionCards />
      {/* <JobTabs /> */}
      <Customers />
      <OverLappingCards />
      <HowSection />
      <OverLappingCards2 />
      <WhySection />
      <OverLappingCards3 />
      <ImpactSection />
      <CloudSection />
      <TestimonialSection />
      <HorizontalScrollComponent />
      <NewsLetterPlusHowCards />
    </div>
  );
};

export default HomePage;
