# BigDataTechniquesNavigator 开发指南

## 目录

1. [项目概述](#项目概述)
2. [项目结构](#项目结构)
3. [添加新技术](#添加新技术)
4. [添加新语言支持](#添加新语言支持)
5. [常见问题和解决方案](#常见问题和解决方案)
6. [最佳实践](#最佳实践)

## 项目概述

BigDataTechniquesNavigator 是一个多语言大数据技术导航平台，旨在帮助用户了解、比较和选择适合自己需求的大数据技术。该平台支持多种语言，包括英语、中文、法语、德语和西班牙语等。

## 项目结构

项目主要由以下部分组成：

- `app/`: 包含所有页面组件
  - `page.tsx`: 首页
  - `technologies/`: 技术列表和详情页
  - `comparison/`: 技术比较页面
  - `installation/`: 安装指南页面
  - `resources/`: 学习资源页面
  - `about/`, `contact/`, `privacy/`: 其他信息页面
- `components/`: 包含可复用组件
- `config/`: 包含配置文件
  - `technologies.ts`: 技术数据配置
  - `versions.ts`: 版本历史配置
  - `resources.ts`: 学习资源配置
- `lib/`: 包含工具函数和类型定义
  - `i18n/`: 包含翻译文件
- `contexts/`: 包含React上下文
  - `language-context.tsx`: 语言上下文

## 添加新技术

要添加新的大数据技术，需要修改以下文件：

### 1. 更新 `config/technologies.ts`

在 `technologies` 数组中添加新技术的详细信息：

\`\`\`typescript
{
  id: "new-tech",  // 技术ID，用于URL和引用
  name: "New Technology",  // 技术名称
  icon: "Database",  // 图标名称，从iconMap中选择
  description: {
    en: "English description",
    zh: "中文描述",
    // 添加其他语言的描述
  },
  category: "collection",  // 技术类别：collection, processing, visualization
  initialRelease: "2020",  // 初始发布年份
  latestVersion: "1.0.0",  // 最新版本
  developedBy: "Organization",  // 开发组织
  website: "https://example.com",  // 官方网站
  github: "https://github.com/example/repo",  // GitHub仓库
  documentation: "https://example.com/docs",  // 文档链接
  systemRequirements: {
    en: "System requirements in English",
    zh: "系统要求中文描述",
    // 添加其他语言的系统要求
  },
  quickInstall: {
    en: "Quick install instructions in English",
    zh: "快速安装中文说明",
    // 添加其他语言的快速安装说明
  },
  dockerCommand: "docker run example/image",  // Docker命令
  downloadLink: "https://example.com/download",  // 下载链接
  releaseNotesLink: "https://example.com/releases",  // 发布说明链接
  features: {
    en: ["Feature 1", "Feature 2"],
    zh: ["特性1", "特性2"],
    // 添加其他语言的特性列表
  },
  useCases: {
    en: ["Use case 1", "Use case 2"],
    zh: ["用例1", "用例2"],
    // 添加其他语言的用例列表
  },
}
\`\`\`

### 2. 更新 `config/versions.ts`

在 `versionHistories` 对象中添加新技术的版本历史：

\`\`\`typescript
"new-tech": [
  {
    version: "1.0.0",
    date: { en: "January 2023", zh: "2023年1月" },
    highlights: {
      en: ["Feature 1", "Feature 2"],
      zh: ["特性1", "特性2"],
      // 添加其他语言的亮点
    },
  },
  // 添加更多版本
]
\`\`\`

### 3. 更新 `config/resources.ts`

在 `resources` 数组中添加新技术的学习资源：

\`\`\`typescript
// 在documentation类别中添加
{
  title: { en: "New Technology Documentation", zh: "新技术文档" },
  description: { en: "Official documentation for New Technology", zh: "新技术官方文档" },
  link: "https://example.com/docs",
  icon: "BookOpen",
},

// 在tutorials类别中添加
{
  title: { en: "New Technology Tutorial", zh: "新技术教程" },
  description: { en: "Getting started with New Technology", zh: "新技术入门指南" },
  link: "https://example.com/tutorial",
  icon: "FileText",
},

// 在videos类别中添加
{
  title: { en: "New Technology Video Tutorials", zh: "新技术视频教程" },
  description: { en: "Video tutorials for learning New Technology", zh: "学习新技术的视频教程" },
  link: "https://youtube.com/example",
  icon: "Video",
},

// 在community类别中添加
{
  title: { en: "New Technology GitHub", zh: "新技术 GitHub" },
  description: { en: "New Technology source code and community", zh: "新技术源代码和社区" },
  link: "https://github.com/example/repo",
  icon: "Github",
},
\`\`\`

## 添加新语言支持

要添加新的语言支持，需要修改以下文件：

### 1. 更新 `contexts/language-context.tsx`

在 `LanguageProvider` 组件中添加新语言：

\`\`\`typescript
// 添加新语言到语言列表
const languages = ["en", "zh", "fr", "de", "es", "new-lang"];

// 添加新语言的显示名称
const languageNames = {
  en: "English",
  zh: "中文",
  fr: "Français",
  de: "Deutsch",
  es: "Español",
  "new-lang": "New Language",
};
\`\`\`

### 2. 更新所有翻译文件

需要在以下文件中添加新语言的翻译：

- `lib/i18n/common.ts`
- `lib/i18n/technologies.ts`
- `lib/i18n/comparison.ts`
- `lib/i18n/installation.ts`
- `lib/i18n/resources.ts`
- `lib/i18n/about.ts`
- `lib/i18n/contact.ts`
- `lib/i18n/privacy.ts`
- `lib/i18n/home.ts`

例如，在 `lib/i18n/common.ts` 中添加新语言的翻译：

\`\`\`typescript
export const common = {
  en: {
    // 英文翻译
  },
  zh: {
    // 中文翻译
  },
  "new-lang": {
    home: "Home in new language",
    technologies: "Technologies in new language",
    // 添加其他翻译
  }
};
\`\`\`

### 3. 更新技术数据中的多语言字段

在 `config/technologies.ts` 和 `config/versions.ts` 中，为所有多语言字段添加新语言的翻译：

\`\`\`typescript
description: {
  en: "English description",
  zh: "中文描述",
  "new-lang": "Description in new language",
},
\`\`\`

## 常见问题和解决方案

### 1. 切换语言时出现错误

**问题**：切换语言时出现"Cannot read properties of undefined"错误。

**解决方案**：
- 使用`safeT`函数代替`t`函数，提供默认值
- 确保所有翻译键在所有语言中都存在
- 为多语言字段添加回退机制

### 2. 资源卡片不显示

**问题**：在某些语言下，资源卡片不显示。

**解决方案**：
- 使用回退机制：`item.title[language] || item.title.en`
- 确保所有资源都有英文标题和描述作为回退

### 3. 技术详情页面显示不完整

**问题**：在某些语言下，技术详情页面显示不完整。

**解决方案**：
- 确保所有技术数据的多语言字段都有英文版本作为回退
- 使用条件渲染，只在数据存在时显示相应部分

## 最佳实践

1. **始终使用`safeT`函数**：使用`safeT`函数代替`t`函数，并提供默认值，确保即使翻译缺失也能显示内容。

2. **为多语言字段添加回退机制**：使用`item.title[language] || item.title.en`这样的模式，确保在特定语言的翻译缺失时，回退到英文版本。

3. **保持翻译键的一致性**：在所有翻译文件中使用相同的翻译键，避免拼写错误或不一致。

4. **添加新技术时更新所有相关文件**：添加新技术时，确保同时更新`technologies.ts`、`versions.ts`和`resources.ts`文件。

5. **添加新语言时更新所有翻译文件**：添加新语言时，确保在所有翻译文件中添加该语言的翻译。

6. **使用条件渲染**：在渲染依赖于可能缺失数据的组件时，使用条件渲染，避免错误。

7. **定期检查翻译完整性**：使用工具或手动检查，确保所有翻译键在所有语言中都存在。

8. **提供有意义的默认值**：在使用`safeT`函数时，提供有意义的默认值，而不仅仅是翻译键本身。
