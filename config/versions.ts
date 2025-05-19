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
      version: "4.0.0",
      date: {
        en: "March 2025",
        zh: "2025年3月",
      },
      highlights: {
        en: [
          "KRaft mode as default configuration",
          "Introduction of queue functionality",
          "Faster performance optimizations",
          "Improved scalability for large clusters",
        ],
        zh: ["KRaft模式作为默认配置", "引入队列功能", "更快的性能优化", "改进大型集群的可扩展性"],
      },
    },
    {
      version: "3.7.0",
      date: {
        en: "November 2024",
        zh: "2024年11月",
      },
      highlights: {
        en: [
          "Enhanced tiered storage capabilities",
          "Improved KRaft mode stability",
          "New metrics and monitoring features",
          "Advanced security enhancements",
        ],
        zh: ["增强的分层存储功能", "改进的KRaft模式稳定性", "新的指标和监控功能", "高级安全增强"],
      },
    },
    {
      version: "3.6.0",
      date: {
        en: "April 2024",
        zh: "2024年4月",
      },
      highlights: {
        en: [
          "Tiered storage for topic data",
          "Enhanced KRaft mode performance",
          "Improved cluster balancing algorithms",
          "New client protocol features",
        ],
        zh: ["主题数据的分层存储", "增强的KRaft模式性能", "改进的集群平衡算法", "新的客户端协议功能"],
      },
    },
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
  ],
  elasticsearch: [
    {
      version: "9.0.1",
      date: {
        en: "May 2025",
        zh: "2025年5月",
      },
      highlights: {
        en: [
          "Improved vector database capabilities",
          "Advanced AI-powered search features",
          "Enhanced cross-cluster replication",
          "New observability features",
        ],
        zh: ["改进的向量数据库功能", "先进的AI驱动搜索功能", "增强的跨集群复制", "新的可观察性功能"],
      },
    },
    {
      version: "8.12.0",
      date: {
        en: "January 2025",
        zh: "2025年1月",
      },
      highlights: {
        en: [
          "Advanced vector search optimizations",
          "Enhanced machine learning capabilities",
          "Improved distributed search performance",
          "New data visualization features",
        ],
        zh: ["高级向量搜索优化", "增强的机器学习能力", "改进的分布式搜索性能", "新的数据可视化功能"],
      },
    },
    {
      version: "8.10.0",
      date: {
        en: "October 2023",
        zh: "2023年10月",
      },
      highlights: {
        en: [
          "Vector search enhancements",
          "Improved semantic search capabilities",
          "New aggregation types",
          "Enhanced security features",
        ],
        zh: ["向量搜索增强", "改进的语义搜索功能", "新的聚合类型", "增强的安全功能"],
      },
    },
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
  ],
  flink: [
    {
      version: "2.0.0",
      date: {
        en: "March 2025",
        zh: "2025年3月",
      },
      highlights: {
        en: [
          "Unified stream processing architecture",
          "Native Kubernetes operator",
          "Enhanced SQL capabilities",
          "Improved Python API with AI integration",
        ],
        zh: ["统一的流处理架构", "原生Kubernetes操作符", "增强的SQL功能", "改进的Python API与AI集成"],
      },
    },
    {
      version: "1.19.0",
      date: {
        en: "September 2024",
        zh: "2024年9月",
      },
      highlights: {
        en: [
          "Advanced streaming SQL enhancements",
          "Improved Python API ecosystem",
          "Enhanced state management capabilities",
          "Better cloud-native integration",
        ],
        zh: ["高级流式SQL增强", "改进的Python API生态系统", "增强的状态管理能力", "更好的云原生集成"],
      },
    },
    {
      version: "1.18.0",
      date: {
        en: "January 2024",
        zh: "2024年1月",
      },
      highlights: {
        en: [
          "Improved hybrid source/sink architecture",
          "Enhanced Python API with PyFlink Table API",
          "Advanced state backend optimizations",
          "Better Kubernetes resource management",
        ],
        zh: [
          "改进的混合源/接收器架构",
          "增强的Python API与PyFlink表API",
          "高级状态后端优化",
          "更好的Kubernetes资源管理",
        ],
      },
    },
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
  ],
  logstash: [
    {
      version: "9.0.1",
      date: {
        en: "May 2025",
        zh: "2025年5月",
      },
      highlights: {
        en: [
          "Seamless integration with Elastic Stack 9.0",
          "Advanced data transformation capabilities",
          "Improved pipeline performance",
          "Enhanced cloud-native features",
        ],
        zh: ["与Elastic Stack 9.0无缝集成", "高级数据转换功能", "改进的管道性能", "增强的云原生功能"],
      },
    },
    {
      version: "8.12.0",
      date: {
        en: "January 2025",
        zh: "2025年1月",
      },
      highlights: {
        en: [
          "Advanced data processing capabilities",
          "Enhanced cloud integration features",
          "Improved pipeline resilience",
          "New input and output plugins",
        ],
        zh: ["高级数据处理能力", "增强的云集成功能", "改进的管道弹性", "新的输入和输出插件"],
      },
    },
    {
      version: "8.10.0",
      date: {
        en: "October 2023",
        zh: "2023年10月",
      },
      highlights: {
        en: [
          "Enhanced data processing capabilities",
          "New filter plugins",
          "Improved pipeline monitoring",
          "Better error handling",
        ],
        zh: ["增强的数据处理能力", "新的过滤器插件", "改进的管道监控", "更好的错误处理"],
      },
    },
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
  ],
  kibana: [
    {
      version: "9.0.1",
      date: {
        en: "May 2025",
        zh: "2025年5月",
      },
      highlights: {
        en: [
          "Redesigned user interface",
          "Advanced AI-powered analytics",
          "Enhanced data visualization capabilities",
          "Improved observability features",
        ],
        zh: ["重新设计的用户界面", "先进的AI驱动分析", "增强的数据可视化功能", "改进的可观察性功能"],
      },
    },
    {
      version: "8.12.0",
      date: {
        en: "January 2025",
        zh: "2025年1月",
      },
      highlights: {
        en: [
          "AI-assisted data exploration",
          "Advanced visualization capabilities",
          "Enhanced dashboard collaboration",
          "Improved observability features",
        ],
        zh: ["AI辅助数据探索", "高级可视化功能", "增强的仪表板协作", "改进的可观察性功能"],
      },
    },
    {
      version: "8.10.0",
      date: {
        en: "October 2023",
        zh: "2023年10月",
      },
      highlights: {
        en: [
          "Enhanced visualization capabilities",
          "Improved dashboard features",
          "Better observability tools",
          "Advanced security controls",
        ],
        zh: ["增强的可视化功能", "改进的仪表板功能", "更好的可观察性工具", "高级安全控制"],
      },
    },
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
  ],
  clickhouse: [
    {
      version: "25.3",
      date: {
        en: "March 2025",
        zh: "2025年3月",
      },
      highlights: {
        en: [
          "Advanced vector search capabilities",
          "Improved distributed query execution",
          "Enhanced columnar storage engine",
          "Better integration with data lakes",
        ],
        zh: ["高级向量搜索功能", "改进的分布式查询执行", "增强的列式存储引擎", "更好的数据湖集成"],
      },
    },
    {
      version: "24.6",
      date: {
        en: "June 2024",
        zh: "2024年6月",
      },
      highlights: {
        en: [
          "Enhanced vector search optimization",
          "Improved distributed joins",
          "Advanced materialized views",
          "New storage compression algorithms",
        ],
        zh: ["增强的向量搜索优化", "改进的分布式连接", "高级物化视图", "新的存储压缩算法"],
      },
    },
    {
      version: "24.1",
      date: {
        en: "January 2024",
        zh: "2024年1月",
      },
      highlights: {
        en: [
          "Initial vector search support",
          "Enhanced distributed query planning",
          "Improved storage efficiency",
          "Better cloud integration",
        ],
        zh: ["初始向量搜索支持", "增强的分布式查询规划", "改进的存储效率", "更好的云集成"],
      },
    },
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
  ],
  superset: [
    {
      version: "3.0.0",
      date: {
        en: "April 2025",
        zh: "2025年4月",
      },
      highlights: {
        en: [
          "AI-powered data insights",
          "Advanced visualization library",
          "Enhanced dashboard collaboration",
          "Improved data source connectivity",
        ],
        zh: ["AI驱动的数据洞察", "高级可视化库", "增强的仪表板协作", "改进的数据源连接性"],
      },
    },
    {
      version: "2.2.0",
      date: {
        en: "November 2024",
        zh: "2024年11月",
      },
      highlights: {
        en: [
          "Initial AI-assisted analytics",
          "Enhanced visualization capabilities",
          "Improved dashboard sharing",
          "Better data source management",
        ],
        zh: ["初始AI辅助分析", "增强的可视化功能", "改进的仪表板共享", "更好的数据源管理"],
      },
    },
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
  ],
  hadoop: [
    {
      version: "3.4.1",
      date: { en: "October 2024", zh: "2024年10月" },
      highlights: {
        en: [
          "Bug fixes and stability improvements",
          "Lean tar distribution excluding large AWS SDK",
          "Java 11 support",
          "Performance optimizations",
        ],
        zh: ["错误修复和稳定性改进", "精简tar包，默认不包含大型AWS SDK", "支持Java 11", "性能优化"],
      },
    },
    {
      version: "3.3.6",
      date: { en: "November 2023", zh: "2023年11月" },
      highlights: {
        en: [
          "Security improvements",
          "Performance optimizations",
          "Bug fixes and stability improvements",
          "Support for newer Java versions",
        ],
        zh: ["安全性改进", "性能优化", "错误修复和稳定性改进", "支持更新的Java版本"],
      },
    },
    {
      version: "3.3.0",
      date: { en: "July 2021", zh: "2021年7月" },
      highlights: {
        en: [
          "HDFS Router-based Federation",
          "Improved S3A connector",
          "Enhanced security features",
          "Performance improvements",
        ],
        zh: ["基于路由器的HDFS联邦", "改进的S3A连接器", "增强的安全功能", "性能改进"],
      },
    },
    {
      version: "3.0.0",
      date: { en: "December 2017", zh: "2017年12月" },
      highlights: {
        en: [
          "Erasure coding in HDFS",
          "YARN Timeline Service v.2",
          "Shell script rewrite",
          "Support for multiple standby NameNodes",
        ],
        zh: ["HDFS中的纠删码", "YARN时间线服务v.2", "Shell脚本重写", "支持多个备用NameNode"],
      },
    },
    {
      version: "2.0.0",
      date: { en: "October 2013", zh: "2013年10月" },
      highlights: {
        en: [
          "YARN (Yet Another Resource Negotiator)",
          "HDFS Federation",
          "HDFS High Availability",
          "MapReduce 2.0 (MRv2)",
        ],
        zh: ["YARN（另一种资源协商器）", "HDFS联邦", "HDFS高可用性", "MapReduce 2.0（MRv2）"],
      },
    },
    {
      version: "1.0.0",
      date: { en: "December 2011", zh: "2011年12月" },
      highlights: {
        en: ["First stable release", "HDFS improvements", "MapReduce enhancements", "Security features"],
        zh: ["首个稳定版本", "HDFS改进", "MapReduce增强", "安全功能"],
      },
    },
  ],

  spark: [
    {
      version: "3.5.5",
      date: { en: "February 2025", zh: "2025年2月" },
      highlights: {
        en: [
          "Improved Pandas API compatibility",
          "Enhanced Spark Connect capabilities",
          "Better integration with Delta Lake",
          "Performance improvements for SQL and DataFrame operations",
        ],
        zh: [
          "改进的Pandas API兼容性",
          "增强的Spark Connect功能",
          "与Delta Lake更好的集成",
          "SQL和DataFrame操作的性能改进",
        ],
      },
    },
    {
      version: "3.0.0",
      date: { en: "June 2020", zh: "2020年6月" },
      highlights: {
        en: [
          "Adaptive query execution",
          "Dynamic partition pruning",
          "Accelerator-aware scheduling",
          "Significant improvements to Python and pandas APIs",
        ],
        zh: ["自适应查询执行", "动态分区修剪", "加速器感知调度", "Python和pandas API的显著改进"],
      },
    },
    {
      version: "2.0.0",
      date: { en: "July 2016", zh: "2016年7月" },
      highlights: {
        en: [
          "Structured Streaming",
          "Unified DataFrame/Dataset API",
          "Improved SQL support",
          "Performance improvements",
        ],
        zh: ["结构化流处理", "统一的DataFrame/Dataset API", "改进的SQL支持", "性能改进"],
      },
    },
    {
      version: "1.0.0",
      date: { en: "May 2014", zh: "2014年5月" },
      highlights: {
        en: ["First stable release", "Spark SQL introduction", "MLlib improvements", "GraphX for graph processing"],
        zh: ["首个稳定版本", "Spark SQL引入", "MLlib改进", "用于图处理的GraphX"],
      },
    },
  ],

  hbase: [
    {
      version: "2.6.2",
      date: { en: "April 2025", zh: "2025年4月" },
      highlights: {
        en: [
          "Dual file compaction algorithm",
          "Full and incremental backup support",
          "TLS encryption and authentication",
          "Improved quota management",
          "Performance and stability improvements",
        ],
        zh: ["双文件压缩算法", "支持全量和增量备份", "TLS加密和认证", "改进的配额管理", "性能和稳定性改进"],
      },
    },
    {
      version: "2.5.5",
      date: { en: "October 2023", zh: "2023年10月" },
      highlights: {
        en: [
          "Performance optimizations",
          "Bug fixes and stability improvements",
          "Enhanced security features",
          "Improved compatibility with Hadoop 3.x",
        ],
        zh: ["性能优化", "错误修复和稳定性改进", "增强的安全功能", "改进与Hadoop 3.x的兼容性"],
      },
    },
    {
      version: "2.0.0",
      date: { en: "January 2019", zh: "2019年1月" },
      highlights: {
        en: [
          "Off-heap read/write path",
          "Procedure V2 and improved Master",
          "RegionServer Group-based assignment",
          "Improved replication features",
        ],
        zh: ["堆外读/写路径", "过程V2和改进的Master", "基于RegionServer组的分配", "改进的复制功能"],
      },
    },
    {
      version: "1.0.0",
      date: { en: "February 2015", zh: "2015年2月" },
      highlights: {
        en: [
          "First stable 1.0 release",
          "Improved performance and stability",
          "Enhanced security features",
          "Better integration with Hadoop ecosystem",
        ],
        zh: ["首个稳定的1.0版本", "改进的性能和稳定性", "增强的安全功能", "与Hadoop生态系统更好的集成"],
      },
    },
    {
      version: "0.94.0",
      date: { en: "May 2012", zh: "2012年5月" },
      highlights: {
        en: ["Coprocessors", "Security features", "Performance improvements", "Replication enhancements"],
        zh: ["协处理器", "安全功能", "性能改进", "复制增强"],
      },
    },
  ],
}
