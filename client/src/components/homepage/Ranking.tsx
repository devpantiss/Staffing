import React, { useState } from "react";

interface RankingCardProps {
  logo: string;
  rank: string;
  description: string;
}

const RankingCard: React.FC<RankingCardProps> = ({ logo, rank, description }) => {
  return (
    <div className="flex flex-col items-center p-6 ring-2 ring-orange-500 rounded-2xl shadow-sm bg-black/30 backdrop-blur-md">
      <img src={logo} alt="Ranking Logo" className="h-12 mb-4" />
      <p className="text-3xl font-bold text-white">{rank}</p>
      <p className="text-sm text-gray-50 text-center mt-2">{description}</p>
    </div>
  );
};

const Ranking: React.FC = () => {
  const [activeTab, setActiveTab] = useState("rankings");

  const rankings = [
    {
      logo: "https://www.lpu.in/lpu-assets/images/rank-logo/wuri.webp",
      rank: "4th",
      description: "Amongst all government and private universities in India.",
    },
    {
      logo: "https://www.lpu.in/lpu-assets/images/rank-logo/the-world-university-ranking-lpu-2025.webp",
      rank: "9th",
      description: "Among top universities of India.",
    },
    {
      logo: "https://www.lpu.in/lpu-assets/images/rank-logo/nirf.webp",
      rank: "27th",
      description: "Amongst all government and private universities in India.",
    },
    {
      logo: "https://www.lpu.in/lpu-assets/images/rank-logo/the-impact.webp",
      rank: "2nd",
      description: "Amongst all government and private universities in India.",
    },
  ];

  const accreditations = [
    {
      logo: "https://www.lpu.in/lpu-assets/images/rank-logo/the-impact.webp",
      rank: "NAAC A+",
      description: "Accredited with the highest grade by NAAC.",
    },
    {
      logo: "https://www.lpu.in/lpu-assets/images/rank-logo/nirf.webp",
      rank: "NBA",
      description: "Accredited by the National Board of Accreditation.",
    },
  ];

  return (
    <section
      className="relative bg-fixed bg-center bg-cover lg:h-[450px] bg-no-repeat py-16 px-4"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742820278/2cf04226-46c3-4820-90e4-61a001350d8b_l1cetk.jpg)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex justify-between items-center flex-wrap mb-6 gap-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            <span className="text-orange-500">Rankings</span> &{" "}
            <span className="text-orange-500">Accreditations</span>
          </h1>
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 text-sm font-semibold rounded-full ${
                activeTab === "rankings"
                  ? "bg-black ring-2 ring-white text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setActiveTab("rankings")}
            >
              Rankings
            </button>
            <button
              className={`px-4 py-2 text-sm font-semibold rounded-full ${
                activeTab === "accreditations"
                  ? "bg-black ring-2 ring-white text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setActiveTab("accreditations")}
            >
              Accreditations
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(activeTab === "rankings" ? rankings : accreditations).map(
            (item, index) => (
              <RankingCard key={index} {...item} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Ranking;