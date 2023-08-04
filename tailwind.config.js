/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "sm": "640px",
        "md": "800px",
        "lg": "1024px",
        "xl": "1280px",
      },
      colors: {
        "marine-blue": "hsl(213, 96%, 18%)",
        "purplish-blue": "hsl(243, 100%, 62%)",
        "pastel-blue": "hsl(228, 100%, 84%)",
        "light-blue": "hsl(206, 94%, 87%)",
        "strawberry-red": "hsl(354, 84%, 57%)",
        "cool-gray": "hsl(231, 11%, 63%)",
        "light-gray": "hsl(229, 24%, 87%)",
        "magnolia-color": "hsl(217, 100%, 97%)",
        "alabaster-color": " hsl(231, 100%, 99%)",
        "white-color": "hsl(0, 0%, 100%)",
      },
      fontSize: {
        paragraph: "16px",
      },

      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
      backgroundImage: {
        desktop: "url('../src/assets/images/bg-sidebar-desktop.svg')",
        mobile: "url('../src/assets/images/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
}
