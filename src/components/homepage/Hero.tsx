import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  {
    url: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742820291/64e92b9a-d148-4907-9455-37185e8ae66a_fmnvg4.jpg",
    caption: "Advanced Simulation Training for Industry Professionals",
  },
  {
    url: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742820289/60cd3ceb-cde6-4a69-a587-1ad4eb974454_vqef6t.jpg",
    caption: "Experience AR/VR & Real-Time Gigantic Machines",
  },
  {
    url: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742820282/7cf81b40-cb85-47b0-bc17-5ed47fa210ed_2_ltergg.jpg",
    caption: "Explore Career Counseling & Skill Development",
  },
  {
    url: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742820279/5b996848-0c84-4ffd-98d5-de6a7e2da36d_ag213n.jpg",
    caption: "India's First Job Search Engine for Manufacturing Sector",
  },
];

// Custom Navigation Arrows
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all z-10"
  >
    <FaChevronRight size={20} />
  </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all z-10"
  >
    <FaChevronLeft size={20} />
  </button>
);

const HeroSection: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative mt-16 text-white lg:h-[700px] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1742991998/856953-uhd_4096_2160_25fps_vuuc1b.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative flex mx-auto max-w-7xl flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 px-8 py-16">
        {/* Left Section: Text, Form, and Buttons */}
        <div className="lg:w-1/2 flex flex-col justify-center space-y-6 animate-fade-in">
          <h1 className="text-5xl lg:text-6xl font-bold text-center lg:text-left text-white leading-tight">
            Your Gateway to <br />
            <span className="text-orange-500">Mines, Steel & Power Sector.</span>
          </h1>
          <p className="text-lg text-gray-300 text-center lg:text-left">
            Explore Career Counseling, Tech Skilling, and India's First Job Search Engine for the Manufacturing Sector – All in One Place.
          </p>

          {/* Lower Section: Key Features */}
          <h2 className="text-3xl lg:text-4xl font-bold text-center lg:text-left text-white">
            Roam in <span className="text-orange-500">Mine, Steel & Power Skill Park</span> & Enjoy{" "}
            <span className="text-orange-500">AR/VR</span>, Simulation & Real-Time Gigantic Machines Imported from{" "}
            <span className="text-orange-500">Australia</span> & <span className="text-orange-500">Japan.</span>
          </h2>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link to="/academics" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-lg transition-all">
              Academics
            </Link>
            <Link to="/for-nano-contractors" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-lg transition-all">
              Counseling
            </Link>
            <Link to="/job-search-engine" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-lg transition-all">
              Job Search Engine
            </Link>
          </div>
        </div>

        {/* Right Section: Image Slider */}
        <div className="lg:w-1/2 flex justify-center items-center animate-fade-in relative">
          <Slider {...sliderSettings} className="w-full max-w-md">
            {images.map((item, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden shadow-xl">
                <img src={item.url} alt={`Slide ${index + 1}`} className="w-full h-[600px] object-cover rounded-lg" loading="lazy" />
                {/* Caption Overlay */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-center px-4 py-2 rounded-lg text-lg font-medium">
                  {item.caption}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;