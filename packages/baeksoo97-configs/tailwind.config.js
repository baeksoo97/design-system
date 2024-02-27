module.exports = {
    content: [
      "./stories/**/*.{js,ts,jsx,tsx}",
      "../../packages/baeksoo97-ui/src/**/*.{js,ts,jsx,tsx}", // Add the ui package
      "../../packages/baeksoo97-ui-shadcn/src/**/*.{js,ts,jsx,tsx}", // Add the ui package
    ],
    theme: {
      extend: {
        colors: {
          // test
          primary: "#ff6347",
          secondary: "#ff8c00",
          accent: "#ffd700",
        },
      },
    },
  };
