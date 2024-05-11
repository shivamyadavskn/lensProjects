import React, { useState } from "react";
import Button from "@mui/material/Button";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const NavBar = ({ darkMode, toggleDarkMode }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="m-3">
      {/* Mobile navigation button */}
      <div className="md:hidden flex justify-end">
        <button
          className="text-gray-600 focus:outline-none focus:text-gray-800"
          onClick={toggleDrawer}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isDrawerOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 bg-white w-64 shadow-lg transform transition duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-4">
          <ul>
            <li className="py-2">
              <a href="#" className="text-gray-800 dark:text-white">
                MakeMyWeb
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-gray-800 dark:text-white">
                Home
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-gray-800 dark:text-white">
                Company
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-gray-800 dark:text-white">
                Blog
              </a>
            </li>
            <li className="py-2">
              <Button
                onClick={toggleDarkMode}
                variant="contained"
                size="small"
                style={{ backgroundColor: "black" }}
              >
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </Button>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop navigation */}
      <div className="md:flex md:justify-between dark:text-white">
        <div className="dark:text-white">
          <img
            src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=96&q=75"
            alt="not found"
          />
        </div>
        <div className="md:flex gap-4 hidden">
          <div>
            <a
              href="#"
              className="text-gray-800 dark:text-white  hover:text-blue-500 px-3 py-2 rounded-md"
            >
              MakeMyWeb
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-gray-800 dark:text-white  hover:text-blue-500 px-3 py-2 rounded-md"
            >
              Home
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-gray-800 dark:text-white  hover:text-blue-500 px-3 py-2 rounded-md"
            >
              Company
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-gray-800 dark:text-white  hover:text-blue-500 px-3 py-2 rounded-md"
            >
              Blog
            </a>
          </div>
          <Button
            onClick={toggleDarkMode}
            variant="contained"
            className="h-5 w-5"
            style={{ backgroundColor: "black" }}
          >
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
