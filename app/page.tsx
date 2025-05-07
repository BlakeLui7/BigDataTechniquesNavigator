"use client"

import Link from "next/link"
import { ArrowRight, Database, GitBranch, FileText, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import TechGrid from "@/components/tech-grid"
import { useLanguage } from "@/contexts/language-context"
import { t } from "@/lib/i18n"

export default function Home() {
  const { language } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* 英雄区域 - 苹果风格的简洁设计 */}
        <section className="w-full py-16 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none">
                  {t("heroTitle", language)}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  {t("heroSubtitle", language)}
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/technologies">
                  <Button className="px-8 rounded-full bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200">
                    {t("exploreTechnologies", language)}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 特色技术区域 */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                  {t("featuredTechnologies", language)}
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  {t("featuredDescription", language)}
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
                <h3 className="text-xl font-semibold">{t("dataCollection", language)}</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">{t("dataCollectionDesc", language)}</p>
              </div>
              <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
                <GitBranch className="h-12 w-12 text-neutral-500" />
                <h3 className="text-xl font-semibold">{t("dataProcessing", language)}</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">{t("dataProcessingDesc", language)}</p>
              </div>
              <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
                <BarChart3 className="h-12 w-12 text-neutral-500" />
                <h3 className="text-xl font-semibold">{t("dataVisualization", language)}</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">{t("dataVisualizationDesc", language)}</p>
              </div>
              <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
                <FileText className="h-12 w-12 text-neutral-500" />
                <h3 className="text-xl font-semibold">{t("documentation", language)}</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">{t("documentationDesc", language)}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
