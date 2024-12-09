import React, { useRef, useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

const HorizontalScrollComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inViewport, setInViewport] = useState(false);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const handleScroll = (event: WheelEvent) => {
    if (!inViewport || isLastSlide) return;

    event.preventDefault();
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = event.deltaY;
    container.scrollLeft += scrollAmount;

    // Check if we've reached the end of the container
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      setIsLastSlide(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInViewport(entry.isIntersecting),
      { threshold: 0.5 }
    );

    const container = containerRef.current;
    if (container) observer.observe(container);

    return () => {
      if (container) observer.unobserve(container);
    };
  }, []);

  useEffect(() => {
    if (inViewport) {
      window.addEventListener("wheel", handleScroll, { passive: false });
    } else {
      window.removeEventListener("wheel", handleScroll);
    }

    return () => window.removeEventListener("wheel", handleScroll);
  }, [inViewport, isLastSlide]);

  return (
    <div className="relative h-screen overflow-y-auto">
      <div className="h-screen bg-green-100">
        <h1 className="text-center text-3xl p-10">Scroll to see the slides</h1>
      </div>

      {/* Horizontal scrolling container */}
      <div
        ref={containerRef}
        className="flex h-screen overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
      >
        {/* Slide 1 */}
        <div className="snap-center flex-shrink-0 w-screen h-full flex items-center justify-center">
          <div className="grid grid-cols-2 h-full w-full">
            {/* Left Section */}
            <div className="flex flex-col justify-center items-start p-10 bg-orange-200">
              <h2 className="text-3xl font-bold text-orange-600 mb-4">
                Reliable
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                12+ years of work to uplift informal workers, grow real wages,
                and enable decent working conditions.
              </p>
              <div className="flex items-center space-x-4">
                <span className="p-2 bg-orange-500 rounded-full text-white">
                  ✅
                </span>
                <span className="p-2 bg-orange-500 rounded-full text-white">
                  📈
                </span>
              </div>
            </div>
            {/* Right Section */}
            <div className="bg-orange-500 flex items-center justify-center">
              <img
                src="/path-to-your-image1.png"
                alt="Reliable Icon"
                className="h-3/4"
              />
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="snap-center flex-shrink-0 w-screen h-full flex items-center justify-center">
          <div className="grid grid-cols-2 h-full w-full">
            {/* Left Section */}
            <div className="flex flex-col justify-center items-start p-10 bg-blue-200">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">
                Innovative
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Pioneer in Vocational EdTech, Mobile Micro-learning, and WCaaS
                technology.
              </p>
              <div className="flex items-center space-x-4">
                <span className="p-2 bg-blue-500 rounded-full text-white">
                  ⚡
                </span>
                <span className="p-2 bg-blue-500 rounded-full text-white">
                  🤖
                </span>
              </div>
            </div>
            {/* Right Section */}
            <div className="bg-blue-500 flex items-center justify-center">
              <img
                src="/path-to-your-image2.png"
                alt="Innovative Icon"
                className="h-3/4"
              />
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="snap-center flex-shrink-0 w-screen h-full flex items-center justify-center">
          <div className="grid grid-cols-2 h-full w-full">
            {/* Left Section */}
            <div className="flex flex-col justify-center items-start p-10 bg-gray-200">
              <h2 className="text-3xl font-bold text-gray-600 mb-4">
                Available
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Building supply in 350+ schools and 03 colleges, connecting it
                to demand across states and territories.
              </p>
              <div className="flex items-center space-x-4">
                <span className="p-2 bg-gray-500 rounded-full text-white">
                  📍
                </span>
                <span className="p-2 bg-gray-500 rounded-full text-white">
                  🛠️
                </span>
              </div>
            </div>
            {/* Right Section */}
            <div className="bg-gray-500 flex items-center justify-center">
              <img
                src="/path-to-your-image3.png"
                alt="Available Icon"
                className="h-3/4"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen bg-gray-100">
        <h1 className="text-center text-3xl p-10">Continue normal scrolling</h1>
      </div>
    </div>
  );
};

export default HorizontalScrollComponent;