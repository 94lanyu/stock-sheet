import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/guide/": [
        // {
        //     // 功能與分頁的順序透過 Front matter YAML 的參數 order: 2 來調整
        //     text: "指南",
        //     icon: "lightbulb",
        //     prefix: "",
        //     link: "guide/",
        //     children: "structure",
        // },
        {
            // 自訂功能與分頁的順序
            text: "指南",
            icon: "lightbulb",
            prefix: "",
            link: "guide/",
            children: [
                "",
                {
                    text: "功能",
                    icon: "book",
                    prefix: "feature/",
                    collapsible: true,
                    children: "structure",
                },
                {
                    text: "分頁",
                    icon: "copy",
                    prefix: "sheets/",
                    collapsible: true,
                    children: "structure",
                },
            ],
        },
        {
            text: "版本",
            icon: "file-pen",
            prefix: "version/",
            collapsible: true,
            children: "structure",
        },
        // {
        //     text: "案例",
        //     icon: "laptop-code",
        //     prefix: "demo/",
        //     link: "demo/",
        //     children: "structure",
        // },
        // "slides", // 幻燈片
    ],
});
