import React from "react";

const CampusExperience: React.FC = () => {
  return (
    // bg-gradient-to-b from-black via-purple-900 to-black
    <section className="bg-black">
      <div className="max-w-7xl mx-auto gap-x-8 py-16 px-4 md:px-16 flex flex-col md:flex-row-reverse items-center">
        {/* Left Section */}
        <div className="md:w-1/3 w-full flex flex-col justify-start space-y-6">
          <h2 className="text-5xl font-semibold leading-snug text-white">
            A<br />
            <span className="text-orange-400">Campus</span> Experience <br />
            Like No Other.
          </h2>
          <div className="space-y-4">
            {[
              { label: "Sports & Fitness", icon: "🚴" },
              { label: "Art & Culture", icon: "🎨" },
              { label: "Residential Facilities", icon: "🏢" },
              { label: "Student Organizations", icon: "📂" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 border-b text-white border-gray-300 cursor-pointer hover:bg-purple-600 transition"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-lg font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-2/3 w-full flex flex-col items-center justify-center md:items-end relative mt-10 md:mt-0">
          {/* Buttons */}
          <div className="flex w-full justify-center mb-12 items-center gap-x-4">
            {["INFRASTRUCTURE", "RESIDENTIAL FACILITIES"].map((text, index) => (
              <button
                key={index}
                className="flex items-center space-x-2 bg-purple-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-gray-800 transition"
              >
                <span className="text-lg">➤</span>
                <span className="text-sm font-medium">{text}</span>
              </button>
            ))}
          </div>
          {/* Image Section */}
          <div className="w-full bg-gray-300 rounded-md overflow-hidden">
            <img
              src="https://www.lpu.in/lpu-assets/images/home-page/campus-experience/infrastructure.webp"
              alt="Campus View"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusExperience;
