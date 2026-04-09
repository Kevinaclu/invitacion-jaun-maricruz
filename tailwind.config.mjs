/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      greatVibes: ["'great vibes'", "cursive"],
      playfair: ["'Playfair Display Variable'", "serif"],
      raleway: ["'Raleway Variable'", "sans-serif"],
      cormorant: ["'Cormorant Garamond Variable'", "serif"],
    },
    extend: {
      colors: {
        "wedding-primary": "var(--color-primary)",
        "wedding-primary-light": "var(--color-primary-light)",
        "wedding-primary-dark": "var(--color-primary-dark)",
        "wedding-accent": "var(--color-accent)",
        "wedding-bg": "var(--color-bg-warm)",
        "wedding-text": "var(--color-text-dark)",
        "wedding-text-muted": "var(--color-text-muted)",
      },
      boxShadow: {
        "inner-hero-lg": "inset 0px 0px 90px 80px rgba(0,0,0,0.75)",
      },
      animation: {
        "rotate-out": "rotate-out 1s ease-out both",
        "scale-pulse": "scale-pulse 2s ease-in-out infinite",
        "fade-up": "fade-up 1s ease-out both",
        "fade-in": "fade-in 1.2s ease-out both",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "draw-line": "draw-line 1.5s ease-out both",
      },
      keyframes: {
        "scale-pulse": {
          "0%, 100%": {
            transform: "translate(-50%,-50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%,-50%) scale(1.15)",
          },
        },
        "rotate-out": {
          "0%": {
            transform: "translate(-50%, -50%) rotate(0deg)",
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translate(-50%, -50%) rotate(360deg) scale(0)",
          },
        },
        "fade-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "shimmer": {
          "0%, 100%": {
            "box-shadow":
              "0 0 20px rgba(212, 168, 67, 0.3), 0 0 40px rgba(212, 168, 67, 0.1), inset 0 0 20px rgba(212, 168, 67, 0.15)",
          },
          "50%": {
            "box-shadow":
              "0 0 30px rgba(212, 168, 67, 0.5), 0 0 60px rgba(212, 168, 67, 0.2), inset 0 0 30px rgba(212, 168, 67, 0.25)",
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "draw-line": {
          "0%": { width: "0px" },
          "100%": { width: "8rem" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-motion"), require("tailwindcss-intersect")],
};
