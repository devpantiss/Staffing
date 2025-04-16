import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Player } from "@lottiefiles/react-lottie-player";
// import worker from "../../assets/work.json";

// Define types for job roles
interface JobRole {
  title: string;
  jobs: string;
  icon: string;
  isNew: boolean;
  path: string;
}

// Define types for nano contractor gigs
interface Gig {
  title: string;
  description: string;
  duration: string;
  pay: string;
  path: string;
}

// Updated job roles data for Skilled Workers tab
const skilledWorkerRoles: JobRole[] = [
  {
    title: "Electrician",
    jobs: "245 Active Jobs",
    path: "/job-listings",
    icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743230001/Screenshot_2025-03-29_at_11.58.01_AM-removebg-preview_aklevc.png",
    isNew: false,
  },
  {
    title: "Welder",
    jobs: "189 Active Jobs",
    path: "/job-listings",
    icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743230001/welder-removebg-preview_acphyj.png",
    isNew: true,
  },
  {
    title: "Dumper Operator",
    jobs: "112 Active Jobs",
    path: "/job-listings",
    icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743230001/dump-truck_3963799-removebg-preview_kbe05q.png",
    isNew: false,
  },
  {
    title: "Excavator Operator",
    jobs: "98 Active Jobs",
    path: "/job-listings",
    icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743230001/excavator-removebg-preview_kshkel.png",
    isNew: true,
  },
  {
    title: "Security Guard",
    jobs: "305 Active Jobs",
    path: "/job-listings",
    icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743230001/policeman-removebg-preview_cslk3h.png",
    isNew: false,
  },
];

// Updated gigs data for Nano-Contractors tab (India-specific)
const nanoContractorGigs: Gig[] = [
  {
    title: "Road Repair Welding Contract",
    description: "Weld metal frames for road repair in Mumbai municipal project.",
    duration: "15 Days",
    path: "/job-listings",
    pay: "₹18,000",
  },
  {
    title: "Excavator Operation for Canal Digging",
    description: "Operate excavator for irrigation canal project in Punjab.",
    duration: "20 Days",
    path: "/job-listings",
    pay: "₹25,000",
  },
  {
    title: "Security for Warehouse in Delhi",
    description: "Provide security services for a logistics warehouse in NCR.",
    duration: "1 Month",
    path: "/job-listings",
    pay: "₹22,000",
  },
  {
    title: "Electrical Wiring for Rural Electrification",
    description: "Install wiring for a rural electrification drive in Uttar Pradesh.",
    duration: "10 Days",
    path: "/job-listings",
    pay: "₹12,000",
  },
];

const JobTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("skilledWorkers");

  return (
    <div className="bg-black py-12">
      {/* Container */}
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-center border-b border-gray-800 mb-8">
          {["skilledWorkers", "nanoContractors"].map((tab) => (
            <button
              key={tab}
              className={`relative px-6 py-3 font-semibold text-lg transition-colors duration-300 ${
                activeTab === tab
                  ? "text-purple-600 glow-purple"
                  : "text-gray-400 hover:text-gray-200"
              }`}
              onClick={() => setActiveTab(tab)}
              aria-selected={activeTab === tab}
              role="tab"
            >
              {tab === "skilledWorkers" && "For Skilled Workers"}
              {tab === "nanoContractors" && "For Nano-Contractors"}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-600 glow-purple animate-underline"></span>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          {/* Skilled Workers Tab */}
          {activeTab === "skilledWorkers" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {skilledWorkerRoles.map((role, index) => (
                <Link to={role.path}
                  key={index}
                  className="job-card bg-transparent p-6 rounded-lg border-2 border-purple-600/60 shadow-lg hover:shadow-purple-600/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={role.icon}
                    alt={role.title}
                    className="w-24 h-24 mb-4 mx-auto"
                    loading="lazy"
                  />
                  <div className="text-xl font-semibold text-white text-center mb-2">
                    {role.title}
                  </div>
                  <div className="text-sm text-gray-400 text-center mb-3">
                    {role.jobs}
                  </div>
                  {role.isNew && (
                    <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full glow-purple">
                      New
                    </span>
                  )}
                </Link>
              ))}
            </div>
          )}

          {/* Nano-Contractors Tab */}
          {activeTab === "nanoContractors" && (
            <div className="animate-fade-in">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-semibold text-white">
                  Gigs for Nano-Contractors in India
                </h2>
                <p className="text-gray-300 text-lg mt-2">
                  Explore short-term contracts across India tailored to your skills.
                </p>
                {/* <Player
                  autoplay
                  loop
                  src={worker}
                  style={{ height: "300px", width: "350px" }}
                  className="mx-auto"
                /> */}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {nanoContractorGigs.map((gig, index) => (
                  <Link to={gig.path}
                    key={index}
                    className="bg-transparent p-6 rounded-lg border-2 border-purple-600/60 shadow-lg hover:shadow-purple-600/50 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {gig.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {gig.description}
                    </p>
                    <div className="flex justify-between text-gray-400 text-sm mb-3">
                      <span>Duration: {gig.duration}</span>
                      <span>Pay: {gig.pay}</span>
                    </div>
                    <button className="w-full py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-all duration-300">
                      Apply Now
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          )}
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
          text-shadow: 0 0 10px var(--purple-600), 0 0 20px var(--purple-600);
          box-shadow: 0 0 10px var(--purple-600), 0 0 20px var(--purple-600);
        }

        /* Job Card Styling */
        .job-card {
          backdrop-filter: blur(5px);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .job-card:hover {
          transform: translateY(-5px);
        }

        /* Animated Underline for Tabs */
        .animate-underline {
          animation: underline 0.5s ease-in-out forwards;
        }

        @keyframes underline {
          from {
            transform: scaleX(0);
            transform-origin: left;
          }
          to {
            transform: scaleX(1);
            transform-origin: left;
          }
        }

        /* Fade-In Animation */
        .animate-fade-in {
          opacity: 0;
          animation: fade-in 0.8s ease-out forwards;
        }

        @keyframes fade-in {
          to {
            opacity: 1;
          }
        }

        /* Form Input Focus States */
        input:focus,
        select:focus,
        textarea:focus {
          outline: none;
        }

        /* Responsive Design */
        @media (max-width: 640px) {
          .job-card {
            padding: 1rem;
          }

          .job-card img {
            width: 3rem;
            height: 3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default JobTabs;