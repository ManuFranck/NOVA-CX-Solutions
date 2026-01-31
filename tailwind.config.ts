
import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { brand: "#10b981" }
    }
  },
  plugins: []
} satisfies Config;
