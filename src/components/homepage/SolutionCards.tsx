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
    title: "Academics",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743158319/debby-hudson-asviIGR3CPE-unsplash_grpmlh.jpg",
    categories: ["Academics", "Education"],
    link: "/what-we-do/academic-support-program",
  },
  {
    title: "Job Search Engine",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743158321/christin-hume-Hcfwew744z4-unsplash_c6wlje.jpg",
    categories: ["Job Search", "Career Development"],
    link: "/what-we-do/job-search-assistance",
  },
  {
    title: "Counselling",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743158318/words-associated-mental-health-counseling-600nw-2257383619_bzwseq.webp",
    categories: ["Counselling", "Mental Health"],
    link: "/what-we-do/counselling-services",
  },
];

// Memoized ProgramCard component with TypeScript props
interface ProgramCardProps {
  program: Program;
}

const ProgramCard = memo(({ program }: ProgramCardProps) => {
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
}, (prevProps, nextProps) => prevProps.program.link === nextProps.program.link); // Custom comparison for memo
ProgramCard.displayName = "ProgramCard";

const Programs = () => {
  // Memoized programs array
  const programList = useMemo(() => programs, []);

  return (
    <section className="py-12 bg-gradient-to-b from-black to-purple-900">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-white text-4xl font-bold">
            OUR <span className="text-purple-600">PLATFORMS</span>
          </h1>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {programList.map((program) => (
            <ProgramCard key={program.link} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Programs, () => true); // Prevent re-render unless props change (none here)