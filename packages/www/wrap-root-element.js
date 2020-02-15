const React = require("react");
const { ThemeProvider } = require("theme-ui");
const { deep } = require("@theme-ui/presets");

const token = {
  ...deep,
  sizes: { container: 1024 }
};
module.exports = ({ element }) => (
  <ThemeProvider theme={token}>{element}</ThemeProvider>
);
