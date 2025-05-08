"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { t } from "@/lib/i18n"
import { getAllTechnologies } from "@/services/tech-service"
import type { Technology } from "@/config/technologies"
import { iconMap } from "@/config/technologies"

export default function TechGrid() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const { language } = useLanguage()

  // 加载技术数据
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

  // 翻译类别名称
  const getCategoryName = (category: string) => {
    if (category === "collection") return t("dataCollection", language)
    if (category === "processing") return t("dataProcessing", language)
    if (category === "visualization") return t("dataVisualization", language)
    return category
  }

  if (loading) {
    return <div className="py-4 text-center text-gray-500">{language === "zh" ? "加载中..." : "Loading..."}</div>
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
      {technologies.map((tech) => {
        // Get the icon component from the icon map
        const IconComponent = iconMap[tech.icon as keyof typeof iconMap]

        return (
          <motion.div
            key={tech.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setHoveredId(tech.id)}
            onHoverEnd={() => setHoveredId(null)}
          >
            <Card className="h-full flex flex-col overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    {IconComponent && <IconComponent className="h-6 w-6 text-neutral-500" />}
                    <CardTitle>{tech.name}</CardTitle>
                  </div>
                  <Badge
                    variant={
                      tech.category === "collection"
                        ? "default"
                        : tech.category === "processing"
                          ? "secondary"
                          : "outline"
                    }
                    className="bg-neutral-100 text-neutral-800 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
                  >
                    {getCategoryName(tech.category)}
                  </Badge>
                </div>
                <CardDescription className="mt-2">
                  {language === "zh" ? tech.description.zh : tech.description.en}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex flex-col">
                    <span className="text-gray-500 dark:text-gray-400">{t("initialRelease", language)}</span>
                    <span className="font-medium">{tech.initialRelease}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 dark:text-gray-400">{t("latestVersion", language)}</span>
                    <span className="font-medium">{tech.latestVersion}</span>
                  </div>
                  <div className="flex flex-col col-span-2 mt-2">
                    <span className="text-gray-500 dark:text-gray-400">{t("developedBy", language)}</span>
                    <span className="font-medium">{tech.developedBy}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Link href={`/technologies/${tech.id}`} className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  >
                    <span>{t("learnMore", language)}</span>
                    <ArrowRight
                      className={`h-4 w-4 transition-transform duration-300 ${
                        hoveredId === tech.id ? "translate-x-1" : ""
                      }`}
                    />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}
