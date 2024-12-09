import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://labournet.in/wp-content/uploads/2021/12/1920x1024_BG-1_1.jpg')",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="bg-opacity-50">
        {/* Lower Section: Key Features */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 px-8 bg-opacity-90 text-gray-900">
          <div className="">
            {/* Upper Section: Job Search */}
            <div className="flex flex-col justify-center py-12 space-y-4">
              <h1 className="text-4xl text-center lg:text-left font-bold text-white">
                Find the best job near you
              </h1>
              <p className="text-lg text-center lg:text-left text-white">
                42228+ active job vacancies to grab
              </p>
              <div className="flex flex-wrap gap-x-4 justify-center items-center lg:justify-start gap-4">
                <select className="px-4 py-2 rounded-md border-2 border-gray-200 focus:outline-none focus:ring focus:ring-orange-500 text-gray-700">
                  <option>Select Job Role</option>
                  <option>Software Engineer</option>
                  <option>Project Manager</option>
                </select>
                <select className="px-4 py-2 rounded-md border-2 border-gray-200 focus:outline-none focus:ring focus:ring-orange-500 text-gray-700">
                  <option>Select City</option>
                  <option>Bangalore</option>
                  <option>Mumbai</option>
                </select>
                <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md">
                  Search
                </button>
              </div>
            </div>
            <h2 className="text-3xl text-center lg:text-left text-white font-bold mb-4">
              Discover a new way <br />
              to <span className="text-orange-500">get work done.</span>
            </h2>
            <div className="flex space-x-4 mt-6">
              <button className="px-6 py-3 border border-gray-300 rounded-md text-white font-medium hover:bg-gray-100">
                For Businesses
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-md text-white font-medium hover:bg-gray-100">
                For Nano-Contractors
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-md text-white font-medium hover:bg-gray-100">
                For Skilled Workers
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src="https://labournet.in/wp-content/uploads/2021/12/HomeBanner_warehouseManager_LowRes-2-1.png" // Replace with your image path
              alt="Skilled Worker"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
