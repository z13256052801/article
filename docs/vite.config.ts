import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";
import flexSearchIndexOptions from "flexsearch";

//default options
var options = {
  ...flexSearchIndexOptions,
  previewLength: 62, //搜索结果预览长度
  buttonLabel: "搜索",
  placeholder: "搜索文档",
  allow: [],
  ignore: [],
};

export default defineConfig({
  plugins: [SearchPlugin(options)],
});
