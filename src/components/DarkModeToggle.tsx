import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from 'next-themes'

const DarkModeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      className="absolute right-4 top-4 h-12 w-12 rounded  border border-gray-800 bg-white dark:border-gray-400 dark:bg-gray-800 flex items-center justify-center sm:right-6 sm:top-6 sm:h-16 sm:w-16"
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
