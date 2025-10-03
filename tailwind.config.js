/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        text: "var(--text)",
        muted: "var(--muted)",
        brand: "var(--brand)",
        "brand-600": "var(--brand-600)",
        "brand-700": "var(--brand-700)",
        accent: "var(--accent)",
        glass: "var(--glass-bg)",
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        xl: "24px",
        '2xl': "32px",
        '3xl': "40px",
      },
      boxShadow: {
        glass: "var(--glass-shadow)",
      },
      backgroundImage: {
        sunset: "radial-gradient(circle at 20% 20%, rgba(233, 196, 106, 0.3), transparent 55%), radial-gradient(circle at 80% 10%, rgba(143, 212, 255, 0.25), transparent 60%), linear-gradient(180deg, rgba(12, 13, 16, 0.7), rgba(12, 13, 16, 0.95))",
        gold: "linear-gradient(135deg,#E8C88A 0%, #C7A26C 35%, #6B5232 100%)",
        ember: "radial-gradient(circle at 0% 0%, rgba(192, 120, 57, 0.45), transparent 55%), radial-gradient(circle at 80% 80%, rgba(143, 212, 255, 0.35), transparent 60%), linear-gradient(180deg, rgba(18, 19, 24, 0.85), rgba(12, 13, 16, 0.95))",
      },
    },
  },
  plugins: [],
};
