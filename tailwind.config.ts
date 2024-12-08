import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Coolors.co Palette
        my_color_1: "#F8F9FA",
        my_color_2: "#E9ECEF",
        my_color_3: "#DEE2E6",
        my_color_4: "#CED4DA",
        my_color_5: "#ADB5BD",
        my_color_6: "#6C757D",
        my_color_7: "#495057",
        my_color_8: "#343A40",
        my_color_9: "#212529",
        
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
