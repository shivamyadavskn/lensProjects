import React from "react";
import "./styles.css";

const GradientText = () => {
  return (
    <div className="md:flex justify-center text-center md:bg-btnColor dark:bg-bgcolor p-10 text-white">
      <div className="mt-10">
        <p className="text-white dark:text-black font-mono text-4xl md:text-7xl my-10">
          Meet <span className="splash">Tru-AI</span>
        </p>
        <p className="text-3xl my-5">Design. Create. Deploy.</p>
        <div className="ml-15 border-2 border-black md:text-right md:justify-end my-5">
          <img
            src="https://lenscorp.ai/_next/static/media/underline.27e9f7f7.svg"
            alt="not found"
            className="w-8 h-8 hidden justify-end"
          />
        </div>

        <p className="text-lg font-sans md:text-2xl splash my-5">
          the Future of AI | Power to EDIT
        </p>
        <p>
          Based On Your Website & Traffic Trends, Tru-AI Optimises Your Website
        </p>
        <button
          className="text-btnColor button"
          style={{ verticalAlign: "middle" }}
        >
          <span>Learn More </span>
        </button>
      </div>
      <div className="relative md:mt-20 md:ml-52 md:w-1/2">
        <video
          autoPlay
          loop
          muted
          className="rounded-l-full w-full h-auto mt-15"
        >
          <source
            src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730954/lenscorp-website/product-intro_1_dmajx1_qaemeu.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default GradientText;
