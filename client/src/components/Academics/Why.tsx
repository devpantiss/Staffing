import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaUniversity, FaBriefcase, FaUserGraduate, FaHandshake, FaShip, FaBook } from "react-icons/fa";

const slides = [
  "https://www.amity.edu/backoffice/uploads/HomeBanner/2fblg_lucknow.jpg",
  "https://www.amity.edu/backoffice/uploads/HomeBanner/6fblg_mumbai.jpg",
  "https://www.amity.edu/backoffice/uploads/HomeBanner/10fblg_ranchi.jpg",
];

const stats = [
  { label: "Industry Collaborations", value: "100+" },
  { label: "Students Trained in Mining & Shipping", value: "12,000+" },
  { label: "Annual Placements", value: "3,000+" },
  { label: "Marine & Mining Patents", value: "320" },
  { label: "Skill Development Programs", value: "150+" },
  { label: "Govt. & CSR Partnerships", value: "45" },
];

const campuses = [
  "Kalahandi", "Keonjhar", "Jajapur", "Anugul", "Jharsuguda",
  "Cuttack", "Talcher", "Paradip", "Koderma",
];

const sidebarItems = [
  {
    icon: <FaUniversity size={24} />,
    title: "#1 in Mining Education",
    subtitle: "Global Maritime Exposure",
  },
  {
    icon: <FaUserGraduate size={24} />,
    title: "Skill-to-Job Model",
    subtitle: "Empowering Rural Youth",
  },
  {
    icon: <FaBriefcase size={24} />,
    title: "3000+ Placements",
    subtitle: "Annually across core sectors",
  },
  {
    icon: <FaHandshake size={24} />,
    title: "45+ Collaborations",
    subtitle: "With Govt. & CSR Initiatives",
  },
  {
    icon: <FaShip size={24} />,
    title: "Modern Marine Labs",
    subtitle: "Hands-on shipping simulators",
  },
  {
    icon: <FaBook size={24} />,
    title: "Integrated Curriculum",
    subtitle: "Blending Mining & Shipping",
  },
];

export default function Why() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image Slider */}
      {slides.map((src, idx) => (
        <motion.img
          key={idx}
          src={src}
          alt={`Slide ${idx}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            current === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />

      {/* Main Content */}
      <div className="relative z-20 text-white px-8 pt-20 max-w-7xl h-full mx-auto">
        <div className="mb-10 max-w-xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            WHY <span className="text-orange-500">PANTISS</span>{" "}
            <span className="text-purple-500">SCHOOL</span> FOR MINES & SHIPPING?
          </h2>
          <p className="text-lg mb-4">
            Empowering youth from mining belts with world-class education,
            maritime skills, and leadership in the extractive sector.
          </p>
          <p className="text-xl font-semibold">
            Leading transformation for a just and sustainable future.
          </p>
          <button
            className="mt-6 px-6 py-2 border border-white hover:bg-white hover:text-black transition-all"
            aria-label="Learn More About Pantiss"
          >
            Learn More About Pantiss
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mb-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm font-light">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-30">
          <button
            onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
            aria-label="Previous Slide"
          >
            <FiChevronLeft size={32} />
          </button>
        </div>
        <div className="absolute top-1/2 right-[400px] transform -translate-y-1/2 z-30">
          <button
            onClick={() => setCurrent((current + 1) % slides.length)}
            aria-label="Next Slide"
          >
            <FiChevronRight size={32} />
          </button>
        </div>

        {/* Campus Bar */}
        <div className="absolute bottom-0 left-[40px] max-w-5xl w-full bg-orange-600 py-4 px-4 flex flex-wrap justify-center gap-4 text-white font-bold z-20">
          {campuses.map((campus, idx) => (
            <span key={idx}>{campus}</span>
          ))}
        </div>

        {/* Enhanced Sidebar */}
        <div className="absolute -right-6 top-0 h-full w-60 bg-black bg-opacity-60 p-4 text-white z-30 overflow-y-auto">
          <div className="flex flex-col gap-5">
            {sidebarItems.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="text-orange-400 mb-1">{item.icon}</div>
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-xs text-gray-300">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe Tag */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-40 bg-yellow-500 text-black px-2 py-1 rotate-90 origin-bottom-right font-bold">
          SUBSCRIBE
        </div>
      </div>
    </div>
  );
}