import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import CardGrid from "./cards";

const NewCard = () => {
  return (
    <div className="border-2 border-white text-center md:text-xl">
      <div className="text-xl md:text-5xl font-bold font-serif">
        AI-driven solutions backed by science
      </div>
      <div className="text-sm md:text-2xl font-sans md:ml-60 md:mr-60 text-textColor m-5">
        Every piece of AI technology shipped from LENS is thoroughly benchmarked
        via rigorous evaluations. With a global network of experts and
        academicians, we guarantee the most accurate and robust solutions in the
        market.
      </div>
      <div className="md:flex gap-10 ml-7 font-sans text-left md:justify-center md:text-left m-5 md:m-24">
        <div>
          <p>
            <DoneIcon className="h-8 w-5 text-black-500" />
            State-of-the-art solutions
          </p>
          <p>
            <DoneIcon className="h-8 w-5 text-black-500" />
            Fast & Efficient
          </p>
          <p>
            <DoneIcon className="h-8 w-5 text-black-500" />
            No extra computation fee
          </p>
          <p>
            <DoneIcon className="h-8 w-5 text-black-500" />
            No licensing fee
          </p>
        </div>
        <div>
          <p>
            <DoneIcon className="h-8 w-5 text-black-500" />
            Lifetime support & upgrades
          </p>
          <p>
            <DoneIcon className="h-8 w-5 text-black-500" />
            Plug-and-Play
          </p>
          <p>
            <DoneIcon className="h-8 w-5 text-black-500" />
            24x7 Progress Monitoring
          </p>
          <p>
            <DoneIcon className="h-8 w-5 text-black-500" />
            Incremental Updates
          </p>
        </div>
      </div>

      <CardGrid />
    </div>
  );
};

export default NewCard;
