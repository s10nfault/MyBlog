---
title: "Mermaid UML Guide"
date: 2026-07-11
draft: false
tags: ["mermaid", "uml", "documentation"]
archives: ["2026-07"]
categories: ["documentation"]
author: "q1w264"
description: "How to write Mermaid UML diagrams in this blog, with practical examples and troubleshooting tips."
contentType: repost
sourceTitle: "Runoob - Markdown Mermaid Diagrams"
sourceUrl: "https://www.runoob.com/markdown/md-draw.html"
---

>[!TIP]
> **修改**: This guide has been revised with richer Mermaid examples and a complete repost source link.

This page explains how to write Mermaid diagrams on this site. Example patterns are adapted from [Runoob Mermaid tutorial](https://www.runoob.com/markdown/md-draw.html) and adjusted for this blog theme.

>[!NOTE]
> Mermaid is loaded only on pages that contain Mermaid code fences, so normal pages keep the same loading performance.

## Quick Start

Use a fenced code block with language `mermaid`:

````markdown
```mermaid
classDiagram
  class GameObject {
    +id: Guid
    +update(dt)
  }
```
````

## UML Examples (Code and Diagram Paired)

Each scenario is shown as a pair: source code first, then the rendered chart below it.

### 1. Flowchart (Publish Pipeline)

Code:

````markdown
```mermaid
flowchart TD
  A[Edit Markdown] --> B[Push to repository]
  B --> C[Run Hugo build]
  C --> D{Contains mermaid block?}
  D -- No --> E[Render normal page]
  D -- Yes --> F[Load Mermaid on demand]
  F --> G[Render SVG diagram]
  G --> H[Publish site]
```
````

Diagram:

```mermaid
flowchart TD
  A[Edit Markdown] --> B[Push to repository]
  B --> C[Run Hugo build]
  C --> D{Contains mermaid block?}
  D -- No --> E[Render normal page]
  D -- Yes --> F[Load Mermaid on demand]
  F --> G[Render SVG diagram]
  G --> H[Publish site]
```

### 2. Sequence Diagram (Request Lifecycle)

Code:

````markdown
```mermaid
sequenceDiagram
  actor User
  participant Browser
  participant Blog

  User->>Browser: Open article page
  Browser->>Blog: Request HTML
  Blog-->>Browser: Return Mermaid source
  Browser->>Browser: Initialize Mermaid
  Browser-->>User: Render UML diagram
```
````

Diagram:

```mermaid
sequenceDiagram
  actor User
  participant Browser
  participant Blog

  User->>Browser: Open article page
  Browser->>Blog: Request HTML
  Blog-->>Browser: Return Mermaid source
  Browser->>Browser: Initialize Mermaid
  Browser-->>User: Render UML diagram
```

### 3. Class Diagram (Responsibility Model)

Code:

````markdown
```mermaid
classDiagram
class User {
  +openArticlePage(url)
}

class Browser {
  +requestHtml(url)
  +initializeMermaid()
  +renderUmlDiagram(source)
}

class Blog {
  +serveHtmlWithMermaidSource(path)
}

class MermaidRenderer {
  +initialize(config)
  +run(source)
}

User --> Browser : Open article page
Browser --> Blog : Request HTML
Blog --> Browser : Return Mermaid source
Browser --> MermaidRenderer : Initialize and render
```
````

Diagram:

```mermaid
classDiagram
class User {
  +openArticlePage(url)
}

class Browser {
  +requestHtml(url)
  +initializeMermaid()
  +renderUmlDiagram(source)
}

class Blog {
  +serveHtmlWithMermaidSource(path)
}

class MermaidRenderer {
  +initialize(config)
  +run(source)
}

User --> Browser : Open article page
Browser --> Blog : Request HTML
Blog --> Browser : Return Mermaid source
Browser --> MermaidRenderer : Initialize and render
```

### 4. State Diagram (Render State Transition)

Code:

````markdown
```mermaid
stateDiagram-v2
  [*] --> OpenArticlePage
  OpenArticlePage --> RequestHtml
  RequestHtml --> ReturnMermaidSource
  ReturnMermaidSource --> InitializeMermaid
  InitializeMermaid --> RenderUmlDiagram
  RenderUmlDiagram --> [*]
```
````

Diagram:

```mermaid
stateDiagram-v2
  [*] --> OpenArticlePage
  OpenArticlePage --> RequestHtml
  RequestHtml --> ReturnMermaidSource
  ReturnMermaidSource --> InitializeMermaid
  InitializeMermaid --> RenderUmlDiagram
  RenderUmlDiagram --> [*]
```

### 5. Gantt Chart (Project Schedule)

Code:

````markdown
```mermaid
gantt
  title Mermaid Integration Timeline
  dateFormat  YYYY-MM-DD
  axisFormat  %m-%d
  section Development
  Template integration   :done,   d1, 2026-07-10, 2026-07-11
  Theme style tuning     :active, d2, 2026-07-11, 2026-07-12
  section Validation
  Bilingual checks       :        d3, 2026-07-12, 2026-07-13
  Light/Dark regression  :        d4, 2026-07-13, 2026-07-14
```
````

Diagram:

```mermaid
gantt
  title Mermaid Integration Timeline
  dateFormat  YYYY-MM-DD
  axisFormat  %m-%d
  section Development
  Template integration   :done,   d1, 2026-07-10, 2026-07-11
  Theme style tuning     :active, d2, 2026-07-11, 2026-07-12
  section Validation
  Bilingual checks       :        d3, 2026-07-12, 2026-07-13
  Light/Dark regression  :        d4, 2026-07-13, 2026-07-14
```

### 6. Pie Chart (Workload Distribution)

Code:

````markdown
```mermaid
pie title Diagram Example Distribution
  "Flow and Sequence" : 35
  "Class and State" : 35
  "Planning and Stats" : 30
```
````

Diagram:

```mermaid
pie title Diagram Example Distribution
  "Flow and Sequence" : 35
  "Class and State" : 35
  "Planning and Stats" : 30
```

## Writing Tips

1. Keep each diagram focused on one concern. Use multiple small diagrams instead of one huge diagram.
2. Prefer English identifiers in diagrams for easier maintenance in code-related posts.
3. For long labels, break them into shorter names and describe details in surrounding text.
4. If a diagram is too wide, Mermaid container supports horizontal scrolling automatically.
5. Validate with `hugo -D` before publishing new examples.

## Troubleshooting

>[!TIP]
> If a diagram does not render, check browser console first. Mermaid syntax errors are shown there.

1. A typo in Mermaid keywords can break rendering of that diagram.
2. Make sure the code fence language is exactly `mermaid`.
3. Do not mix tabs and spaces in one Mermaid block.
4. If theme is changed, diagrams are re-rendered automatically to match the current mode.
5. If diagrams fail to render, check syntax first, then check CDN accessibility.

## Compatibility Notes

- Current implementation supports Mermaid syntax only.
- PlantUML or Kroki is not enabled yet.
- Mermaid resources are loaded conditionally per page.
