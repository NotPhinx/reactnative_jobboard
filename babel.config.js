module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [] // Add an empty array or provide valid plugins here
  };
};
