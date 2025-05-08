"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { t } from "@/lib/i18n"
import { getAllTechnologies } from "@/services/tech-service"
import { useState, useEffect } from "react"
import type { Technology } from "@/config/technologies"
import { iconMap } from "@/config/technologies"

export default function ComparisonPage() {
  const { language } = useLanguage()
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadTechnologies() {
      try {
        const data = await getAllTechnologies()
        setTechnologies(data)
      } catch (error) {
        console.error("加载技术数据失败:", error)
      } finally {
        setLoading(false)
      }
    }

    loadTechnologies()
  }, [])

  if (loading) {
    return <div className="py-4 text-center text-gray-500">{language === "zh" ? "加载中..." : "Loading..."}</div>
  }

  const collectionTechs = technologies.filter((tech) => tech.category === "collection")
  const processingTechs = technologies.filter((tech) => tech.category === "processing")
  const visualizationTechs = technologies.filter((tech) => tech.category === "visualization")

  return (
    <div className="container px-4 py-12 md:px-6">
      <h1 className="text-3xl font-bold tracking-tight mb-2">{t("comparisonTitle", language)}</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">{t("comparisonSubtitle", language)}</p>

      <div className="space-y-10">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle>{t("dataCollectionTech", language)}</CardTitle>
              <Badge className="bg-neutral-100 text-neutral-800 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 border-neutral-200 dark:border-neutral-700">
                Collection
              </Badge>
            </div>
            <CardDescription>{t("dataCollectionDesc", language)}</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("technology", language)}</TableHead>
                  <TableHead>{t("initialRelease", language)}</TableHead>
                  <TableHead>{t("latestVersion", language)}</TableHead>
                  <TableHead>{t("developedBy", language)}</TableHead>
                  <TableHead>{t("keyFeatures", language)}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {collectionTechs.map((tech) => {
                  const IconComponent = iconMap[tech.icon as keyof typeof iconMap]
                  return (
                    <TableRow key={tech.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          {IconComponent && <IconComponent className="h-4 w-4 text-neutral-500" />}
                          <span>{tech.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{tech.initialRelease}</TableCell>
                      <TableCell>{tech.latestVersion}</TableCell>
                      <TableCell>{tech.developedBy}</TableCell>
                      <TableCell>
                        <ul className="list-disc list-inside text-sm">
                          {(language === "zh" ? tech.features.zh : tech.features.en)
                            .slice(0, 3)
                            .map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                        </ul>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle>{t("dataProcessingTech", language)}</CardTitle>
              <Badge className="bg-neutral-100 text-neutral-800 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 border-neutral-200 dark:border-neutral-700">
                Processing
              </Badge>
            </div>
            <CardDescription>{t("dataProcessingDesc", language)}</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("technology", language)}</TableHead>
                  <TableHead>{t("initialRelease", language)}</TableHead>
                  <TableHead>{t("latestVersion", language)}</TableHead>
                  <TableHead>{t("developedBy", language)}</TableHead>
                  <TableHead>{t("keyFeatures", language)}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {processingTechs.map((tech) => {
                  const IconComponent = iconMap[tech.icon as keyof typeof iconMap]
                  return (
                    <TableRow key={tech.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          {IconComponent && <IconComponent className="h-4 w-4 text-neutral-500" />}
                          <span>{tech.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{tech.initialRelease}</TableCell>
                      <TableCell>{tech.latestVersion}</TableCell>
                      <TableCell>{tech.developedBy}</TableCell>
                      <TableCell>
                        <ul className="list-disc list-inside text-sm">
                          {(language === "zh" ? tech.features.zh : tech.features.en)
                            .slice(0, 3)
                            .map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                        </ul>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle>{t("dataVisualizationTech", language)}</CardTitle>
              <Badge className="bg-neutral-100 text-neutral-800 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 border-neutral-200 dark:border-neutral-700">
                Visualization
              </Badge>
            </div>
            <CardDescription>{t("dataVisualizationDesc", language)}</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("technology", language)}</TableHead>
                  <TableHead>{t("initialRelease", language)}</TableHead>
                  <TableHead>{t("latestVersion", language)}</TableHead>
                  <TableHead>{t("developedBy", language)}</TableHead>
                  <TableHead>{t("keyFeatures", language)}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {visualizationTechs.map((tech) => {
                  const IconComponent = iconMap[tech.icon as keyof typeof iconMap]
                  return (
                    <TableRow key={tech.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          {IconComponent && <IconComponent className="h-4 w-4 text-neutral-500" />}
                          <span>{tech.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{tech.initialRelease}</TableCell>
                      <TableCell>{tech.latestVersion}</TableCell>
                      <TableCell>{tech.developedBy}</TableCell>
                      <TableCell>
                        <ul className="list-disc list-inside text-sm">
                          {(language === "zh" ? tech.features.zh : tech.features.en)
                            .slice(0, 3)
                            .map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                        </ul>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
