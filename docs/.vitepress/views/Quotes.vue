<template>
  <VPTeamPage>
    <VPTeamPageTitle>
      <template #title>📚 智慧与格言 ✨</template>
      <template #lead>收集品味言语，指引勇气与智慧</template>
    </VPTeamPageTitle>
    <div class="px-6 md:px-12 lg:px-16">
      <div class="QuotesContent">
        <QuoteCard
          v-for="(item, index) in quotesInfo"
          :key="index"
          v-bind="item"
        ></QuoteCard>
      </div>
    </div>
  </VPTeamPage>
</template>

<script setup>
import { VPTeamPage, VPTeamPageTitle } from "vitepress/theme";
import { quotesInfo } from "../userConfig/quotesInfo";
import QuoteCard from "./QuoteCard.vue";
</script>

<style scoped>
.QuotesContent {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(224px, 1fr));
  max-width: 1152px;
  gap: 16px;
  padding: 0;
  list-style-type: none;
  margin: 0 auto;
}
</style>
