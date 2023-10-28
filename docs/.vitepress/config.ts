import { defineConfig } from 'vitepress'
// import { pagefindPlugin, chineseSearchOptimize } from 'vitepress-plugin-pagefind'

const BASE_PATH = '/article/'

export default defineConfig({
    title: 'Tech Blog',
    description: 'ZhangLigang',
    base: BASE_PATH,
    lastUpdated: true,
    locales: {
        root: { label: '简体中文', lang: 'zh-CN' },
    },
    markdown: {
        //代码块启用行号
        lineNumbers: true,
    },
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => {
                    return tag.startsWith('r-')
                },
            },
        },
    },
    // vite: {
    //     plugins: [
    //         pagefindPlugin({
    //             forceLanguage: 'zh-cn',
    //             customSearchQuery: chineseSearchOptimize,
    //             // customSearchQuery(input) {
    //             //   // 将搜索的每个中文单字两侧加上空格
    //             //   return input
    //             //     .replace(/[\u4e00-\u9fa5]/g, " $& ")
    //             //     .replace(/\s+/g, " ")
    //             //     .trim();
    //             // },
    //             btnPlaceholder: '搜索',
    //             placeholder: '搜索文档',
    //             emptyText: '空空如也',
    //             heading: '共: {{searchResult}} 条结果',
    //         }),
    //     ],
    // },
    head: [
        ['link', { rel: 'icon', href: `${BASE_PATH}favicon.ico` }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { name: 'theme-color', content: '#646cff' }],
        ['meta', { httpEquiv: 'Permissions-Policy', content: 'interest-cohort=()' }],
    ],
    themeConfig: {
        logo: '/orange.png',
        nav: [
            { text: '首页', link: '/' },
            { text: 'Vue', link: '/src/vue/vue2/index1' },
            { text: 'TypeScript', link: '/src/ts_collect/type_and_interface' },
            { text: '函数', link: '/src/common_tools/method/getUrlParam' },
            { text: '森罗万象', link: '/src/other/js' },
            //   { text: "璀璨", link: "/src/article/designMode.md" },
        ],
        socialLinks: [{ icon: 'github', link: '' }],
        // footer: {
        //   message: "Released ZhangLigang the MIT License.",
        //   //   copyright: "Copyright © 2022-11-11",
        // },
        algolia: {
            appId: 'M7JGB28KE8', // 需要替换
            apiKey: 'a24d9f06545724e2aea7feca3f3e0e53', // 需要替换
            indexName: 'VitePress 搜索', // 需要替换
            placeholder: '搜索',
        },
        outline: {
            level: 'deep', // 右侧大纲标题层级
            label: '目录', // 右侧大纲标题文本配置
        },
        // 文档页脚文本配置
        docFooter: {
            prev: '上一篇',
            next: '下一篇',
        },
        sidebar: {
            '/src/common_tools/': [
                {
                    text: '通用函数',
                    items: [
                        {
                            text: '截取 url 参数',
                            link: '/src/common_tools/method/getUrlParam',
                        },
                        {
                            text: '封装 Promise.allSettled()',
                            link: '/src/common_tools/method/allSettled',
                        },
                        {
                            text: '封装列表(hooks) - usePaging()',
                            link: '/src/common_tools/method/usePaging',
                        },
                        { text: '时间格式化', link: '/src/common_tools/method/timeFormat' },
                        {
                            text: '字符串大小写转换',
                            link: '/src/common_tools/method/changeCase',
                        },
                    ],
                },
                // {
                //   text: "文件操作",
                //   items: [
                //     {
                //       text: "监听文件是否改变",
                //       link: "/src/common_tools/method/file/",
                //     },
                //   ],
                // },
                {
                    text: '排序算法',
                    items: [
                        { text: '概览', link: '/src/common_tools/sort/' },
                        { text: '冒泡排序', link: '/src/common_tools/sort/bubble/' },
                        { text: '选择排序', link: '/src/common_tools/sort/select/' },
                        { text: '插入排序', link: '/src/common_tools/sort/insert/' },
                        { text: '希尔排序', link: '/src/common_tools/sort/shell/' },
                        { text: '归并排序', link: '/src/common_tools/sort/merge/' },
                        { text: '快速排序', link: '/src/common_tools/sort/quick/' },
                        { text: '堆排序', link: '/src/common_tools/sort/heap/' },
                        { text: '计数排序', link: '/src/common_tools/sort/count/' },
                        { text: '桶排序', link: '/src/common_tools/sort/bucket/' },
                        { text: '基数排序', link: '/src/common_tools/sort/radix/' },
                    ],
                },
            ],
            '/src/vue/': [
                {
                    text: '技术栈',
                    items: [
                        // { text: "Vue2", link: "/src/vue/vue2/index1" },
                        // { text: "Vue3", link: "/src/vue/vue3/ref_reactive" },
                        {
                            text: 'Vue2',
                            items: [
                                { text: 'Vue2生命周期', link: '/src/vue/vue2/index1' },
                                { text: 'Vue2组件通信', link: '/src/vue/vue2/communication' },
                            ],
                        },
                        {
                            text: 'Vue3',
                            items: [
                                { text: 'ref和reactive', link: '/src/vue/vue3/ref_reactive' },
                                { text: 'Vue3组件通信', link: '/src/vue/vue3/communication' },
                            ],
                        },
                        { text: 'Pinia', link: '/src/vue/pinia/pinia' },
                        { text: '五湖四海', link: '/src/vue/all_corners/all_corners' },
                    ],
                },
            ],
            '/src/ts_collect/': [
                {
                    text: 'TypeScript汇总',
                    items: [
                        {
                            text: 'type 与 interface 的区别',
                            link: '/src/ts_collect/type_and_interface',
                        },
                        {
                            text: '常见问题',
                            link: '/src/ts_collect/common_problem',
                        },
                    ],
                },
            ],
            '/src/other/': [
                {
                    text: '森罗万象',
                    items: [
                        { text: 'JS - 开发技巧', link: '/src/other/js' },
                        { text: 'CSS - 开发技巧', link: '/src/other/css' },
                        { text: 'yarn的安装和使用', link: '/src/other/yarn' },
                        // {
                        //     text: 'TS中type与interface的区别',
                        //     link: '/src/other/type_and_interface',
                        // },
                        { text: '其它', link: '/src/other/qita' },
                    ],
                },
            ],
            '/src/article/': [
                {
                    items: [
                        { text: '23 种经典设计模式', link: '/src/article/designMode.md' },
                        {
                            text: '函数式编程',
                            link: '/src/article/functionalProgramming.md',
                        },
                    ],
                },
            ],
        },
    },
})
