module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "babel-plugin-module-resolver",
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".js", ".ts", ".tsx", ".json"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@screens": "./src/screens",
          },
        },
      ],
    ],
  };
};
