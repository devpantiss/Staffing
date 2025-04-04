import React, { memo, useMemo } from "react";
import { Link } from "react-router-dom";

// Define the Program interface for TypeScript
interface Program {
  title: string;
  image: string;
  categories: string[];
  link: string;
}

// Memoized static programs data
const programs: Program[] = [
  {
    title: "Skill Candor",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742316784/freepik__the-style-is-candid-image-photography-with-natural__18031_exrhs0.jpg", // Image representing transparency or skills
    categories: ["Skill Development", "Training"],
    link: "/what-we-do/skill-candor",
  },
  {
    title: "Skill Mobilizers Connect",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742316572/freepik__make-a-image-showing-an-mobile-phone-inside-which-__18030_xe1ihz.jpg", // Image representing networking or connection
    categories: ["Networking", "Career Growth"],
    link: "/what-we-do/skill-mobilizers-connect",
  },
  {
    title: "Skill Cafe",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740387857/7cf81b40-cb85-47b0-bc17-5ed47fa210ed_viwshh.jpg", // Image representing a casual, learning environment
    categories: ["Learning Hub", "Community"],
    link: "/what-we-do/skill-cafe",
  },
  {
    title: "Blue Collars Foundry",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742126787/E-FvYHdVIAYEXa9_efneu2.webp", // Image representing industrial or blue-collar work
    categories: ["Blue Collar Skills", "Workforce Training"],
    link: "/what-we-do/blue-collars-foundry",
  },
];

// Memoized ProgramCard component with TypeScript props
interface ProgramCardProps {
  program: Program;
}

const ProgramCard = memo(
  ({ program }: ProgramCardProps) => {
    // Preload image styles to avoid layout shift
    const cardStyle: React.CSSProperties = {
      backgroundImage: `url(${program.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };

    return (
      <Link
        to={program.link}
        className="relative bg-cover bg-center h-[400px] ring-2 ring-white rounded-lg shadow-lg overflow-hidden group"
        style={cardStyle}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-300 ease-in-out"></div>

        {/* Categories */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
          {program.categories.map((category, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-purple-600 bg-opacity-90 text-white text-xs font-medium rounded-full"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Title and Line */}
        <div className="absolute bottom-6 left-6 right-6 text-white group-hover:text-purple-600 transition-colors duration-300 ease-in-out z-10">
          <hr className="border-t border-4 border-white/80 mb-3 w-12 group-hover:border-purple-600 transition-colors duration-300 ease-in-out" />
          <h3 className="text-start text-2xl md:text-3xl font-semibold leading-tight">
            {program.title}
          </h3>
        </div>
      </Link>
    );
  },
  (prevProps, nextProps) => prevProps.program.link === nextProps.program.link // Custom comparison for memo
);
ProgramCard.displayName = "ProgramCard";

const Programs = () => {
  // Memoized programs array
  const programList = useMemo(() => programs, []);

  return (
    // bg-gradient-to-b from-black via-purple-900 to-black
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-white text-4xl font-bold">
            OUR <span className="text-orange-600">PRODUCTS</span>
          </h1>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {programList.map((program) => (
            <ProgramCard key={program.link} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Programs, () => true); // Prevent re-render unless props change (none here)