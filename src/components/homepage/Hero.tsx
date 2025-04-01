import React from "react";
import { Link } from "react-router-dom";


const HeroSection: React.FC = () => {
  return (
    <div className="relative mt-16 text-white h-[600px] overflow-hidden">
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
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 px-8 py-16">
        {/* Left Section: Text, Form, and Buttons */}
        <div className="lg:w-1/2 flex flex-col justify-center space-y-6 animate-fade-in">
          {/* Upper Section: Job Search */}
          <div className="flex flex-col space-y-4">
            <h1 className="text-4xl lg:text-5xl text-center lg:text-left font-bold text-white">
              Your Path to Success Starts Here
            </h1>
            <p className="text-lg text-center lg:text-left text-gray-300">
              Explore Academics, Counseling, and Job Search – All in One Place
            </p>
            {/* <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <select
                className="px-4 py-2 rounded-md bg-black/80 border border-purple-600/50 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600-hover transition-all duration-300"
                aria-label="Select Job Role"
              >
                <option>Select Job Role</option>
                <option>Research Assistant</option>
                <option>Teaching Assistant</option>
                <option>Academic Counselor</option>
                <option>Intern (Academic Projects)</option>
              </select>
              <select
                className="px-4 py-2 rounded-md bg-black/80 border border-purple-600/50 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600-hover transition-all duration-300"
                aria-label="Select City"
              >
                <option>Select City</option>
                <option>Delhi</option>
                <option>Hyderabad</option>
                <option>Pune</option>
              </select>
              <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition-all duration-300">
                Search Jobs
              </button>
            </div> */}
          </div>

          {/* Lower Section: Key Features */}
          <h2 className="text-3xl lg:text-4xl text-center lg:text-left font-bold text-white">
            Unlock your potential with <br />
            <span className="text-purple-600">three powerful tools.</span>
          </h2>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link to="/academics" className="px-6 py-3 bg-black/80 border border-purple-600/50 text-white font-medium rounded-md hover:bg-purple-600/20-hover transition-all duration-300">
              Academics
            </Link>
            <Link to="/for-nano-contractors" className="px-6 py-3 bg-black/80 border border-purple-600/50 text-white font-medium rounded-md hover:bg-purple-600/20-hover transition-all duration-300">
              Counseling
            </Link>
            <Link to="/job-search-engine" className="px-6 py-3 bg-black/80 border border-purple-600/50 text-white font-medium rounded-md hover:bg-purple-600/20-hover transition-all duration-300">
              Job Search Engine
            </Link>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="lg:w-1/2 flex justify-center items-center animate-fade-in">
          {/* <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742993943/academic_counseling_job_search_hero_image_jpg.jpg" // Placeholder for an academic/counseling/job search-related image
            alt="Student receiving career counseling for academic job opportunities"
            className="w-full max-w-md rounded-lg shadow-lg"
            loading="lazy"
          /> */}
        </div>
      </div>

      {/* Scoped CSS for Futuristic Design */}
      <style>{`
        /* Purple Color Definitions */
        :root {
          --purple-600: #9333ea;
          --purple-700: #7e22ce;
        }

        /* Purple Glow Effect */
        .glow-purple {
          box-shadow: 0 0 10px rgba(147, 51, 234, 0.3);
        }

        .glow-purple-hover:hover {
          box-shadow: 0 0 15px rgba(147, 51, 234, 0.5);
        }

        /* Fade-In Animation for Content */
        .animate-fade-in {
          opacity: 0;
          animation: fade-in 1s ease-out forwards;
        }

        @keyframes fade-in {
          to {
            opacity: 1;
          }
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .py-16 {
            padding-top: 8rem;
            padding-bottom: 8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;