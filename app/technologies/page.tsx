"use client"
import TechGrid from "@/components/tech-grid"
import TechFilter from "@/components/tech-filter"
import VersionFetcher from "@/components/version-fetcher"
import { useLanguage } from "@/contexts/language-context"
import { t } from "@/lib/translations"

export default function TechnologiesPage() {
  const { language } = useLanguage()

  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t("technologiesTitle", language)}</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">{t("technologiesSubtitle", language)}</p>
        </div>
        <TechFilter />
      </div>

      <div className="grid gap-8 md:grid-cols-3 mt-8">
        <div className="md:col-span-2">
          <TechGrid />
        </div>
        <div>
          <VersionFetcher />
        </div>
      </div>
    </div>
  )
}
