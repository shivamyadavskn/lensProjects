import React from "react";

const CardGrid = () => {
  const cards = [
    {
      number: "1",
      title: "Biometrics",
      content:
        "Academia-backed & In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection.",
    },
    {
      number: "2",
      title: "Image Analysis",
      content:
        "Outsource the overly complex image analysis work to our intelligent machines that adaptively learn, so you can focus on making the best decisions for your business.",
    },
    {
      number: "3",
      title: "Cross-Media Translation",
      content:
        "Will something like Siri or Alexa enhance your business? We can deliver text-to-speech, text-to-image, speech-to-text, speech-to-image, speech-to-image, image-to-text and image-to-speech solutions for maximum convenience.",
    },
    {
      number: "4",
      title: "Image Analysis3D Modelling & Desiging",
      content:
        "We offer services for automated generation of 3D assets with realistic shapes and textures. We animate the 3D models with voice and videos with an aim to retarget voice and/or expressions with pose from a single Image/video.",
    },
    // Add the other card data here
  ];

  return (
    <div className="text-center dark:text-white text-black font-serif text-5xl">
      We provide Artificial Intelligence Services
      <div className="grid md:grid-cols-2">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative dark:bg-gray-800 text-black dark:text-white p-6 rounded-2xl card text-3xl truncate"
          >
            <div className="mb-4">
              <div className="flex items-center relative mb-10">
                <span className="text-9xl font-bold text-gray-700 transition-opacity duration-300">
                  0
                </span>
                <span
                  className="text-9xl font-bold transition-opacity duration-300 card-number"
                  style={{ zIndex: 1 }}
                >
                  {card.number}
                </span>
                <span
                  className="ml-4 text-4xl absolute left-0 transition-transform duration-300 card-title"
                  style={{
                    marginLeft: `${card.number.length * 16 + 16}px`,
                    zIndex: 1,
                  }}
                >
                  {card.title}
                </span>
              </div>
              <div className="font-sans text-3xl">{card.content}</div>
            </div>
          </div>
        ))}

        <style>
          {`
        .card{
            scale:0.8;
            
        }
        .card-number{
            opacity:0.4;
            color:grey;
        }
          .card:hover .card-number {
            opacity: 1;
            color: green;
          }
          .card-title{
            transform: translateX(70px);
          }

          .card:hover .card-title {
            transform: translateX(130px);
            color:grey;
            
          }
          .card:hover{
            border:2px solid green;
          }

        `}
        </style>
      </div>
    </div>
  );
};

export default CardGrid;
