import { defineConfig } from "vitepress";

const BASE_PATH = "./";

export default defineConfig({
  title: "技术站 - ZLG",
  description: "ZhangLigang",
  base: BASE_PATH,
  lastUpdated: true,
  locales: {
    root: { label: "简体中文", lang: "zh-CN" },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => {
          return tag.startsWith("r-");
        },
      },
    },
  },
  head: [
    ["link", { rel: "icon", href: `${BASE_PATH}favicon.ico` }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { name: "theme-color", content: "#646cff" }],
    [
      "meta",
      { httpEquiv: "Permissions-Policy", content: "interest-cohort=()" },
    ],
  ],
  themeConfig: {
    logo: "/home.svg",
    nav: [
      { text: "首页", link: "/" },
      { text: "函数", link: "/src/common_tools/method/" },
      { text: "其它", link: "/src/other/" },
      //   { text: "组件", link: "/src/ranui/" },
      //   { text: "璀璨", link: "/src/article/designMode.md" },
    ],
    socialLinks: [{ icon: "github", link: "" }],
    // footer: {
    //   message: "Released ZhangLigang the MIT License.",
    //   //   copyright: "Copyright © 2022-11-11",
    // },
    // algolia: {
    //   appId: "RDX0Y4AQW1", // 需要替换
    //   apiKey: "c7b6e28f95335eddc66c5a1b54ad9834", // 需要替换
    //   indexName: "chaxus_ran", // 需要替换
    //   placeholder: "search",
    // },
    sidebar: {
      "/src/common_tools/": [
        {
          text: "通用函数",
          items: [
            { text: "截取 url 参数", link: "/src/common_tools/method/" },
            {
              text: "封装 Promise.allSettled()",
              link: "/src/common_tools/method/allSettled",
            },
            { text: "时间格式化", link: "/src/common_tools/method/timeFormat" },
            {
              text: "字符串大小写转换",
              link: "/src/common_tools/method/changeCase",
            },
          ],
        },
        {
          text: "文件操作",
          items: [
            { text: "监听文件是否改变", link: "/src/common_tools/file/" },
          ],
        },
        {
          text: "排序算法",
          items: [
            { text: "概览", link: "/src/common_tools/sort/" },
            { text: "冒泡排序", link: "/src/common_tools/sort/bubble/" },
            { text: "选择排序", link: "/src/common_tools/sort/select/" },
            { text: "插入排序", link: "/src/common_tools/sort/insert/" },
            { text: "希尔排序", link: "/src/common_tools/sort/shell/" },
            { text: "归并排序", link: "/src/common_tools/sort/merge/" },
            { text: "快速排序", link: "/src/common_tools/sort/quick/" },
            { text: "堆排序", link: "/src/common_tools/sort/heap/" },
            { text: "计数排序", link: "/src/common_tools/sort/count/" },
            { text: "桶排序", link: "/src/common_tools/sort/bucket/" },
            { text: "基数排序", link: "/src/common_tools/sort/radix/" },
          ],
        },
      ],
      "/src/other/": [
        {
          text: "开发技巧",
          items: [
            { text: "JS", link: "/src/other/" },
            { text: "CSS", link: "/src/other/css" },
            { text: "yarn的安装和使用", link: "/src/other/yarn" },
          ],
        },
      ],
      "/src/ranui/": [
        {
          text: "Overview 总览",
          link: "/src/ranui/",
        },
        {
          text: "通用",
          items: [
            { text: "Button 按钮", link: "/src/ranui/button/" },
            { text: "Icon 图标", link: "/src/ranui/icon/" },
          ],
        },
        {
          text: "数据展示",
          items: [
            { text: "Image 图片", link: "/src/ranui/image/" },
            { text: "Tabs 标签页", link: "/src/ranui/tabs/" },
            { text: "Preview 预览", link: "/src/ranui/preview/" },
          ],
        },
        {
          text: "数据录入",
          items: [{ text: "Input 输入框", link: "/src/ranui/input/" }],
        },
        {
          text: "反馈",
          items: [
            { text: "Message 全局提示", link: "/src/ranui/message/" },
            { text: "Skeleton 骨架屏", link: "/src/ranui/skeleton/" },
            // { text: 'Modal 对话框', link: '/src/ranui/modal/' },
          ],
        },
      ],
      "/src/article/": [
        {
          items: [
            { text: "23 种经典设计模式", link: "/src/article/designMode.md" },
            {
              text: "函数式编程",
              link: "/src/article/functionalProgramming.md",
            },
          ],
        },
      ],
    },
  },
});
