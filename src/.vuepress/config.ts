import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/StockSheet/",

  lang: "zh-TW",
  title: "全自動股票管理表",
  description: "投資股票想整理投資績效卻覺得麻煩?只需做好交易紀錄，其餘的全自動股票管理表都幫你搞定",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
