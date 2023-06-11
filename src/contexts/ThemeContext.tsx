// contexts/ThemeContext.tsx
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type ThemeContextProps = { theme: Theme; toggleTheme: () => void };

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null;
    localTheme && setTheme(localTheme);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
