/**
 * 自动生成标签配置文件
 * 这个脚本会扫描所有Markdown文件，提取标签信息，并生成tagsConfig.ts文件
 */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';
import chokidar from 'chokidar'; // 文件变更监控

// 获取当前文件的路径
// 由于使用了 ES modules，不能直接使用 __dirname
// 所以需要使用 fileURLToPath 来得到 __filename 对应的、等价于 CommonJS 中的 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 文章源目录
const CONTENT_DIR = path.join(__dirname, '../../src');
// 输出文件
const OUTPUT_FILE = path.join(__dirname, '../userConfig/tagsConfig.ts');

// 标签颜色映射
const TAG_COLORS = {
  '软件测试': 'purple',
  '测试用例': 'blue',
  '项目管理': 'green',
  '方法论': 'yellow',
  'Linux': 'blue',
  'DevOps': 'green',
  '编辑器': 'purple',
  '计算机网络': 'indigo',
};

// 默认颜色列表，用于没有预定义颜色的标签
const DEFAULT_COLORS = [
  'blue', 'green', 'red', 'purple', 'yellow',
  'indigo', 'pink', 'sky', 'orange', 'teal'
];

// 获取标签颜色
function getTagColor(tagName) {
  if (TAG_COLORS[tagName]) {
    return TAG_COLORS[tagName];
  }
  
  // 计算一个基于标签名称的稳定索引
  const index = tagName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % DEFAULT_COLORS.length;
  return DEFAULT_COLORS[index];
}

// 递归查找所有Markdown文件
function findMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findMarkdownFiles(filePath, fileList);
    } else if (path.extname(file) === '.md') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// 从frontmatter中提取标签信息
function extractTagsFromFiles(files) {
  const tagsMap = {};
  
  files.forEach(file => {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const { data } = matter(content);
      
      // 提取标签（可能是字符串或数组）
      const tag = data.tags;
      if (!tag) return;
      
      // 相对路径，用于生成链接
      const relativePath = '/' + path.relative(CONTENT_DIR, file).replace(/\.md$/, '');
      
      // 标准化标签
      const tagName = typeof tag === 'string' ? tag : (Array.isArray(tag) ? tag[0] : null);
      if (!tagName) return;
      
      // 准备文章数据
      const post = {
        title: data.title || path.basename(file, '.md'),
        path: relativePath,
        date: data.date || data.updateTime || new Date().toISOString().slice(0, 10)
      };
      
      // 将文章添加到对应标签
      if (!tagsMap[tagName]) {
        tagsMap[tagName] = {
          color: getTagColor(tagName),
          posts: []
        };
      }
      
      tagsMap[tagName].posts.push(post);
    } catch (err) {
      console.error(`Error processing file ${file}:`, err);
    }
  });
  
  // 对每个标签下的文章按日期排序（最新的在前）
  Object.keys(tagsMap).forEach(tag => {
    tagsMap[tag].posts.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  });
  
  return tagsMap;
}

// 生成TypeScript接口
function generateTagsConfig(tagsMap) {
  // 基本接口定义
  let result = `interface Post {
  title: string;
  path: string;
  date: string;
}

interface TagConfig {
  color: string;
  posts: Post[];
}

export const tagsConfig: Record<string, TagConfig> = {\n`;

  // 优先级标签 - 软件测试相关
  const priorityTags = ['软件测试', '测试用例', '项目管理', '方法论'];
  
  // 添加优先标签
  result += `  // 软件测试相关标签（放在最前面，最重要）\n`;
  priorityTags.forEach(tag => {
    if (tagsMap[tag]) {
      result += generateTagSection(tag, tagsMap[tag]);
      delete tagsMap[tag]; // 从映射中删除，避免重复
    }
  });
  
  // 添加其他标签
  result += `  // 以下是其他领域的标签\n`;
  Object.keys(tagsMap).forEach(tag => {
    result += generateTagSection(tag, tagsMap[tag]);
  });
  
  // 闭合对象
  result += `};\n`;
  
  return result;
}

// 生成单个标签配置部分
function generateTagSection(tag, config) {
  let result = `  "${tag}": {\n`;
  result += `    color: "${config.color}",\n`;
  result += `    posts: [\n`;
  
  config.posts.forEach(post => {
    result += `      {\n`;
    result += `        title: "${escapeString(post.title)}",\n`;
    result += `        path: "${escapeString(post.path)}",\n`;
    result += `        date: "${escapeString(post.date)}"\n`;
    result += `      },\n`;
  });
  
  result += `    ]\n  },\n`;
  return result;
}

// 转义字符串
function escapeString(str) {
  return String(str).replace(/"/g, '\\"');
}

// 监控文件变化的函数
function watchChanges() {
  console.log('开始监控 Markdown 文件变化...');
  
  const watcher = chokidar.watch(`${CONTENT_DIR}/**/*.md`, {
    ignored: /(^|[\/\\])\../, // 忽略隐藏文件
    persistent: true,
  });
  
  // 监听文件添加、修改和删除事件
  watcher.on('all', (event, path) => {
    console.log(`检测到 ${event} 事件: ${path}`);
    main(false); // 重新生成标签配置
  });
}

// 主函数
async function main(watchMode = false) {
  console.log('正在生成标签配置...');
  
  // 查找所有Markdown文件
  const files = findMarkdownFiles(CONTENT_DIR);
  console.log(`找到 ${files.length} 个Markdown文件`);
  
  // 提取标签信息
  const tagsMap = extractTagsFromFiles(files);
  console.log(`提取了 ${Object.keys(tagsMap).length} 个不同的标签`);
  
  // 生成配置文件
  const configContent = generateTagsConfig(tagsMap);
  
  // 写入文件
  fs.writeFileSync(OUTPUT_FILE, configContent, 'utf8');
  console.log(`标签配置已写入: ${OUTPUT_FILE}`);
  
  // 如果启用了监控模式，开始监控文件变化
  if (watchMode) {
    watchChanges();
  }
}

// 获取命令行参数
const args = process.argv.slice(2);
const watchMode = args.includes('--watch');

// 执行主函数
main(watchMode).catch(error => {
  console.error('生成标签配置时出错:', error);
  process.exit(1);
});
