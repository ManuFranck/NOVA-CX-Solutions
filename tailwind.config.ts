import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: { soft: "0 12px 40px rgba(0,0,0,0.25)" },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(1000px circle at 20% 10%, rgba(255,255,255,0.10), transparent 40%), radial-gradient(900px circle at 80% 10%, rgba(255,255,255,0.08), transparent 45%), radial-gradient(800px circle at 50% 100%, rgba(255,255,255,0.06), transparent 50%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
