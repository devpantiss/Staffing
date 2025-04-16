import { useState } from "react";
import { Link } from "react-router-dom";


const jobsData = {
  "Jobs in Odisha": [
    {
      viewLink: "/job-details",
      title: "Welder",
      company: "Tata Steel",
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248276/tata_steel_eh81pq.jpg",
      location: "Bhubaneswar",
      salary: "2.0-3.5 LPA",
      experience: "0-2 Years",
      posted: "Today",
      qualification: "10th Pass",
      openings: 10,
      description:
        "Responsible for joining metal parts using welding techniques, ensuring structural integrity and durability of fabricated products.",
    },
    {
      viewLink: "/job-details",

      title: "Electrician",
      company: "NTPC Limited",
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248276/NTPC-Preview_mmpq59.png",
      location: "Cuttack",
      salary: "2.2-3.8 LPA",
      experience: "1-3 Years",
      posted: "Today",
      qualification: "ITI Electrician",
      openings: 15,
      description:
        "Install, maintain, and repair electrical systems and equipment, ensuring safety and compliance with industry standards.",
    },
    {
      viewLink: "/job-details",

      title: "Dumper Operator",
      company: "Coal India Limited",
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248275/Coal_India_Logo.svg_1_fit4mk.png",
      location: "Angul",
      salary: "2.5-4.0 LPA",
      experience: "2-5 Years",
      posted: "Today",
      qualification: "Heavy Vehicle License",
      openings: 12,
      description:
        "Operate heavy-duty dumper trucks to transport materials efficiently within mining and construction sites.",
    },
    {
      viewLink: "/job-details",

      title: "Excavator Operator",
      company: "Larsen & Toubro",
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248275/lt_vtduty.jpg",
      location: "Sambalpur",
      salary: "2.8-4.2 LPA",
      experience: "3-6 Years",
      posted: "Today",
      qualification: "Excavator Training",
      openings: 8,
      description:
        "Handle and operate excavators for digging, trenching, and earthmoving activities in construction and mining environments.",
    },
    {
      viewLink: "/job-details",

      title: "Security Guard",
      company: "G4S Secure Solutions",
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248275/G4S__logo_.svg_vcz6im.png",
      location: "Puri",
      salary: "1.8-2.5 LPA",
      experience: "0-2 Years",
      posted: "Today",
      qualification: "12th Pass",
      openings: 20,
      description:
        "Ensure security and safety of premises by monitoring access, patrolling areas, and handling security incidents professionally.",
    },
  ],
  "Jobs in India": [
    {
      viewLink: "/job-details",

      title: "Welder",
      company: "Bharat Heavy Electricals Limited (BHEL)",
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248276/bhel_dmv4uz.avif",
      location: "Mumbai",
      salary: "2.2-3.6 LPA",
      experience: "1-3 Years",
      posted: "Today",
      qualification: "Diploma in Welding",
      openings: 12,
      description:
        "Perform welding tasks on heavy machinery components and structures, ensuring precision and durability.",
    },
    {
      viewLink: "/job-details",

      title: "Electrician",
      company: "Tata Power",
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248276/Tata_Power_piq2vv.png",
      location: "Delhi",
      salary: "2.5-4.0 LPA",
      experience: "2-4 Years",
      posted: "Today",
      qualification: "ITI Electrician",
      openings: 18,
      description:
        "Maintain and troubleshoot electrical systems in industrial and commercial buildings, ensuring uninterrupted power supply.",
    },
    {
      viewLink: "/job-details",

      title: "Dumper Operator",
      company: "Hindustan Zinc",
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248275/HZL_Logo_xx77ym.png",
      location: "Jaipur",
      salary: "2.8-4.5 LPA",
      experience: "3-6 Years",
      posted: "Today",
      qualification: "Heavy Vehicle License",
      openings: 10,
      description:
        "Transport raw materials and debris efficiently in mining and construction operations using large dumper trucks.",
    },
    {
      viewLink: "/job-details",

      title: "Excavator Operator",
      company: "L&T Construction",
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248275/lt_vtduty.jpg",
      location: "Chennai",
      salary: "3.0-4.8 LPA",
      experience: "4-7 Years",
      posted: "Today",
      qualification: "Excavator Certification",
      openings: 7,
      description:
        "Operate heavy machinery to perform excavation, loading, and earthmoving tasks efficiently at construction sites.",
    },
    {
      viewLink: "/job-details",
      title: "Security Guard",
      company: "Sis India Limited",
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248276/SIS_ddr1kn.png",
      location: "Kolkata",
      salary: "2.0-2.8 LPA",
      experience: "0-3 Years",
      posted: "Today",
      qualification: "12th Pass",
      openings: 25,
      description:
        "Monitor security systems, control access, and ensure the safety of people and assets at designated locations.",
    },
  ],
};

export default function JobTabs() {
  const [activeTab, setActiveTab] = useState<
    "Jobs in Odisha" | "Jobs in India"
  >("Jobs in Odisha");

  return (
    <div className="bg-black">
      <div className="w-full max-w-7xl mx-auto p-4">
        <div className="flex border-b">
          {Object.keys(jobsData).map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 flex-1 text-center ${
                activeTab === tab
                  ? "border-b-4 border-purple-600 font-bold text-purple-600"
                  : "text-gray-50 hover:text-purple-500"
              }`}
              onClick={() =>
                setActiveTab(tab as "Jobs in Odisha" | "Jobs in India")
              }
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {jobsData[activeTab].map((job, index) => (
            <div
              key={index}
              className="p-6 shadow-lg rounded-2xl border bg-purple-600/30 flex flex-col gap-4 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3">
                <img
                  src={job.logo}
                  alt="Company Logo"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h1 className="text-xl font-bold text-white">{job.title}</h1>
                  <p className="text-gray-100">{job.company}</p>
                </div>
              </div>
              <p className="text-gray-100 text-sm italic">{job.description}</p>
              <div className="grid grid-cols-3 gap-x-5 gap-y-5">
                <p className="text-md text-left text-gray-100">
                  💰 <strong>Salary:</strong>{" "}
                  <span className="text-md">{job.salary}</span>
                </p>
                <p className="text-md text-left text-gray-100">
                  📅 <strong>Exp:</strong>{" "}
                  <span className="text-md">{job.experience}</span>
                </p>
                <p className="text-md text-left text-gray-100">
                  🗓️ <strong>Posted:</strong>{" "}
                  <span className="text-md">{job.posted}</span>
                </p>
                <p className="text-md text-left text-gray-100">
                  🎓 <strong>Qualification:</strong>{" "}
                  <span className="text-md">{job.qualification}</span>
                </p>
                <p className="text-md text-left text-gray-100">
                  📍 <strong>Location:</strong>{" "}
                  <span className="text-md">{job.location}</span>
                </p>
                <p className="text-md text-left text-gray-100">
                  📦 <strong>Openings:</strong>{" "}
                  <span className="text-md">{job.openings}</span>
                </p>
              </div>
              <Link to="/job-details" className="mt-4 w-full text-center bg-violet-500 text-white py-2 rounded-lg hover:bg-violet-600 transition-colors">
                View
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
