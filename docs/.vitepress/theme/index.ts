import DefaultTheme from "vitepress/theme";
import { Theme, useRoute } from "vitepress";
import "./tailwind.css";
import "./var.css";
import "./article.css";
import "./print.css";
import "./mermaid-fixes.css"; // Hide Mermaid syntax errors

import LinkCard from "../components/LinkCard.vue";
import HText from "../components/HText.vue";
import mediumZoom from "medium-zoom";
import { onMounted, watch, nextTick } from "vue";

// 引入Pinia
import { createPinia } from 'pinia';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 安装Pinia
    const pinia = createPinia();
    app.use(pinia);
    
    // 注册组件
    app.component("LinkCard", LinkCard);
    app.component("HText", HText);
  },

  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom(".main img", { background: "var(--vp-c-bg)", margin: 24 });
    };
    onMounted(() => initZoom());
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
} satisfies Theme;