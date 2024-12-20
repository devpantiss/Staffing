import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url('https://labournet.in/wp-content/uploads/2021/12/1920x1024_BG-1-2-1.jpg')` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-screen-xl mx-auto px-6 text-white">
        {/* Small Heading */}
        <p className="text-lg font-light tracking-wide">LabourNet for Businesses</p>

        {/* Main Heading */}
        <h1 className="mt-2 text-4xl sm:text-5xl font-bold leading-tight">
          Start Scaling
          <br />
          <span className="text-orange-400">Easier Than Ever Before</span>
        </h1>

        {/* CTA Button */}
        <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-md shadow-lg hover:bg-orange-600 transition">
          Talk To Us
        </button>
      </div>
    </section>
  );
};

export default Hero;
