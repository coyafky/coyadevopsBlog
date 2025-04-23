<template>
  <div class="container">
    <h1 class="page-title">知识模块标签</h1>
    <p class="page-desc">按主题分类浏览文章和笔记</p>

    <div class="tags-container">
      <div 
        v-for="tag in tags" 
        :key="tag.name" 
        class="tag-group"
      >
        <h2 class="tag-title">
          <span :class="['tag-dot', `tag-${tag.color}`]"></span>
          {{ tag.name }}
          <span class="tag-count">({{ tag.posts.length }})</span>
        </h2>
        <ul class="tag-posts">
          <li v-for="post in tag.posts" :key="post.path" class="tag-post-item">
            <a :href="post.path" class="tag-post-link">{{ post.title }}</a>
            <span class="tag-post-date">{{ post.date }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { tagsConfig } from '../userConfig/tagsConfig';

// 对标签进行排序，确保它们按照一定的顺序显示
const tags = computed(() => {
  return Object.keys(tagsConfig).map(tagName => {
    return {
      name: tagName,
      color: tagsConfig[tagName].color || 'blue',
      posts: tagsConfig[tagName].posts.sort((a, b) => {
        // 按日期降序排列，最新的在前
        return new Date(b.date) - new Date(a.date);
      })
    };
  }).sort((a, b) => {
    // 按文章数量降序排列，数量多的标签在前
    return b.posts.length - a.posts.length;
  });
});
</script>

<style scoped>
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
}

.page-desc {
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
  margin-bottom: 3rem;
  text-align: center;
}

.tags-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.tag-group {
  border-radius: 8px;
  padding: 1.5rem;
  background-color: var(--vp-c-bg-soft);
  transition: transform 0.2s ease;
}

.tag-group:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}

.tag-title {
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.tag-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
}

.tag-blue { background-color: var(--vp-c-brand); }
.tag-green { background-color: #10b981; }
.tag-red { background-color: #ef4444; }
.tag-yellow { background-color: #f59e0b; }
.tag-purple { background-color: #8b5cf6; }
.tag-indigo { background-color: #6366f1; }
.tag-pink { background-color: #ec4899; }
.tag-sky { background-color: #0ea5e9; }

.tag-count {
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--vp-c-text-2);
  margin-left: 0.5rem;
}

.tag-posts {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tag-post-item {
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px dashed var(--vp-c-divider-light);
}

.tag-post-link {
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.2s ease;
  font-weight: 500;
}

.tag-post-link:hover {
  color: var(--vp-c-brand);
}

.tag-post-date {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
}

@media (min-width: 768px) {
  .tags-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
