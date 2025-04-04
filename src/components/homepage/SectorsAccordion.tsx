import React, { memo, useState, useMemo } from "react";
import { FaGem, FaIndustry, FaBolt, FaOilCan, FaShip } from "react-icons/fa";
import { Link } from "react-router-dom";

// Define the Sector interface for TypeScript
interface Sector {
  title: string;
  color: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  backgroundImage: string;
}

// Static sector data
const sectorData: Sector[] = [
  {
    title: "Mining",
    color: "bg-gray-800",
    description:
      "Advanced training for efficient resource extraction and safety in mining operations.",
    icon: FaGem,
    backgroundImage:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739294514/cls-open-pit-mining_pbeseo.jpg",
  },
  {
    title: "Steel & Aluminium",
    color: "bg-blue-700",
    description:
      "Specialized programs for metallurgy, production, and quality control in metal industries.",
    icon: FaIndustry,
    backgroundImage:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743679032/ant-rozetsky-_qWeqqmpBpU-unsplash_g46bga.jpg",
  },
  {
    title: "Power",
    color: "bg-yellow-600",
    description:
      "Cutting-edge skills for energy generation, distribution, and renewable technologies.",
    icon: FaBolt,
    backgroundImage:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743679033/shahnawaz-shamim-rbiknJHleHI-unsplash_jt41sl.jpg",
  },
  {
    title: "Hydrocarbon & Petrochemicals",
    color: "bg-red-700",
    description:
      "Expertise in refining, processing, and safety for oil, gas, and chemical sectors.",
    icon: FaOilCan,
    backgroundImage:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743679033/pilmo-kang-H72SCCTZPE8-unsplash_ru8urx.jpg",
  },
  {
    title: "Shipping",
    color: "bg-teal-600",
    description:
      "Training for maritime logistics, navigation, and port management excellence.",
    icon: FaShip,
    backgroundImage:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743679034/ali-mkumbwa-Annl9CjEaEs-unsplash_zihcem.jpg",
  },
];

// Memoized SectorItem component
const SectorItem = memo(
  ({
    sector,
    isActive,
    onMouseEnter,
    onMouseLeave,
  }: {
    sector: Sector;
    isActive: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  }) => {
    const IconComponent = sector.icon;

    return (
      <div
        className={`relative flex-1 transition-all duration-700 ease-in-out ${
          isActive ? "flex-[5]" : "flex-[1.2]"
        } cursor-pointer flex items-center justify-center overflow-hidden ${sector.color} border border-gray-700 [will-change:transform,flex]`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <img
          src={sector.backgroundImage}
          alt={`${sector.title} background`}
          className="absolute inset-0 w-full h-full object-cover z-0"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {!isActive && (
          <div className="relative z-20 transform bg-black/80 p-4 rounded-md text-white -rotate-90 text-3xl font-extrabold tracking-wide uppercase opacity-80 transition-opacity duration-500">
            {sector.title}
          </div>
        )}

        {isActive && (
          <div className="relative z-20 text-center p-8 bg-black/30 rounded-lg shadow-md transition-opacity duration-500 opacity-100">
            <div className="flex justify-center mb-4">
              <IconComponent className="text-5xl text-white" />
            </div>
            <h3 className="text-3xl font-bold uppercase text-white">
              {sector.title}
            </h3>
            <p className="mt-3 text-base text-gray-300 max-w-xs mx-auto">
              {sector.description}
            </p>
          </div>
        )}
      </div>
    );
  },
  (prevProps, nextProps) =>
    prevProps.isActive === nextProps.isActive &&
    prevProps.sector.title === nextProps.sector.title
);
SectorItem.displayName = "SectorItem";

const SectorsAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Memoized accordion items
  const accordionItems = useMemo(() => {
    return sectorData.map((sector, index) => (
      <SectorItem
        key={sector.title}
        sector={sector}
        isActive={activeIndex === index}
        onMouseEnter={() => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(null)}
      />
    ));
  }, [activeIndex]);

  return (
    <section className="w-full flex justify-center py-16 bg-gradient-to-b from-black via-purple-900 to-black">
      <div className="max-w-7xl w-full px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white [will-change:transform]">
          Our <span className="text-orange-500">Operating Sectors</span>
        </h2>
        <p className="text-gray-300 mb-10 text-lg">
          Delivering industry-specific expertise for impactful results at SkillNet.
        </p>

        <div className="flex w-full h-[350px] sm:h-[400px] rounded-xl overflow-hidden shadow-2xl">
          {accordionItems}
        </div>
        <Link
          to="/academics"
          className="inline-block mt-8 px-4 py-2 bg-purple-600 rounded-md text-white hover:bg-purple-700 transition-colors duration-300"
        >
          Explore All
        </Link>
      </div>
    </section>
  );
};

export default memo(SectorsAccordion, () => true);