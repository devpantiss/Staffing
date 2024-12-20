import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="group relative w-full max-w-xs mx-auto overflow-hidden rounded-lg bg-white shadow-md h-[500px] transition-all duration-300 hover:shadow-lg">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="relative z-10 p-6">
        <h3 className="text-lg font-semibold max-w-lg text-gray-800 group-hover:text-white">
          {title}
        </h3>
        <p className="mt-4 text-sm text-gray-500 group-hover:text-white">
          {description}
        </p>
        <a
          href="#"
          className="mt-4 inline-block text-sm font-semibold text-blue-600 group-hover:text-white"
        >
          Read More &gt;
        </a>
      </div>
    </div>
  );
};

const NewsSection: React.FC = () => {
  const cards = [
    {
      title: "How a collective helped Bengaluru’s sex workers get vaccinated",
      description: "Read More >",
      imageUrl: "https://labournet.in/wp-content/uploads/2021/12/bengaluru-CAC-Vaccination-camp-CAC-Dec2021-800x438-1.jpg", // Replace with actual image URL
    },
    {
      title: "How LabourNet is bridging the gap between employers and jobless migrants",
      description: "Read More >",
      imageUrl: "https://labournet.in/wp-content/uploads/2021/12/Rectangle-65.jpg", // Replace with actual image URL
    },
    {
      title:
        "CII Karnataka Covid-19 Task Force strengthens hospital infra in Bengaluru",
      description: "Read More >",
      imageUrl: "https://labournet.in/wp-content/uploads/2021/12/BL08BSYediyurappa02jpg.jpg", // Replace with actual image URL
    },
  ];

  return (
    <section className="py-10 flex flex-col justify-center items-center bg-gray-100">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">News</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
