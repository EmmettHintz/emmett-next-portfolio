import { useEffect, useState } from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";

const DarkModeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    // Component did mount
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  // Avoid rendering the component on the server
  if (!mounted) {
    return null;
  }

  return (
    <button
      className="absolute right-4 top-4 flex h-12 w-12  items-center justify-center rounded border border-gray-800 bg-white dark:border-gray-400 dark:bg-gray-800 sm:right-6 sm:top-6 sm:h-16 sm:w-16"
      onClick={toggleTheme}
    >
      {isDark ? (
        <FontAwesomeIcon icon={faSun} className="h-6 w-6 text-yellow-500" />
      ) : (
        <FontAwesomeIcon icon={faMoon} className="h-6 w-6 text-gray-800" />
      )}
    </button>
  );
};

export default DarkModeToggle;
