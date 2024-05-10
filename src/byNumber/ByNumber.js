import React from "react";

const ByNumber = () => {
  return (
    <div className="bg-btnColor m-0 w-auto">
      <div className="md:text-bold text-center md:font-5xl">By the numbers</div>
      <div className="md:flex flex justify-around md:m-10 md:p-10 rounded-sm text-white md:text-center">
        <div className="text-center">
          <p className="font-mono md:font-extrabold md:text-5xl">
            15<spna className="text-blue-600 font-mono font-medium">+</spna>
          </p>
          <p className="font-sans font-bold text-xl text-center">
            Solutions for Global crises
          </p>
        </div>
        <div className="text-center">
          <p className="font-mono md:font-extrabold md:text-5xl">
            10<spna className="text-blue-600 font-mono font-medium">+</spna>
          </p>
          <p className="font-sans font-bold text-xl text-center">
            University Collaborations
          </p>
        </div>
        <div className="text-center">
          <p className="font-mono md:font-extrabold md:text-5xl">
            25<spna className="text-blue-600 font-mono font-medium">+</spna>
          </p>
          <p className="font-sans font-bold text-xl text-center">
            Employees Worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default ByNumber;
