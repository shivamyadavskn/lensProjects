import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faDiscord,
  faLinkedin,
  faTwitterSquare,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="sm:flex justify-around text-center bg-customGray dark:bg-black dark:text-white">
        <div className="mt-3 mb-0">
          <img
            src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=96&q=75"
            alt="Not Found"
            className="w-32 h-32 mx-auto hover:text-blue-500"
          />
          <p className="m-5 hover:text-blue-500">Tomorrow's Vision, Today!</p>
          <div className="flex my-5 gap-5 justify-center">
            <div className="">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-white bg-black rounded-full hover:text-blue-500 hover:dark:text-white"
                style={{ fontSize: "30px"}}
              />
            </div>
            <div className="">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white bg-black rounded-full hover:bg-blue-500"
                style={{ fontSize: "30px" }}
              />
            </div>
            <div className="">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white bg-black rounded-full hover:bg-blue-500"
                style={{ fontSize: "30px" }}
              />
            </div>
            <div className="">
              <FontAwesomeIcon
                icon={faDiscord}
                className="text-white bg-black rounded-full hover:bg-blue-500"
                style={{ fontSize: "30px" }}
              />
            </div>
            <div className="">
              <FontAwesomeIcon
                icon={faTwitterSquare}
                className="text-white bg-black rounded-full hover:bg-blue-500"
                style={{ fontSize: "30px" }}
              />
            </div>
          </div>
        </div>
        <div className="m-3 text-center sm:text-left">
          <p className="my-5 text-lg">SITEMAP</p>
          <div>
            <p className="hover:text-blue-500">MakeMyWeb</p>
            <p className="hover:text-blue-500">Services</p>
            <p className="hover:text-blue-500">Products</p>
            <p className="hover:text-blue-500">Blogs</p>
            <p className="hover:text-blue-500">Life at LENS</p>
          </div>
        </div>
        <div className="m-3">
          <p className="m-5 text-center text-lg font-sans">CONNECT</p>
          <div className="text-center sm:text-left">
            <p className="m-2 hover:text-blue-500">
              <a href="tel:+1-517-9300-792">+1-517-9300-792</a>
            </p>
            <p className="m-2 hover:text-blue-500">
              <a href="tel:+91-9990-736-796">+91-9990-736-796</a>
            </p>
            <p className="m-2 hover:text-blue-500">
              <a href="email:solutions@lenscorp.ai">solutions@lenscorp.ai</a>
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 text-white text-center p-10 flex font-sans justify-between text-base">
        <div className="text-customGray dark:text-white">
          2023 <span className="text-white dark:text-white">LENS, Inc.</span>{" "}
          All rights reserved.
        </div>
        <div className="flex space-x-4">
          <div className="dark:text-white">Code of conduct</div>
          <div className="dark:text-white">Sustainability Goals</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
