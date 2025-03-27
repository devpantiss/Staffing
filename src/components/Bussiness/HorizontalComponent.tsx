import React, { useRef, useEffect } from "react";

const HorizontalScrollComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      const isHorizontalScroll = container.scrollWidth > container.clientWidth;
      const { scrollLeft, scrollWidth, clientWidth } = container;

      if (isHorizontalScroll) {
        // Allow horizontal scrolling only when inside the component
        if (
          !(scrollLeft === 0 && event.deltaY < 0) && // At the start and scrolling up
          !(scrollLeft + clientWidth === scrollWidth && event.deltaY > 0) // At the end and scrolling down
        ) {
          event.preventDefault(); // Prevent vertical scrolling
          container.scrollBy({
            left: event.deltaY, // Scroll horizontally
            behavior: "smooth",
          });
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black py-8 px-6">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1742994020/2759477-uhd_3840_2160_30fps_zxnpip.mp4" // Replace with your actual video URL
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-0"></div>

      {/* Heading with Higher z-index */}
      <h1 className="relative text-4xl lg:ml-[200px] lg:max-w-[300px] max-w-full text-white font-bold z-20">
        <p className="text-purple-600">Four ways</p> to work with LabourNet
      </h1>

      {/* Horizontal Scroll Content */}
      <div
        ref={containerRef}
        className="relative w-full h-full flex overflow-x-auto snap-x snap-mandatory z-10"
      >
        <div className="flex-shrink-0 w-screen h-full flex items-center justify-center bg-transparent text-white snap-start">
          <div className="flex gap-x-6 flex-col lg:flex-row justify-center items-center text-center">
            <div>
              <img
                src="https://labournet.in/wp-content/uploads/2022/03/Group-671.svg"
                alt="img"
                className="w-64 lg:w-[500px]"
              />
            </div>
            <div className="mt-4 lg:ml-8 flex flex-col justify-center items-center">
              <h1 className="text-2xl lg:text-4xl font-bold">
                Grow, Digitize, and Automate
              </h1>
              <p className="text-orange-400">
                in 23 states, 5 union territories
              </p>
              <ul className="list-disc text-left mt-2">
                <li>Contract and Temp Staffing</li>
                <li>Payroll support and compliance</li>
                <li>Hire-to-retire payroll automation</li>
                <li>Onboarding at scale</li>
                <li>Apprenticeship programs</li>
                <li>Hire and train gig staff</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 w-screen h-full flex items-center justify-center bg-transparent text-white snap-start">
          <div className="flex gap-x-6 flex-col lg:flex-row justify-center items-center text-center">
            <div>
              <img
                src="https://labournet.in/wp-content/uploads/2022/03/SkillAssess-1.svg"
                alt="img"
                className="w-64 lg:w-[500px]"
              />
            </div>
            <div className="mt-4 lg:ml-8 flex flex-col justify-center items-center">
              <h1 className="text-2xl lg:text-4xl font-bold">
                Skill and Assess
              </h1>
              <p className="text-orange-400">
                with AI-proctored assessment and hybrid learning{" "}
              </p>
              <ul className="list-disc text-left mt-2">
                <li>Recognition of Prior Learning (RPL)</li>
                <li>Skill Assessment</li>
                <li>Instructor-led Blended Training </li>
                <li>Micro-learning for Vocational Skills</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 w-screen h-full flex items-center justify-center bg-transparent text-white snap-start">
          <div className="flex gap-x-6 flex-col lg:flex-row justify-center items-center text-center">
            <div>
              <img
                src="https://labournet.in/wp-content/uploads/2022/03/EngageTeam-1.svg"
                alt="img"
                className="w-64 lg:w-[500px]"
              />
            </div>
            <div className="mt-4 lg:ml-8 flex flex-col justify-center items-center">
              <h1 className="text-2xl lg:text-4xl font-bold">
                Engage Influencers
              </h1>
              <p className="text-orange-400">with continuous engagement</p>
              <ul className="list-disc text-left mt-2">
                <li>Integrate with existing loyalty programs</li>
                <li>Bite-sized digital learning and engagement</li>
                <li>Processes built to improve adoption</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 w-screen h-full flex items-center justify-center bg-transparent text-white snap-start">
          <div className="flex gap-x-6 flex-col lg:flex-row justify-center items-center text-center">
            <div>
              <img
                src="https://labournet.in/wp-content/uploads/2022/03/GetWorkDone-1.svg"
                alt="img"
                className="w-64 lg:w-[500px]"
              />
            </div>
            <div className="mt-4 lg:ml-8 flex flex-col justify-center items-center">
              <h1 className="text-2xl lg:text-4xl font-bold">Get Work Done</h1>
              <p className="text-orange-400">
                with LabourNet’s WCaaS (Work Completion as a Service)
              </p>
              <ul className="list-disc text-left mt-2">
                <li>Pre-built work processes – Just plug-and-play</li>
                <li>Pay-per-task based on SLAS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollComponent;