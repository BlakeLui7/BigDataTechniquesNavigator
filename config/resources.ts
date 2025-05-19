/**
 * 资源配置文件
 *
 * 此文件包含所有学习资源的详细信息，包括文档、教程、视频和社区资源。
 * 在实际应用中，这些信息可以通过API动态获取并覆盖这些默认值。
 */

export interface Resource {
  category: "documentation" | "tutorials" | "videos" | "community"
  items: {
    title: {
      en: string
      zh: string
    }
    description: {
      en: string
      zh: string
    }
    link: string
    icon: string
  }[]
}

export const resources: Resource[] = [
  {
    category: "documentation",
    items: [
      {
        title: { en: "Apache Kafka Documentation", zh: "Apache Kafka 文档" },
        description: { en: "Official documentation for Apache Kafka", zh: "Apache Kafka 官方文档" },
        link: "https://kafka.apache.org/documentation/",
        icon: "BookOpen",
      },
      {
        title: { en: "Elasticsearch Guide", zh: "Elasticsearch 指南" },
        description: { en: "Comprehensive guide for Elasticsearch", zh: "Elasticsearch 综合指南" },
        link: "https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",
        icon: "BookOpen",
      },
      {
        title: { en: "Apache Flink Documentation", zh: "Apache Flink 文档" },
        description: { en: "Official documentation for Apache Flink", zh: "Apache Flink 官方文档" },
        link: "https://nightlies.apache.org/flink/flink-docs-stable/",
        icon: "BookOpen",
      },
      {
        title: { en: "ClickHouse Documentation", zh: "ClickHouse 文档" },
        description: { en: "Official documentation for ClickHouse", zh: "ClickHouse 官方文档" },
        link: "https://clickhouse.com/docs/",
        icon: "BookOpen",
      },
      {
        title: { en: "Logstash Reference", zh: "Logstash 参考" },
        description: { en: "Reference documentation for Logstash", zh: "Logstash 参考文档" },
        link: "https://www.elastic.co/guide/en/logstash/current/index.html",
        icon: "BookOpen",
      },
      {
        title: { en: "Kibana Guide", zh: "Kibana 指南" },
        description: { en: "User guide for Kibana", zh: "Kibana 用户指南" },
        link: "https://www.elastic.co/guide/en/kibana/current/index.html",
        icon: "BookOpen",
      },
      {
        title: { en: "Apache Superset Documentation", zh: "Apache Superset 文档" },
        description: { en: "Official documentation for Apache Superset", zh: "Apache Superset 官方文档" },
        link: "https://superset.apache.org/docs/intro",
        icon: "BookOpen",
      },
      {
        title: { en: "Apache Hadoop Documentation", zh: "Apache Hadoop 文档" },
        description: { en: "Official documentation for Apache Hadoop", zh: "Apache Hadoop 官方文档" },
        link: "https://hadoop.apache.org/docs/current/",
        icon: "BookOpen",
      },
      {
        title: { en: "Apache Spark Documentation", zh: "Apache Spark 文档" },
        description: { en: "Official documentation for Apache Spark", zh: "Apache Spark 官方文档" },
        link: "https://spark.apache.org/docs/latest/",
        icon: "BookOpen",
      },
      {
        title: { en: "Apache HBase Documentation", zh: "Apache HBase 文档" },
        description: { en: "Official documentation for Apache HBase", zh: "Apache HBase 官方文档" },
        link: "https://hbase.apache.org/book.html",
        icon: "BookOpen",
      },
    ],
  },
  {
    category: "tutorials",
    items: [
      {
        title: { en: "Kafka Streams Tutorial", zh: "Kafka Streams 教程" },
        description: {
          en: "Learn how to use Kafka Streams for stream processing",
          zh: "学习如何使用 Kafka Streams 进行流处理",
        },
        link: "https://kafka.apache.org/documentation/streams/",
        icon: "FileText",
      },
      {
        title: { en: "Elasticsearch for Beginners", zh: "Elasticsearch 入门" },
        description: { en: "Getting started with Elasticsearch", zh: "Elasticsearch 入门指南" },
        link: "https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html",
        icon: "FileText",
      },
      {
        title: { en: "Apache Flink Training", zh: "Apache Flink 培训" },
        description: { en: "Hands-on training for Apache Flink", zh: "Apache Flink 实践培训" },
        link: "https://nightlies.apache.org/flink/flink-docs-stable/docs/learn-flink/overview/",
        icon: "FileText",
      },
      {
        title: { en: "ClickHouse Tutorial", zh: "ClickHouse 教程" },
        description: { en: "Getting started with ClickHouse", zh: "ClickHouse 入门指南" },
        link: "https://clickhouse.com/docs/en/getting-started/tutorial/",
        icon: "FileText",
      },
      {
        title: { en: "Logstash Tutorial", zh: "Logstash 教程" },
        description: { en: "Learn how to use Logstash for data processing", zh: "学习如何使用 Logstash 进行数据处理" },
        link: "https://www.elastic.co/guide/en/logstash/current/getting-started-with-logstash.html",
        icon: "FileText",
      },
      {
        title: { en: "Kibana Dashboard Tutorial", zh: "Kibana 仪表板教程" },
        description: { en: "Create your first Kibana dashboard", zh: "创建你的第一个 Kibana 仪表板" },
        link: "https://www.elastic.co/guide/en/kibana/current/dashboard.html",
        icon: "FileText",
      },
      {
        title: { en: "Apache Superset Tutorial", zh: "Apache Superset 教程" },
        description: { en: "Getting started with Apache Superset", zh: "Apache Superset 入门指南" },
        link: "https://superset.apache.org/docs/creating-charts-dashboards/creating-your-first-dashboard/",
        icon: "FileText",
      },
      {
        title: { en: "Hadoop Tutorial for Beginners", zh: "Hadoop 初学者教程" },
        description: { en: "Getting started with Apache Hadoop", zh: "Apache Hadoop 入门指南" },
        link: "https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/SingleCluster.html",
        icon: "FileText",
      },
      {
        title: { en: "Spark Quick Start", zh: "Spark 快速入门" },
        description: { en: "Getting started with Apache Spark", zh: "Apache Spark 快速入门指南" },
        link: "https://spark.apache.org/docs/latest/quick-start.html",
        icon: "FileText",
      },
      {
        title: { en: "HBase Tutorial", zh: "HBase 教程" },
        description: { en: "Getting started with Apache HBase", zh: "Apache HBase 入门指南" },
        link: "https://hbase.apache.org/book.html#quickstart",
        icon: "FileText",
      },
    ],
  },
  {
    category: "videos",
    items: [
      {
        title: { en: "Apache Kafka Fundamentals", zh: "Apache Kafka 基础" },
        description: { en: "Official Confluent Kafka 101 course (2025)", zh: "Confluent 官方 Kafka 101 课程（2025）" },
        link: "https://www.youtube.com/watch?v=MjJABMOywFM",
        icon: "Video",
      },
      {
        title: { en: "Intro to Elasticsearch & Stack", zh: "Elasticsearch 与 Stack 入门" },
        description: { en: "Elasticsearch essentials and stack overview", zh: "Elasticsearch 基础与 Stack 概览" },
        link: "https://www.youtube.com/watch?v=3Fb6DseWA4w",
        icon: "Video",
      },
      {
        title: { en: "Flink 101: Streaming Analytics", zh: "Flink 101：流式分析" },
        description: {
          en: "Flink basics and streaming analytics (Ververica/Alibaba, 2025)",
          zh: "Flink 基础及流式分析（Ververica/阿里巴巴，2025）",
        },
        link: "https://www.youtube.com/watch?v=GKsE_EUR9yU",
        icon: "Video",
      },
      {
        title: { en: "ClickHouse Presentations", zh: "ClickHouse 讲座" },
        description: { en: "ClickHouse community presentations and meetups", zh: "ClickHouse 社区讲座与聚会" },
        link: "https://presentations.clickhouse.com",
        icon: "Video",
      },
      {
        title: { en: "Mastering Kibana: Elastic Stack", zh: "精通 Kibana：Elastic Stack" },
        description: { en: "Comprehensive Kibana video tutorial series", zh: "Kibana 全面视频教程系列" },
        link: "https://www.youtube.com/watch?v=kGmCIgKsrfg",
        icon: "Video",
      },
      {
        title: { en: "Superset Community Resources", zh: "Superset 社区资源" },
        description: {
          en: "Community-driven Superset video resources and code",
          zh: "社区驱动的 Superset 视频资源与代码",
        },
        link: "https://github.com/shantanukhond/YT-Assets",
        icon: "Video",
      },
      {
        title: { en: "Hadoop Video Tutorials", zh: "Hadoop 视频教程" },
        description: { en: "Hadoop tutorial playlist", zh: "Hadoop 教程播放列表" },
        link: "https://www.youtube.com/playlist?list=PLkz1SCf5iB4dw3jbRo0SYCk2urRESUA3v",
        icon: "Video",
      },
      {
        title: { en: "Spark Video Tutorials (Search)", zh: "Spark 视频教程（搜索）" },
        description: {
          en: "Search for Apache Spark video tutorials on YouTube",
          zh: "在YouTube搜索Apache Spark视频教程",
        },
        link: "https://www.youtube.com/results?search_query=Apache+Spark+tutorial",
        icon: "Video",
      },
      {
        title: { en: "HBase Video Tutorials", zh: "HBase 视频教程" },
        description: { en: "HBase tutorial playlist", zh: "HBase 教程播放列表" },
        link: "https://www.youtube.com/playlist?list=PLf0swTFhTI8r0-ifQWWNNRJGCu6Mxh3mX",
        icon: "Video",
      },
    ],
  },
  {
    category: "community",
    items: [
      {
        title: { en: "Apache Kafka GitHub", zh: "Apache Kafka GitHub" },
        description: { en: "Apache Kafka source code and community", zh: "Apache Kafka 源代码和社区" },
        link: "https://github.com/apache/kafka",
        icon: "Github",
      },
      {
        title: { en: "Elasticsearch GitHub", zh: "Elasticsearch GitHub" },
        description: { en: "Elasticsearch source code and community", zh: "Elasticsearch 源代码和社区" },
        link: "https://github.com/elastic/elasticsearch",
        icon: "Github",
      },
      {
        title: { en: "Apache Flink GitHub", zh: "Apache Flink GitHub" },
        description: { en: "Apache Flink source code and community", zh: "Apache Flink 源代码和社区" },
        link: "https://github.com/apache/flink",
        icon: "Github",
      },
      {
        title: { en: "ClickHouse GitHub", zh: "ClickHouse GitHub" },
        description: { en: "ClickHouse source code and community", zh: "ClickHouse 源代码和社区" },
        link: "https://github.com/ClickHouse/ClickHouse",
        icon: "Github",
      },
      {
        title: { en: "Logstash GitHub", zh: "Logstash GitHub" },
        description: { en: "Logstash source code and community", zh: "Logstash 源代码和社区" },
        link: "https://github.com/elastic/logstash",
        icon: "Github",
      },
      {
        title: { en: "Kibana GitHub", zh: "Kibana GitHub" },
        description: { en: "Kibana source code and community", zh: "Kibana 源代码和社区" },
        link: "https://github.com/elastic/kibana",
        icon: "Github",
      },
      {
        title: { en: "Apache Superset GitHub", zh: "Apache Superset GitHub" },
        description: { en: "Apache Superset source code and community", zh: "Apache Superset 源代码和社区" },
        link: "https://github.com/apache/superset",
        icon: "Github",
      },
      {
        title: { en: "Apache Hadoop GitHub", zh: "Apache Hadoop GitHub" },
        description: { en: "Apache Hadoop source code and community", zh: "Apache Hadoop 源代码和社区" },
        link: "https://github.com/apache/hadoop",
        icon: "Github",
      },
      {
        title: { en: "Apache Spark GitHub", zh: "Apache Spark GitHub" },
        description: { en: "Apache Spark source code and community", zh: "Apache Spark 源代码和社区" },
        link: "https://github.com/apache/spark",
        icon: "Github",
      },
      {
        title: { en: "Apache HBase GitHub", zh: "Apache HBase GitHub" },
        description: { en: "Apache HBase source code and community", zh: "Apache HBase 源代码和社区" },
        link: "https://github.com/apache/hbase",
        icon: "Github",
      },
    ],
  },
]
