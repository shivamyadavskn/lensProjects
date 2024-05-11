import React, { useState, useEffect } from "react";
import HomePage from "./HomePage/HomePage";
import NavBar from "./navBar/NavBar";

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
     
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-4">
        
        <HomePage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
};

export default App;
