import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Linen / sage / clay — modern craftsman palette
        base: {
          DEFAULT: "#F2EFE8", // linen (page bg)
          raised: "#FBF7EE",  // paper (elevated cards)
          subtle: "#E8E2D2",  // sand (tags / chips)
          border: "#D4CFBE",  // driftwood
        },
        accent: {
          DEFAULT: "#6B7F5C", // sage
          dim: "#556548",
          glow: "rgba(107, 127, 92, 0.18)",
        },
        clay: {
          DEFAULT: "#C9622C",
          dim: "#A5501F",
        },
        text: {
          primary: "#1F1D17", // walnut
          body: "#3D3A30",
          muted: "#6B6859",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "paper-grain":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 0.12  0 0 0 0 0.10  0 0 0 0 0.08  0 0 0 0.5 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) forwards",
        "fade-in": "fadeIn 0.9s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      boxShadow: {
        card: "0 1px 2px rgba(31, 29, 23, 0.04), 0 8px 24px rgba(31, 29, 23, 0.06)",
        "card-hover":
          "0 1px 2px rgba(31, 29, 23, 0.06), 0 16px 40px rgba(107, 127, 92, 0.18)",
        polaroid:
          "0 2px 4px rgba(31, 29, 23, 0.08), 0 20px 50px rgba(31, 29, 23, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
