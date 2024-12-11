import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
    hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

    author: {
        name: "懶魚",
        url: "https://mrhope.site",
    },

    iconAssets: "fontawesome-with-brands",

    // logo: "/logo.svg",

    // repo: "vuepress-theme-hope/vuepress-theme-hope",

    docsDir: "src",

    // navbar
    navbar,

    // sidebar
    sidebar,

    // footer: "默認頁尾",

    // displayFooter: true,

    encrypt: {
        config: {
            "/demo/encrypt.html": ["1234"],
        },
    },

    // page meta
    // metaLocales: {
    //   editLink: "在 GitHub 上编辑此页",
    // },

    blog: {
        name: '懶魚',
        avatar: "/images/懶魚大頭貼.jpg",
        roundAvatar: true, // 頭像裁剪成圓形
        description: '懶惰是我前進的動力', // 介紹自己的一句話 or 座右銘
        intro: '/Contact', // 個人介紹頁面的 path
        medias: {Gmail:'mailto:94lanyu@gmail.com',Facebook:'https://www.facebook.com/kevin.lazy.fish'},
        timeline: '由此上而下',
    },

    plugins: {
        // You should generate and use your own comment service
        // comment: {
        //   provider: "Giscus",
        //   repo: "vuepress-theme-hope/giscus-discussions",
        //   repoId: "R_kgDOG_Pt2A",
        //   category: "Announcements",
        //   categoryId: "DIC_kwDOG_Pt2M4COD69",
        // },
        blog:  { // 文章列表
            // autoExcerpt: true, // 自動摘要 > 取自 description >> excerptLength (blog.autoExcerpt 移動至 plugins.blog.excerptLength)
            filter: ({ filePathRelative }) => // 過濾只顯示在某個路徑下的文章
                filePathRelative ? filePathRelative.startsWith("fqa/") : false,
            article: 'fqa', // 修改預設路徑
        },

        seo: {
            customHead: head => {
                head.push(
                    [
                        "script",
                        {async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-RY2H2KJXY8"},
                    ],
                    [
                        "script",
                        {},
                        `
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                          gtag('config', 'G-RY2H2KJXY8');
                        `,
                    ]
                );
            }
        },

        // All features are enabled for demo, only preserve features you need here
        mdEnhance: {
            align: true, // 自定義對齊-可置中(center)或置右對齊(right),beta.66 不能使用
            attrs: true,
            chart: true,
            codetabs: true,
            demo: true,
            echarts: true,
            figure: true,
            flowchart: true,
            gfm: true,
            imgLazyload: true,
            imgSize: true,
            include: true, // 引用其他文件內容,beta.66 不能使用
            katex: true,
            mark: true, // ==黃底強調==,
            mermaid: true,
            playground: {
                presets: ["ts", "vue"],
            },
            presentation: ["highlight", "math", "search", "notes", "zoom"],
            stylize: [
                {
                    matcher: "台股訂閱版",
                    replacer: ({ tag }) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: { text: "台股訂閱版" },
                                content: "",
                            };
                    },
                },
                {
                    matcher: "Recommended",
                    replacer: ({ tag }) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: { type: "tip" },
                                content: "Recommended",
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            tabs: true,
            vPre: true,
            vuePlayground: true,
        },

        // uncomment these if you want a pwa
        // pwa: {
        //   favicon: "/favicon.ico",
        //   cacheHTML: true,
        //   cachePic: true,
        //   appendBase: true,
        //   apple: {
        //     icon: "/assets/icon/apple-icon-152.png",
        //     statusBarColor: "black",
        //   },
        //   msTile: {
        //     image: "/assets/icon/ms-icon-144.png",
        //     color: "#ffffff",
        //   },
        //   manifest: {
        //     icons: [
        //       {
        //         src: "/assets/icon/chrome-mask-512.png",
        //         sizes: "512x512",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-mask-192.png",
        //         sizes: "192x192",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-512.png",
        //         sizes: "512x512",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-192.png",
        //         sizes: "192x192",
        //         type: "image/png",
        //       },
        //     ],
        //     shortcuts: [
        //       {
        //         name: "Demo",
        //         short_name: "Demo",
        //         url: "/demo/",
        //         icons: [
        //           {
        //             src: "/assets/icon/guide-maskable.png",
        //             sizes: "192x192",
        //             purpose: "maskable",
        //             type: "image/png",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        // },
    },
});
