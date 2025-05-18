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
  // 软件测试相关标签（放在最前面，最重要）
  "软件测试": {
    color: "purple",
    posts: [
      {
        title: "自动化测试",
        path: "/Notes/SoftwareTesting/自动化测试",
        date: "2025-05-12"
      },
      {
        title: "软件测试技术-条件覆盖法（白盒）",
        path: "/Notes/SoftwareTesting/软件测试技术-条件覆盖法（白盒）",
        date: "2025-05-12"
      },
      {
        title: "软件测试技术-语句覆盖法（白盒）",
        path: "/Notes/SoftwareTesting/软件测试技术-语句覆盖法（白盒)",
        date: "2025-05-12"
      },
      {
        title: "软件测试技术-路径覆盖法（白盒）",
        path: "/Notes/SoftwareTesting/软件测试技术-路径覆盖法（白盒）",
        date: "2025-05-12"
      },
      {
        title: "软件测试技术-判定/条件覆盖法（白盒）",
        path: "/Notes/SoftwareTesting/软件测试技术判定条件覆盖法(白盒)",
        date: "2025-05-12"
      },
      {
        title: "软件测试技术-条件组合覆盖（白盒）",
        path: "/Notes/SoftwareTesting/软件测试技术条件组合覆盖法（白盒）",
        date: "2025-05-12"
      },
      {
        title: "兼容性测试",
        path: "/Notes/SoftwareTesting/兼容性测试",
        date: "2025-05-11"
      },
      {
        title: "回归测试",
        path: "/Notes/SoftwareTesting/回归测试",
        date: "2025-05-11"
      },
      {
        title: "性能测试",
        path: "/Notes/SoftwareTesting/性能测试",
        date: "2025-05-11"
      },
      {
        title: "文档测试",
        path: "/Notes/SoftwareTesting/文档测试",
        date: "2025-05-11"
      },
      {
        title: "软件测试的艺术读书笔记-第七章 可用性（或用户体验）测试",
        path: "/Notes/SoftwareTesting/软件测试的艺术读书笔记-第七章-可用性测试",
        date: "2025-05-10"
      },
      {
        title: "软件测试的艺术读书笔记-第九章 敏捷测试",
        path: "/Notes/SoftwareTesting/软件测试的艺术读书笔记-第九章敏捷测试",
        date: "2025-05-10"
      },
      {
        title: "软件测试的艺术读书笔记-第八章 调试",
        path: "/Notes/SoftwareTesting/软件测试的艺术读书笔记-第八章 调试",
        date: "2025-05-10"
      },
      {
        title: "软件测试的艺术读书笔记-第六章 更高级别的测试",
        path: "/Notes/SoftwareTesting/软件测试的艺术读书笔记-第六章-更高级别的测试",
        date: "2025-05-10"
      },
      {
        title: "软件测试的艺术读书笔记-第十章 互联网应用测试",
        path: "/Notes/SoftwareTesting/软件测试的艺术读书笔记第10章互联网应用测试",
        date: "2025-05-10"
      },
      {
        title: "软件测试的艺术读书笔记-第十一章 移动应用的测试",
        path: "/Notes/SoftwareTesting/软件测试的艺术读书笔记第11章-移动应用测试",
        date: "2025-05-10"
      },
      {
        title: "软件测试的艺术读书笔记-第一章",
        path: "/Notes/SoftwareTesting/软件测试的艺术读书笔记-第一章",
        date: "2025-05-09"
      },
      {
        title: "软件测试的艺术读书笔记-第三章 代码检查和评审",
        path: "/Notes/SoftwareTesting/软件测试的艺术读书笔记-第三章代码检查和评审",
        date: "2025-05-09"
      },
      {
        title: "软件测试的艺术读书笔记-第二章",
        path: "/Notes/SoftwareTesting/软件测试的艺术读书笔记-第二章软件测试的心理学和经济学",
        date: "2025-05-09"
      },
      {
        title: "软件测试的艺术读书笔记-第五章 单元测试",
        path: "/Notes/SoftwareTesting/软件测试的艺术读书笔记-第五章单元测试",
        date: "2025-05-09"
      },
      {
        title: "软件测试的艺术读书笔记-第四章 测试用例的设计",
        path: "/Notes/SoftwareTesting/软件测试的艺术读书笔记-第四章-测试用例的设计",
        date: "2025-05-09"
      },
      {
        title: "测试用例管理和控制",
        path: "/Notes/SoftwareTesting/测试用例管理和控制",
        date: "2025-05-04"
      },
      {
        title: "软件开发的生命周期",
        path: "/Notes/SoftwareTesting/软件开发的生命周期",
        date: "2025-05-03"
      },
      {
        title: "软件测试技术-其他方法汇总",
        path: "/Notes/SoftwareTesting/软件测试技术-其他方法",
        date: "2025-05-03"
      },
      {
        title: "软件测试技术-决策表法",
        path: "/Notes/SoftwareTesting/软件测试技术-决策表法",
        date: "2025-05-03"
      },
      {
        title: "软件测试技术-因果图法",
        path: "/Notes/SoftwareTesting/软件测试技术-因果图法",
        date: "2025-05-03"
      },
      {
        title: "软件测试技术-场景法",
        path: "/Notes/SoftwareTesting/软件测试技术-场景法",
        date: "2025-05-03"
      },
      {
        title: "软件测试技术-等价类划分法",
        path: "/Notes/SoftwareTesting/软件测试技术-等价类划分法",
        date: "2025-05-03"
      },
      {
        title: "软件测试技术-边界值分析法",
        path: "/Notes/SoftwareTesting/软件测试技术-边界值分析法",
        date: "2025-05-03"
      },
      {
        title: "软件测试的类型",
        path: "/Notes/SoftwareTesting/软件测试的类型",
        date: "2025-05-03"
      },
    ]
  },
  "项目管理": {
    color: "green",
    posts: [
      {
        title: "测试人员熟悉新项目的步骤",
        path: "/Notes/SoftwareTesting/测试人员熟悉新项目的步骤",
        date: "2025-05-03"
      },
    ]
  },
  // 以下是其他领域的标签
  "Tutorial": {
    color: "red",
    posts: [
      {
        title: "🚀 快速上手",
        path: "/Notes/0tutorial/quickstart",
        date: "2023-10-25 20:48"
      },
      {
        title: "🎨 配置参考",
        path: "/Notes/0tutorial/reference",
        date: "2023-10-25 14:53"
      },
      {
        title: "🌈 语法介绍",
        path: "/Notes/0tutorial/syntax",
        date: "2023-10-24 14:56"
      },
    ]
  },
  "BookNote": {
    color: "green",
    posts: [
      {
        title: "5why方法论读书",
        path: "/Notes/BookNote/5W分析法优质的方法论",
        date: "2025-05-18"
      },
      {
        title: "5why方法论读书",
        path: "/Notes/BookNote/STAR法则",
        date: "2025-05-18"
      },
    ]
  },
  "Algorithm": {
    color: "indigo",
    posts: [
      {
        title: "Stack",
        path: "/Notes/CSNote/Stack栈",
        date: "2025-05-15 14:11"
      },
      {
        title: "排序算法",
        path: "/Notes/CSNote/排序算法",
        date: "2025-05-15 14:11"
      },
      {
        title: "查找算法",
        path: "/Notes/CSNote/查找算法",
        date: "2025-05-15 14:11"
      },
      {
        title: "贪心算法",
        path: "/Notes/CSNote/贪心算法",
        date: "2025-05-15 14:11"
      },
      {
        title: "链表",
        path: "/Notes/CSNote/链表",
        date: "2025-05-15 14:11"
      },
    ]
  },
  "linux": {
    color: "blue",
    posts: [
      {
        title: "学习linux的背景知识基础整理",
        path: "/Notes/Devops/什么是运维",
        date: "2025-04-22 16:11"
      },
    ]
  },
  "Devops": {
    color: "indigo",
    posts: [
      {
        title: "linux的磁盘管理",
        path: "/Notes/LinuxNote/linux的磁盘管理",
        date: "2025-04-24 16:11"
      },
      {
        title: "linux中的网络管理",
        path: "/Notes/LinuxNote/linux中的网络管理",
        date: "2025-04-23 16:33"
      },
      {
        title: "linux文件目录管理",
        path: "/Notes/LinuxNote/linux文件目录管理的内容",
        date: "2025-04-23 16:22"
      },
      {
        title: "正则表达式与文本处理",
        path: "/Notes/LinuxNote/linux正则表达式和文本处理3指令awkgrepsed",
        date: "2025-04-23 16:11"
      },
      {
        title: "linux的符号",
        path: "/Notes/LinuxNote/linux的符号",
        date: "2025-04-23 16:11"
      },
      {
        title: "Vim 操作指南",
        path: "/Notes/LinuxNote/vim操作指南",
        date: "2025-04-23 16:11"
      },
      {
        title: "linux的文件权限",
        path: "/Notes/LinuxNote/linux文件权限",
        date: "2025-04-23 12:11"
      },
    ]
  },
  "Linux": {
    color: "blue",
    posts: [
      {
        title: "linux帮助指令",
        path: "/Notes/LinuxNote/linux查看帮助指令的简单说明",
        date: "2025-04-23 16:26"
      },
      {
        title: "linux进程命令",
        path: "/Notes/LinuxNote/linux进程命令",
        date: "2025-04-23 16:11"
      },
      {
        title: "学习linux的背景知识基础整理",
        path: "/Notes/LinuxNote/学习linux的背景知识基础整理",
        date: "2025-04-22 16:11"
      },
    ]
  },
  "Network": {
    color: "pink",
    posts: [
      {
        title: "DNS",
        path: "/Notes/Network/DNS",
        date: "2025-05-14 14:11"
      },
      {
        title: "HTTP 报文的结构",
        path: "/Notes/Network/HTTP 报文的结构",
        date: "2025-05-14 14:11"
      },
      {
        title: "TCP和UDP",
        path: "/Notes/Network/TCP和UDP",
        date: "2025-05-14 14:11"
      },
      {
        title: "Cookie",
        path: "/Notes/Network/cookie",
        date: "2025-05-14 14:11"
      },
      {
        title: "WebSocket",
        path: "/Notes/Network/webScoket",
        date: "2025-05-14 14:11"
      },
    ]
  },
  "CSNote": {
    color: "pink",
    posts: [
      {
        title: "tcp协议",
        path: "/Notes/Network/network",
        date: "2025-04-25 16:11"
      },
      {
        title: "从输入网址到enter之后发生了什么",
        path: "/Notes/Network/从输入网址到enter之后发生了什么",
        date: "2025-04-25 16:11"
      },
      {
        title: "HTTP缓存技术",
        path: "/Notes/Network/HTTP缓存技术",
        date: "2025-04-25 14:42"
      },
      {
        title: "HTTP响应头",
        path: "/Notes/Network/HTTP",
        date: "2025-04-25 14:11"
      },
      {
        title: "HTTP状态码",
        path: "/Notes/Network/HTTP状态码",
        date: "2025-04-25 12:11"
      },
    ]
  },
  "Project": {
    color: "sky",
    posts: [
      {
        title: "基于Vue3的家教推荐系统的项目演示",
        path: "/Notes/Projects/基于Vue3的家教推荐系统的项目演示",
        date: "2025-04-25 16:11"
      },
    ]
  },
  "PythonAndJavascript": {
    color: "yellow",
    posts: [
      {
        title: "Python Lambda 与 JavaScript 箭头函数：深度对比",
        path: "/Notes/PythonAndJavascript/lambda-vs-arrow-functions",
        date: "2025-05-16 17:00"
      },
      {
        title: "Python与JavaScript的数据结构",
        path: "/Notes/PythonAndJavascript/python和JavaScript的数据结构",
        date: "2025-05-16 14:00"
      },
      {
        title: "map",
        path: "/Notes/PythonAndJavascript/map",
        date: "2025-05-16 12:00"
      },
      {
        title: "filter",
        path: "/Notes/PythonAndJavascript/filter",
        date: "2025-05-16 11:00"
      },
      {
        title: "Python 装饰器",
        path: "/Notes/PythonAndJavascript/python装饰器",
        date: "2025-05-16 10:00"
      },
      {
        title: "reduce",
        path: "/Notes/PythonAndJavascript/reduce",
        date: "2025-5-15 18:56"
      },
      {
        title: "函数是第一公民",
        path: "/Notes/PythonAndJavascript/函数是第一公民",
        date: "2025-5-15 17:56"
      },
      {
        title: "深拷贝和浅拷贝",
        path: "/Notes/PythonAndJavascript/深拷贝和浅拷贝",
        date: "2025-5-15 17:56"
      },
      {
        title: "闭包",
        path: "/Notes/PythonAndJavascript/闭包",
        date: "2025-5-15 17:56"
      },
      {
        title: "三元表达式",
        path: "/Notes/PythonAndJavascript/三元表达式",
        date: "2025-5-15 16:56"
      },
      {
        title: "Python和Javascript的内存管理",
        path: "/Notes/PythonAndJavascript/内存管理",
        date: "2025-5-15 15:56"
      },
      {
        title: "值比较和内存地址比较",
        path: "/Notes/PythonAndJavascript/值比较和内存地址比较",
        date: "2025-5-15 14:56"
      },
    ]
  },
  "Python, JavaScript, OOP, ObjectOrientedProgramming": {
    color: "purple",
    posts: [
      {
        title: "面向对象编程 (OOP)",
        path: "/Notes/PythonAndJavascript/面向对象",
        date: "2025-05-16 15:00"
      },
    ]
  },
  "SoftwareTesting": {
    color: "sky",
    posts: [
      {
        title: "Postman接口测试",
        path: "/Notes/SoftwareTesting/Postman接口测试",
        date: "2025-5-14 14:56"
      },
      {
        title: "Pytest",
        path: "/Notes/SoftwareTesting/pytest",
        date: "2025-5-14 14:56"
      },
      {
        title: "软件本地化和国际化测试",
        path: "/Notes/SoftwareTesting/本地化和国际化测试",
        date: "2025-5-12 14:56"
      },
      {
        title: "在测试中怎么分析是前端bug还是后端bug",
        path: "/Notes/SoftwareTesting/在测试中怎么分析是前端bug还是后端bug",
        date: "2025-5-11 14:56"
      },
      {
        title: "软件缺陷报告",
        path: "/Notes/SoftwareTesting/软件测试理论-软件缺陷与缺陷报告全面指南",
        date: "2025-5-7 14:56"
      },
      {
        title: "软件测试理论-用例设计",
        path: "/Notes/SoftwareTesting/软件测试理论-用例设计",
        date: "2025-5-7 1:56"
      },
      {
        title: "软件测试的bug",
        path: "/Notes/SoftwareTesting/Bug的全部",
        date: "2025-5-4 14:56"
      },
      {
        title: "缺陷管理",
        path: "/Notes/SoftwareTesting/功能测试",
        date: "2025-4-24 14:56"
      },
      {
        title: "缺陷管理",
        path: "/Notes/SoftwareTesting/缺陷管理",
        date: "2025-4-24 14:56"
      },
      {
        title: "用例设计的方法",
        path: "/Notes/SoftwareTesting/用例的设计的方法",
        date: "2023-10-24 14:56"
      },
    ]
  },
};
