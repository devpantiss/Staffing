import React, { memo, useMemo } from "react";
import {
  FiUsers,
  FiMapPin,
  FiBriefcase,
  FiCheckCircle,
} from "react-icons/fi"; // Customize this as needed

// Define the Card interface for TypeScript
interface Card {
  title: string;
  subtitle: string;
  features: string[];
  bgColor: string;
  textColor: string;
  icon: React.ReactNode;
  position: string;
}

// Updated card data using icons instead of image URLs
const cardData: Card[] = [
  {
    title: "Skill Mobilizers Connect",
    subtitle: "Linking skilled workers to industry",
    features: [
      "Skill Mobilization Executive Network",
      "Futuristic Skill on Wheels",
      "Offline Data Collection Platform",
      "Candidates Spatial Atlas",
    ],
    bgColor: "bg-red-900",
    textColor: "text-white",
    icon: <FiUsers className="text-7xl" />,
    position: "top-0 left-0",
  },
  {
    title: "Skill Candor",
    subtitle: "Transparent skill pathways",
    features: [
      "Certified Skill Counsellor Network",
      "Real-time Counselling Vans",
      "Psychometric Assessment Dashboard",
    ],
    bgColor: "bg-yellow-600/90",
    textColor: "text-white",
    icon: <FiMapPin className="text-7xl" />,
    position: "top-64 left-60",
  },
  {
    title: "Skill Cafe",
    subtitle: "Innovation for professionals",
    features: [
      "Residential Center of Excellence",
      "A/R, V/R & Simulator Training",
      "Hands-on Training in Equipment",
      "Performance Metrics & Analytics",
    ],
    bgColor: "bg-white",
    textColor: "text-gray-900",
    icon: <FiCheckCircle className="text-7xl" />,
    position: "top-[500px] left-[500px]",
  },
  {
    title: "Blue Collars Foundry",
    subtitle: "Support for industrial workers",
    features: [
      "App-based Job Search Engine",
      "Repository of Industries & Contractors",
      "Alumni Engagement Portal",
    ],
    bgColor: "bg-blue-400",
    textColor: "text-white",
    icon: <FiBriefcase className="text-7xl" />,
    position: "top-[750px] left-[750px]",
  },
];

// Memoized CardItem component
const CardItem = memo(({ card }: { card: Card }) => {
  return (
    <div
      className={`absolute ${card.position} ${card.bgColor} ${card.textColor} p-6 rounded-lg shadow-lg w-[400px] h-[350px] transition-transform duration-300 ease-in-out [will-change:transform]`}
    >
      <h3 className="text-lg font-bold mb-2">{card.title}</h3>
      <h4 className="text-xl font-semibold mb-4">{card.subtitle}</h4>
      <ul className="list-disc pl-5 space-y-1 mb-4">
        {card.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
      <div className="absolute bottom-6 left-6 text-4xl">{card.icon}</div>
    </div>
  );
});
CardItem.displayName = "CardItem";

const OverLappingCards2: React.FC = () => {
  const cardItems = useMemo(() => {
    return cardData.map((card) => <CardItem key={card.title} card={card} />);
  }, []);

  return (
    <div className="relative py-10 bg-black">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742994033/video-poster_kzq1zq.jpg"
        aria-hidden="true"
      >
        <source
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1742994033/12700136_1920_1080_30fps_zajh9b.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto p-8">
        {/* Desktop Layout */}
        <div className="hidden lg:block h-[1100px]">
          <div className="absolute right-0 text-left flex flex-end mb-10">
            <h1 className="text-3xl lg:text-5xl font-bold text-white leading-snug">
              Our In-House <br />
              <span className="text-orange-500">Solutions</span>
            </h1>
          </div>
          {cardItems}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-white leading-snug">
              Our In-House <br />
              <span className="text-orange-500">Solutions</span>
            </h1>
          </div>
          <div className="space-y-8">
            {cardData.map((card) => (
              <div
                key={card.title}
                className={`relative ${card.bgColor} ${card.textColor} p-6 rounded-lg shadow-lg w-full h-[350px]`}
              >
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <h4 className="text-xl font-semibold mb-4">{card.subtitle}</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  {card.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className="absolute bottom-10 left-8">
                  {card.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(OverLappingCards2, () => true);