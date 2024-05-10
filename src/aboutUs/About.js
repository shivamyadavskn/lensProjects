import React from "react";

const About = () => {
  return (
    <div className="md:m-10 md:scale-75 hover:scale-90 md:bg-blue-100 rounded-2xl p-10 bg-blue-200">
      <div className="md:flex flex-column md:gap-80 justify-center mt-16 mb-16">
        <div className="md:order-last order-first justify-center">
          <img
            src="https://lenscorp.ai/_next/image?url=%2FImages%2FaboutLatest.webp&w=640&q=75"
            className="md:h-96 md:w-96 md:p-2"
            alt="not found"
          />
        </div>
        <div className="md:text-left justify-center text-center p-5 ml-0 w-60 md:w-auto h-auto">
          <p className="font-serif font-bold md:text-3xl text-2xl my-5">
            Welcome to Lens
          </p>
          <p className="my-3">
            We put our hearts, souls and sweat into designing and developing
            custom AI - powered solutions for your business so you don't have
            to.
          </p>
          <button className="md:h-16 md:w-48 h-16 w-48 text-black border-2 border-black md:rounded-2xl rounded-xl my-5 justify-center">
            Learn More &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
