import React, { useState } from "react";
import { FaMapMarkerAlt, FaBriefcase, FaClock, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";

const jobs = [
  {
    title: "Account Payable",
    company: "Teamlease Digital",
    location: "Pune",
    experience: "Freshers",
    salary: "4,00,000 - 6,00,000 Yearly",
    description: "Oversee and manage daily operations of accounts payable department...",
    posted: "7 hours ago",
  },
  {
    title: "Account Payable",
    company: "Teamlease Digital",
    location: "Pune",
    experience: "Freshers",
    salary: "4,00,000 - 6,00,000 Yearly",
    description: "Oversee and manage daily operations of accounts payable department...",
    posted: "7 hours ago",
  },
  {
    title: "Account Payable",
    company: "Teamlease Digital",
    location: "Pune",
    experience: "Freshers",
    salary: "4,00,000 - 6,00,000 Yearly",
    description: "Oversee and manage daily operations of accounts payable department...",
    posted: "7 hours ago",
  },
  {
    title: "Account Payable",
    company: "Teamlease Digital",
    location: "Pune",
    experience: "Freshers",
    salary: "4,00,000 - 6,00,000 Yearly",
    description: "Oversee and manage daily operations of accounts payable department...",
    posted: "7 hours ago",
  },
  {
    title: "Account Payable",
    company: "Teamlease Digital",
    location: "Pune",
    experience: "Freshers",
    salary: "4,00,000 - 6,00,000 Yearly",
    description: "Oversee and manage daily operations of accounts payable department...",
    posted: "7 hours ago",
  },
  {
    title: "Account Payable",
    company: "Teamlease Digital",
    location: "Pune",
    experience: "Freshers",
    salary: "4,00,000 - 6,00,000 Yearly",
    description: "Oversee and manage daily operations of accounts payable department...",
    posted: "7 hours ago",
  },
  {
    title: "Account Payable",
    company: "Teamlease Digital",
    location: "Pune",
    experience: "Freshers",
    salary: "4,00,000 - 6,00,000 Yearly",
    description: "Oversee and manage daily operations of accounts payable department...",
    posted: "7 hours ago",
  },
  {
    title: "Account Payable",
    company: "Teamlease Digital",
    location: "Pune",
    experience: "Freshers",
    salary: "4,00,000 - 6,00,000 Yearly",
    description: "Oversee and manage daily operations of accounts payable department...",
    posted: "7 hours ago",
  },
  {
    title: "Account Payable",
    company: "Teamlease Digital",
    location: "Pune",
    experience: "Freshers",
    salary: "4,00,000 - 6,00,000 Yearly",
    description: "Oversee and manage daily operations of accounts payable department...",
    posted: "7 hours ago",
  },
  {
    title: "Account Payable",
    company: "Teamlease Digital",
    location: "Pune",
    experience: "Freshers",
    salary: "4,00,000 - 6,00,000 Yearly",
    description: "Oversee and manage daily operations of accounts payable department...",
    posted: "7 hours ago",
  },
  {
    title: "Account Payable",
    company: "Teamlease Digital",
    location: "Pune",
    experience: "Freshers",
    salary: "4,00,000 - 6,00,000 Yearly",
    description: "Oversee and manage daily operations of accounts payable department...",
    posted: "7 hours ago",
  },
  // Add more job data here...
];

const filters = ["Role", "City", "Experience", "Salary", "Gender"];

const JobListPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen mt-16">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1743490676/12900822_1920_1080_30fps_ldejrt.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay to enhance readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
      
      {/* Main Content */}
      <div className="relative z-20 flex p-6">
        {/* Sidebar Filters */}
        <aside className="w-1/4 bg-white/80 h-full p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-purple-600 mb-4">Filter</h3>
          {filters.map((filter) => (
            <div key={filter} className="mb-2">
              <button
                className="w-full flex justify-between items-center p-2 bg-gray-200 rounded-md"
                onClick={() => setActiveFilter(activeFilter === filter ? null : filter)}
              >
                {filter} {activeFilter === filter ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {activeFilter === filter && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="p-2 bg-gray-100 rounded-md mt-1"
                >
                  <p className="text-sm text-gray-700">Options for {filter}</p>
                </motion.div>
              )}
            </div>
          ))}
        </aside>

        {/* Job Listings - Scrollable */}
        <main className="w-2/4 px-6 overflow-y-auto h-screen pb-20">
          <h2 className="text-2xl font-semibold text-white mb-4">Accountant Jobs 2025 - 50 job vacancies</h2>
          <p className="text-sm text-gray-300 mb-4">21 Job(s) Found</p>
          {jobs.map((job, index) => (
            <div key={index} className="bg-white/80 p-4 rounded-lg shadow-md border mb-4">
              <h3 className="text-lg text-purple-500 font-semibold">{job.title}</h3>
              <p className="text-sm text-gray-800">{job.company}</p>
              <div className="flex items-center text-sm text-gray-800 mt-2">
                <FaBriefcase className="mr-2" /> {job.experience}
                <FaMapMarkerAlt className="ml-4 mr-2" /> {job.location}
              </div>
              <p className="text-sm font-semibold text-gray-800 mt-2">💰 {job.salary}</p>
              <p className="text-sm text-gray-800 mt-2">{job.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-gray-800 flex items-center">
                  <FaClock className="mr-1" /> {job.posted}
                </span>
                <button className="bg-purple-500 text-white px-4 py-1 rounded-md">Quick Apply</button>
              </div>
            </div>
          ))}
        </main>

        {/* Active Jobs Sidebar */}
        <aside className="w-1/4 bg-white/80 h-full p-4 rounded-lg shadow-md">
          <h3 className="text-lg text-purple-600 font-semibold">Active Jobs By Role</h3>
          <ul className="mt-4 text-sm text-gray-900">
            <li>Accountant (21)</li>
            <li>Admin (30)</li>
            <li>Agriculture and Dairy (1)</li>
            <li>Architect (3)</li>
            <li>BPO / Customer Care (21)</li>
          </ul>
          <button className="bg-purple-500 text-white px-4 py-2 mt-4 w-full rounded-md">See More</button>
        </aside>
      </div>
    </div>
  );
};

export default JobListPage;