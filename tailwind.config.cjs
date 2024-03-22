/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const { blablo } = require("./scripts/blablo.ts");

const mdTheme = require("./src/stylesheets/md-theme-v2.json");

const logHeader = "[tailwind-css:config]".cyan;
blablo.log(logHeader, "loading config").finish();

module.exports = {
  corePlugins: {
    animation: true,
    translate: true,
  },
  content: {
    files: ["./src/**/*.{html,js,ts,tsx,hbs}"],
  },
  theme: {
    extend: {
      colors: mdTheme.colors,
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ],
  prefix: "",
};
