"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, ExternalLink, Github, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import VersionHistory from "@/components/version-history"
import { useLanguage } from "@/contexts/language-context"
import { t } from "@/lib/translations"
import { getTechnology, getAllTechnologies } from "@/services/tech-service"
import type { Technology } from "@/config/technologies"
import { iconMap } from "@/config/technologies"

export default function TechnologyPage() {
  const params = useParams()
  const { language } = useLanguage()
  const [tech, setTech] = useState<Technology | undefined>(undefined)
  const [relatedTechs, setRelatedTechs] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)

  // 加载技术数据
  useEffect(() => {
    async function loadTechnology() {
      try {
        if (typeof params.id !== "string") return

        const techData = await getTechnology(params.id)
        setTech(techData)

        if (techData) {
          // 加载相关技术
          const allTechs = await getAllTechnologies()
          const related = allTechs.filter((t) => t.category === techData.category && t.id !== techData.id).slice(0, 3)
          setRelatedTechs(related)
        }
      } catch (error) {
        console.error("加载技术数据失败:", error)
      } finally {
        setLoading(false)
      }
    }

    loadTechnology()
  }, [params.id])

  if (loading) {
    return (
      <div className="container px-4 py-12 md:px-6">
        <div className="text-center py-12">
          <p className="text-gray-500">{language === "zh" ? "加载中..." : "Loading..."}</p>
        </div>
      </div>
    )
  }

  if (!tech) {
    return (
      <div className="container px-4 py-12 md:px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">{language === "zh" ? "未找到技术" : "Technology Not Found"}</h1>
          <Link href="/technologies" className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
            <ArrowLeft className="h-4 w-4" />
            {t("backToTechnologies", language)}
          </Link>
        </div>
      </div>
    )
  }

  // Get the icon component from the icon map
  const IconComponent = iconMap[tech.icon as keyof typeof iconMap]

  // 翻译类别名称
  const getCategoryName = (category: string) => {
    if (category === "collection") return t("dataCollection", language)
    if (category === "processing") return t("dataProcessing", language)
    if (category === "visualization") return t("dataVisualization", language)
    return category
  }

  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="mb-8">
        <Link href="/technologies" className="inline-flex items-center gap-2 text-sm font-medium">
          <ArrowLeft className="h-4 w-4" />
          {t("backToTechnologies", language)}
        </Link>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4">
          <div className="flex items-center gap-3">
            {IconComponent && <IconComponent className="h-8 w-8 text-neutral-500" />}
            <h1 className="text-3xl font-bold tracking-tight">{tech.name}</h1>
            <Badge
              variant="outline"
              className="bg-neutral-100 text-neutral-800 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 border-neutral-200 dark:border-neutral-700"
            >
              {getCategoryName(tech.category)}
            </Badge>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline" size="sm" asChild>
              <a href={tech.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                {t("website", language)}
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={tech.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                {t("github", language)}
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href={tech.documentation}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <BookOpen className="h-4 w-4" />
                {t("docs", language)}
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">{t("overview", language)}</TabsTrigger>
              <TabsTrigger value="features">{t("features", language)}</TabsTrigger>
              <TabsTrigger value="use-cases">{t("useCases", language)}</TabsTrigger>
              <TabsTrigger value="versions">{t("versions", language)}</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {t("about", language)} {tech.name}
                  </CardTitle>
                  <CardDescription>{language === "zh" ? tech.description.zh : tech.description.en}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      {tech.name} {language === "zh" ? "是一个强大的" : "is a powerful"}{" "}
                      {tech.category === "collection"
                        ? t("dataCollection", language).toLowerCase()
                        : tech.category === "processing"
                          ? t("dataProcessing", language).toLowerCase()
                          : t("dataVisualization", language).toLowerCase()}{" "}
                      {language === "zh"
                        ? `工具，由 ${tech.developedBy} 开发。最初发布于 ${tech.initialRelease} 年，它已经发展成为大数据生态系统中的领先解决方案之一。`
                        : `tool developed by ${tech.developedBy}. Initially released in ${tech.initialRelease}, it has evolved to become one of the leading solutions in the big data ecosystem.`}
                    </p>
                    <p>
                      {language === "zh"
                        ? `凭借其最新版本 ${tech.latestVersion}，${tech.name} 继续为现代数据挑战提供创新解决方案。`
                        : `With its latest version ${tech.latestVersion}, ${tech.name} continues to provide innovative solutions for modern data challenges.`}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="features" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>{t("keyFeatures", language)}</CardTitle>
                  <CardDescription>{t("whatMakesStandOut", language, { name: tech.name })}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    {(language === "zh" ? tech.features.zh : tech.features.en).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-5 w-5 flex items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 mt-0.5">
                          <span className="text-xs font-bold">{index + 1}</span>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="use-cases" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>{t("commonUseCases", language)}</CardTitle>
                  <CardDescription>{t("howUsedInProduction", language, { name: tech.name })}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    {(language === "zh" ? tech.useCases.zh : tech.useCases.en).map((useCase, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-5 w-5 flex items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 mt-0.5">
                          <span className="text-xs font-bold">{index + 1}</span>
                        </div>
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="versions" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>{t("versionHistory", language)}</CardTitle>
                  <CardDescription>{t("releaseTimeline", language)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <VersionHistory techId={tech.id} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>{t("quickInfo", language)}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {t("initialRelease", language)}
                  </h3>
                  <p className="mt-1">{tech.initialRelease}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {t("latestVersion", language)}
                  </h3>
                  <p className="mt-1">{tech.latestVersion}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("developedBy", language)}</h3>
                  <p className="mt-1">{tech.developedBy}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("category", language)}</h3>
                  <p className="mt-1 capitalize">{getCategoryName(tech.category)}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>{t("relatedTechnologies", language)}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                {relatedTechs.map((relatedTech) => {
                  // Get the icon component for related tech
                  const RelatedIconComponent = iconMap[relatedTech.icon as keyof typeof iconMap]

                  return (
                    <Link
                      key={relatedTech.id}
                      href={`/technologies/${relatedTech.id}`}
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      {RelatedIconComponent && <RelatedIconComponent className="h-5 w-5 text-neutral-500" />}
                      <span>{relatedTech.name}</span>
                    </Link>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
