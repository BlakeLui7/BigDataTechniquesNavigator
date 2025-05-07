/**
 * Note: The version information in this file is static and may not reflect the latest releases.
 * In a production environment, you would want to implement an API or scheduled job to fetch
 * the latest version information from the official sources.
 *
 * For accurate version information, please visit the official websites:
 * - Kafka: https://kafka.apache.org/downloads
 * - Elasticsearch, Logstash, Kibana: https://www.elastic.co/downloads
 * - Flink: https://flink.apache.org/downloads
 * - ClickHouse: https://clickhouse.com/docs/en/getting-started/install
 * - Superset: https://superset.apache.org/docs/installation/installing-superset-from-scratch
 */
import { Database, FileSearch, Search, BarChart, Activity, Table, PieChart, type LucideIcon } from "lucide-react"

export interface Technology {
  id: string
  name: string
  icon: LucideIcon
  description: string
  category: "collection" | "processing" | "visualization"
  initialRelease: string
  latestVersion: string
  developedBy: string
  website: string
  github: string
  documentation: string
  features: string[]
  useCases: string[]
}

export const technologies: Technology[] = [
  {
    id: "kafka",
    name: "Apache Kafka",
    icon: Database,
    description: "A distributed event streaming platform capable of handling trillions of events a day.",
    category: "collection",
    initialRelease: "2011",
    latestVersion: "3.5.0 (2023)",
    developedBy: "Apache Software Foundation",
    website: "https://kafka.apache.org/",
    github: "https://github.com/apache/kafka",
    documentation: "https://kafka.apache.org/documentation/",
    features: [
      "High-throughput, low-latency platform",
      "Scalable, fault-tolerant architecture",
      "Stream processing capabilities",
      "Connector ecosystem for integration",
      "Exactly-once semantics",
    ],
    useCases: [
      "Real-time data pipelines",
      "Activity tracking",
      "Metrics collection and monitoring",
      "Log aggregation",
      "Event sourcing",
    ],
  },
  {
    id: "logstash",
    name: "Logstash",
    icon: FileSearch,
    description: "An open source data collection engine with real-time pipelining capabilities.",
    category: "collection",
    initialRelease: "2009",
    latestVersion: "8.9.0 (2023)",
    developedBy: "Elastic",
    website: "https://www.elastic.co/logstash/",
    github: "https://github.com/elastic/logstash",
    documentation: "https://www.elastic.co/guide/en/logstash/current/index.html",
    features: [
      "Dynamic data ingestion pipeline",
      "200+ plugins for inputs, filters, and outputs",
      "Extensible plugin ecosystem",
      "Conditional data processing",
      "Resilient event processing",
    ],
    useCases: [
      "Log and event data collection",
      "Data transformation and enrichment",
      "Centralized logging architecture",
      "Security analytics",
      "IoT data processing",
    ],
  },
  {
    id: "elasticsearch",
    name: "Elasticsearch",
    icon: Search,
    description:
      "A distributed, RESTful search and analytics engine capable of addressing a growing number of use cases.",
    category: "processing",
    initialRelease: "2010",
    latestVersion: "8.9.0 (2023)",
    developedBy: "Elastic",
    website: "https://www.elastic.co/elasticsearch/",
    github: "https://github.com/elastic/elasticsearch",
    documentation: "https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",
    features: [
      "Distributed and highly available search engine",
      "Multi-tenancy capabilities",
      "Full-text search with language analyzers",
      "Real-time analytics",
      "Horizontal scalability",
    ],
    useCases: [
      "Application search",
      "Website search",
      "Enterprise search",
      "Logging and log analytics",
      "Security analytics and SIEM",
    ],
  },
  {
    id: "kibana",
    name: "Kibana",
    icon: BarChart,
    description: "An open source data visualization dashboard for Elasticsearch.",
    category: "visualization",
    initialRelease: "2013",
    latestVersion: "8.9.0 (2023)",
    developedBy: "Elastic",
    website: "https://www.elastic.co/kibana/",
    github: "https://github.com/elastic/kibana",
    documentation: "https://www.elastic.co/guide/en/kibana/current/index.html",
    features: [
      "Interactive visualizations",
      "Dashboard composition",
      "Time series analysis",
      "Geospatial analysis",
      "Machine learning features",
    ],
    useCases: [
      "Log and infrastructure monitoring",
      "APM (Application Performance Monitoring)",
      "Business analytics",
      "Security analytics",
      "Real-time application monitoring",
    ],
  },
  {
    id: "flink",
    name: "Apache Flink",
    icon: Activity,
    description:
      "A framework and distributed processing engine for stateful computations over unbounded and bounded data streams.",
    category: "processing",
    initialRelease: "2011",
    latestVersion: "1.17.1 (2023)",
    developedBy: "Apache Software Foundation",
    website: "https://flink.apache.org/",
    github: "https://github.com/apache/flink",
    documentation: "https://nightlies.apache.org/flink/flink-docs-stable/",
    features: [
      "Unified stream and batch processing",
      "Exactly-once state consistency",
      "Event-time processing",
      "Highly available stateful stream processing",
      "Native iteration support",
    ],
    useCases: [
      "Real-time analytics",
      "Continuous ETL",
      "Event-driven applications",
      "Anomaly detection",
      "Real-time recommendations",
    ],
  },
  {
    id: "clickhouse",
    name: "ClickHouse",
    icon: Table,
    description: "An open-source column-oriented database management system for real-time analytics.",
    category: "processing",
    initialRelease: "2016",
    latestVersion: "23.8 (2023)",
    developedBy: "ClickHouse, Inc. (originally Yandex)",
    website: "https://clickhouse.com/",
    github: "https://github.com/ClickHouse/ClickHouse",
    documentation: "https://clickhouse.com/docs/",
    features: [
      "Column-oriented storage",
      "Vectorized query execution",
      "Real-time query processing",
      "Linear scalability",
      "Hardware efficient",
    ],
    useCases: [
      "Web and app analytics",
      "Ad network and RTB",
      "Monitoring and telemetry",
      "Business intelligence",
      "Time series data",
    ],
  },
  {
    id: "superset",
    name: "Apache Superset",
    icon: PieChart,
    description:
      "A modern data exploration and visualization platform designed for ease of use and enterprise features.",
    category: "visualization",
    initialRelease: "2015",
    latestVersion: "2.1.0 (2023)",
    developedBy: "Apache Software Foundation (originally Airbnb)",
    website: "https://superset.apache.org/",
    github: "https://github.com/apache/superset",
    documentation: "https://superset.apache.org/docs/intro",
    features: [
      "Interactive dashboards",
      "Rich visualization library",
      "SQL Lab for data exploration",
      "Enterprise-ready authentication",
      "Extensible and pluggable",
    ],
    useCases: ["Business intelligence", "Data exploration", "Dashboarding", "Data visualization", "SQL analytics"],
  },
]
