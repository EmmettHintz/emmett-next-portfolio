import { useEffect, useState } from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // On component mount, check if dark mode is preferred or was manually set
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(prefersDarkMode || storedDarkMode);
  }, []);

  // When darkMode state changes, add or remove the 'dark' class and update localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  return (
    <button
      className="fixed right-4 top-4 h-12 w-12 rounded border border-gray-800 bg-white dark:border-white dark:bg-gray-800"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <FontAwesomeIcon icon={faSun} className="h-6 text-center w-6 text-yellow-500" />
      ) : (
        <FontAwesomeIcon icon={faMoon} className="h-6 w-6 text-center text-gray-800" />
      )}
    </button>
  );
};

export default DarkModeToggle;
