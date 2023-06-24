---
home: true
icon: home
title: 自動化股票記帳
description: 讓你「懶到極致」的股票管理表 - 打開試算表即自動更新股價和各種損益圖表，享受多種自動化功能，輕鬆管理股票。
#heroImage: /logo.svg
bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
    background-attachment: fixed
heroText: 全自動股票管理表
tagline: 只需做好交易紀錄，其餘的都幫你搞定～✨
actions:
    -   text: 免費試用 🧭
        link: /StockPortfolioDocs/QuickStart/介紹.md#各版本預覽連結
        type: primary
    -   text: 使用指南 💡
        link: /StockPortfolioDocs/QuickStart/第一次使用.md
        type: secondary
    -   text: 試算表預覽 🪀
        link: /StockPortfolioDocs/QuickStart/第一次使用.md


highlights:
    -   header: 簡單 3 步驟立即使用
        description: 3 分鐘即可建立屬於自己的股票管理試算表
        image: /assets/image/box.svg
        bgImage: https://theme-hope-assets.vuejs.press/bg/3-light.svg
        bgImageDark: https://theme-hope-assets.vuejs.press/bg/3-dark.svg
        highlights:
#            -   title: 运行 <code>pnpm create vuepress-theme-hope hope-project</code> 以创建一个新的主题项目。
            -   title: 步驟1. 填寫免費試用表單
                link: https://docs.google.com/spreadsheets/d/
            -   title: 步驟2. 在 Gmail 信箱收信，透過信件內連結複製屬於自己的試算表
            -   title: 步驟3. 啟用並授權

    -   header: 讓這些功能替你輕鬆管理股票
        #        image: /assets/image/markdown.svg
        image: https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg
        bgImage: https://theme-hope-assets.vuejs.press/bg/2-light.svg
        bgImageDark: https://theme-hope-assets.vuejs.press/bg/2-dark.svg
        bgImageStyle:
            background-repeat: repeat
            background-size: initial
        features:
            -   title: 自動更新股票成交價
                icon: cloud-arrow-down
                details: 開啟試算表後會自動更新股票最新成交價(非即時)，並以新的成交價做各種後續計算
            -   title: 多種視覺化圖表
                icon: chart-column
                details: 輕鬆享受多種圖表化的數據，持股比例、賺賠一目了然，且無須動手，當股票價格有變動時圖表會自動更新
            -   title: 自動化計算
                icon: calculator
                details: 自動計算多項數據，交易成本(交易稅、手續費)、各項報酬率(已實現損益、未實現損益)等等
            -   title: 一鍵更新
                icon: arrow-pointer
                details: 操作簡單，每次紀錄完新的交易資料後，只需按一次「更新交易紀錄」按鈕，便可更新各項數據及圖表
            -   title: 輕鬆管理多家券商
                icon: landmark
                details: 靈活的設計，可以同時管理不同的券商並依照券商不同的折讓手續費各別設定，還能看各券商.分類的占比圖
            -   title: 自動記錄市值變化
                icon: chart-line
                details: 每周五盤後，會將當下的成本、市值、未實現損益等記錄下來。當時間拉長，可以觀察到自己投資的曲線變化！
            -   title: 多種占比圖
                icon: chart-pie
                details: 持股 / 產業 / 現金 / 券商 or 分類
            -   title: 切換資料範圍的區間
                icon: timeline
                details: 可設定儀表板的資料範圍區間，方便查詢過去的績效損益

    -   header: 分頁
        description: 強大的功能與多個分頁能滿足大多數的使用者
        image: /assets/image/layout.svg
        bgImage: https://theme-hope-assets.vuejs.press/bg/5-light.svg
        bgImageDark: https://theme-hope-assets.vuejs.press/bg/5-dark.svg
        highlights:
            -   title: 儀表板
                icon: object-group
                details: 股票管理表的主頁，包含多種圖表及數據，而且全都自動更新
                link: https://theme-hope.vuejs.press/zh/guide/layout/

            -   title: 交易紀錄
                icon: clipboard-list
                details: 紀錄的主要頁面，分為手動輸入區與自動生成區
                link: https://theme-hope.vuejs.press/zh/guide/interface/darkmode.html

            -   title: 現金股利
                icon: money-bill
                details: 專為現金股利設計的頁面，包含紀錄與報酬率的計算，也可設定存股目標
                link: https://theme-hope.vuejs.press/zh/guide/interface/theme-color.html

            -   title: 觀察
                icon: person-chalkboard
                details: 可將觀察中的股票名單記錄在這裡，價格會有醒目的顏色提醒
                link: https://theme-hope.vuejs.press/zh/guide/layout/slides

            -   title: 更多
                icon: ellipsis
                details: 統計、券商與分類、股票代號、自動記錄
                link: https://theme-hope.vuejs.press/zh/guide/interface/others.html

    -   header: 新功能
        image: /assets/image/features.svg
        bgImage: https://theme-hope-assets.vuejs.press/bg/1-light.svg
        bgImageDark: https://theme-hope-assets.vuejs.press/bg/1-dark.svg
        features:
            -   title: 更全面的儀表板
                icon: desktop
                details: 配合 Waline 来开启阅读量统计与评论支持
                link: https://theme-hope.vuejs.press/zh/guide/feature/comment.html

            -   title: 圖表的下拉選單
                icon: caret-down
                details: 为你的文章添加作者、写作日期、预计阅读时间、字数统计等信息
                link: https://theme-hope.vuejs.press/zh/guide/feature/page-info.html

            -   title: 資金比例
                icon: money-bill-trend-up
                details: 投入資金與現金的比例，也將現金新增至自動記錄的走勢圖，方便觀察
                link: https://theme-hope.vuejs.press/zh/guide/feature/encrypt.html

            -   title: 新的取價結構
                icon: search
                details: 支持 docsearch 和基于客户端的搜索
                link: https://theme-hope.vuejs.press/zh/guide/feature/search.html

            -   title: 更精準的計算
                icon: dollar-sign
                details: 新增 1 元價差的設定
                link: https://theme-hope.vuejs.press/zh/guide/feature/copy-code.html

            -   title: 推薦機制
                icon: users
                details: 像相册一样允许你浏览、缩放并分享你的页面图片
                link: https://theme-hope.vuejs.press/zh/guide/feature/photo-swipe.html

    -   header: 其他版本
        description: 通过主题创建个人博客
        image: /assets/image/blog.svg
        bgImage: https://theme-hope-assets.vuejs.press/bg/5-light.svg
        bgImageDark: https://theme-hope-assets.vuejs.press/bg/5-dark.svg
        highlights:
            -   title: 博客功能
                icon: blog
                details: 通过文章的日期、标签和分类展示文章
                link: https://theme-hope.vuejs.press/zh/guide/blog/intro.html

            -   title: 博客主页
                icon: home
                details: 全新播客主页
                link: https://theme-hope.vuejs.press/zh/guide/blog/home.html

            -   title: 博主信息
                icon: home
                details: 自定义名称、头像、座右铭和社交媒体链接
                link: https://theme-hope.vuejs.press/zh/guide/blog/blogger.html

            -   title: 时间线
                icon: home
                details: 在时间线中浏览和通读博文
                link: https://theme-hope.vuejs.press/zh/guide/blog/timeline.html

    -   header: 客製化
        description: 增强站点与用户体验的高级功能
        image: /assets/image/advanced.svg
        bgImage: https://theme-hope-assets.vuejs.press/bg/4-light.svg
        bgImageDark: https://theme-hope-assets.vuejs.press/bg/4-dark.svg
        highlights:
            -   title: SEO 增强
                icon: dumbbell
                details: 将最终生成的网页针对搜索引擎进行优化。
                link: https://theme-hope.vuejs.press/zh/guide/advanced/seo.html

            -   title: Sitemap
                icon: sitemap
                details: 自动为你的网站生成 Sitemap
                link: https://theme-hope.vuejs.press/zh/guide/advanced/sitemap.html

            -   title: Feed 支持
                icon: rss
                details: 生成你的 Feed，并通知你的用户订阅它
                link: https://theme-hope.vuejs.press/zh/guide/advanced/feed.html

            -   title: PWA 支持
                icon: mobile-screen
                details: 让你的网站更像一个 APP
                link: https://theme-hope.vuejs.press/zh/guide/advanced/pwa.html

copyright: false
footer: 使用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a> 主题 | MIT 协议, 版权所有 © 2019-present Mr.Hope
---

这是项目主页的案例。你可以在这里放置你的主体内容。

想要使用此布局，你需要在页面 front matter 中设置 `home: true`。

配置项的相关说明详见 [项目主页配置](https://theme-hope.vuejs.press/zh/guide/layout/home/)。
