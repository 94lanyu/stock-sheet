import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/StockSheet/",

  lang: "zh-TW",
  title: "全自動股票管理表",
  description: "全自動股票管理表介紹與說明",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
