"use client"
import TechGrid from "@/components/tech-grid"
import TechFilter from "@/components/tech-filter"
import { useLanguage } from "@/contexts/language-context"
import { safeT } from "@/lib/i18n" // 使用安全的翻译函数

export default function TechnologiesPage() {
  const { language } = useLanguage()

  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{safeT("technologiesTitle", language, "Technologies")}</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            {safeT(
              "technologiesSubtitle",
              language,
              "Explore the most popular big data technologies used in modern data pipelines.",
            )}
          </p>
        </div>
        <TechFilter />
      </div>

      <div className="mt-8">
        <TechGrid />
      </div>
    </div>
  )
}
