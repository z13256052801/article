import DefaultTheme from "vitepress/theme";
import "ranui";
import "./styles/index.scss";
import "./styles/vars.scss";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {},
};
