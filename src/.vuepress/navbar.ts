import { navbar } from "vuepress-theme-hope";

export default navbar([
    {
        text: "首頁",
        icon: "home",
        link: "/",
    },
    {
        text: "指南",
        icon: "lightbulb",
        prefix: "/guide/",
        children: [
            "",
            {
                text: "功能",
                prefix: "feature/",
                children: [
                    "",
                    "多種視覺化圖表/",
                    "自動更新股票成交價/",
                    "自動化計算/",
                    "自動記錄投資變化/",
                    "輕鬆管理多家券商/",
                    "一鍵更新/",
                    "多種百分比圖/",
                    "切換資料範圍的區間/",
                ],
            },
            {
                text: "頁面",
                prefix: "sheets/",
                children: [
                    "",
                    "儀表板/",
                    "交易紀錄/",
                    "現金股利/",
                    "觀察/",
                    "持股與歷史/",
                    "統計/",
                    "券商與分類/",
                    "股票代號/",
                    "自動記錄/",
                    "融資券/",
                ],
            },
            // {
            //     text: "分頁",
            //     icon: "lightbulb",
            //     prefix: "sheets/",
            //     children: ["分頁", { text: "...", icon: "ellipsis", link: "" }],
            // },
        ],
    },
    {
        text: "常見問題",
        icon: "circle-question",
        link: "/",
    },
    {
        text: "懶魚",
        icon: "user-tie",
        link: "/",
    },
    {
        text: "贊助",
        icon: "sack-dollar",
        link: "/",
    },
]);
