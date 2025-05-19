"use client"

import Link from "next/link"
import { ArrowRight, Database, GitBranch, FileText, BarChart3, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import TechGrid from "@/components/tech-grid"
import { useLanguage } from "@/contexts/language-context"
import { safeT } from "@/lib/i18n"
import { useRef } from "react"

export default function Home() {
  const { language } = useLanguage()
  const featuredTechRef = useRef<HTMLDivElement>(null)

  const scrollToFeaturedTech = () => {
    featuredTechRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* 英雄区域 - 减小高度并添加向下滚动指示器 */}
        <section className="w-full py-10 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                  {safeT("heroTitle", language, "Big Data Technologies Navigator")}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  {safeT(
                    "heroSubtitle",
                    language,
                    "Your comprehensive guide to understanding, comparing, and implementing big data technologies.",
                  )}
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/technologies">
                  <Button className="px-8 rounded-full bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200">
                    {safeT("exploreTechnologies", language, "Explore Technologies")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              {/* 向下滚动指示器 */}
              <button
                onClick={scrollToFeaturedTech}
                className="absolute bottom-4 left-0 right-0 mx-auto w-max flex flex-col items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors animate-bounce"
                aria-label="Scroll to featured technologies"
              >
                <span className="text-sm mb-1">{safeT("scrollToSee", language, "Scroll to see")}</span>
                <ChevronDown className="h-6 w-6" />
              </button>
            </div>
          </div>
        </section>

        {/* 特色技术区域 - 添加ref以便滚动 */}
        <section ref={featuredTechRef} className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                  {safeT("featuredTechnologies", language, "Featured Technologies")}
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  {safeT(
                    "featuredDescription",
                    language,
                    "Explore the most popular big data technologies used in modern data pipelines.",
                  )}
                </p>
              </div>
            </div>
            <TechGrid />
          </div>
        </section>

        {/* 功能区域 - 苹果风格的简洁卡片 */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
                <Database className="h-12 w-12 text-neutral-500" />
                <h3 className="text-xl font-semibold">{safeT("dataCollection", language, "Data Collection")}</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  {safeT(
                    "dataCollectionDesc",
                    language,
                    "Tools and technologies for collecting and storing large volumes of data.",
                  )}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
                <GitBranch className="h-12 w-12 text-neutral-500" />
                <h3 className="text-xl font-semibold">{safeT("dataProcessing", language, "Data Processing")}</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  {safeT(
                    "dataProcessingDesc",
                    language,
                    "Frameworks and systems for processing and analyzing big data.",
                  )}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
                <BarChart3 className="h-12 w-12 text-neutral-500" />
                <h3 className="text-xl font-semibold">{safeT("dataVisualization", language, "Data Visualization")}</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  {safeT(
                    "dataVisualizationDesc",
                    language,
                    "Tools for creating visual representations of big data insights.",
                  )}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
                <FileText className="h-12 w-12 text-neutral-500" />
                <h3 className="text-xl font-semibold">{safeT("documentation", language, "Documentation")}</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  {safeT(
                    "documentationDesc",
                    language,
                    "Comprehensive guides and resources for implementing big data solutions.",
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
