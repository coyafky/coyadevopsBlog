interface Quote {
  content: string; // 格言内容
  author: string; // 作者/来源
  category: string; // 分类
  color?: string; // 标签颜色
}

/**
 * 智慧与格言集
 */
export const friendsInfo: Quote[] = [
  {
    content: "认知是最高的，其次才是具体的技能，你可以理解一个是道、一个术，要保持终身学习，谦虚，严谨，对技术和知识要恭敬，不要贪婪（急于求成）",
    author: "人生智慧",
    category: "成长",
    color: "indigo",
  },
  {
    content: "人生有几个关键的选择点是需要非常严肃谨慎对待，去哪里读大学，选择什么职业，找什么样的对象，什么时候结婚生娃都是影响长远的命运。",
    author: "人生选择",
    category: "决策",
    color: "sky",
  },
  {
    content: "当一个人尝尽了社会的无情，人心的险恶，经济的压力，婚姻的不堪，你终会领悟到，放下执念，善待自己。唯有读书和赚钱，才是一个人最好的修行，前者使人不惑，后者使人不屈。",
    author: "稻盛和夫",
    category: "修行",
    color: "orange",
  },
  {
    content: "'伪勤奋'的表现：1.花大量时间做事情中最容易的环节，还到处炫耀：没有功劳也有苦劳。2.以'准备'的名义拖延，看上去很忙但事情没有任何进展。3.从来不验证工作成果，不知道做得好做得坏，只顾闷头拉车，不会抬头看天。4.读了很多书，但从不总结规律；即使总结了规律，也没有用到实践中。",
    author: "Jordan Peterson",
    category: "勤奋",
    color: "pink",
  },
  {
    content: "拖延的最大坏处还不是耽误，而是会使自己变得犹豫，甚至丧失信心。不管什么事，决定了，就立刻去做，这本身就能使人生气勃勃，保持一种主动和快乐的心情。",
    author: "行动哲学",
    category: "行动",
    color: "green",
  },
  {
    content: "学习过程还有对应的学习资料类似金字塔结构：1. Tutorial（入门教程）一般指新手教程 2. Specification，简称Spec。集中体现出系统的设计思想，一般也是一个完整系统的描述 3. API Reference。大而全的API索引和文档 4. 高质量的博客、论文、源码这些",
    author: "技术学习",
    category: "学习",
    color: "indigo",
  },
  {
    content: "技术牛人学习快，一直是会按正确的顺序去阅读，二是他们至少要把某个技术理解到 spec 第二层才会开始写代码。我们自学一门技术要做到：通读Spec。读完就不再困惑；重要部分的API Reference要通读。里面包含了很多跟实现有关的信息；如果工作需要，还可能需要读到Source Code。",
    author: "技术深度",
    category: "学习",
    color: "pink",
  },
  {
    content: "戒掉这五个坏习惯，做更好的自己：①戒掉拖延成性；②戒掉惯于抱怨；③戒掉易怒的情绪；④戒掉不规律作息；⑤戒掉无意义的社交。愿你在一步一个脚印中，活成自己喜欢的样子，过上自己想要的生活。",
    author: "习惯养成",
    category: "自律",
    color: "orange",
  },
];
