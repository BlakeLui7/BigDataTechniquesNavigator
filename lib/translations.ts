import { safeT as safeTranslate, t as translate, type LanguageKey, type TranslationKey } from "./i18n"

export const translations = {
  en: {
    // Common
    appName: "BigData Navigator",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    systemMode: "System Mode",
    english: "English",
    chinese: "Chinese",

    // Navigation
    home: "Home",
    technologies: "Technologies",
    comparison: "Comparison",
    installation: "Installation",
    resources: "Resources",
    about: "About",
    contact: "Contact",
    privacy: "Privacy",

    // Home page
    heroTitle: "Big Data Technologies Navigator",
    heroSubtitle: "Your comprehensive guide to modern data collection, processing, and visualization tools.",
    exploreTechnologies: "Explore Technologies",
    featuredTechnologies: "Featured Technologies",
    featuredDescription: "Explore the most popular big data technologies used in modern data pipelines.",
    dataCollection: "Data Collection",
    dataCollectionDesc: "Tools and technologies for gathering and ingesting data from various sources.",
    dataProcessing: "Data Processing",
    dataProcessingDesc: "Solutions for transforming, enriching, and analyzing large volumes of data.",
    dataVisualization: "Data Visualization",
    dataVisualizationDesc: "Platforms for creating interactive dashboards and visual representations of data.",
    documentation: "Documentation",
    documentationDesc: "Comprehensive guides, tutorials, and reference materials for each technology.",

    // Technologies page
    technologiesTitle: "Technologies",
    technologiesSubtitle: "Explore the most popular big data technologies used in modern data pipelines.",
    filter: "Filter",
    categories: "Categories",
    latestVersionInfo: "Latest Version Information",
    latestVersionDesc: "Check for the latest versions of big data technologies",
    versionNote: "Note about version information",
    versionNoteDesc:
      "This is a demonstration of how you could implement real-time version checking. In a production environment, you would integrate with the official APIs or RSS feeds of each technology to fetch the latest version information.",
    checkVersions: "Check Latest Versions",
    checkingVersions: "Checking versions...",

    // Technology details
    backToTechnologies: "Back to Technologies",
    website: "Website",
    github: "GitHub",
    docs: "Docs",
    overview: "Overview",
    features: "Features",
    useCases: "Use Cases",
    versions: "Versions",
    about: "About",
    keyFeatures: "Key Features",
    whatMakesStandOut: "What makes {name} stand out",
    commonUseCases: "Common Use Cases",
    howUsedInProduction: "How {name} is used in production",
    versionHistory: "Version History",
    releaseTimeline: "Release timeline and major updates",
    quickInfo: "Quick Info",
    initialRelease: "Initial Release",
    latestVersion: "Latest Version",
    developedBy: "Developed By",
    category: "Category",
    relatedTechnologies: "Related Technologies",

    // Installation page
    installationTitle: "Installation Guides",
    installationSubtitle:
      "Step-by-step installation guides for big data technologies including standalone and containerized options",
    installationOptions: "Installation options for {name}",
    standalone: "Standalone",
    container: "Container",
    systemRequirements: "System Requirements",
    quickInstall: "Quick Install",
    docker: "Docker",
    dockerCompose: "Docker Compose",
    dockerComposeDesc:
      "Available in the official GitHub repository with sample configurations for production deployments.",
    officialInstallGuide: "Official installation guide",
    versionUpdateResources: "Version Update Resources",
    versionUpdateDesc: "Official resources for staying up-to-date with the latest versions",
    officialReleasePages: "Official Release Pages",
    releaseNotesChangelogs: "Release Notes & Changelogs",
    downloads: "Downloads",
    releaseNotes: "Release Notes",
    keepingUpToDate: "Keeping Technologies Up-to-Date",
    upToDateDesc: "Best practices for updating your big data infrastructure",

    // Resources page
    resourcesTitle: "Learning Resources",
    resourcesSubtitle: "Curated resources to help you learn and master big data technologies",
    tutorials: "Tutorials",
    videos: "Videos",
    community: "Community",
    visitResource: "Visit resource",

    // Footer
    copyright: "© {year} BigData Technologies Navigator. All rights reserved.",

    // Misc
    learnMore: "Learn more",
    showDetails: "Show details",
    hideDetails: "Hide details",
  },
  zh: {
    // Common
    appName: "大数据技术导航",
    darkMode: "深色模式",
    lightMode: "浅色模式",
    systemMode: "系统模式",
    english: "英文",
    chinese: "中文",

    // Navigation
    home: "首页",
    technologies: "技术",
    comparison: "比较",
    installation: "安装",
    resources: "资源",
    about: "关于",
    contact: "联系我们",
    privacy: "隐私政策",

    // Home page
    heroTitle: "大数据技术导航",
    heroSubtitle: "您的现代数据采集、处理和可视化工具的综合指南。",
    exploreTechnologies: "探索技术",
    featuredTechnologies: "特色技术",
    featuredDescription: "探索现代数据管道中使用的最流行的大数据技术。",
    dataCollection: "数据采集",
    dataCollectionDesc: "用于从各种来源收集和摄取数据的工具和技术。",
    dataProcessing: "数据处理",
    dataProcessingDesc: "用于转换、丰富和分析大量数据的解决方案。",
    dataVisualization: "数据可视化",
    dataVisualizationDesc: "用于创建交互式仪表板和数据可视化表示的平台。",
    documentation: "文档",
    documentationDesc: "每种技术的综合指南、教程和参考资料。",

    // Technologies page
    technologiesTitle: "技术",
    technologiesSubtitle: "探索现代数据管道中使用的最流行的大数据技术。",
    filter: "筛选",
    categories: "类别",
    latestVersionInfo: "最新版本信息",
    latestVersionDesc: "检查大数据技术的最新版本",
    versionNote: "关于版本信息的说明",
    versionNoteDesc:
      "这是如何实现实时版本检查的演示。在生产环境中，您将与每种技术的官方API或RSS提要集成，以获取最新的版本信息。",
    checkVersions: "检查最新版本",
    checkingVersions: "正在检查版本...",

    // Technology details
    backToTechnologies: "返回技术列表",
    website: "网站",
    github: "GitHub",
    docs: "文档",
    overview: "概述",
    features: "特性",
    useCases: "使用场景",
    versions: "版本",
    about: "关于",
    keyFeatures: "主要特性",
    whatMakesStandOut: "{name}的突出之处",
    commonUseCases: "常见使用场景",
    howUsedInProduction: "{name}在生产中的使用方式",
    versionHistory: "版本历史",
    releaseTimeline: "发布时间线和主要更新",
    quickInfo: "快速信息",
    initialRelease: "初始发布",
    latestVersion: "最新版本",
    developedBy: "开发者",
    category: "类别",
    relatedTechnologies: "相关技术",

    // Installation page
    installationTitle: "安装指南",
    installationSubtitle: "大数据技术的分步安装指南，包括独立和容器化选项",
    installationOptions: "{name}的安装选项",
    standalone: "独立安装",
    container: "容器化",
    systemRequirements: "系统要求",
    quickInstall: "快速安装",
    docker: "Docker",
    dockerCompose: "Docker Compose",
    dockerComposeDesc: "官方GitHub存储库中提供了生产部署的示例配置。",
    officialInstallGuide: "官方安装指南",
    versionUpdateResources: "版本更新资源",
    versionUpdateDesc: "保持最新版本的官方资源",
    officialReleasePages: "官方发布页面",
    releaseNotesChangelogs: "发布说明和变更日志",
    downloads: "下载",
    releaseNotes: "发布说明",
    keepingUpToDate: "保持技术更新",
    upToDateDesc: "更新大数据基础设施的最佳实践",

    // Resources page
    resourcesTitle: "学习资源",
    resourcesSubtitle: "精选资源，帮助您学习和掌握大数据技术",
    tutorials: "教程",
    videos: "视频",
    community: "社区",
    visitResource: "访问资源",

    // Footer
    copyright: "© {year} 大数据技术导航。保留所有权利。",

    // Misc
    learnMore: "了解更多",
    showDetails: "显示详情",
    hideDetails: "隐藏详情",
  },
}

// 重新导出翻译函数，保持向后兼容性
export { safeTranslate as safeT, translate as t }
export type { LanguageKey, TranslationKey }

// 导出原始的translations对象，以便在需要时直接访问;
