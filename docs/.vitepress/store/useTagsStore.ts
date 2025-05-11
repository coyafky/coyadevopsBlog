import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useData } from 'vitepress';
import { tagsConfig } from '../userConfig/tagsConfig';

interface Post {
  title: string;
  path: string;
  date: string;
  tags?: string[];
}

interface TagConfig {
  color: string;
  posts: Post[];
}

// 定义颜色映射类型
interface ColorMap {
  [key: string]: string | string[];
}

// 定义颜色映射，为不同标签分配颜色
const TAG_COLORS: ColorMap = {
  '软件测试': 'purple',
  '测试用例': 'blue',
  '项目管理': 'green',
  '方法论': 'yellow',
  'Linux': 'blue',
  'DevOps': 'green',
  '编辑器': 'purple',
  '计算机网络': 'indigo',
  // 默认颜色列表特殊处理
  '默认颜色': [
    'blue', 'green', 'red', 'purple', 'yellow', 
    'indigo', 'pink', 'sky', 'orange', 'teal'
  ]
};

// 获取标签颜色，如果没有预定义则从默认颜色列表中循环选择
function getTagColor(tagName: string): string {
  // 预定义的颜色
  const predefinedColor = TAG_COLORS[tagName];
  if (predefinedColor && typeof predefinedColor === 'string') {
    return predefinedColor;
  }
  
  // 获取默认颜色数组
  const defaultColors = TAG_COLORS['默认颜色'];
  if (Array.isArray(defaultColors) && defaultColors.length > 0) {
    // 根据标签名称计算一个索引，从默认颜色中选择
    const colorIndex = tagName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % defaultColors.length;
    return defaultColors[colorIndex];
  }
  
  // 返回默认颜色
  return 'blue';
}

export const useTagsStore = defineStore('tags', () => {
  // 存储所有标签及其文章
  const tagsMap = ref<Record<string, TagConfig>>({ ...tagsConfig });
  // 存储所有已处理的文章路径，避免重复处理
  const processedPaths = ref<Set<string>>(new Set());
  // 增加文章更新时间跟踪
  const lastUpdates = ref<Record<string, string>>({});
  const updateTimes = ref<string[]>([]);
  
  // 从VitePress获取当前页面数据
  const { frontmatter, page } = useData();
  
  /**
   * 初始化标签存储，从frontmatter和URL中解析标签
   */
  function initializeStore() {
    // 首先确保所有tagsConfig中的标签都有正确的属性
    Object.keys(tagsConfig).forEach(tagName => {
      if (!tagsMap.value[tagName]) {
        tagsMap.value[tagName] = {
          color: getTagColor(tagName),
          posts: []
        };
      } else if (!tagsMap.value[tagName].posts) {
        tagsMap.value[tagName].posts = [];
      }
    });
    
    // 如果当前页面是 Markdown 页面并且有 frontmatter
    if (page.value && frontmatter.value && !processedPaths.value.has(page.value.filePath)) {
      processFrontmatter();
    }
  }
  
  /**
   * 处理当前页面的 frontmatter 数据
   */
  function processFrontmatter() {
    if (!page.value) return;
    
    // 从 frontmatter 中获取单一标签
    const currentTag = frontmatter.value.tags || '';
    // 从 frontmatter 中获取标题和日期
    const title = frontmatter.value.title || page.value.title;
    const date = frontmatter.value.date || new Date().toISOString().slice(0, 10);
    
    // 创建文章对象
    const post: Post = {
      title,
      path: '/' + page.value.relativePath.replace(/\.md$/, ''),
      date,
      tags: currentTag
    };
    
    // 标记此路径已处理
    processedPaths.value.add(page.value.filePath);
    
    // 处理标签（如果存在）
    if (currentTag && typeof currentTag === 'string') {
      addPostToTag(currentTag, post);
    }
  }
  
  /**
   * 将文章添加到指定标签
   */
  function addPostToTag(tagName: string, post: Post) {
    if (!tagsMap.value[tagName]) {
      // 如果标签不存在，创建新标签
      tagsMap.value[tagName] = {
        color: getTagColor(tagName),
        posts: []
      };
    }
    
    // 检查文章是否已存在于该标签
    const existingPostIndex = tagsMap.value[tagName].posts.findIndex(p => p.path === post.path);
    
    if (existingPostIndex === -1) {
      // 如果文章不存在，添加到标签
      tagsMap.value[tagName].posts.push(post);
    } else {
      // 如果文章已存在，更新内容
      tagsMap.value[tagName].posts[existingPostIndex] = post;
    }
    
    // 按日期排序
    tagsMap.value[tagName].posts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }
  
  /**
   * 计算属性：返回排序后的标签列表
   */
  const sortedTags = computed(() => {
    return Object.keys(tagsMap.value).map(tagName => {
      // 确保每个标签都有color和posts属性，即使tagsMap中没有
      const tagConfig = tagsMap.value[tagName] || { color: getTagColor(tagName), posts: [] };
      
      // 确保posts是一个数组
      const posts = Array.isArray(tagConfig.posts) ? tagConfig.posts : [];
      
      return {
        name: tagName,
        color: tagConfig.color || getTagColor(tagName),
        posts: posts,
        count: posts.length
      };
    }).sort((a, b) => {
      // 首先按照文章数量降序排列
      if (b.count !== a.count) {
        return b.count - a.count;
      }
      // 如果文章数量相同，则按照标签名称字母顺序排列
      return a.name.localeCompare(b.name);
    });
  });
  
  /**
   * 添加为实时监控更新时间的方法
   */
  function trackUpdateTimes() {
    // 收集所有文章的更新时间
    const times: string[] = [];
    Object.values(tagsMap.value).forEach(tag => {
      if (tag.posts) {
        tag.posts.forEach(post => {
          if (post.date) {
            times.push(post.date);
            lastUpdates.value[post.path] = post.date;
          }
        });
      }
    });
    
    // 排序并保存更新时间
    updateTimes.value = times.sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
  }
  
  /**
   * 获取最近10个更新时间
   */
  const recentUpdateTimes = computed(() => {
    return updateTimes.value.slice(0, 10);
  });
  
  /**
   * 获取特定目录的标签统计信息
   */
  function getDirectoryTagStats(directory: string) {
    const stats = {
      tagCount: 0,
      postCount: 0,
      lastUpdate: '',
      tags: new Set<string>()
    };
    
    Object.entries(tagsMap.value).forEach(([tagName, config]) => {
      const dirPosts = config.posts.filter(post => 
        post.path.startsWith(`/${directory}/`)
      );
      
      if (dirPosts.length > 0) {
        stats.tags.add(tagName);
        stats.postCount += dirPosts.length;
        
        // 查找最新更新日期
        dirPosts.forEach(post => {
          if (post.date) {
            const postDate = new Date(post.date);
            if (!stats.lastUpdate || postDate > new Date(stats.lastUpdate)) {
              stats.lastUpdate = post.date;
            }
          }
        });
      }
    });
    
    return {
      ...stats,
      tagCount: stats.tags.size
    };
  }
  
  // 新版初始化方法
  function initializeStore() {
    // 所有现有的初始化逻辑
    // 首先确保所有tagsConfig中的标签都有正确的属性
    Object.keys(tagsConfig).forEach(tagName => {
      if (!tagsMap.value[tagName]) {
        tagsMap.value[tagName] = {
          color: getTagColor(tagName),
          posts: []
        };
      } else if (!tagsMap.value[tagName].posts) {
        tagsMap.value[tagName].posts = [];
      }
    });
    
    // 如果当前页面是 Markdown 页面并且有 frontmatter
    if (page.value && frontmatter.value && !processedPaths.value.has(page.value.filePath)) {
      processFrontmatter();
    }
    
    // 添加实时监控功能
    trackUpdateTimes();
  }
  
  // 初始化
  initializeStore();
  
  return {
    tagsMap,
    sortedTags,
    lastUpdates,
    recentUpdateTimes,
    initializeStore,
    addPostToTag,
    processFrontmatter,
    getDirectoryTagStats,
    trackUpdateTimes
  };
});
