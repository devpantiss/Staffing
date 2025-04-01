import React from "react";

const LifeAtSkillnet: React.FC = () => {
  return (
    <section className="w-full py-12 bg-gradient-to-b from-black via-purple-900 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Section: Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-100 mb-4">
              Life at <span className="block text-purple-600">SkillNet </span> Mining
            </h2>
            <p className="text-lg text-gray-50 mb-4">
              At SkillNet Mining, we empower professionals in the mining industry
              to thrive in a dynamic and rewarding environment. From Jharkhand to
              Western Australia, our operations span global mining hubs, offering
              opportunities for Welders, Electricians, Dumper Operators, Excavator
              Operators, and Security Guards.
            </p>
            <p className="text-lg text-gray-50 mb-4">
              With a strong focus on safety, innovation, and career growth,
              SkillNet Mining provides unparalleled support through training
              programs, a 1:10 mentor-to-worker ratio, and a commitment to
              sustainable practices. Ranked among the top mining recruitment
              platforms, we connect talent with opportunities that shape the future
              of the industry.
            </p>
            <p className="text-lg text-gray-50">
              Join a community of over 10,000 mining professionals and build a
              career that makes an impact in the global mining landscape.
            </p>
          </div>

          {/* Right Section: Video Thumbnail and CTA */}
          <div className="lg:w-1/2 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Video Thumbnail */}
              <img
                src="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg" // Replace with your video thumbnail URL
                alt="Life at SkillNet Mining Video Thumbnail"
                className="w-full rounded-lg shadow-lg"
              />
              {/* Play Button Overlay */}
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with your YouTube video URL
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-red-600 rounded-full p-4 hover:bg-red-700 transition">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </a>
            </div>
            {/* Watch on YouTube Button */}
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with your YouTube video URL
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.498 6.186a2.94 2.94 0 0 0-2.064-2.064C19.92 3.5 12 3.5 12 3.5s-7.92 0-9.434.622A2.94 2.94 0 0 0 .502 6.186C0 7.702 0 12 0 12s0 4.298.502 5.814a2.94 2.94 0 0 0 2.064 2.064C4.08 20.5 12 20.5 12 20.5s7.92 0 9.434-.622a2.94 2.94 0 0 0 2.064-2.064C24 16.298 24 12 24 12s0-4.298-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Apply Now Button (Floating on the Right) */}
      <a
        href="#apply"
        className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-red-600 text-white font-semibold py-3 px-6 rounded-l-lg hover:bg-red-700 transition"
      >
        Apply Now
      </a>
    </section>
  );
};

export default LifeAtSkillnet;