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
        title: {
          en: "Apache Kafka Documentation",
          zh: "Apache Kafka 文档",
        },
        description: {
          en: "Official documentation for Apache Kafka",
          zh: "Apache Kafka 官方文档",
        },
        link: "https://kafka.apache.org/documentation/",
        icon: "BookOpen",
      },
      {
        title: {
          en: "Elasticsearch Guide",
          zh: "Elasticsearch 指南",
        },
        description: {
          en: "Comprehensive guide for Elasticsearch",
          zh: "Elasticsearch 综合指南",
        },
        link: "https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",
        icon: "BookOpen",
      },
      {
        title: {
          en: "Apache Flink Documentation",
          zh: "Apache Flink 文档",
        },
        description: {
          en: "Official documentation for Apache Flink",
          zh: "Apache Flink 官方文档",
        },
        link: "https://nightlies.apache.org/flink/flink-docs-stable/",
        icon: "BookOpen",
      },
      {
        title: {
          en: "ClickHouse Documentation",
          zh: "ClickHouse 文档",
        },
        description: {
          en: "Official documentation for ClickHouse",
          zh: "ClickHouse 官方文档",
        },
        link: "https://clickhouse.com/docs/",
        icon: "BookOpen",
      },
      {
        title: {
          en: "Logstash Reference",
          zh: "Logstash 参考",
        },
        description: {
          en: "Reference documentation for Logstash",
          zh: "Logstash 参考文档",
        },
        link: "https://www.elastic.co/guide/en/logstash/current/index.html",
        icon: "BookOpen",
      },
      {
        title: {
          en: "Kibana Guide",
          zh: "Kibana 指南",
        },
        description: {
          en: "User guide for Kibana",
          zh: "Kibana 用户指南",
        },
        link: "https://www.elastic.co/guide/en/kibana/current/index.html",
        icon: "BookOpen",
      },
      {
        title: {
          en: "Apache Superset Documentation",
          zh: "Apache Superset 文档",
        },
        description: {
          en: "Official documentation for Apache Superset",
          zh: "Apache Superset 官方文档",
        },
        link: "https://superset.apache.org/docs/intro",
        icon: "BookOpen",
      },
    ],
  },
  {
    category: "tutorials",
    items: [
      {
        title: {
          en: "Kafka Streams Tutorial",
          zh: "Kafka Streams 教程",
        },
        description: {
          en: "Learn how to use Kafka Streams for stream processing",
          zh: "学习如何使用 Kafka Streams 进行流处理",
        },
        link: "https://kafka.apache.org/documentation/streams/",
        icon: "FileText",
      },
      {
        title: {
          en: "Elasticsearch for Beginners",
          zh: "Elasticsearch 入门",
        },
        description: {
          en: "Getting started with Elasticsearch",
          zh: "Elasticsearch 入门指南",
        },
        link: "https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html",
        icon: "FileText",
      },
      {
        title: {
          en: "Apache Flink Training",
          zh: "Apache Flink 培训",
        },
        description: {
          en: "Hands-on training for Apache Flink",
          zh: "Apache Flink 实践培训",
        },
        link: "https://nightlies.apache.org/flink/flink-docs-stable/docs/learn-flink/overview/",
        icon: "FileText",
      },
      {
        title: {
          en: "ClickHouse Tutorial",
          zh: "ClickHouse 教程",
        },
        description: {
          en: "Getting started with ClickHouse",
          zh: "ClickHouse 入门指南",
        },
        link: "https://clickhouse.com/docs/en/getting-started/tutorial/",
        icon: "FileText",
      },
      {
        title: {
          en: "Logstash Tutorial",
          zh: "Logstash 教程",
        },
        description: {
          en: "Learn how to use Logstash for data processing",
          zh: "学习如何使用 Logstash 进行数据处理",
        },
        link: "https://www.elastic.co/guide/en/logstash/current/getting-started-with-logstash.html",
        icon: "FileText",
      },
      {
        title: {
          en: "Kibana Dashboard Tutorial",
          zh: "Kibana 仪表板教程",
        },
        description: {
          en: "Create your first Kibana dashboard",
          zh: "创建你的第一个 Kibana 仪表板",
        },
        link: "https://www.elastic.co/guide/en/kibana/current/dashboard.html",
        icon: "FileText",
      },
      {
        title: {
          en: "Apache Superset Tutorial",
          zh: "Apache Superset 教程",
        },
        description: {
          en: "Getting started with Apache Superset",
          zh: "Apache Superset 入门指南",
        },
        link: "https://superset.apache.org/docs/creating-charts-dashboards/creating-your-first-dashboard/",
        icon: "FileText",
      },
    ],
  },
  {
    category: "videos",
    items: [
      {
        title: {
          en: "Apache Kafka Fundamentals",
          zh: "Apache Kafka 基础",
        },
        description: {
          en: "Video series on Apache Kafka fundamentals",
          zh: "Apache Kafka 基础视频系列",
        },
        link: "https://www.youtube.com/@confluentinc",
        icon: "Video",
      },
      {
        title: {
          en: "Elasticsearch in Action",
          zh: "Elasticsearch 实战",
        },
        description: {
          en: "Video tutorials for Elasticsearch",
          zh: "Elasticsearch 视频教程",
        },
        link: "https://www.elastic.co/resources/videos/",
        icon: "Video",
      },
      {
        title: {
          en: "Apache Flink Forward Conference",
          zh: "Apache Flink Forward 会议",
        },
        description: {
          en: "Conference videos on Apache Flink",
          zh: "Apache Flink 会议视频",
        },
        link: "https://www.youtube.com/@ApacheFlink",
        icon: "Video",
      },
      {
        title: {
          en: "ClickHouse Meetups",
          zh: "ClickHouse 线下聚会",
        },
        description: {
          en: "Recorded ClickHouse meetups and presentations",
          zh: "ClickHouse 线下聚会和演示录像",
        },
        link: "https://www.youtube.com/@ClickHouseDB",
        icon: "Video",
      },
      {
        title: {
          en: "Elastic Stack Overview",
          zh: "Elastic Stack 概览",
        },
        description: {
          en: "Video overview of the Elastic Stack (Elasticsearch, Logstash, Kibana)",
          zh: "Elastic Stack (Elasticsearch, Logstash, Kibana) 视频概览",
        },
        link: "https://www.elastic.co/resources/videos/",
        icon: "Video",
      },
      {
        title: {
          en: "Apache Superset Demo",
          zh: "Apache Superset 演示",
        },
        description: {
          en: "Video demonstrations of Apache Superset",
          zh: "Apache Superset 视频演示",
        },
        link: "https://www.youtube.com/@TheApacheFoundation",
        icon: "Video",
      },
    ],
  },
  {
    category: "community",
    items: [
      {
        title: {
          en: "Apache Kafka GitHub",
          zh: "Apache Kafka GitHub",
        },
        description: {
          en: "Apache Kafka source code and community",
          zh: "Apache Kafka 源代码和社区",
        },
        link: "https://github.com/apache/kafka",
        icon: "Github",
      },
      {
        title: {
          en: "Elasticsearch GitHub",
          zh: "Elasticsearch GitHub",
        },
        description: {
          en: "Elasticsearch source code and community",
          zh: "Elasticsearch 源代码和社区",
        },
        link: "https://github.com/elastic/elasticsearch",
        icon: "Github",
      },
      {
        title: {
          en: "Apache Flink GitHub",
          zh: "Apache Flink GitHub",
        },
        description: {
          en: "Apache Flink source code and community",
          zh: "Apache Flink 源代码和社区",
        },
        link: "https://github.com/apache/flink",
        icon: "Github",
      },
      {
        title: {
          en: "ClickHouse GitHub",
          zh: "ClickHouse GitHub",
        },
        description: {
          en: "ClickHouse source code and community",
          zh: "ClickHouse 源代码和社区",
        },
        link: "https://github.com/ClickHouse/ClickHouse",
        icon: "Github",
      },
      {
        title: {
          en: "Logstash GitHub",
          zh: "Logstash GitHub",
        },
        description: {
          en: "Logstash source code and community",
          zh: "Logstash 源代码和社区",
        },
        link: "https://github.com/elastic/logstash",
        icon: "Github",
      },
      {
        title: {
          en: "Kibana GitHub",
          zh: "Kibana GitHub",
        },
        description: {
          en: "Kibana source code and community",
          zh: "Kibana 源代码和社区",
        },
        link: "https://github.com/elastic/kibana",
        icon: "Github",
      },
      {
        title: {
          en: "Apache Superset GitHub",
          zh: "Apache Superset GitHub",
        },
        description: {
          en: "Apache Superset source code and community",
          zh: "Apache Superset 源代码和社区",
        },
        link: "https://github.com/apache/superset",
        icon: "Github",
      },
    ],
  },
]
