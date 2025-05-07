/**
 * 版本信息配置文件
 *
 * 此文件包含所有技术的版本历史信息，支持多语言。
 * 在实际应用中，这些信息可以通过API动态获取并覆盖这些默认值。
 */

export interface Version {
  version: string
  date: {
    en: string
    zh: string
  }
  highlights: {
    en: string[]
    zh: string[]
  }
}

export interface VersionConfig {
  [techId: string]: Version[]
}

export const versionHistories: VersionConfig = {
  kafka: [
    {
      version: "3.5.0",
      date: {
        en: "June 2023",
        zh: "2023年6月",
      },
      highlights: {
        en: [
          "KRaft mode is now production-ready",
          "Improved consumer group protocol",
          "Enhanced security features",
          "Performance improvements",
        ],
        zh: ["KRaft模式现已可用于生产环境", "改进的消费者组协议", "增强的安全功能", "性能改进"],
      },
    },
    {
      version: "3.0.0",
      date: {
        en: "September 2021",
        zh: "2021年9月",
      },
      highlights: {
        en: [
          "KRaft consensus protocol (preview)",
          "Significant performance improvements",
          "Reduced dependency on Zookeeper",
          "New consumer group protocol",
        ],
        zh: ["KRaft共识协议（预览版）", "显著的性能改进", "减少对Zookeeper的依赖", "新的消费者组协议"],
      },
    },
    {
      version: "2.0.0",
      date: {
        en: "November 2017",
        zh: "2017年11月",
      },
      highlights: {
        en: [
          "Kafka Streams API improvements",
          "Exactly-once semantics",
          "Improved replication protocol",
          "Better client compatibility",
        ],
        zh: ["Kafka Streams API改进", "精确一次语义", "改进的复制协议", "更好的客户端兼容性"],
      },
    },
    {
      version: "1.0.0",
      date: {
        en: "November 2017",
        zh: "2017年11月",
      },
      highlights: {
        en: ["First stable release", "Streams API stabilization", "JBOD support improvements", "Security enhancements"],
        zh: ["首个稳定版本", "Streams API稳定化", "JBOD支持改进", "安全性增强"],
      },
    },
    {
      version: "0.8.0",
      date: {
        en: "December 2013",
        zh: "2013年12月",
      },
      highlights: {
        en: [
          "Introduction of replication",
          "Improved availability",
          "Better durability guarantees",
          "Producer and consumer improvements",
        ],
        zh: ["引入复制功能", "提高可用性", "更好的持久性保证", "生产者和消费者改进"],
      },
    },
  ],
  elasticsearch: [
    {
      version: "8.9.0",
      date: {
        en: "August 2023",
        zh: "2023年8月",
      },
      highlights: {
        en: [
          "Enhanced vector search capabilities",
          "Improved machine learning features",
          "Security enhancements",
          "Performance optimizations",
        ],
        zh: ["增强的向量搜索功能", "改进的机器学习功能", "安全性增强", "性能优化"],
      },
    },
    {
      version: "8.0.0",
      date: {
        en: "February 2022",
        zh: "2022年2月",
      },
      highlights: {
        en: [
          "Default security settings",
          "Simplified cluster formation",
          "New aggregation types",
          "Improved search relevance",
        ],
        zh: ["默认安全设置", "简化的集群形成", "新的聚合类型", "改进的搜索相关性"],
      },
    },
    {
      version: "7.0.0",
      date: {
        en: "April 2019",
        zh: "2019年4月",
      },
      highlights: {
        en: [
          "High-level REST client",
          "Cluster coordination improvements",
          "Faster top-k queries",
          "New cluster coordination layer",
        ],
        zh: ["高级REST客户端", "集群协调改进", "更快的top-k查询", "新的集群协调层"],
      },
    },
    {
      version: "6.0.0",
      date: {
        en: "November 2017",
        zh: "2017年11月",
      },
      highlights: {
        en: ["Sparse doc values", "Index sorting", "Sequence IDs for primary term recovery", "Improved resilience"],
        zh: ["稀疏文档值", "索引排序", "主项恢复的序列ID", "提高弹性"],
      },
    },
    {
      version: "5.0.0",
      date: {
        en: "October 2016",
        zh: "2016年10月",
      },
      highlights: {
        en: ["Lucene 6 upgrade", "Ingest node", "Painless scripting language", "Java High-Level REST Client"],
        zh: ["Lucene 6升级", "摄取节点", "Painless脚本语言", "Java高级REST客户端"],
      },
    },
  ],
  flink: [
    {
      version: "1.17.1",
      date: {
        en: "July 2023",
        zh: "2023年7月",
      },
      highlights: {
        en: [
          "Improved Table API and SQL",
          "Enhanced Python API",
          "Better Kubernetes integration",
          "Performance optimizations",
        ],
        zh: ["改进的Table API和SQL", "增强的Python API", "更好的Kubernetes集成", "性能优化"],
      },
    },
    {
      version: "1.15.0",
      date: {
        en: "December 2022",
        zh: "2022年12月",
      },
      highlights: {
        en: [
          "Unified batch and stream processing",
          "Improved watermark handling",
          "Enhanced state backends",
          "Better SQL support",
        ],
        zh: ["统一批处理和流处理", "改进的水印处理", "增强的状态后端", "更好的SQL支持"],
      },
    },
    {
      version: "1.12.0",
      date: {
        en: "December 2020",
        zh: "2020年12月",
      },
      highlights: {
        en: [
          "Unaligned checkpoints",
          "Improved exactly-once sinks",
          "Enhanced Python API",
          "Better Kubernetes support",
        ],
        zh: ["非对齐检查点", "改进的精确一次接收器", "增强的Python API", "更好的Kubernetes支持"],
      },
    },
    {
      version: "1.9.0",
      date: {
        en: "April 2019",
        zh: "2019年4月",
      },
      highlights: {
        en: ["State Processor API", "Stop-with-savepoint", "Hive integration", "Improved SQL support"],
        zh: ["状态处理器API", "停止并保存点", "Hive集成", "改进的SQL支持"],
      },
    },
    {
      version: "1.0.0",
      date: {
        en: "March 2016",
        zh: "2016年3月",
      },
      highlights: {
        en: ["First stable release", "Production-ready stream processing", "Event time processing", "Savepoints"],
        zh: ["首个稳定版本", "生产就绪的流处理", "事件时间处理", "保存点"],
      },
    },
  ],
  logstash: [
    {
      version: "8.9.0",
      date: {
        en: "August 2023",
        zh: "2023年8月",
      },
      highlights: {
        en: [
          "Enhanced Elasticsearch output",
          "Improved pipeline performance",
          "New input plugins",
          "Better error handling",
        ],
        zh: ["增强的Elasticsearch输出", "改进的管道性能", "新的输入插件", "更好的错误处理"],
      },
    },
    {
      version: "8.0.0",
      date: {
        en: "February 2022",
        zh: "2022年2月",
      },
      highlights: {
        en: ["Java 17 support", "Improved pipeline resilience", "Enhanced monitoring", "Better plugin management"],
        zh: ["Java 17支持", "改进的管道弹性", "增强的监控", "更好的插件管理"],
      },
    },
    {
      version: "7.0.0",
      date: {
        en: "April 2019",
        zh: "2019年4月",
      },
      highlights: {
        en: ["Java execution engine", "Multiple pipeline support", "Persistent queues", "Dead letter queues"],
        zh: ["Java执行引擎", "多管道支持", "持久队列", "死信队列"],
      },
    },
    {
      version: "6.0.0",
      date: {
        en: "November 2017",
        zh: "2017年11月",
      },
      highlights: {
        en: ["Multiple pipeline support", "Persistent queues", "Better plugin management", "Enhanced monitoring"],
        zh: ["多管道支持", "持久队列", "更好的插件管理", "增强的监控"],
      },
    },
    {
      version: "5.0.0",
      date: {
        en: "October 2016",
        zh: "2016年10月",
      },
      highlights: {
        en: [
          "New plugin architecture",
          "Performance improvements",
          "Better configuration validation",
          "Enhanced error handling",
        ],
        zh: ["新的插件架构", "性能改进", "更好的配置验证", "增强的错误处理"],
      },
    },
  ],
  kibana: [
    {
      version: "8.9.0",
      date: {
        en: "August 2023",
        zh: "2023年8月",
      },
      highlights: {
        en: [
          "Enhanced dashboards",
          "Improved visualization capabilities",
          "Better observability features",
          "Enhanced security features",
        ],
        zh: ["增强的仪表板", "改进的可视化功能", "更好的可观察性功能", "增强的安全功能"],
      },
    },
    {
      version: "8.0.0",
      date: {
        en: "February 2022",
        zh: "2022年2月",
      },
      highlights: {
        en: [
          "New navigation experience",
          "Enhanced visualizations",
          "Improved observability",
          "Better security features",
        ],
        zh: ["新的导航体验", "增强的可视化", "改进的可观察性", "更好的安全功能"],
      },
    },
    {
      version: "7.0.0",
      date: {
        en: "April 2019",
        zh: "2019年4月",
      },
      highlights: {
        en: ["New Kibana platform", "Dark mode", "New visualization types", "Improved dashboard experience"],
        zh: ["新的Kibana平台", "深色模式", "新的可视化类型", "改进的仪表板体验"],
      },
    },
    {
      version: "6.0.0",
      date: {
        en: "November 2017",
        zh: "2017年11月",
      },
      highlights: {
        en: [
          "Vega visualizations",
          "Improved dashboard experience",
          "Better time series visualization builder",
          "Enhanced reporting",
        ],
        zh: ["Vega可视化", "改进的仪表板体验", "更好的时间序列可视化构建器", "增强的报告"],
      },
    },
    {
      version: "5.0.0",
      date: {
        en: "October 2016",
        zh: "2016年10月",
      },
      highlights: {
        en: [
          "Time series visual builder",
          "Improved dashboard experience",
          "Better visualization capabilities",
          "Enhanced reporting",
        ],
        zh: ["时间序列可视化构建器", "改进的仪表板体验", "更好的可视化功能", "增强的报告"],
      },
    },
  ],
  clickhouse: [
    {
      version: "23.8",
      date: {
        en: "August 2023",
        zh: "2023年8月",
      },
      highlights: {
        en: [
          "Enhanced SQL compatibility",
          "Improved query performance",
          "Better data compression",
          "New aggregation functions",
        ],
        zh: ["增强的SQL兼容性", "改进的查询性能", "更好的数据压缩", "新的聚合函数"],
      },
    },
    {
      version: "22.3",
      date: {
        en: "March 2022",
        zh: "2022年3月",
      },
      highlights: {
        en: [
          "Lightweight updates and deletes",
          "Enhanced materialized views",
          "Improved query performance",
          "Better data compression",
        ],
        zh: ["轻量级更新和删除", "增强的物化视图", "改进的查询性能", "更好的数据压缩"],
      },
    },
    {
      version: "21.3",
      date: {
        en: "March 2021",
        zh: "2021年3月",
      },
      highlights: {
        en: [
          "Atomic database engine",
          "Enhanced SQL compatibility",
          "Improved query performance",
          "Better data compression",
        ],
        zh: ["原子数据库引擎", "增强的SQL兼容性", "改进的查询性能", "更好的数据压缩"],
      },
    },
    {
      version: "20.3",
      date: {
        en: "March 2020",
        zh: "2020年3月",
      },
      highlights: {
        en: [
          "Dictionary updates without restart",
          "Enhanced SQL compatibility",
          "Improved query performance",
          "Better data compression",
        ],
        zh: ["无需重启的字典更新", "增强的SQL兼容性", "改进的查询性能", "更好的数据压缩"],
      },
    },
    {
      version: "19.3",
      date: {
        en: "March 2019",
        zh: "2019年3月",
      },
      highlights: {
        en: [
          "Enhanced SQL compatibility",
          "Improved query performance",
          "Better data compression",
          "New aggregation functions",
        ],
        zh: ["增强的SQL兼容性", "改进的查询性能", "更好的数据压缩", "新的聚合函数"],
      },
    },
  ],
  superset: [
    {
      version: "2.1.0",
      date: {
        en: "July 2023",
        zh: "2023年7月",
      },
      highlights: {
        en: [
          "Enhanced dashboard capabilities",
          "Improved visualization features",
          "Better SQL Lab experience",
          "Enhanced security features",
        ],
        zh: ["增强的仪表板功能", "改进的可视化功能", "更好的SQL Lab体验", "增强的安全功能"],
      },
    },
    {
      version: "2.0.0",
      date: {
        en: "January 2023",
        zh: "2023年1月",
      },
      highlights: {
        en: ["New dashboard experience", "Enhanced visualizations", "Improved SQL Lab", "Better security features"],
        zh: ["新的仪表板体验", "增强的可视化", "改进的SQL Lab", "更好的安全功能"],
      },
    },
    {
      version: "1.0.0",
      date: {
        en: "December 2020",
        zh: "2020年12月",
      },
      highlights: {
        en: [
          "First stable release",
          "Enhanced dashboard capabilities",
          "Improved visualization features",
          "Better SQL Lab experience",
        ],
        zh: ["首个稳定版本", "增强的仪表板功能", "改进的可视化功能", "更好的SQL Lab体验"],
      },
    },
    {
      version: "0.38.0",
      date: {
        en: "August 2020",
        zh: "2020年8月",
      },
      highlights: {
        en: [
          "Enhanced dashboard capabilities",
          "Improved visualization features",
          "Better SQL Lab experience",
          "Enhanced security features",
        ],
        zh: ["增强的仪表板功能", "改进的可视化功能", "更好的SQL Lab体验", "增强的安全功能"],
      },
    },
    {
      version: "0.28.0",
      date: {
        en: "January 2019",
        zh: "2019年1月",
      },
      highlights: {
        en: [
          "Enhanced dashboard capabilities",
          "Improved visualization features",
          "Better SQL Lab experience",
          "Enhanced security features",
        ],
        zh: ["增强的仪表板功能", "改进的可视化功能", "更好的SQL Lab体验", "增强的安全功能"],
      },
    },
  ],
}
