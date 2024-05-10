import React from "react";

const Card = ({ title, imageSrc, description, isDarkMode }) => {
  const cardStyles = `relative overflow-hidden rounded-lg p-6 transition-all duration-300 ${
    isDarkMode
      ? "hover:bg-gradient-to-r hover:from-green-100 hover:to-transparent hover:outline-green-500 hover:outline hover:border-2 hover:border-green-500"
      : "hover:bg-gradient-to-r hover:from-gray-200 hover:to-transparent hover:outline-gray-500 hover:outline hover:border-2 hover:border-gray-500"
  }`;

  const textStyles = `font-bold mb-4 text-center ${
    isDarkMode ? "text-white" : "text-black"
  }`;
  const descriptionStyles = `mt-4 ${isDarkMode ? "text-white" : "text-black"}`;

  return (
    <div className={`${cardStyles} ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
      <div className={textStyles}>{title}</div>
      <div className="flex justify-center">
        <img
          src={imageSrc}
          alt="sol card img"
          className="w-full h-auto max-h-32 invisible opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100"
        />
      </div>
      <div className={descriptionStyles}>{description}</div>
    </div>
  );
};

const CardGrid = ({ isDarkMode }) => {
  const cards = [
    {
      title: "Exclusive Rights",
      imageSrc: "https://lenscorp.ai/_next/static/media/green.e71c8735.png",
      description:
        "Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belongs to you.",
    },
    {
      title: "Research Driven",
      imageSrc: "https://lenscorp.ai/_next/static/media/blue.f22859fe.png",
      description:
        "We regularly benchmark our solutions via comparing industry-wide evaluations so our partners only get the best that AI can offer.",
    },
    {
      title: "Plug-and-Play",
      imageSrc: "https://lenscorp.ai/_next/static/media/red.a7efdb29.png",
      description:
        "We provide AI-driven solutions into businesses where they can bring tangible value. Each solution is customized as per your needs and deployed on any computing device of your choice.",
    },
    {
      title: "Lifetime Support",
      imageSrc: "https://lenscorp.ai/_next/static/media/yellow.d937d179.png",
      description:
        "Should you face any issues, we are always at your service. We provide lifetime technical support & upgrade options.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:m-24">
      {cards.map((card, index) => (
        <div className="group" key={index}>
          <Card
            title={card.title}
            imageSrc={card.imageSrc}
            description={card.description}
            isDarkMode={isDarkMode}
          />
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
