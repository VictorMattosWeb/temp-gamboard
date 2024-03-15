import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/constants/descriptors.tsx",
    "./src/constants/container.tsx",
    "./src/constants/reabilitadora.tsx",
    "./src/constants/estetica.tsx",
    "./src/constants/localizacoes.tsx"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      color: {
        'button': {
          'black': '#000000'
          
      },
      
      },
    },
  },
  plugins: [],
};
export default config;
