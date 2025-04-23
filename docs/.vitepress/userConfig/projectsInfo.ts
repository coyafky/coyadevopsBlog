interface Project {
  banner: string; // 图片链接
  title: string; // 项目标题
  description: string; // 项目简介
  link: string; // 项目链接
  tag?: string; // 项目标签
}

/**
 * 项目链接信息
 */
export const projectsInfo: Project[] = [
  {
    banner: "/project-img/smart-tutor.png",
    title: "SmartTutorServer",
    description:
      "智能辅导平台的服务器端，提供API接口和后端处理逻辑，支持用户认证与在线辅导功能",
    link: "https://github.com/coyafky/SmartTutorServer",
    tag: "JavaScript",
  },
  {
    banner: "/project-img/parent-page.png",
    title: "SmartTutorParentPage",
    description: "智能辅导平台家长端，提供家长监督、查看学生学习进度和与导师沟通的界面",
    link: "https://github.com/coyafky/SmartTutorParentPage",
    tag: "Vue",
  },
  {
    banner: "/project-img/tutor-page.png",
    title: "SmartTutorTutorPage",
    description:
      "智能辅导平台导师端，提供导师管理学生、发布学习任务和实时辅导的综合界面",
    link: "https://github.com/coyafky/SmartTutorTutorPage",
    tag: "Vue",
  },
  {
    banner: "/project-img/admin-page.png",
    title: "SmartTutorAdminPage",
    description:
      "智能辅导平台管理员端，用于系统管理和监控，提供用户管理、数据分析和系统配置功能",
    link: "https://github.com/coyafky/SmartTutorAdminPage",
    tag: "TypeScript",
  },
  {
    banner: "/project-img/bus-backend.png",
    title: "busBackend",
    description:
      "公交车管理系统后端，提供路线规划、车辆调度和实时监控功能的API服务",
    link: "https://github.com/coyafky/busBackend",
    tag: "JavaScript",
  },
  {
    banner: "/project-img/bb-bus.png",
    title: "BB_bus",
    description: "公交车管理系统前端，提供用户友好的界面，支持路线查询、实时公交信息和用户反馈",
    link: "https://github.com/coyafky/BB_bus",
    tag: "Vue",
  },
];
