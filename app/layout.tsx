import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

// Update the metadata to use the new domain name
export const metadata = {
  title: "Big Data Technologies Navigator",
  description:
    "A comprehensive guide to modern data collection, processing, and visualization tools including Kafka, Elasticsearch, Flink, ClickHouse, and more.",
  keywords:
    "big data, kafka, elasticsearch, kibana, flink, clickhouse, superset, logstash, data processing, data visualization, data collection",
  openGraph: {
    title: "Big Data Technologies Navigator",
    description: "Comprehensive guide to modern data collection, processing, and visualization tools",
    url: "https://www.bigdatanavigator.site",
    siteName: "Big Data Technologies Navigator",
    images: [
      {
        url: "https://www.bigdatanavigator.site/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Big Data Technologies Navigator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Data Technologies Navigator",
    description: "Comprehensive guide to modern data collection, processing, and visualization tools",
    images: ["https://www.bigdatanavigator.site/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.bigdatanavigator.site",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              {children}
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Big Data Technologies Navigator",
              "url": "https://www.bigdatanavigator.site",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.bigdatanavigator.site/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "description": "A comprehensive guide to modern data collection, processing, and visualization tools including Kafka, Elasticsearch, Flink, ClickHouse, and more."
            }
          `}
        </Script>
      </body>
    </html>
  )
}
