---
title: "Mermaid UML 使用指南"
date: 2026-07-11
draft: false
tags: ["mermaid", "uml", "文档"]
archives: ["2026-07"]
categories: ["documentation"]
author: "q1w264"
description: "介绍如何在本站编写 Mermaid UML 图，并提供常见示例与排错方法。"
contentType: repost
sourceTitle: "菜鸟教程 - Markdown Mermaid 图表"
sourceUrl: "https://www.runoob.com/markdown/md-draw.html"
---

>[!TIP]
> **修改**：本文已根据站点主题重写示例，补充了更完整的 Mermaid 事例，并补齐转载来源。

这篇文章说明如何在本站使用 Mermaid 编写图表，示例主要参考 [菜鸟教程 Mermaid 图表](https://www.runoob.com/markdown/md-draw.html)，并结合本博客主题做了可读性优化。

>[!NOTE]
> Mermaid 采用按需加载。只有包含 Mermaid 代码块的页面才会加载 Mermaid 脚本。

## 快速开始

使用语言标识为 `mermaid` 的代码块：

````markdown
```mermaid
classDiagram
  class GameObject {
    +id: Guid
    +update(dt)
  }
```
````

## UML 示例（代码与图一一对应）

以下每个案例都采用“代码”+“效果图”成对展示，并选取更典型的业务场景，方便直接复制和对照。

### 1. 流程图（发布流程）

代码：

````markdown
```mermaid
flowchart TD
  A[编辑 Markdown] --> B[提交仓库]
  B --> C[触发 Hugo 构建]
  C --> D{是否包含 mermaid 代码块}
  D -- 否 --> E[输出普通页面]
  D -- 是 --> F[按需加载 Mermaid]
  F --> G[渲染 SVG 图表]
  G --> H[发布站点]
```
````

效果：

```mermaid
flowchart TD
  A[编辑 Markdown] --> B[提交仓库]
  B --> C[触发 Hugo 构建]
  C --> D{是否包含 mermaid 代码块}
  D -- 否 --> E[输出普通页面]
  D -- 是 --> F[按需加载 Mermaid]
  F --> G[渲染 SVG 图表]
  G --> H[发布站点]
```

### 2. 时序图（页面请求链路）

代码：

````markdown
```mermaid
sequenceDiagram
  actor 用户
  participant 浏览器
  participant 博客站点

  用户->>浏览器: 打开文章页面
  浏览器->>博客站点: 请求 HTML
  博客站点-->>浏览器: 返回包含 Mermaid 源码的页面
  浏览器->>浏览器: 初始化 Mermaid
  浏览器-->>用户: 渲染 UML 图
```
````

效果：

```mermaid
sequenceDiagram
  actor 用户
  participant 浏览器
  participant 博客站点

  用户->>浏览器: 打开文章页面
  浏览器->>博客站点: 请求 HTML
  博客站点-->>浏览器: 返回包含 Mermaid 源码的页面
  浏览器->>浏览器: 初始化 Mermaid
  浏览器-->>用户: 渲染 UML 图
```

### 3. 类图（对象职责）

代码：

````markdown
```mermaid
classDiagram
class 用户 {
  +打开文章页面(url)
}

class 浏览器 {
  +请求HTML(url)
  +初始化Mermaid()
  +渲染UML图(source)
}

class 博客站点 {
  +返回包含Mermaid源码的页面(path)
}

class Mermaid渲染器 {
  +initialize(config)
  +run(source)
}

用户 --> 浏览器 : 打开文章页面
浏览器 --> 博客站点 : 请求HTML
博客站点 --> 浏览器 : 返回Mermaid源码
浏览器 --> Mermaid渲染器 : 初始化并渲染
```
````

效果：

```mermaid
classDiagram
class 用户 {
  +打开文章页面(url)
}

class 浏览器 {
  +请求HTML(url)
  +初始化Mermaid()
  +渲染UML图(source)
}

class 博客站点 {
  +返回包含Mermaid源码的页面(path)
}

class Mermaid渲染器 {
  +initialize(config)
  +run(source)
}

用户 --> 浏览器 : 打开文章页面
浏览器 --> 博客站点 : 请求HTML
博客站点 --> 浏览器 : 返回Mermaid源码
浏览器 --> Mermaid渲染器 : 初始化并渲染
```

### 4. 状态图（渲染状态迁移）

代码：

````markdown
```mermaid
stateDiagram-v2
  [*] --> 打开文章页面
  打开文章页面 --> 请求HTML
  请求HTML --> 返回包含Mermaid源码的页面
  返回包含Mermaid源码的页面 --> 初始化Mermaid
  初始化Mermaid --> 渲染UML图
  渲染UML图 --> [*]
```
````

效果：

```mermaid
stateDiagram-v2
  [*] --> 打开文章页面
  打开文章页面 --> 请求HTML
  请求HTML --> 返回包含Mermaid源码的页面
  返回包含Mermaid源码的页面 --> 初始化Mermaid
  初始化Mermaid --> 渲染UML图
  渲染UML图 --> [*]
```

### 5. 甘特图（项目排期）

代码：

````markdown
```mermaid
gantt
  title Mermaid 接入计划
  dateFormat  YYYY-MM-DD
  axisFormat  %m-%d
  section 开发
  模板接入           :done,    d1, 2026-07-10, 2026-07-11
  主题样式调优       :active,  d2, 2026-07-11, 2026-07-12
  section 验证
  中英文页面校验     :         d3, 2026-07-12, 2026-07-13
  深浅色模式回归     :         d4, 2026-07-13, 2026-07-14
```
````

效果：

```mermaid
gantt
  title Mermaid 接入计划
  dateFormat  YYYY-MM-DD
  axisFormat  %m-%d
  section 开发
  模板接入           :done,    d1, 2026-07-10, 2026-07-11
  主题样式调优       :active,  d2, 2026-07-11, 2026-07-12
  section 验证
  中英文页面校验     :         d3, 2026-07-12, 2026-07-13
  深浅色模式回归     :         d4, 2026-07-13, 2026-07-14
```

### 6. 饼图（构成占比）

代码：

````markdown
```mermaid
pie title 本文图表示例分布
  "流程与时序" : 35
  "类图与状态图" : 35
  "计划与统计" : 30
```
````

效果：

```mermaid
pie title 本文图表示例分布
  "流程与时序" : 35
  "类图与状态图" : 35
  "计划与统计" : 30
```

## 写作建议

1. 每张图聚焦一个主题，尽量拆分为多张小图。
2. 技术文章优先使用英文标识符，便于和代码命名保持一致。
3. 标签文本过长时，建议缩短并把细节写在图外正文，避免在小屏上重叠。
4. 图过宽时容器支持横向滚动，无需手动缩放字体。
5. 新增示例时，先在本地 `hugo -D` 验证，再发布。

## 常见问题

>[!TIP]
> 图不显示时，优先打开浏览器控制台查看 Mermaid 语法错误。

1. Mermaid 关键字拼写错误会导致该图渲染失败。
2. 代码块语言必须精确写成 `mermaid`。
3. 同一个 Mermaid 代码块内不要混用 Tab 与空格。
4. 切换主题后图表会自动重渲染，颜色会同步当前模式。
5. 若图表不显示，先检查语法再检查网络（CDN 是否可访问）。

## 兼容性说明

- 当前仅支持 Mermaid 语法。
- 暂未启用 PlantUML 或 Kroki。
- Mermaid 资源会按页面按需加载。
