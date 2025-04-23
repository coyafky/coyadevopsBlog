<template>
  <div
    class="flex flex-col w-full h-full p-6 transition-all duration-300 border bg-stripe group hover:border-indigo-800 dark:hover:border-sky-300 dark:border-transparent bg-slate-50 dark:bg-slate-800 dark:text-slate-300 rounded-xl"
  >
    <!-- 引用内容 -->
    <div class="flex-1 mb-4">
      <p class="text-lg italic leading-relaxed text-slate-700 dark:text-slate-300">
        "{{ content }}"
      </p>
    </div>
    <!-- 作者与分类 -->
    <div class="w-full text-right border-t pt-3 dark:border-slate-700">
      <h3 class="text-base font-bold tracking-wider dark:text-zinc-200">
        — {{ author }}
      </h3>
      <div class="mt-2">
        <Badge :color="color || 'sky'">{{ category }}</Badge>
      </div>
    </div>
  </div>
</template>

<script setup>
import Badge from "../components/Badge.vue";

const props = defineProps(["content", "author", "category", "color"]);
</script>

<style scoped>
.VP-shadow {
  box-shadow: var(--vp-shadow-3);
}
.bg-stripe:hover {
  background-image: repeating-linear-gradient(
    45deg,
    hsl(0 0% 100%),
    hsl(0 0% 100%) 13px,
    hsl(0 0% 95%) 13px,
    hsl(0 0% 95%) 14px
  );
}
.dark .bg-stripe:hover {
  background-image: repeating-linear-gradient(
    45deg,
    hsl(202, 80%, 24%),
    hsl(202, 80%, 24%) 13px,
    hsl(200, 80%, 20%) 13px,
    hsl(200, 80%, 20%) 14px
  );
}
</style>
