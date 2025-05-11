<template>
  <div class="max-w-5xl mx-auto px-5 py-8" v-if="isStoreReady">
    <h1 class="text-4xl font-bold text-center mb-2">技术学习知识标签</h1>
    <p class="text-xl text-gray-600 text-center mb-12">按知识领域分类浏览学习笔记，记录成长进程</p>

   

    <!-- 标签统计信息 -->
    <div class="grid grid-cols-3 gap-4 mb-8">
      <div class="bg-gray-50 rounded-lg p-4 border border-gray-200 text-center">
        <div class="text-3xl font-bold mb-2">{{ totalTags }}</div>
        <div class="text-lg font-semibold text-gray-600">知识分类</div>
      </div>
      <div class="bg-gray-50 rounded-lg p-4 border border-gray-200 text-center">
        <div class="text-3xl font-bold mb-2">{{ totalArticles }}</div>
        <div class="text-lg font-semibold text-gray-600">文章总数</div>
      </div>
      <div class="bg-gray-50 rounded-lg p-4 border border-gray-200 text-center">
        <div class="text-3xl font-bold mb-2">{{ latestUpdateTime }}</div>
        <div class="text-lg font-semibold text-gray-600">最近更新</div>
      </div>
    </div>
    
    <div class="border-t border-gray-200 my-8"></div>

  

  

    <div class="border-t border-gray-200 my-8"></div>

    <!-- 标签内容区 -->
    <div class="space-y-12">
      <!-- 测试相关标签内容 -->
      <div v-for="tag in testingTags" :key="getTagName(tag)" v-if="getTagPostsCount(tag) > 0" class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 :id="getTagName(tag)" class="text-xl font-bold mb-4 flex items-center">
          <span class="w-3 h-3 rounded-full mr-2" :style="{ backgroundColor: getTagColor(tag) }"></span>
          {{ getTagName(tag) }}
          <span class="ml-2 text-sm font-normal text-gray-500">{{ getTagPostsCount(tag) }}篇</span>
        </h2>
        <ul class="space-y-3">
          <li v-for="post in tag.posts" :key="post.path" class="border-b border-gray-100 pb-2 last:border-0">
            <a :href="post.path" class="flex justify-between items-center hover:text-blue-600 transition-colors">
              <span class="font-medium">{{ post.title }}</span>
              <span v-if="post.date" class="text-sm text-gray-500">{{ new Date(post.date).toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' }) }}</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- Linux相关标签内容 -->
      <div v-for="tag in linuxTags" :key="getTagName(tag)" v-if="getTagPostsCount(tag) > 0" class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 :id="getTagName(tag)" class="text-xl font-bold mb-4 flex items-center">
          <span class="w-3 h-3 rounded-full mr-2" :style="{ backgroundColor: getTagColor(tag) }"></span>
          {{ getTagName(tag) }}
          <span class="ml-2 text-sm font-normal text-gray-500">{{ getTagPostsCount(tag) }}篇</span>
        </h2>
        <ul class="space-y-3">
          <li v-for="post in tag.posts" :key="post.path" class="border-b border-gray-100 pb-2 last:border-0">
            <a :href="post.path" class="flex justify-between items-center hover:text-blue-600 transition-colors">
              <span class="font-medium">{{ post.title }}</span>
              <span v-if="post.date" class="text-sm text-gray-500">{{ new Date(post.date).toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' }) }}</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- 其他标签内容 -->
      <div v-for="tag in otherValidTags" :key="getTagName(tag)" class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 :id="getTagName(tag)" class="text-xl font-bold mb-4 flex items-center">
          <span class="w-3 h-3 rounded-full mr-2" :style="{ backgroundColor: getTagColor(tag) }"></span>
          {{ getTagName(tag) }}
          <span class="ml-2 text-sm font-normal text-gray-500">{{ getTagPostsCount(tag) }}篇</span>
        </h2>
        <ul class="space-y-3">
          <li v-for="post in tag.posts" :key="post.path" class="border-b border-gray-100 pb-2 last:border-0">
            <a :href="post.path" class="flex justify-between items-center hover:text-blue-600 transition-colors">
              <span class="font-medium">{{ post.title }}</span>
              <span v-if="post.date" class="text-sm text-gray-500">{{ new Date(post.date).toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' }) }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-gray-200 my-8"></div>

    <!-- 没有标签的帖子 -->
    <div class="mb-8" v-if="tagsStore.postsWithoutTags && tagsStore.postsWithoutTags.length > 0">
      <h2 class="text-2xl font-bold mb-4">没有标签的帖子</h2>
      <ul class="bg-white rounded-lg p-6 shadow-sm border border-gray-200 space-y-3">
        <li v-for="post in tagsStore.postsWithoutTags" :key="post.path" class="border-b border-gray-100 pb-2 last:border-0">
          <a :href="post.path" class="flex justify-between items-center hover:text-blue-600 transition-colors">
            <span class="font-medium">{{ post.title }}</span>
            <span v-if="post.date" class="text-sm text-gray-500">{{ new Date(post.date).toLocaleDateString() }}</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- 当没有文章时显示 -->
    <div v-if="totalArticles === 0" class="text-center py-12">
      <div class="bg-gray-50 inline-block p-8 rounded-lg">
        <div class="text-4xl mb-4">📝</div>
        <h3 class="text-xl font-bold mb-2">还没有文章使用标签</h3>
        <p class="text-gray-600">使用文章头部的tags字段给您的文章添加标签，它们将自动显示在这里。</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useTagsStore } from '../store/useTagsStore';

// 使用Pinia标签存储
const tagsStore = useTagsStore();

// 存储就绪状态
const isStoreReady = ref(false);

// 测试相关的标签名称
const testingTagNames = [
  '软件测试', '测试用例', '项目管理', '方法论',
  '自动化测试', '性能测试', '接口测试', '测试原则', '测试流程'
];

// Linux相关的标签名称
const linuxTagNames = ['linux', 'Linux', 'DevOps'];

// 安全获取有效标签的辅助函数
function getValidTags(tags) {
  if (!tags) return [];
  return tags.filter(tag => {
    return tag && tag.name && tag.color && tag.posts && Array.isArray(tag.posts);
  });
}

// 按类别分组标签
const testingTags = computed(() => {
  // 首先确保所有标签都是有效的，然后再按名称过滤
  const validTags = getValidTags(tagsStore.sortedTags);
  return validTags.filter(tag => testingTagNames.includes(tag.name));
});

// Linux相关标签
const linuxTags = computed(() => {
  const validTags = getValidTags(tagsStore.sortedTags);
  return validTags.filter(tag => linuxTagNames.includes(tag.name));
});

// 其他标签，去除测试和Linux标签后的所有标签
const otherTags = computed(() => {
  const validTags = getValidTags(tagsStore.sortedTags);
  return validTags.filter(tag => 
    !testingTagNames.includes(tag.name) && !linuxTagNames.includes(tag.name));
});

// 去除空标签后的其他标签
const otherValidTags = computed(() => {
  return otherTags.value.filter(tag => getTagPostsCount(tag) > 0);
});

// 标签统计信息
// 总标签数目（去除空标签）
const totalTags = computed(() => {
  const validTags = getValidTags(tagsStore.sortedTags);
  return validTags.filter(tag => getTagPostsCount(tag) > 0).length;
});

// 总文章数目（去重）
const totalArticles = computed(() => {
  // 收集所有文章路径
  const allPaths = new Set();
  // 只使用有效的标签
  const validTags = getValidTags(tagsStore.sortedTags);
  validTags.forEach(tag => {
    if (tag.posts) {
      tag.posts.forEach(post => {
        if (post && post.path) {
          allPaths.add(post.path);
        }
      });
    }
  });
  return allPaths.size;
});

// 最近更新时间
const latestUpdateTime = computed(() => {
  // 手动更改时间排序，找到最新日期
  let latestDate = '2025-01-01';
  
  // 只使用有效的标签
  const validTags = getValidTags(tagsStore.sortedTags);
  validTags.forEach(tag => {
    if (tag.posts) {
      tag.posts.forEach(post => {
        if (post && post.date && post.date > latestDate) {
          latestDate = post.date;
        }
      });
    }
  });
  
  // 格式化日期
  if (latestDate !== '2025-01-01') {
    const date = new Date(latestDate);
    return `${date.getMonth() + 1}月${date.getDate()}日`;
  }
  
  return '-';
});

// 安全获取标签文章数量的辅助函数
function getTagPostsCount(tag) {
  if (!tag) return 0;
  if (!tag.posts) return 0;
  return tag.posts.length;
}

// 安全获取标签颜色的辅助函数
function getTagColor(tag) {
  if (!tag) return '#999999';
  if (!tag.color) return '#999999';
  return tag.color;
}

// 安全获取标签名称的辅助函数
function getTagName(tag) {
  if (!tag) return 'Unknown';
  if (!tag.name) return 'Unknown';
  return tag.name;
}

// 在组件挂载时初始化标签存储
onMounted(() => {
  try {
    // 初始化标签存储
    tagsStore.initializeStore();
    
    // 稍等一下确保数据准备完毕
    setTimeout(() => {
      // 设置状态为就绪
      isStoreReady.value = true;
    }, 50);
  } catch (error) {
    console.error('初始化标签存储失败:', error);
    // 即使出错也尝试显示页面
    isStoreReady.value = true;
  }
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
  color: var(--vp-c-brand-1);
}

.page-desc {
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
  text-align: center;
}

.tag-tips {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 2rem;
  border-left: 4px solid var(--vp-c-brand);
}

.tag-tips h3 {
  margin-top: 0;
  color: var(--vp-c-brand-dark);
}

.tag-tips pre {
  background-color: var(--vp-c-bg);
  padding: 12px;
  border-radius: 4px;
}

.tag-blue {
  background-color: rgb(59, 130, 246);
}

.tag-green {
  background-color: rgb(34, 197, 94);
}

.tag-red {
  background-color: rgb(239, 68, 68);
}

.tag-yellow {
  background-color: rgb(234, 179, 8);
}

.tag-purple {
  background-color: rgb(168, 85, 247);
}

.tag-indigo {
  background-color: rgb(99, 102, 241);
}

.tag-pink {
  background-color: rgb(236, 72, 153);
}

.tag-sky {
  background-color: rgb(14, 165, 233);
}

.tag-orange {
  background-color: rgb(249, 115, 22);
}

.tag-teal {
  background-color: rgb(20, 184, 166);
}
</style>
