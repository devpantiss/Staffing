import React from "react";

const OverLappingCards2: React.FC = () => {
  return (
    <div className="relative bg-black">
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
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1742994033/12700136_1920_1080_30fps_zajh9b.mp4" // Kept the same video; replace if needed
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="hidden lg:block relative max-w-6xl h-screen mx-auto p-8">
        <div className="absolute right-0 text-left flex flex-end mb-10">
          <h1 className="text-3xl lg:text-5xl font-bold text-white leading-snug">
            Find Your Mining Career <br />
            with <span className="text-purple-500">JOB MINE</span>
          </h1>
        </div>

        {/* Card 1 */}
        <div className="absolute top-0 left-0 bg-purple-900 text-white p-6 rounded-bl-lg rounded-br-lg shadow-lg w-[400px] h-[350px]">
          <h3 className="text-lg font-bold mb-4">Skilled Worker Hub</h3>
          <h4 className="text-xl font-semibold mb-2">
            Jobs for Mining Talent
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Search Tailored Mining Jobs</li>
            <li>Skill-Based Job Matching</li>
            <li>Apply with One Click</li>
          </ul>
          <div className="relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1995/1995515.png" // Icon: Mining worker with pickaxe
              alt="mining-worker-icon"
              className="absolute left-4 -bottom-32 w-24 h-24"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="absolute top-64 left-60 bg-orange-500 text-white p-6 rounded-lg shadow-lg w-[400px] h-[350px]">
          <h3 className="text-lg font-bold mb-4">Nano Contractor Zone</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Short-Term Mining Gigs</li>
            <li>Bid on Projects Easily</li>
            <li>Performance Tracking</li>
            <li>Flexible Work Options</li>
          </ul>
          <div className="relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6819/6819750.png" // Icon: Group of workers
              alt="group-workers-icon"
              className="absolute left-4 -bottom-32 w-24 h-24"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="absolute top-[500px] left-[500px] bg-green-200 text-gray-800 p-6 rounded-lg shadow-lg w-[400px] h-[350px]">
          <h3 className="text-lg font-bold mb-4">Industry Portal</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Post Mining Jobs Instantly</li>
            <li>Access Skilled Talent Pool</li>
            <li>Manage Applicants Efficiently</li>
            <li>Custom Job Requirements</li>
            <li>Real-Time Hiring Analytics</li>
          </ul>
          <div className="relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3061/3061416.png" // Icon: Corporate employee
              alt="corporate-employee-icon"
              className="absolute left-4 -bottom-32 w-24 h-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverLappingCards2;