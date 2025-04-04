import React from "react";

const OverLappingCards2: React.FC = () => {
  return (
    <div className="relative py-10 bg-black">
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
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1742994033/12700136_1920_1080_30fps_zajh9b.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black"></div>

      {/* Content */}
      <div className="hidden lg:block relative max-w-6xl mx-auto h-[1100px] p-8">
        <div className="absolute right-0 text-left flex flex-end mb-10">
          <h1 className="text-3xl lg:text-5xl font-bold text-white leading-snug">
            Our Software <br />
            <span className="text-orange-500">Platforms</span>
          </h1>
        </div>

        {/* Card 1 - TalentMatch */}
        <div className="absolute top-0 left-0 bg-purple-900 text-white p-6 rounded-bl-lg rounded-br-lg shadow-lg w-[400px] h-[350px]">
          <h3 className="text-lg font-bold mb-4">TalentMatch</h3>
          <h4 className="text-xl font-semibold mb-2">Smart Hiring Made Easy</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>AI-powered Candidate Matching</li>
            <li>One-Click Applications</li>
            <li>Verified Skill Portfolios</li>
          </ul>
          <div className="relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3048/3048122.png"
              alt="TalentMatch Icon"
              className="absolute left-4 -bottom-32 w-24 h-24"
            />
          </div>
        </div>

        {/* Card 2 - GigBridge */}
        <div className="absolute top-64 left-60 bg-orange-500/50 text-white p-6 rounded-lg shadow-lg w-[400px] h-[350px]">
          <h3 className="text-lg font-bold mb-4">GigBridge</h3>
          <h4 className="text-xl font-semibold mb-2">Connecting Freelance Talent</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Instant Gig Listings</li>
            <li>Smart Bidding Engine</li>
            <li>Contract & Payment Tools</li>
          </ul>
          <div className="relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3468/3468564.png"
              alt="GigBridge Icon"
              className="absolute left-4 -bottom-32 w-24 h-24"
            />
          </div>
        </div>

        {/* Card 3 - OrgConnect */}
        <div className="absolute top-[500px] left-[500px] bg-green-200 text-gray-800 p-6 rounded-lg shadow-lg w-[400px] h-[350px]">
          <h3 className="text-lg font-bold mb-4">OrgConnect</h3>
          <h4 className="text-xl font-semibold mb-2">For Institutions & Recruiters</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Bulk Posting & Job Campaigns</li>
            <li>Custom Screening Tools</li>
            <li>Analytics & Insights</li>
          </ul>
          <div className="relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968443.png"
              alt="OrgConnect Icon"
              className="absolute left-4 -bottom-32 w-24 h-24"
            />
          </div>
        </div>

        {/* Card 4 - SkillLift */}
        <div className="absolute top-[750px] left-[750px] bg-blue-300 text-gray-900 p-6 rounded-lg shadow-lg w-[400px] h-[350px]">
          <h3 className="text-lg font-bold mb-4">SkillLift</h3>
          <h4 className="text-xl font-semibold mb-2">Upskilling Platform</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Micro Courses & Certifications</li>
            <li>Career Roadmaps</li>
            <li>Mentor-Led Learning Tracks</li>
          </ul>
          <div className="relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3281/3281306.png"
              alt="SkillLift Icon"
              className="absolute left-4 -bottom-32 w-24 h-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverLappingCards2;
