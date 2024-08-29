const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      colors: {
        backgroundColor: "#FAFAFA",
        black: "#222222",
        grey: "#666666",
        blue: {
          500: "#3197D6",
          700: "#0073AA",
        },
        borderColor: "#EEEEEE",
        textColor: "#222222",
        "trans-white": "#FFFFFF14",
        contactUsBorder: "#3197D6",
        cBlue: "#3197D6",
        cGray: "#FAFAFA",
        cGrayBorder: "#EEEEEE",
        cPink: "#FF6C00",
      },
      width: {
        15: "60px",
        "8xl": "1420px",
        "70per": "70%",
        cartMobileImageWidth: "280px",
      },
      minWidth: {
        "8xl": "1420px",
      },
      maxWidth: {
        "8xl": "1420px",
        "479xl": "479px",
        cartImageWidth: "696px",
        cartMobileImageWidth: "280px",
      },
      height: {
        15: "60px",
        22: "90px",
        contactHeroHeight: "450px",
        contactMobileHeroHeight: "320px",
        contactMapHeight: "789px",
        carouHeroHeight: "800px",
        carouMobileHeroHeight: "420px",
        cartMobileImageHeight: "280px",
      },
      minHeight: {
        mapMinHeight: "600px",
        cartImageHeight: "696px",
        cartInnerImageHeight: "480px",
      },
      rotate: {
        270: "270deg",
      },
      fontSize: {
        "4xl": "46px",
      },
      backgroundImage: {
        "map-md": "url('/assets/imgs/map.png')",
        mobileMapMd: "url('/assets/imgs/mobileMap.png')",
        contactHero: "url('/assets/imgs/contact/hero.png')",
        mobileContactHero: "url('/assets/imgs/contact/mobileHero.png')",
        productHero: "url('/assets/imgs/products/hero.png')",
        mobileProductHero: "url('/assets/imgs/products/mobileHero.png')",
        contactMap: "url('/assets/imgs/contact/map.png')",
        aImage: "url('/assets/imgs/a.png')",
        bImage: "url('/assets/imgs/b.png')",
        cImage: "url('/assets/imgs/c.png')",
      },
    },
  },
  plugins: [],
};
