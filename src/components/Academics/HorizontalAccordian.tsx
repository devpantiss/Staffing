import React, { useState } from "react";
import { FaGraduationCap, FaClipboardCheck, FaLightbulb, FaChalkboardTeacher, FaRedo, FaRobot } from "react-icons/fa";

const trainingPrinciples = [
  {
    title: "LEARNING",
    color: "bg-orange-500",
    description: "AI-driven content tailored to individual needs for maximum efficiency.",
    icon: FaGraduationCap,
    backgroundImage: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742916188/211589208_272cfb0a-9d68-41e5-84f4-dbb8243f3d91_vai2rd.jpg",
  },
  {
    title: "APPLICATION",
    color: "bg-green-500",
    description: "Real-world projects and interactive coding exercises for practical mastery.",
    icon: FaClipboardCheck,
    backgroundImage: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742916455/abstract-background-with-colorful-glowing-neon-lights_dzvjgy.jpg",
  },
  {
    title: "EXPERIENCE",
    color: "bg-blue-500",
    description: "Immersive simulations and scenario-based learning for deep engagement.",
    icon: FaLightbulb,
    backgroundImage: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742916188/211589208_272cfb0a-9d68-41e5-84f4-dbb8243f3d91_vai2rd.jpg",
  },
  {
    title: "COACHING",
    color: "bg-pink-500",
    description: "Guidance from industry professionals and dedicated mentorship programs.",
    icon: FaChalkboardTeacher,
    backgroundImage: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742916455/abstract-background-with-colorful-glowing-neon-lights_dzvjgy.jpg",
  },
  {
    title: "REINFORCEMENT",
    color: "bg-gray-800",
    description: "Regular skill assessments and adaptive learning paths to ensure retention.",
    icon: FaRedo,
    backgroundImage: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742916188/211589208_272cfb0a-9d68-41e5-84f4-dbb8243f3d91_vai2rd.jpg",
  },
  {
    title: "TECH-ENABLED",
    color: "bg-yellow-500",
    description: "Harnessing AI, VR, and gamification for a next-gen learning experience.",
    icon: FaRobot,
    backgroundImage: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742916455/abstract-background-with-colorful-glowing-neon-lights_dzvjgy.jpg",
  },
];

const HorizontalAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="w-full flex justify-center py-16 bg-gradient-to-b from-black via-purple-900 to-black">
      <div className="max-w-6xl w-full px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-100">
          Our <span className="text-orange-500">Training Principles</span>
        </h2>
        <p className="text-gray-100 mb-8 text-lg">
          Cutting-edge tech-driven learning for real-world impact at SkillNet.
        </p>

        {/* Accordion */}
        <div className="flex w-full h-[300px] sm:h-[350px] rounded-lg overflow-hidden shadow-xl">
          {trainingPrinciples.map((principle, index) => {
            const isActive = activeIndex === index;
            const IconComponent = principle.icon;

            return (
              <div
                key={index}
                className={`relative flex-1 transition-[flex] duration-500 ease-in-out ${
                  isActive ? "flex-[4]" : "flex-[1.2]"
                } cursor-pointer flex items-center justify-center overflow-hidden ${principle.color}`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                style={{
                  backgroundImage: isActive ? `url(${principle.backgroundImage}) bg-transparent` : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: isActive ? "overlay" : "normal",
                  willChange: "transform, opacity",
                }}
              >
                {/* Closed Title - Centered & Rotated */}
                {!isActive && (
                  <div className="absolute transform text-white -rotate-90 text-3xl text-center font-extrabold md:text-md tracking-wide uppercase opacity-90 transition-all font-serif">
                    {principle.title}
                  </div>
                )}

                {/* Expanded View on Hover */}
                {isActive && (
                  <div className="text-center p-6 backdrop-blur-md bg-transparent rounded-lg transition-all duration-300">
                    <div className="flex justify-center mb-3">
                      <IconComponent className="text-4xl text-white" />
                    </div>
                    <h3 className="text-3xl font-bold uppercase text-white">{principle.title}</h3>
                    <p className="mt-2 text-sm text-white sm:text-base max-w-[250px] mx-auto">{principle.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HorizontalAccordion;
