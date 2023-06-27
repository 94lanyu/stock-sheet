import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/": [
        {
            // 功能與分頁的順序無法調整
            text: "指南",
            icon: "lightbulb",
            prefix: "guide/",
            link: "guide/",
            children: "structure",
        },
        // {
        //     // 自訂功能與分頁的順序
        //     text: "指南",
        //     icon: "lightbulb",
        //     prefix: "guide/",
        //     link: "guide/",
        //     children: [
        //         "",
        //         {
        //             text: "功能",
        //             icon: "lightbulb",
        //             prefix: "feature/",
        //             collapsible: true,
        //             children: "structure",
        //         },
        //         {
        //             text: "分頁",
        //             icon: "lightbulb",
        //             prefix: "sheets/",
        //             collapsible: true,
        //             children: "structure",
        //         },
        //     ],
        // },
        {
            text: "案例",
            icon: "laptop-code",
            prefix: "demo/",
            link: "demo/",
            children: "structure",
        },
        "slides",
    ],
});
