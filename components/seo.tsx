"use client"

import Head from "next/head"
import { useRouter } from "next/router"

interface SeoProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  twitterHandle?: string
}

export default function Seo({
  title = "Big Data Technologies Navigator",
  description = "Comprehensive guide to modern data collection, processing, and visualization tools including Kafka, Elasticsearch, Flink, and more.",
  canonical,
  ogImage = "/og-image.jpg",
  ogType = "website",
  twitterHandle = "@bigdatatech",
}: SeoProps) {
  const router = useRouter()
  const fullUrl = canonical || `https://www.bigdatanavigator.site${router.asPath}`
  const fullTitle = `${title} | Big Data Technologies Navigator`

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      {twitterHandle && <meta property="twitter:creator" content={twitterHandle} />}

      {/* Keywords */}
      <meta
        name="keywords"
        content="big data, kafka, elasticsearch, kibana, flink, clickhouse, superset, logstash, data processing, data visualization, data collection"
      />
    </Head>
  )
}
