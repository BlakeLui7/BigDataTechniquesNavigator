# 大数据技术导航 - 开发文档

本文档提供了大数据技术导航项目的详细开发指南，包括项目结构、关键组件和开发流程。

## 项目概述

大数据技术导航是一个提供大数据相关技术信息的网站，包括数据收集、处理和可视化技术。该项目使用Next.js构建，支持多语言（中文和英文）以及深色/浅色主题切换。

## 项目结构

\`\`\`
/
├── app/                    # Next.js应用目录
│   ├── api/                # API路由
│   │   ├── technologies/   # 技术相关API
│   │   └── versions/       # 版本相关API
│   ├── comparison/         # 技术比较页面
│   ├── installation/       # 安装指南页面
│   ├── resources/          # 资源页面
│   ├── technologies/       # 技术列表和详情页面
│   ├── globals.css         # 全局样式
│   ├── layout.tsx          # 根布局组件
│   └── page.tsx            # 首页
├── components/             # 可复用组件
│   ├── ui/                 # UI组件（来自shadcn/ui）
│   ├── footer.tsx          # 页脚组件
│   ├── header.tsx          # 页头组件
│   ├── language-selector.tsx # 语言选择器组件
│   ├── tech-filter.tsx     # 技术过滤器组件
│   ├── tech-grid.tsx       # 技术网格组件
│   ├── version-fetcher.tsx # 版本获取器组件
│   └── version-history.tsx # 版本历史组件
├── config/                 # 配置文件
│   ├── api-endpoints.ts    # API端点配置
│   ├── technologies.ts     # 技术数据配置
│   ├── versions.ts         # 版本历史配置
│   ├── resources.ts        # 学习资源配置
│   └── privacy.ts          # 隐私政策配置
├── contexts/               # React上下文
│   └── language-context.tsx # 语言上下文
├── docs/                   # 文档
│   └── development-guide.md # 开发指南
├── lib/                    # 工具库
│   ├── i18n/               # 国际化翻译文件
│   │   ├── index.ts        # 翻译入口文件
│   │   ├── common.ts       # 通用翻译
│   │   ├── home.ts         # 首页翻译
│   │   ├── technologies.ts # 技术页面翻译
│   │   ├── comparison.ts   # 比较页面翻译
│   │   ├── installation.ts # 安装页面翻译
│   │   └── resources.ts    # 资源页面翻译
│   └── utils.ts            # 通用工具函数
├── public/                 # 静态资源
│   ├── images/             # 图片资源
│   ├── robots.txt          # 搜索引擎爬虫配置
│   └── sitemap.xml         # 网站地图
├── services/               # 服务层
│   ├── api-service.ts      # API服务
│   ├── tech-service.ts     # 技术数据服务
│   └── version-service.ts  # 版本数据服务
└── tailwind.config.ts      # Tailwind CSS配置
\`\`\`

## 关键组件和文件说明

### 配置文件

1. **config/technologies.ts**
   - 包含所有技术的详细信息，包括中英文描述
   - 在实际应用中，这些数据可以通过API动态获取

2. **config/versions.ts**
   - 包含所有技术的版本历史信息，支持多语言
   - 在实际应用中，这些数据可以通过API动态获取

3. **config/resources.ts**
   - 包含所有学习资源的详细信息
   - 在实际应用中，这些数据可以通过API动态获取

4. **config/privacy.ts**
   - 包含隐私政策页面的详细信息
   - 在实际应用中，这些数据可以通过API动态获取

5. **config/api-endpoints.ts**
   - 定义所有API端点的配置
   - 包括URL、请求方法、超时时间等
   - 当需要添加新的API端点时，只需在此文件中添加配置

### API服务

1. **services/api-service.ts**
   - 提供与API交互的通用方法
   - 使用apiEndpoints配置来构建请求URL和设置请求选项
   - 包含针对各种API端点的专用方法
   - 支持自定义API请求

### 国际化系统

1. **lib/i18n/index.ts**
   - 翻译系统的入口文件
   - 合并所有翻译模块并提供翻译函数

2. **lib/i18n/common.ts, home.ts, technologies.ts, etc.**
   - 按功能区域分离的翻译文件
   - 每个文件包含特定页面或功能的翻译内容
   - 支持中文和英文，可轻松扩展到其他语言

3. **contexts/language-context.tsx**
   - 提供语言切换和存储功能
   - 支持中文和英文，可扩展支持更多语言

4. **components/language-selector.tsx**
   - 语言选择器UI组件

### 服务层

1. **services/tech-service.ts**
   - 提供获取技术信息的方法
   - 首先尝试从API获取数据，如果失败则回退到静态配置数据

2. **services/version-service.ts**
   - 提供获取版本信息的方法
   - 首先尝试从API获取数据，如果失败则回退到静态配置数据

### API路由

1. **app/api/technologies/route.ts**
   - 获取所有技术信息的API端点

2. **app/api/technologies/[id]/route.ts**
   - 获取特定技术信息的API端点

3. **app/api/versions/[id]/route.ts**
   - 获取特定技术版本历史的API端点

4. **app/api/versions/latest/route.ts**
   - 获取所有技术最新版本的API端点

5. **app/api/versions/latest/[id]/route.ts**
   - 获取特定技术最新版本的API端点

6. **app/api/versions/[id]/[version]/route.ts**
   - 获取特定技术的特定版本详情的API端点

### 主题

1. **components/theme-provider.tsx**
   - 提供主题切换功能
   - 支持浅色、深色和系统主题

2. **app/globals.css**
   - 定义主题颜色变量
   - 支持浅色和深色模式

## 扩展指南

### 添加新技术

要添加新的技术，只需在`config/technologies.ts`中添加新技术的详细信息，系统会自动在所有相关页面中显示该技术。具体步骤如下：

1. 在`config/technologies.ts`中的`technologies`数组中添加新技术的信息，确保包含所有必要字段，包括中英文描述
2. 在`config/versions.ts`中的`versionHistories`对象中添加新技术的版本历史信息
3. 如果需要，在`config/resources.ts`中添加与新技术相关的学习资源

示例：添加一个名为"Apache Hadoop"的新技术

\`\`\`typescript
// 在config/technologies.ts中添加
{
  id: "hadoop",
  name: "Apache Hadoop",
  icon: "Database",
  description: {
    en: "An open-source framework for distributed storage and processing of large datasets.",
    zh: "一个用于分布式存储和处理大型数据集的开源框架。",
  },
  category: "processing",
  initialRelease: "2006",
  latestVersion: "3.3.4 (2022)",
  developedBy: "Apache Software Foundation",
  website: "https://hadoop.apache.org/",
  github: "https://github.com/apache/hadoop",
  documentation: "https://hadoop.apache.org/docs/current/",
  systemRequirements: {
    en: "Java 8+, Linux/Unix environment",
    zh: "Java 8+，Linux/Unix环境",
  },
  quickInstall: {
    en: "Download and extract the latest release, configure hadoop-env.sh, run bin/hadoop",
    zh: "下载并解压最新版本，配置hadoop-env.sh，运行bin/hadoop",
  },
  dockerCommand: "docker run -p 9000:9000 -p 9870:9870 apache/hadoop:3",
  downloadLink: "https://hadoop.apache.org/releases.html",
  releaseNotesLink: "https://hadoop.apache.org/release/",
  features: {
    en: [
      "Distributed file system (HDFS)",
      "MapReduce programming model",
      "YARN resource management",
      "Common utilities and libraries",
      "High scalability and fault tolerance",
    ],
    zh: [
      "分布式文件系统（HDFS）",
      "MapReduce编程模型",
      "YARN资源管理",
      "通用工具和库",
      "高可扩展性和容错性",
    ],
  },
  useCases: {
    en: [
      "Big data analytics",
      "Data warehousing",
      "Log processing",
      "Machine learning",
      "ETL operations",
    ],
    zh: [
      "大数据分析",
      "数据仓库",
      "日志处理",
      "机器学习",
      "ETL操作",
    ],
  },
}

// 在config/versions.ts中添加
hadoop: [
  {
    version: "3.3.4",
    date: {
      en: "July 2022",
      zh: "2022年7月",
    },
    highlights: {
      en: [
        "Security improvements",
        "Performance optimizations",
        "Bug fixes and stability improvements",
        "Support for newer Java versions",
      ],
      zh: [
        "安全性改进",
        "性能优化",
        "错误修复和稳定性改进",
        "支持更新的Java版本",
      ],
    },
  },
  // 添加更多版本...
]
\`\`\`

添加完成后，新技术将自动出现在以下页面：

- 技术列表页
- 技术详情页
- 技术比较页
- 安装指南页
- 版本信息页

系统会自动处理新技术的显示，无需修改任何组件代码。这是因为所有组件都是从配置文件中动态获取数据的。

### 添加新的API端点

要添加新的API端点，请按照以下步骤操作：

1. 在`config/api-endpoints.ts`中的`apiEndpoints`对象中添加新端点的配置
2. 在`services/api-service.ts`中添加对应的方法（可选）
3. 在`app/api`目录下创建对应的API路由处理程序

示例：添加获取技术兼容性信息的API端点

\`\`\`typescript
// 在config/api-endpoints.ts中添加
getCompatibilityInfo: {
  url: '/api/compatibility/{techId}',
  method: 'GET',
  timeout: 5000,
  description: '获取特定技术的兼容性信息'
},

// 在services/api-service.ts中添加方法
static async getCompatibilityInfo(techId: string) {
  return this.request(apiEndpoints.getCompatibilityInfo, { techId });
}

// 创建app/api/compatibility/[id]/route.ts文件
import { NextResponse } from "next/server"
import { compatibilityInfo } from "@/config/compatibility" // 假设有这个配置文件

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const techId = params.id;
    const compatibility = compatibilityInfo[techId] || null;
    
    if (!compatibility) {
      return NextResponse.json({ 
        success: false, 
        error: `未找到技术 ${techId} 的兼容性信息` 
      }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      data: compatibility
    });
  } catch (error) {
    console.error("获取兼容性信息失败:", error);
    return NextResponse.json({ 
      success: false, 
      error: "获取兼容性信息失败" 
    }, { status: 500 });
  }
}
\`\`\`

### 添加新的语言

要添加新的语言支持，请按照以下步骤操作：

1. 在每个`lib/i18n/*.ts`文件中添加新语言的翻译
2. 在`lib/i18n/index.ts`中更新`translations`对象，添加新语言
3. 在`contexts/language-context.tsx`中更新`Language`类型定义
4. 在`components/language-selector.tsx`中添加新语言选项

例如，添加法语支持：

\`\`\`typescript
// 在每个翻译文件中添加法语翻译
export const common = {
  en: { ... },
  zh: { ... },
  fr: {
    appName: "Navigateur de Technologies Big Data",
    // 其他翻译...
  }
}

// 在index.ts中更新
export type LanguageKey = "en" | "zh" | "fr"

// 在language-context.tsx中更新
type Language = "en" | "zh" | "fr"

// 在language-selector.tsx中添加选项
<DropdownMenuItem onClick={() => setLanguage("fr")} className={language === "fr" ? "bg-accent" : ""}>
  Français
</DropdownMenuItem>
\`\`\`

### 添加新的页面或功能

要添加新的页面或功能，请按照以下步骤操作：

1. 在`app`目录下创建新的页面文件
2. 在`lib/i18n`目录下添加相应的翻译
3. 在`components`目录下创建所需的组件
4. 如果需要，在`config`目录下添加相应的配置文件
5. 如果需要，在`services`目录下添加相应的服务
6. 如果需要，在`app/api`目录下添加相应的API路由

例如，添加一个技术路线图页面：

\`\`\`typescript
// 创建app/roadmap/page.tsx文件
"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { t } from "@/lib/i18n"
import { getRoadmaps } from "@/services/roadmap-service" // 假设有这个服务

export default function RoadmapPage() {
  const { language } = useLanguage();
  const [roadmaps, setRoadmaps] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadRoadmaps() {
      try {
        const data = await getRoadmaps();
        setRoadmaps(data);
      } catch (error) {
        console.error("加载路线图失败:", error);
      } finally {
        setLoading(false);
      }
    }
    
    loadRoadmaps();
  }, []);
  
  if (loading) {
    return <div className="py-4 text-center text-gray-500">
      {language === "zh" ? "加载中..." : "Loading..."}
    </div>;
  }
  
  return (
    <div className="container px-4 py-12 md:px-6">
      <h1 className="text-3xl font-bold tracking-tight mb-2">
        {t("roadmapTitle", language)}
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        {t("roadmapSubtitle", language)}
      </p>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {roadmaps.map((roadmap) => (
          <Card key={roadmap.id}>
            <CardHeader>
              <CardTitle>{roadmap.title[language]}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{roadmap.description[language]}</p>
              {/* 显示路线图内容 */}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
\`\`\`

## 最佳实践

1. **配置驱动开发**：尽可能将数据和配置放在配置文件中，而不是硬编码在组件中
2. **国际化优先**：所有用户可见的文本都应该支持多语言
3. **API优先**：设计API时考虑前端需求，确保API返回的数据结构与前端组件期望的结构一致
4. **优雅降级**：当API请求失败时，回退到静态数据，确保用户体验不会中断
5. **组件复用**：将通用功能抽象为可复用的组件
6. **类型安全**：使用TypeScript类型定义确保类型安全
7. **响应式设计**：确保所有页面在不同设备上都能正常显示
8. **性能优化**：使用适当的缓存策略，避免不必要的重新渲染

## 部署指南

本项目可以部署到任何支持Next.js的平台，如Vercel、Netlify或自托管服务器。

### Vercel部署

1. 将代码推送到GitHub仓库
2. 在Vercel中导入该仓库
3. 配置环境变量（如需要）
4. 部署

### 自托管部署

1. 构建项目：`npm run build`
2. 启动服务器：`npm start`
3. 或者使用Docker容器化部署

## 联系方式

如有任何问题或建议，请通过以下方式联系我们：

- 电子邮件：contact@bigdatatechnologies.com
- GitHub Issues：[提交问题](https://github.com/yourusername/big-data-navigator/issues)
