<template>
  <div class="max-w-5xl mx-auto px-5 py-8">
    <h1 class="text-4xl font-bold text-center mb-2">标签管理</h1>
    <p class="text-xl text-gray-600 text-center mb-12">管理您的知识库标签系统</p>
    
    <!-- 标签统计仪表板 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <!-- 标签总数统计 -->
      <div class="bg-blue-50 rounded-lg p-4 border border-blue-200 text-center">
        <div class="text-3xl font-bold mb-2 text-blue-700">{{ totalTags }}</div>
        <div class="text-lg font-semibold text-gray-700">活跃标签</div>
      </div>
      
      <!-- 文章总数统计 -->
      <div class="bg-green-50 rounded-lg p-4 border border-green-200 text-center">
        <div class="text-3xl font-bold mb-2 text-green-700">{{ totalArticles }}</div>
        <div class="text-lg font-semibold text-gray-700">文章总数</div>
      </div>
      
      <!-- 最近更新信息 -->
      <div class="bg-purple-50 rounded-lg p-4 border border-purple-200 text-center">
        <div class="text-3xl font-bold mb-2 text-purple-700">{{ latestUpdateTime }}</div>
        <div class="text-lg font-semibold text-gray-700">最近更新</div>
      </div>
    </div>
    
    <!-- 目录标签变更监控 -->
    <div class="mb-8">
      <h2 class="text-2xl font-bold mb-4 border-b pb-2">目录标签变更监控</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white rounded-lg overflow-hidden">
          <thead class="bg-gray-100">
            <tr>
              <th class="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">目录名称</th>
              <th class="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">标签数量</th>
              <th class="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">文章数量</th>
              <th class="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">最近更新</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="dir in directoryStats" :key="dir.name" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <div class="text-sm font-medium text-gray-900">{{ dir.name }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <div class="text-sm text-gray-900">{{ dir.tagCount }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <div class="text-sm text-gray-900">{{ dir.postCount }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <div class="text-sm text-gray-900">{{ dir.lastUpdate }}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <!-- 分类标签文章展示模块 (类似图片中的样式) -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold mb-6 border-b pb-2">知识分类文章</h2>
      
      <!-- 主要类别循环 (按标签分组) -->
      <div v-for="category in tagCategories" :key="category.name" class="mb-8">
        <div class="flex items-center mb-4">
          <span class="w-3 h-3 rounded-full mr-2" :style="{ backgroundColor: category.color }"></span>
          <h3 class="text-xl font-bold">{{ category.name }} <span class="text-sm text-gray-500 ml-2">{{ category.count }}篇</span></h3>
        </div>
        
        <!-- 外部卡片式容器 -->
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <!-- 文章列表 -->
          <ul class="space-y-3">
            <li v-for="post in category.posts" :key="post.path" class="border-b border-gray-100 pb-2 last:border-0">
              <a :href="post.path" class="flex justify-between items-center hover:text-blue-600 transition-colors group">
                <div class="flex-1">
                  <span class="font-medium group-hover:text-blue-600 transition-colors">{{ post.title }}</span>
                </div>
                <span class="text-sm text-gray-500 shrink-0 ml-4">{{ formatDate(post.date) }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- 文章时间线 -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold mb-6 border-b pb-2">文章发布时间线</h2>
      
      <div class="relative">
        <!-- 左侧时间线 -->
        <div class="absolute top-0 bottom-0 left-4 md:left-1/2 w-px bg-gray-300"></div>
        
        <!-- 时间线项目 -->
        <div class="space-y-8">
          <div v-for="(timeGroup, index) in articleTimeline" :key="index" class="relative">
            <!-- 时间点 -->
            <div class="mb-4 text-center">
              <div class="inline-flex justify-center items-center w-8 h-8 rounded-full bg-blue-500 text-white relative z-10 mx-auto">
                <span class="text-xs font-semibold">{{ timeGroup.posts.length }}</span>
              </div>
              <div class="text-lg font-bold">{{ timeGroup.month }}</div>
            </div>
            
            <!-- 时间点内容 -->
            <div class="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
              <div v-for="post in timeGroup.posts" :key="post.path" class="mb-3 last:mb-0 pb-3 last:pb-0 border-b last:border-0 border-gray-100">
                <a :href="post.path" class="hover:text-blue-600">
                  <div class="font-medium mb-1">{{ post.title }}</div>
                  <div class="flex items-center text-sm text-gray-500">
                    <span class="mr-2">{{ formatDate(post.date) }}</span>
                    <span v-if="getTagForPost(post)" 
                          class="text-xs px-2 py-1 rounded-full" 
                          :style="{ backgroundColor: getColorForPost(post), color: 'white' }">
                      {{ getTagForPost(post) }}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 标签卡片列表 -->
    <div class="mb-8">
      <h2 class="text-2xl font-bold mb-4 border-b pb-2">标签概览</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="tag in sortedTags" :key="tag.name" 
             class="border rounded-lg p-4 hover:shadow-md transition-shadow">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center">
              <span class="w-3 h-3 rounded-full mr-2" :style="{ backgroundColor: getTagColor(tag) }"></span>
              <h3 class="text-lg font-semibold">{{ tag.name }}</h3>
            </div>
            <span class="text-sm bg-gray-100 px-2 py-1 rounded-full">{{ tag.posts.length }}篇</span>
          </div>
          <p class="text-sm text-gray-600 mb-2">最近文章: {{ tag.posts.length > 0 ? tag.posts[0].title : '无' }}</p>
          <p class="text-sm text-gray-600">更新时间: {{ getLatestUpdateTime(tag) }}</p>
        </div>
      </div>
    </div>
    
    <!-- 最近更新文章列表 -->
    <div class="mb-8">
      <h2 class="text-2xl font-bold mb-4 border-b pb-2">最近更新文章</h2>
      <ul class="bg-white rounded-lg p-6 shadow-sm border border-gray-200 space-y-3">
        <li v-for="post in recentPosts" :key="post.path" class="border-b border-gray-100 pb-2 last:border-0">
          <a :href="post.path" class="flex justify-between items-center hover:text-blue-600 transition-colors">
            <span class="font-medium">{{ post.title }}</span>
            <span class="text-sm text-gray-500">{{ formatDate(post.date) }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useTagsStore } from '../store/useTagsStore';

// 使用Pinia标签存储
const tagsStore = useTagsStore();

// 计算标签统计信息
const totalTags = computed(() => {
  // 获取有内容的标签数量
  return tagsStore.sortedTags.filter(tag => tag.posts && tag.posts.length > 0).length;
});

// 总文章数量统计
const totalArticles = computed(() => {
  // 去重统计所有文章
  const allPaths = new Set();
  tagsStore.sortedTags.forEach(tag => {
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
  let latestDate = null;
  
  tagsStore.sortedTags.forEach(tag => {
    if (tag.posts && tag.posts.length > 0) {
      tag.posts.forEach(post => {
        if (post.date) {
          const postDate = new Date(post.date);
          if (!latestDate || postDate > latestDate) {
            latestDate = postDate;
          }
        }
      });
    }
  });
  
  return latestDate ? formatDate(latestDate.toISOString().slice(0, 10)) : '无更新';
});

// 获取标签的最新更新时间
function getLatestUpdateTime(tag) {
  if (!tag.posts || tag.posts.length === 0) return '无更新';
  
  // 查找最新日期
  let latestDate = null;
  tag.posts.forEach(post => {
    if (post.date) {
      const postDate = new Date(post.date);
      if (!latestDate || postDate > latestDate) {
        latestDate = postDate;
      }
    }
  });
  
  return latestDate ? formatDate(latestDate.toISOString().slice(0, 10)) : '无更新';
}

// 获取标签颜色
function getTagColor(tag) {
  return tag && tag.color ? tag.color : 'gray';
}

// 这两个方法用于时间线组件

// 获取文章的标签名称
function getTagForPost(post) {
  if (post.tagName) {
    return post.tagName;
  }
  
  // 如果文章对象中没有标签属性，尝试在所有标签中查找此文章
  for (const tag of tagsStore.sortedTags) {
    if (tag.posts && tag.posts.some(p => p.path === post.path)) {
      return tag.name;
    }
  }
  
  return null;
}

// 获取文章的标签颜色
function getColorForPost(post) {
  if (post.tagColor) {
    return post.tagColor;
  }
  
  // 如果文章对象中没有标签颜色，尝试在所有标签中查找此文章
  for (const tag of tagsStore.sortedTags) {
    if (tag.posts && tag.posts.some(p => p.path === post.path)) {
      return tag.color || 'gray';
    }
  }
  
  return 'gray';
}

// 格式化日期
function formatDate(dateString) {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'short', day: 'numeric' });
  } catch {
    return dateString;
  }
}

// 目录统计信息
const directoryStats = computed(() => {
  const stats = {};
  
  // 遍历所有文章，按目录分组统计
  tagsStore.sortedTags.forEach(tag => {
    if (tag.posts) {
      tag.posts.forEach(post => {
        if (post.path) {
          // 提取一级目录
          const pathParts = post.path.split('/').filter(p => p);
          const dirName = pathParts.length > 0 ? pathParts[0] : '根目录';
          
          if (!stats[dirName]) {
            stats[dirName] = {
              name: dirName,
              tagCount: 0,
              postCount: 0,
              lastUpdate: null,
              tags: new Set()
            };
          }
          
          // 统计信息
          stats[dirName].tags.add(tag.name);
          stats[dirName].postCount++;
          
          // 更新最新日期
          if (post.date) {
            const postDate = new Date(post.date);
            if (!stats[dirName].lastUpdate || postDate > new Date(stats[dirName].lastUpdate)) {
              stats[dirName].lastUpdate = post.date;
            }
          }
        }
      });
    }
  });
  
  // 转换为数组并计算标签数量
  return Object.values(stats).map(dir => {
    return {
      ...dir,
      tagCount: dir.tags.size,
      lastUpdate: dir.lastUpdate ? formatDate(dir.lastUpdate) : '无更新'
    };
  }).sort((a, b) => b.postCount - a.postCount);
});

// 分类标签模块数据
const tagCategories = computed(() => {
  // 定义主要类别
  const mainCategories = [
    { name: 'DevOps', tags: ['DevOps'] },
    { name: 'Linux', tags: ['Linux', 'linux'] },
    { name: 'SoftwareTesting', tags: ['软件测试', '测试用例', '测试原则', '测试流程', '项目管理'] },
    { name: 'CSNote', tags: ['计算机网络', '数据结构', '计算机基础'] },
    { name: 'DataAnalysis', tags: ['数据分析', 'SQL', 'Python', 'Pandas', 'NumPy'] },
    { name: 'BookNote', tags: ['BookNote', '读书笔记', '书籍'] },
    { name: 'Project', tags: ['Project', '项目'] }
  ];
  
  // 结果对象数组
  const results = [];
  
  // 为每个主类别收集文章
  mainCategories.forEach(category => {
    // 找出当前类别下所有标签的文章
    const allCategoryPosts = [];
    let firstTagColor = '';
    
    // 逐个处理此类别下的标签
    category.tags.forEach(tagName => {
      // 找到该标签
      const foundTag = tagsStore.sortedTags.find(tag => tag.name === tagName);
      if (foundTag && foundTag.posts && foundTag.posts.length > 0) {
        allCategoryPosts.push(...foundTag.posts);
        if (!firstTagColor) {
          firstTagColor = foundTag.color; // 记录第一个有效标签的颜色
        }
      }
    });
    
    // 去重处理
    const uniquePosts = [];
    const seenPaths = new Set();
    allCategoryPosts.forEach(post => {
      if (!seenPaths.has(post.path)) {
        seenPaths.add(post.path);
        uniquePosts.push(post);
      }
    });
    
    // 按日期排序
    const sortedPosts = uniquePosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // 只有当有文章时才添加到结果中
    if (sortedPosts.length > 0) {
      results.push({
        name: category.name,
        posts: sortedPosts,
        count: sortedPosts.length,
        color: firstTagColor || 'gray'
      });
    }
  });
  
  return results;
});

// 文章时间线数据
const articleTimeline = computed(() => {
  // 收集所有文章
  let allPosts = [];
  tagsStore.sortedTags.forEach(tag => {
    if (tag.posts) {
      tag.posts.forEach(post => {
        // 添加标签信息到文章对象
        allPosts.push({
          ...post,
          tagName: tag.name,
          tagColor: tag.color
        });
      });
    }
  });
  
  // 得到唯一文章（以路径为键）
  const uniquePosts = [];
  const seenPaths = new Set();
  
  allPosts.forEach(post => {
    if (!seenPaths.has(post.path) && post.date) {
      seenPaths.add(post.path);
      uniquePosts.push(post);
    }
  });
  
  // 按日期排序
  const sortedPosts = uniquePosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // 按年月分组
  const timeGroups = [];
  const monthGroups = {};
  
  sortedPosts.forEach(post => {
    const date = new Date(post.date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const groupKey = `${year}-${month}`;
    const monthName = `${year}年${month}月`;
    
    if (!monthGroups[groupKey]) {
      monthGroups[groupKey] = {
        month: monthName,
        year,
        monthNumber: month,
        posts: []
      };
    }
    
    monthGroups[groupKey].posts.push(post);
  });
  
  // 转换为数组并按时间倒序排序
  return Object.values(monthGroups).sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year;
    return b.monthNumber - a.monthNumber;
  });
});

// 最近更新的文章列表
const recentPosts = computed(() => {
  // 收集所有文章
  let allPosts = [];
  tagsStore.sortedTags.forEach(tag => {
    if (tag.posts) {
      allPosts = [...allPosts, ...tag.posts];
    }
  });
  
  // 按日期排序并返回前10篇
  return allPosts
    .filter(post => post.date)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 10);
});

// 在组件挂载时初始化
onMounted(() => {
  tagsStore.initializeStore();
});
</script>
