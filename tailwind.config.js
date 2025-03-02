/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          funky: ["Poppins", "sans-serif"], // Install Poppins for a funky look
        },
        colors: {
          primary: "#ff5733", // Vibrant orange
          dark: "#121212",
          accent: "#4CAF50", // Neon green
        },
        boxShadow: {
          funky: "0px 10px 30px rgba(255, 87, 51, 0.3)",
        },
      },
    },
    plugins: [],
  };
  