/**
 * 技术数据配置文件
 *
 * 此文件包含所有技术的详细信息，包括中英文描述、文档链接、安装指南等。
 * 在实际应用中，这些信息可以通过API动态获取并覆盖这些默认值。
 */

import { Database, FileSearch, Search, BarChart, Activity, Table, PieChart } from "lucide-react"

export interface Technology {
  id: string
  name: string
  icon: string // 存储图标名称
  description: {
    en: string
    zh: string
  }
  category: "collection" | "processing" | "visualization"
  initialRelease: string
  latestVersion: string
  developedBy: string
  website: string
  github: string
  documentation: string
  // 新增字段
  systemRequirements: {
    en: string
    zh: string
  }
  quickInstall: {
    en: string
    zh: string
  }
  dockerCommand: string
  downloadLink: string
  releaseNotesLink: string
  features: {
    en: string[]
    zh: string[]
  }
  useCases: {
    en: string[]
    zh: string[]
  }
}

// 图标名称到组件的映射
export const iconMap = {
  Database,
  FileSearch,
  Search,
  BarChart,
  Activity,
  Table,
  PieChart,
}

export const technologies: Technology[] = [
  {
    id: "kafka",
    name: "Apache Kafka",
    icon: "Database",
    description: {
      en: "A distributed event streaming platform capable of handling trillions of events a day.",
      zh: "一个分布式事件流平台，能够每天处理数万亿个事件。",
    },
    category: "collection",
    initialRelease: "2011",
    latestVersion: "4.0.0 (2025.3)", // 更新为2025年3月发布的最新版本  
    developedBy: "Apache Software Foundation",
    website: "https://kafka.apache.org/",
    github: "https://github.com/apache/kafka",
    documentation: "https://kafka.apache.org/documentation/",
    systemRequirements: {
      en: "Java 8+, KRaft mode is now default (ZooKeeper no longer required)", // 
      zh: "Java 8+，KRaft模式现为默认（不再需要ZooKeeper）", // 
    },
    quickInstall: {
      en: "Download and extract the latest release, configure server.properties, run bin/kafka-server-start.sh",
      zh: "下载并解压最新版本，配置server.properties，运行bin/kafka-server-start.sh",
    },
    dockerCommand: "docker run -p 9092:9092 confluentinc/cp-kafka:latest",
    downloadLink: "https://kafka.apache.org/downloads", // 
    releaseNotesLink: "https://kafka.apache.org/downloads", 
    features: {
      en: [
        "High-throughput, low-latency platform",
        "Scalable, fault-tolerant architecture",
        "Stream processing capabilities",
        "Connector ecosystem for integration",
        "Exactly-once semantics",
        "Default KRaft mode (no ZooKeeper dependency)", //  
        "Queue functionality", //  
        "Faster performance optimizations", // 
      ],
      zh: [
        "高吞吐量、低延迟平台", 
        "可扩展、容错架构", 
        "流处理能力", 
        "用于集成的连接器生态系统", 
        "精确一次语义",
        "默认KRaft模式（无ZooKeeper依赖）", //  
        "队列功能", //  
        "更快的性能优化", // 
      ],
    },
    useCases: {
      en: [
        "Real-time data pipelines",
        "Activity tracking",
        "Metrics collection and monitoring",
        "Log aggregation",
        "Event sourcing",
      ],
      zh: ["实时数据管道", "活动跟踪", "指标收集和监控", "日志聚合", "事件溯源"],
    },
  },
  {
    id: "logstash",
    name: "Logstash",
    icon: "FileSearch",
    description: {
      en: "An open source data collection engine with real-time pipelining capabilities.",
      zh: "一个具有实时管道功能的开源数据收集引擎。",
    },
    category: "collection",
    initialRelease: "2009",
    latestVersion: "9.0.1 (2025.5)", // 根据版本历史配置文件更新 
    developedBy: "Elastic",
    website: "https://www.elastic.co/logstash/",
    github: "https://github.com/elastic/logstash",
    documentation: "https://www.elastic.co/guide/en/logstash/current/index.html",
    systemRequirements: {
      en: "Java 17+, 2GB+ RAM", // 根据最新版本要求
      zh: "Java 17+，2GB+ 内存",
    },
    quickInstall: {
      en: "Download and extract the latest release, create a config file, run bin/logstash -f your_config.conf",
      zh: "下载并解压最新版本，创建配置文件，运行bin/logstash -f your_config.conf",
    },
    dockerCommand: "docker run -p 5044:5044 logstash:latest",
    downloadLink: "https://www.elastic.co/downloads/logstash",
    releaseNotesLink: "https://www.elastic.co/guide/en/logstash/current/releasenotes.html",
    features: {
      en: [
        "Dynamic data ingestion pipeline",
        "200+ plugins for inputs, filters, and outputs",
        "Extensible plugin ecosystem",
        "Conditional data processing",
        "Resilient event processing",
        "Seamless integration with Elastic Stack 9.0", // 
        "Advanced data transformation capabilities", // 
      ],
      zh: [
        "动态数据摄取管道",
        "200多个用于输入、过滤和输出的插件",
        "可扩展的插件生态系统",
        "条件数据处理",
        "弹性事件处理",
        "与Elastic Stack 9.0无缝集成", // 
        "高级数据转换功能", // 
      ],
    },
    useCases: {
      en: [
        "Log and event data collection",
        "Data transformation and enrichment",
        "Centralized logging architecture",
        "Security analytics",
        "IoT data processing",
      ],
      zh: ["日志和事件数据收集", "数据转换和丰富", "集中式日志架构", "安全分析", "物联网数据处理"],
    },
  },
  {
    id: "elasticsearch",
    name: "Elasticsearch",
    icon: "Search",
    description: {
      en: "A distributed, RESTful search and analytics engine capable of addressing a growing number of use cases.",
      zh: "一个分布式的RESTful搜索和分析引擎，能够解决越来越多的用例。",
    },
    category: "processing",
    initialRelease: "2010",
    latestVersion: "9.0.1 (2025.5)", // 根据版本历史配置文件更新 
    developedBy: "Elastic",
    website: "https://www.elastic.co/elasticsearch/",
    github: "https://github.com/elastic/elasticsearch",
    documentation: "https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",
    systemRequirements: {
      en: "Java 17+, 4GB+ RAM",
      zh: "Java 17+，4GB+ 内存",
    },
    quickInstall: {
      en: "Download and extract the latest release, run bin/elasticsearch",
      zh: "下载并解压最新版本，运行bin/elasticsearch",
    },
    dockerCommand: 'docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:latest',
    downloadLink: "https://www.elastic.co/downloads/elasticsearch",
    releaseNotesLink: "https://www.elastic.co/guide/en/elasticsearch/reference/current/release-notes.html",
    features: {
      en: [
        "Distributed and highly available search engine",
        "Multi-tenancy capabilities",
        "Full-text search with language analyzers",
        "Real-time analytics",
        "Horizontal scalability",
        "Improved vector database capabilities", // 
        "Advanced AI-powered search features", // 
      ],
      zh: [
        "分布式和高可用搜索引擎", 
        "多租户能力", 
        "带有语言分析器的全文搜索", 
        "实时分析", 
        "水平可扩展性",
        "改进的向量数据库功能", // 
        "先进的AI驱动搜索功能", // 
      ],
    },
    useCases: {
      en: [
        "Application search",
        "Website search",
        "Enterprise search",
        "Logging and log analytics",
        "Security analytics and SIEM",
      ],
      zh: ["应用程序搜索", "网站搜索", "企业搜索", "日志记录和日志分析", "安全分析和SIEM"],
    },
  },
  {
    id: "kibana",
    name: "Kibana",
    icon: "BarChart",
    description: {
      en: "An open source data visualization dashboard for Elasticsearch.",
      zh: "一个用于Elasticsearch的开源数据可视化仪表板。",
    },
    category: "visualization",
    initialRelease: "2013",
    latestVersion: "9.0.1 (2025.5)", // 根据版本历史配置文件更新 
    developedBy: "Elastic",
    website: "https://www.elastic.co/kibana/",
    github: "https://github.com/elastic/kibana",
    documentation: "https://www.elastic.co/guide/en/kibana/current/index.html",
    systemRequirements: {
      en: "Node.js 18+, Elasticsearch instance",
      zh: "Node.js 18+，Elasticsearch实例",
    },
    quickInstall: {
      en: "Download and extract the latest release, configure kibana.yml, run bin/kibana",
      zh: "下载并解压最新版本，配置kibana.yml，运行bin/kibana",
    },
    dockerCommand: "docker run -p 5601:5601 kibana:latest",
    downloadLink: "https://www.elastic.co/downloads/kibana",
    releaseNotesLink: "https://www.elastic.co/guide/en/kibana/current/release-notes.html",
    features: {
      en: [
        "Interactive visualizations",
        "Dashboard composition",
        "Time series analysis",
        "Geospatial analysis",
        "Machine learning features",
        "Redesigned user interface", // 
        "Advanced AI-powered analytics", // 
      ],
      zh: [
        "交互式可视化", 
        "仪表板组合", 
        "时间序列分析", 
        "地理空间分析", 
        "机器学习功能",
        "重新设计的用户界面", // 
        "先进的AI驱动分析", // 
      ],
    },
    useCases: {
      en: [
        "Log and infrastructure monitoring",
        "APM (Application Performance Monitoring)",
        "Business analytics",
        "Security analytics",
        "Real-time application monitoring",
      ],
      zh: ["日志和基础设施监控", "APM（应用性能监控）", "业务分析", "安全分析", "实时应用监控"],
    },
  },
  {
    id: "flink",
    name: "Apache Flink",
    icon: "Activity",
    description: {
      en: "A framework and distributed processing engine for stateful computations over unbounded and bounded data streams.",
      zh: "一个框架和分布式处理引擎，用于对无界和有界数据流进行有状态计算。",
    },
    category: "processing",
    initialRelease: "2011",
    latestVersion: "2.0.0 (2025.3)", // 根据版本历史配置文件更新 
    developedBy: "Apache Software Foundation",
    website: "https://flink.apache.org/",
    github: "https://github.com/apache/flink",
    documentation: "https://nightlies.apache.org/flink/flink-docs-stable/",
    systemRequirements: {
      en: "Java 11+, 4GB+ RAM",
      zh: "Java 11+，4GB+ 内存",
    },
    quickInstall: {
      en: "Download and extract the latest release, run bin/start-cluster.sh",
      zh: "下载并解压最新版本，运行bin/start-cluster.sh",
    },
    dockerCommand: "docker run -p 8081:8081 flink:latest",
    downloadLink: "https://flink.apache.org/downloads/",
    releaseNotesLink: "https://flink.apache.org/releases/",
    features: {
      en: [
        "Unified stream and batch processing",
        "Exactly-once state consistency",
        "Event-time processing",
        "Highly available stateful stream processing",
        "Native iteration support",
        "Enhanced ML capabilities",
        "Unified stream processing architecture", // 
        "Native Kubernetes operator", // 
        "Improved Python API with AI integration", // 
      ],
      zh: [
        "统一的流处理和批处理", 
        "精确一次状态一致性", 
        "事件时间处理", 
        "高可用的有状态流处理", 
        "原生迭代支持",
        "增强的机器学习能力",
        "统一的流处理架构", // 
        "原生Kubernetes操作符", // 
        "改进的Python API与AI集成", // 
      ],
    },
    useCases: {
      en: [
        "Real-time analytics",
        "Continuous ETL",
        "Event-driven applications",
        "Anomaly detection",
        "Real-time recommendations",
      ],
      zh: ["实时分析", "持续ETL", "事件驱动应用", "异常检测", "实时推荐"],
    },
  },
  {
    id: "clickhouse",
    name: "ClickHouse",
    icon: "Table",
    description: {
      en: "An open-source column-oriented database management system for real-time analytics.",
      zh: "一个用于实时分析的开源列式数据库管理系统。",
    },
    category: "processing",
    initialRelease: "2016",
    latestVersion: "25.3 (2025.3)", // 根据版本历史配置文件更新 
    developedBy: "ClickHouse, Inc. (originally Yandex)",
    website: "https://clickhouse.com/",
    github: "https://github.com/ClickHouse/ClickHouse",
    documentation: "https://clickhouse.com/docs/",
    systemRequirements: {
      en: "Linux with x86_64 CPU, 8GB+ RAM",
      zh: "带有x86_64 CPU的Linux，8GB+ 内存",
    },
    quickInstall: {
      en: "Add ClickHouse repository, run apt-get install clickhouse-server clickhouse-client",
      zh: "添加ClickHouse仓库，运行apt-get install clickhouse-server clickhouse-client",
    },
    dockerCommand: "docker run -p 8123:8123 -p 9000:9000 clickhouse/clickhouse-server:latest",
    downloadLink: "https://clickhouse.com/docs/en/getting-started/install",
    releaseNotesLink: "https://clickhouse.com/docs/en/whats-new/changelog",
    features: {
      en: [
        "Column-oriented storage",
        "Vectorized query execution",
        "Real-time query processing",
        "Linear scalability",
        "Hardware efficient",
        "BYOC (Bring Your Own Cloud) support",
        "Native CDC connectors",
        "Advanced vector search capabilities", // 
        "Improved distributed query execution", // 
      ],
      zh: [
        "列式存储", 
        "向量化查询执行", 
        "实时查询处理", 
        "线性可扩展性", 
        "硬件高效",
        "BYOC（自带云）支持",
        "原生CDC连接器",
        "高级向量搜索功能", // 
        "改进的分布式查询执行", // 
      ],
    },
    useCases: {
      en: [
        "Web and app analytics",
        "Ad network and RTB",
        "Monitoring and telemetry",
        "Business intelligence",
        "Time series data",
      ],
      zh: ["网络和应用分析", "广告网络和RTB", "监控和遥测", "商业智能", "时间序列数据"],
    },
  },
  {
    id: "superset",
    name: "Apache Superset",
    icon: "PieChart",
    description: {
      en: "A modern data exploration and visualization platform designed for ease of use and enterprise features.",
      zh: "一个现代数据探索和可视化平台，设计用于易用性和企业功能。",
    },
    category: "visualization",
    initialRelease: "2015",
    latestVersion: "3.0.0 (2025.4)", // 根据版本历史配置文件更新 
    developedBy: "Apache Software Foundation (originally Airbnb)",
    website: "https://superset.apache.org/",
    github: "https://github.com/apache/superset",
    documentation: "https://superset.apache.org/docs/intro",
    systemRequirements: {
      en: "Python 3.9+, Node.js 18+, PostgreSQL/MySQL",
      zh: "Python 3.9+，Node.js 18+，PostgreSQL/MySQL",
    },
    quickInstall: {
      en: "Install with pip, initialize the database, create an admin user, run superset run",
      zh: "使用pip安装，初始化数据库，创建管理员用户，运行superset run",
    },
    dockerCommand: "docker run -p 8088:8088 apache/superset:latest",
    downloadLink: "https://superset.apache.org/docs/installation/installing-superset-from-scratch",
    releaseNotesLink: "https://github.com/apache/superset/blob/master/CHANGELOG.md",
    features: {
      en: [
        "Interactive dashboards",
        "Rich visualization library",
        "SQL Lab for data exploration",
        "Enterprise-ready authentication",
        "Extensible and pluggable",
        "Advanced no-code visualization builder",
        "AI-powered data insights", // 
        "Enhanced dashboard collaboration", // 
      ],
      zh: [
        "交互式仪表板", 
        "丰富的可视化库", 
        "用于数据探索的SQL Lab", 
        "企业级身份验证", 
        "可扩展和可插拔",
        "高级无代码可视化构建器",
        "AI驱动的数据洞察", // 
        "增强的仪表板协作", // 
      ],
    },
    useCases: {
      en: ["Business intelligence", "Data exploration", "Dashboarding", "Data visualization", "SQL analytics"],
      zh: ["商业智能", "数据探索", "仪表板", "数据可视化", "SQL分析"],
    },
  },
]