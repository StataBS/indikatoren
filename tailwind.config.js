import plugin from "tailwindcss/plugin";
import COLORS from "./tailwind/colors";

const fontSize = {
  "9xl": ["128px", "128px"],
  "8xl": ["96px", "96px"],
  "7xl": ["72px", "72px"],
  "6xl": ["60px", "60px"],
  "5xl": ["48px", "48px"],
  "4xl": ["36px", "40px"],
  "3xl": ["30px", "34px"],
  "2xl": ["24px", "32px"],
  xl: ["20px", "28px"],
  lg: ["18px", "24px"],
  base: ["16px", "22px"],
  sm: ["14px", "20px"],
  xs: ["12px", "18px"],
};

const colors = Object.keys(COLORS).reduce((acc, color) => {
  const shades = COLORS[color];
  Object.entries(shades).forEach(([shade, hex]) => {
    acc[`${color}-${shade}`] = hex;
  });
  return acc;
}, {});

export default {
  content: ["./*.html", "./assets/js/*.js"],
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant(
        "mobile-only",
        "@media screen and (max-width: theme('screens.md'))"
      );
      addVariant("not-last", "&:not(:last-child)");
      addVariant("not-first", "&:not(:first-child)");
    }),
  ],
  safelist: ["h-0", "sbdocs", "group-hover:shadow-xl", "transition-shadow"],
  corePlugins: {
    textOpacity: false,
    container: false,
  },
  theme: {
    screens: {
      md: "768px",
      lg: "1024px",
      xl: "1210px",
      xxl: "2050px",
      xxxl: "3200px",
    },
    spacing: {
      220: "220px",
      140: "140px",
      120: "120px",
      100: "100px",
      90: "90px",
      80: "80px",
      70: "70px",
      60: "60px",
      50: "50px",
      40: "40px",
      30: "30px",
      25: "25px",
      20: "20px",
      15: "15px",
      10: "10px",
      5: "5px",
      3: "3px",
      2: "2px",
      1: "1px",
      0: "0px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
    },
    maxWidth: {
      reduced: "970px",
      prose: "836px",
      hero: "560px",
    },
    lineHeight: {
      none: 1,
      tight: 1.2,
      snug: 1.3,
      normal: 1.4,
    },
    fontSize,
    fontFamily: {
      sans: ["Inter", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
    borderRadius: {
      none: "0px",
      full: "9999px",
      large: "10px",
      DEFAULT: "4px",
    },
    colors: {
      white: "#ffffff",
      current: "currentColor",
      transparent: "transparent",
      body: "black",
      ...colors,
      primary: {
        50: "var(--color-primary-50)",
        100: "var(--color-primary-100)",
        200: "var(--color-primary-200)",
        300: "var(--color-primary-300)",
        400: "var(--color-primary-400)",
        500: "var(--color-primary-500)",
        600: "var(--color-primary-600)",
        700: "var(--color-primary-700)",
        800: "var(--color-primary-800)",
        900: "var(--color-primary-900)",
      },
    },
    extend: {
      gap: {
        DEFAULT: "20px",
      },
      transitionDuration: {
        250: "250ms",
      },
      boxShadow: {
        "purple-600": "0 0 10px 0 #9156B4",
      },
    },
  },
};
