
import React, { useState, useEffect } from "react";
import HomePage from "./HomePage/HomePage";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <button
        className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-2 rounded-md"
        onClick={toggleDarkMode}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-4">
        <HomePage />
      </div>
    </div>
  );
};

export default App;