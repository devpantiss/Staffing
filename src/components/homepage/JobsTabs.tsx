import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../assets/experience.json";
import worker from "../../assets/work.json";
const JobTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("skilledWorkers");

  const jobRoles = [
    {
      title: "Work from Home",
      jobs: "159 Active Jobs",
      image:
        "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/workfromhome.svg",
      isNew: true,
    },
    {
      title: "Accountant",
      jobs: "297 Active Jobs",
      image:
        "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/Accountant.svg",
      isNew: false,
    },
    {
      title: "BPO / Customer Care",
      jobs: "2924 Active Jobs",
      image:
        "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/BPO_Telecallers.svg",
      isNew: false,
    },
    {
      title: "Data Entry / Back Office",
      jobs: "1039 Active Jobs",
      image:
        "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/Data_entry_Back_office.svg",
      isNew: false,
    },
    {
      title: "Sales / Marketing",
      jobs: "1095 Active Jobs",
      image:
        "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/Sales.svg",
      isNew: false,
    },
    {
      title: "Receptionist / Front Office",
      jobs: "133 Active Jobs",
      image:
        "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/Receptionist_Front_office.svg",
      isNew: false,
    },
    {
      title: "Hospitality Executives",
      jobs: "97 Active Jobs",
      image:
        "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/Hospitality_Executives.svg",
      isNew: false,
    },
    {
      title: "Delivery",
      jobs: "26 Active Jobs",
      image:
        "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/Delivery_boy.svg",
      isNew: false,
    },
    {
      title: "Cook / Chef",
      jobs: "14 Active Jobs",
      image:
        "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/Cook.svg",
      isNew: false,
    },
    {
      title: "Driver",
      jobs: "2 Active Jobs",
      image:
        "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/Driver.svg",
      isNew: false,
    },
    {
      title: "Beauticians / Spa",
      jobs: "10 Active Jobs",
      image:
        "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/Beauticians.svg",
      isNew: false,
    },
    {
      title: "Mechanic",
      jobs: "157 Active Jobs",
      image:
        "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/Mechanic.svg",
      isNew: true,
    },
    {
      title: "IT Software Engineer",
      jobs: "5482 Active Jobs",
      image:
        "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/IT-Software.svg",
      isNew: true,
    },
    {
      title: "Retail / Store Executive",
      jobs: "55 Active Jobs",
      image:
        "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/Retail.svg",
      isNew: false,
    },
  ];

  const sectors = jobRoles.map((role) => role.title);

  return (
    <div className="bg-gray-50 py-8">
      {/* Container */}
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex border-b mb-6">
          <button
            className={`px-4 py-2 font-semibold ${
              activeTab === "skilledWorkers"
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("skilledWorkers")}
          >
            For Skilled Workers
          </button>
          <button
            className={`px-4 py-2 font-semibold ${
              activeTab === "businesses"
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("businesses")}
          >
            For Businesses
          </button>
          <button
            className={`px-4 py-2 font-semibold ${
              activeTab === "nanoContractors"
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("nanoContractors")}
          >
            For Nano-Contractors
          </button>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "skilledWorkers" && (
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {jobRoles.map((role, index) => (
                <div
                  key={index}
                  className="bg-white shadow p-4 rounded-lg flex flex-col items-center"
                >
                  <img
                    src={role.image}
                    alt={role.title}
                    className="w-16 h-16 mb-4"
                  />
                  <div className="text-xl font-semibold text-center mb-2">
                    {role.title}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{role.jobs}</div>
                  {role.isNew && (
                    <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      New
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "businesses" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form Section */}
              <div
                className="bg-white p-6 shadow rounded-lg grid gap-4"
                style={{ maxHeight: "100vh" }} // Makes the form scrollable
              >
                <h2 className="text-2xl font-semibold mb-4">Post a Job</h2>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="p-2 border rounded"
                />
                <select className="p-2 border rounded">
                  <option value="">Select Sector</option>
                  {sectors.map((sector, index) => (
                    <option key={index} value={sector}>
                      {sector}
                    </option>
                  ))}
                </select>
                <select className="p-2 border rounded">
                  <option value="Contract">Contract</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Full-time">Full-time</option>
                </select>
                <textarea
                  placeholder="Job Description"
                  className="p-2 border rounded h-24"
                ></textarea>
                <textarea
                  placeholder="Qualifications"
                  className="p-2 border rounded h-24"
                ></textarea>
                <input
                  type="text"
                  placeholder="Contact Details"
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="p-2 border rounded"
                />
                <input type="date" className="p-2 border rounded" />
                <button className="bg-orange-500 text-white px-4 py-2 rounded">
                  Submit
                </button>
              </div>

              {/* Lottie Animation */}
              <div
                className="hidden lg:block sticky top-8 h-[400px] justify-center items-center"
                // style={{
                //   backgroundImage: `url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1730547765/rb_4719_zaopt2.png')`,
                //   backgroundSize: "fit",
                //   backgroundColor: "#f9f9f9",
                //   borderRadius: "15px",
                // }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="88"
                  height="88"
                  viewBox="0 0 88 88"
                  fill="none"
                  className="absolute -right-6 -top-6 w-8 h-8 lg:w-16 lg:h-16"
                >
                  <path
                    d="M88 88V43.9944V0H44.0056H0V43.9944H44.0056V88H88Z"
                    fill="#D6DDCD"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="290"
                  height="305"
                  viewBox="0 0 290 305"
                  fill="none"
                  className="absolute -right-0 top-0 w-8 h-8 lg:w-72 lg:h-72"
                >
                  <path
                    d="M289.5 289V144.5V0H144.979H0.5V144.5H144.979V289H289.5Z"
                    fill="#D76041"
                  ></path>
                  <line
                    x1="187.363"
                    y1="2.5"
                    x2="187.363"
                    y2="302.5"
                    stroke="#D6DDCD"
                    stroke-width="5"
                    stroke-linecap="round"
                  ></line>
                  <line
                    x1="240.6"
                    y1="2.5"
                    x2="240.6"
                    y2="302.5"
                    stroke="#D6DDCD"
                    stroke-width="5"
                    stroke-linecap="round"
                  ></line>
                  <line
                    x1="189.645"
                    y1="60.9077"
                    x2="237.881"
                    y2="60.9077"
                    stroke="#D6DDCD"
                    stroke-width="5"
                    stroke-linecap="round"
                  ></line>
                  <line
                    x1="189.645"
                    y1="108.263"
                    x2="237.881"
                    y2="108.263"
                    stroke="#D6DDCD"
                    stroke-width="5"
                    stroke-linecap="round"
                  ></line>
                  <line
                    x1="189.645"
                    y1="155.619"
                    x2="237.881"
                    y2="155.619"
                    stroke="#D6DDCD"
                    stroke-width="5"
                    stroke-linecap="round"
                  ></line>
                  <line
                    x1="189.645"
                    y1="202.973"
                    x2="237.881"
                    y2="202.973"
                    stroke="#D6DDCD"
                    stroke-width="5"
                    stroke-linecap="round"
                  ></line>
                  <line
                    x1="189.645"
                    y1="250.329"
                    x2="237.881"
                    y2="250.329"
                    stroke="#D6DDCD"
                    stroke-width="5"
                    stroke-linecap="round"
                  ></line>
                </svg>
                <Player
                  autoplay
                  loop
                  src={animation}
                  style={{ height: "450px", width: "500px" }}
                />
              </div>
            </div>
          )}

          {activeTab === "nanoContractors" && (
            <div className="text-center flex flex-col justify-center items-center">
              <Player
                autoplay
                loop
                src={worker}
                style={{ height: "450px", width: "500px" }}
              />
              <p>Content for Nano-Contractors goes here...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobTabs;
