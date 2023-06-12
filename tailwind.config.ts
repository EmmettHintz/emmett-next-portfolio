import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-light': '#F5F5F5',
        'bg-dark': '#252A34',
        'text-light': '#001219',
        'text-dark': '#F5F5F5',
        
        'primary-heading': '#FC5185',
        'secondary-heading': '#3FC1C9',
        'tertiary-heading': '#faa307'
      },
    },
  },
  plugins: [],
} satisfies Config;
