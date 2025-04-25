import { defineConfig } from "vitepress";
import { fileURLToPath, URL } from "node:url";
import { getSidebar } from "./utils/getSidebar";
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid(defineConfig({
  // Mermaid specific configuration
  mermaid: {
    // Mermaid options
    theme: 'default',
    securityLevel: 'loose',
    // Additional configuration if needed
    // Run in browser, not in Node.js environment during build
    runOnBrowser: true, 
  },
  // 标签上显示的网站标题
  title: "CoaydevopsLearnBlog",
  titleTemplate: "Blog",
  // 在标签上显示所的 logo
  head: [["link", { rel: "icon", href: "/logo.svg" }]],

  // 网站描述，有利于被搜索引擎捕获
  description:
    "zbwer's tech blog: An undergraduate's journey through frontend development, sharing insights, tips, and experiences in web technologies.",

  // md 文件根目录
  // 【谨慎修改】：一旦修改将引起较多变动
  srcDir: "./src",

  // 主题自定义
  themeConfig: {
    // 网站左上角 logo
    logo: "/logo.svg",
    // 顶部导航栏
    nav: [
      { text: "About", link: "/AboutMe.md" },
      { text: "Blogs", link: "/Notes/index" },
      { text: "知识标签", link: "Tags.md" },
      { text: "Projects", link: "Projects.md" },
      { text: "智慧与格言", link: "Quotes.md" },
    ],
    // 顶部导航栏左侧的社交平台跳转
    socialLinks: [{ icon: "github", link: "https://github.com/coyafky" }],
    // 首页底部版权声明
    footer: {
      copyright: "Copyright 2025-present Coya",
    },
    // 【文章页面左侧导航】
    sidebar: {
      "/Notes/": getSidebar("docs/src", "Notes"),
    },
    // 文章内导航栏标题
    outlineTitle: "导航栏",
    // 是否启动搜索功能
    search: {
      provider: "local",
    },
  },
  // 数学公式支持
  markdown: {
    math: true,
    config: (md) => {
      // Handle special characters in content
      md.set({ html: true })
    }
  },
  // !请勿修改
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPDocFooterLastUpdated\.vue$/,
          replacement: fileURLToPath(
            new URL("./components/UpdateTime.vue", import.meta.url)
          ),
        },
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(new URL("./components/Footer.vue", import.meta.url)),
        },
      ],
    },
  },
  lastUpdated: true,
}));
