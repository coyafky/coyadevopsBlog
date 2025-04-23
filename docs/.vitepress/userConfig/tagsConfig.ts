interface Post {
  title: string;
  path: string;
  date: string;
}

interface TagConfig {
  color: string;
  posts: Post[];
}

export const tagsConfig: Record<string, TagConfig> = {
  "Linux": {
    color: "blue",
    posts: [
      {
        title: "linux 查看帮助指令的简单说明",
        path: "/Notes/Devops/linux查看帮助指令的简单说明",
        date: "2025-04-23"
      },
      {
        title: "linux 文件目录管理的内容",
        path: "/Notes/Devops/linux文件目录管理的内容",
        date: "2025-04-22"
      },
      {
        title: "linux 系统管理",
        path: "/Notes/Devops/linux系统管理",
        date: "2025-04-21"
      },
      {
        title: "学习 linux 的背景知识基础整理",
        path: "/Notes/Devops/学习linux的背景知识基础整理",
        date: "2025-04-20"
      }
    ]
  },
  "DevOps": {
    color: "green",
    posts: [
      {
        title: "什么是运维",
        path: "/Notes/Devops/什么是运维",
        date: "2025-04-23"
      }
    ]
  },
  "编辑器": {
    color: "purple",
    posts: [
      {
        title: "Vim 操作指南",
        path: "/Notes/Devops/vim操作指南",
        date: "2025-04-22"
      }
    ]
  },
  "计算机网络": {
    color: "indigo",
    posts: []
  },
  "操作系统": {
    color: "yellow",
    posts: []
  },
  "MySQL": {
    color: "sky",
    posts: []
  },
  "Node.js": {
    color: "red",
    posts: []
  },
  "Vue": {
    color: "green",
    posts: []
  },
  "React": {
    color: "blue",
    posts: []
  },
  "JavaScript": {
    color: "yellow",
    posts: []
  },
  "TypeScript": {
    color: "blue",
    posts: []
  },
  "前端工程化": {
    color: "pink",
    posts: []
  }
};
