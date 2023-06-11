import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToggleDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`absolute right-0 top-0 aspect-square h-auto w-auto px-8 py-4 text-center flex items-center ${
        isDarkMode ? "dark:bg-gray-800 dark:text-white" : "light:bg-white light:text-gray-800"
      }`}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} color="yellow" />
    </div>
  );
};

export default ToggleDarkMode;