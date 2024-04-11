import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      tv: { max: "1920px" },
      mac: { max: "1440px" },
      desktop: { max: "1280px" },
      laptop: { max: "1024px" },
      tablet_md: { max: "900px" },
      tablet: { max: "768px" },
      small: { max: "640px" },
      mobile: { max: "430px" },
      final: { max: "375px" }
    },
    extend: {
      fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900"
      }
    },
    colors: {
      primary: "#DD222A",
      red: {
        100: "#890000"
      },
      blue: {
        100: "#38BDF8"
      },
      main: {
        100: "#1B1B1B",
        200: "#2B2B2B",
        300: "#F6F6F6",
        400: "#CCCCCC",
        900: "#7A7A7A "
      },
      white: {
        100: "#FFFFFF10",
        200: "#FFFFFF20",
        300: "#FFFFFF30",
        400: "#FFFFFF40",
        500: "#FFFFFF50",
        600: "#FFFFFF60",
        700: "#FFFFFF70",
        800: "#FFFFFF80",
        900: "#FFFFFF90",
        DEFAULT: "#FFFFFF"
      },
      black: {
        100: "#00000010",
        200: "#00000020",
        300: "#00000030",
        400: "#00000040",
        500: "#00000050",
        600: "#00000060",
        700: "#00000070",
        800: "#00000080",
        900: "#00000090",
        DEFAULT: "#000000"
      }
    },
    backgroundImage: {
      contactBanner: "url('/rehau-banner.png')"
    }
  },
  plugins: []
};
export default config;
