import React from "react";
import HeroSection from "../components/homepage/Hero";
import Customers from "../components/homepage/Customers";
import CloudSection from "../components/homepage/CloudSection";
import JobTabs from "../components/homepage/JobsTabs";
// import HorizontalScrollComponent from "../components/homepage/HorizontalScrollComponent";

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <JobTabs />
      <Customers />
      {/* <HorizontalScrollComponent /> */}
      <CloudSection />
    </div>
  );
};

export default HomePage;
