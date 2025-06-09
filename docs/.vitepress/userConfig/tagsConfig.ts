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
        date: "2025-06-08"
      },
      {
        title: "STAR法则",
        path: "/Notes/BookNote/STAR法则",
        date: "2025-06-08"
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
  "PythonAndJavascript": {
    color: "yellow",
    posts: [
      {
        title: "Python Lambda 与 JavaScript 箭头函数：深度对比",
        path: "/Notes/DataAnalysis/PythonBasics/lambda-vs-arrow-functions",
        date: "2025-05-16 17:00"
      },
      {
        title: "Python与JavaScript的数据结构",
        path: "/Notes/DataAnalysis/PythonBasics/python和JavaScript的数据结构",
        date: "2025-05-16 14:00"
      },
      {
        title: "map",
        path: "/Notes/DataAnalysis/PythonBasics/map",
        date: "2025-05-16 12:00"
      },
      {
        title: "filter",
        path: "/Notes/DataAnalysis/PythonBasics/filter",
        date: "2025-05-16 11:00"
      },
      {
        title: "Python 装饰器",
        path: "/Notes/DataAnalysis/PythonBasics/python装饰器",
        date: "2025-05-16 10:00"
      },
      {
        title: "reduce",
        path: "/Notes/DataAnalysis/PythonBasics/reduce",
        date: "2025-5-15 18:56"
      },
      {
        title: "函数是第一公民",
        path: "/Notes/DataAnalysis/PythonBasics/函数是第一公民",
        date: "2025-5-15 17:56"
      },
      {
        title: "深拷贝和浅拷贝",
        path: "/Notes/DataAnalysis/PythonBasics/深拷贝和浅拷贝",
        date: "2025-5-15 17:56"
      },
      {
        title: "闭包",
        path: "/Notes/DataAnalysis/PythonBasics/闭包",
        date: "2025-5-15 17:56"
      },
      {
        title: "三元表达式",
        path: "/Notes/DataAnalysis/PythonBasics/三元表达式",
        date: "2025-5-15 16:56"
      },
      {
        title: "Python和Javascript的内存管理",
        path: "/Notes/DataAnalysis/PythonBasics/内存管理",
        date: "2025-5-15 15:56"
      },
      {
        title: "值比较和内存地址比较",
        path: "/Notes/DataAnalysis/PythonBasics/值比较和内存地址比较",
        date: "2025-5-15 14:56"
      },
    ]
  },
  "Python的数据结构": {
    color: "green",
    posts: [
      {
        title: "python数据类型",
        path: "/Notes/DataAnalysis/PythonBasics/pytgon数据类型",
        date: "2025-5-12 14:56"
      },
      {
        title: "python函数",
        path: "/Notes/DataAnalysis/PythonBasics/python函数",
        date: "2025-5-12 14:56"
      },
      {
        title: "python列表和元祖",
        path: "/Notes/DataAnalysis/PythonBasics/python列表和元祖",
        date: "2025-5-12 14:56"
      },
      {
        title: "python基础知识",
        path: "/Notes/DataAnalysis/PythonBasics/python基础知识",
        date: "2025-5-12 14:56"
      },
      {
        title: "python字典和集合",
        path: "/Notes/DataAnalysis/PythonBasics/python字典和集合",
        date: "2025-5-12 14:56"
      },
      {
        title: "python序列",
        path: "/Notes/DataAnalysis/PythonBasics/python序列",
        date: "2025-5-12 14:56"
      },
      {
        title: "python文件对象",
        path: "/Notes/DataAnalysis/PythonBasics/python文件对象",
        date: "2025-5-12 14:56"
      },
      {
        title: "python条件和循环",
        path: "/Notes/DataAnalysis/PythonBasics/python条件和循环",
        date: "2025-5-12 14:56"
      },
      {
        title: "python模块",
        path: "/Notes/DataAnalysis/PythonBasics/python模块",
        date: "2025-5-12 14:56"
      },
    ]
  },
  "Python, JavaScript, OOP, ObjectOrientedProgramming": {
    color: "purple",
    posts: [
      {
        title: "面向对象编程 (OOP)",
        path: "/Notes/DataAnalysis/PythonBasics/面向对象",
        date: "2025-05-16 15:00"
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
};
