import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#FF6C00",
            },
            secondary: {
              DEFAULT: "#FF944D",
            },
            success: {
              DEFAULT: "#2563eb",
            },
            warning: {
              DEFAULT: "#e11d48",
            },
            danger: {
              DEFAULT: "#dc2626",
            },
          },
        },
        light: {
          colors: {
            primary: {
              DEFAULT: "#2563eb",
            },
            secondary: {
              DEFAULT: "#5b7bd7",
            },
            success: {
              DEFAULT: "#dc2626",
            },
            warning: {
              DEFAULT: "#a21caf",
            },
            danger: {
              DEFAULT: "#ec4899",
            },
          },
        },
      },
    }),
  ],
};
export default config;
