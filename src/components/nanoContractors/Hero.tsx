import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-800 text-white">
      <div className="relative flex items-center justify-center h-screen bg-opacity-50 bg-cover bg-center" style={{ backgroundImage: "url('https://labournet.in/wp-content/uploads/2022/01/1920x1024_BG-1-7-1.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-4xl px-6 text-center">
          <h3 className="text-xl font-medium uppercase">LabourNet for Nano-Contractors</h3>
          <h1 className="mt-4 text-4xl font-bold text-orange-500 md:text-6xl">
            Good work and
            <br />
            <span className="text-gray-300">dependable teams.</span>
          </h1>
          <p className="mt-6 text-lg font-light text-gray-300">
            LabourNet unlocks opportunities for more consistent work, more reliable revenues, and more ways to resource projects.
          </p>
          <button className="px-6 py-3 mt-8 text-lg font-semibold text-white bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 focus:ring-4 focus:ring-orange-300">
            Experience More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
