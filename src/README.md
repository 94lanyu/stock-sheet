---
home: true
icon: home
title: 自動化股票記帳
description: 讓你「懶到極致」的股票管理表 - 打開試算表即自動更新股價和各種損益圖表，享受多種自動化功能，輕鬆管理股票。
heroImage: /logo.svg
bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
    background-attachment: fixed
heroText: 全自動股票管理表
tagline: 只需做好交易紀錄，其餘的都幫你搞定～✨
actions:
    -   text: 使用指南 💡
        link: ./demo/
        type: primary
    -   text: 文档
        link: ./guide/

    -   text: 免費試用 🧭
        link: /StockProfolioDocs/QuickStart/介紹.md#各版本預覽連結
        type: primary
    -   text: 使用指南 💡
        link: /StockProfolioDocs/QuickStart/第一次使用.md
        type: secondary
    -   text: 試算表預覽 🪀
        link: /StockProfolioDocs/QuickStart/第一次使用.md


highlights:
    -   header: 簡單 3 步驟立即使用
        description: 3 分鐘即可建立屬於自己的試算表
        image: /assets/image/box.svg
        bgImage: https://theme-hope-assets.vuejs.press/bg/3-light.svg
        bgImageDark: https://theme-hope-assets.vuejs.press/bg/3-dark.svg
        highlights:
            #            -   title: 运行 <code>pnpm create vuepress-theme-hope hope-project</code> 以创建一个新的主题项目。
            #            -   title: 在已有项目根目录下运行 <code>pnpm create vuepress-theme-hope add .</code> 以在项目中添加主题。
            -   title: 步驟1. 填寫免費試用表單
                link: https://docs.google.com/spreadsheets/d/
            -   title: 步驟2. 在 Gmail 信箱收信，透過信件內連結複製屬於自己的試算表
            -   title: 步驟3. 啟用並授權

    -   header: 「全自動股票管理表中」可以享有以下功能
        description: 我们扩展了标准的 CommonMark 规范，为你添加了成吨功能。
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
                # icon: rotate
                details: 開啟試算表後會自動更新股票最新成交價(非即時)，並以新的成交價做各種後續計算。
            -   title: 多種視覺化圖表
                icon: chart-column
                # icon: chart-bar
                # icon: chart-pie
                details: 輕鬆享受多種圖表化的數據，持股比例、賺賠一目了然，且無須動手，當股票價格有變動時圖表會自動更新。
            -   title: 自動化計算
                icon: calculator
                details: 自動計算多項數據，交易成本(交易稅、手續費)、各項報酬率(已實現損益、未實現損益)等等
            -   title: 一鍵更新
                icon: arrow-pointer
                # icon: hand-pointer
                # icon: computer-mouse
                details: 操作簡單，每次紀錄完新的交易資料後，只需按一次「更新交易紀錄」按鈕，便可更新各項數據及圖表。
            -   title: 輕鬆管理多家券商
                icon: landmark
                # icon: building-columns
                details: 靈活的設計，可以同時管理不同的券商並依照券商不同的折讓手續費各別設定，還能看各券商/分類的占比圖。
            -   title: 自動記錄市值變化
                icon: chart-line
                # icon: arrow-trend-up
                details: 每周五盤後，會將當下的成本、市值、未實現損益等記錄下來。當時間拉長，可以觀察到自己投資的曲線變化，是付費版的其中一個大功能！
                
            -   title: 链接检查
                icon: clipboard-check
                details: 检查 Markdown 链接
                link: https://theme-hope.vuejs.press/zh/guide/markdown/others.html#link-check

            -   title: 自定义容器支持
                icon: box-archive
                details: 用样式装饰 Markdown 内容
                link: https://theme-hope.vuejs.press/zh/guide/markdown/container.html

            -   title: 选项卡
                icon: table-columns
                details: 使用选项卡对相似内容进行分组
                link: https://theme-hope.vuejs.press/zh/guide/markdown/tabs.html

            -   title: 代码组
                icon: code
                details: 使用选项卡对相似代码进行分组
                link: https://theme-hope.vuejs.press/zh/guide/markdown/code-tabs.html

            -   title: 自定义对齐支持
                icon: align-center
                details: 让你在 Markdown 中对段落进行对齐
                link: https://theme-hope.vuejs.press/zh/guide/markdown/align.html

            -   title: 自定义属性支持
                icon: code
                details: 让你为 Markdown 元素添加属性
                link: https://theme-hope.vuejs.press/zh/guide/markdown/attrs.html

            -   title: 上下角标支持
                icon: superscript
                details: 你的 Markdown 现在将支持上下角标
                link: https://theme-hope.vuejs.press/zh/guide/markdown/sup-sub.html

            -   title: 脚注
                icon: quote-left
                details: 你的 Markdown 现在将支持脚注
                link: https://theme-hope.vuejs.press/zh/guide/markdown/footnote.html

            -   title: 标记支持
                icon: highlighter
                details: 让你在 Markdown 中对词句进行标记
                link: https://theme-hope.vuejs.press/zh/guide/markdown/mark.html

            -   title: 任务列表
                icon: square-check
                details: 在 Markdown 中使用任务列表
                link: https://theme-hope.vuejs.press/zh/guide/markdown/tasklist.html

            -   title: 图片语法
                icon: image
                details: 使用改进的语法指定图片大小与颜色模式
                link: https://theme-hope.vuejs.press/zh/guide/markdown/image.html

            -   title: 卡片支持
                icon: square
                details: 在 Markdown 中展示卡片
                link: https://theme-hope.vuejs.press/zh/guide/markdown/card.html

            -   title: 图表支持
                icon: chart-simple
                details: 在 Markdown 中展示图表
                link: https://theme-hope.vuejs.press/zh/guide/markdown/chart.html

            -   title: 流程图支持
                icon: route
                details: 可以在 Markdown 中直接写出流程图
                link: https://theme-hope.vuejs.press/zh/guide/markdown/flowchart.html

            -   title: Mermaid 支持
                icon: chart-pie
                details: 可以在 Markdown 中添加 Mermaid 图例
                link: https://theme-hope.vuejs.press/zh/guide/markdown/mermaid.html

            -   title: Tex 支持
                icon: square-root-variable
                details: Markdown 现在也可以支持 Tex 语法以显示公式
                link: https://theme-hope.vuejs.press/zh/guide/markdown/tex.html

            -   title: 导入文件支持
                icon: fab fa-markdown
                details: 将你的文档分段，并在 Markdown 中导入
                link: https://theme-hope.vuejs.press/zh/guide/markdown/include.html

            -   title: 交互演示支持
                icon: code
                details: 你可以在 Markdown 中添加交互演示
                link: https://theme-hope.vuejs.press/zh/guide/markdown/playground.html

            -   title: Vue 交互演示支持
                icon: fab fa-vuejs
                details: 在交互演示中展示 Vue 组件
                link: https://theme-hope.vuejs.press/zh/guide/markdown/vue-playground.html

            -   title: 代码案例支持
                icon: laptop-code
                details: 你可以很方便的插入代码案例
                link: https://theme-hope.vuejs.press/zh/guide/markdown/demo/

            -   title: 幻灯片支持
                icon: person-chalkboard
                details: 你可以直接在 Markdown 中插入幻灯片
                link: https://theme-hope.vuejs.press/zh/guide/markdown/presentation/

    -   header: 布局
        description: 一个带有完整无障碍支持的响应式布局。
        image: /assets/image/layout.svg
        bgImage: https://theme-hope-assets.vuejs.press/bg/5-light.svg
        bgImageDark: https://theme-hope-assets.vuejs.press/bg/5-dark.svg
        highlights:
            -   title: 布局增强
                icon: object-group
                details: 添加路径导航、页脚、改进的导航栏、改进的页面导航等。
                link: https://theme-hope.vuejs.press/zh/guide/layout/

            -   title: 深色模式
                icon: circle-half-stroke
                details: 可以自由切换浅色模式与深色模式
                link: https://theme-hope.vuejs.press/zh/guide/interface/darkmode.html

            -   title: 主题色切换
                icon: palette
                details: 支持自定义主题色并允许用户在预设的主题颜色之间切换
                link: https://theme-hope.vuejs.press/zh/guide/interface/theme-color.html

            -   title: 幻灯片页面
                icon: person-chalkboard
                details: 添加幻灯片页面以显示你喜欢的内容
                link: https://theme-hope.vuejs.press/zh/guide/layout/slides

            -   title: 更多
                icon: ellipsis
                details: RTL 布局，打印支持，全局按钮等
                link: https://theme-hope.vuejs.press/zh/guide/interface/others.html

    -   header: 新功能
        image: /assets/image/features.svg
        bgImage: https://theme-hope-assets.vuejs.press/bg/1-light.svg
        bgImageDark: https://theme-hope-assets.vuejs.press/bg/1-dark.svg
        features:
            -   title: 浏览量与评论
                icon: comment-dots
                details: 配合 Waline 来开启阅读量统计与评论支持
                link: https://theme-hope.vuejs.press/zh/guide/feature/comment.html

            -   title: 文章信息
                icon: circle-info
                details: 为你的文章添加作者、写作日期、预计阅读时间、字数统计等信息
                link: https://theme-hope.vuejs.press/zh/guide/feature/page-info.html

            -   title: 文章加密
                icon: lock
                details: 你可以为你的特定页面或特定目录进行加密，以便陌生人不能随意访问它们
                link: https://theme-hope.vuejs.press/zh/guide/feature/encrypt.html

            -   title: 搜索支持
                icon: search
                details: 支持 docsearch 和基于客户端的搜索
                link: https://theme-hope.vuejs.press/zh/guide/feature/search.html

            -   title: 代码复制
                icon: copy
                details: 一键复制代码块中的代码
                link: https://theme-hope.vuejs.press/zh/guide/feature/copy-code.html

            -   title: 图片预览
                icon: image
                details: 像相册一样允许你浏览、缩放并分享你的页面图片
                link: https://theme-hope.vuejs.press/zh/guide/feature/photo-swipe.html

    -   header: 博客
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

    -   header: 高级
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
