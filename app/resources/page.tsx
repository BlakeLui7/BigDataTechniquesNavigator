"use client"

import { ArrowRight, BookOpen, FileText, Video, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/contexts/language-context"
import { t } from "@/lib/i18n"
import { resources } from "@/config/resources"

// 图标映射
const iconMap = {
  BookOpen,
  FileText,
  Video,
  Github,
}

export default function ResourcesPage() {
  const { language } = useLanguage()

  return (
    <div className="container px-4 py-12 md:px-6">
      <h1 className="text-3xl font-bold tracking-tight mb-2">{t("resourcesTitle", language)}</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">{t("resourcesSubtitle", language)}</p>

      <Tabs defaultValue="documentation" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="documentation">{t("documentation", language)}</TabsTrigger>
          <TabsTrigger value="tutorials">{t("tutorials", language)}</TabsTrigger>
          <TabsTrigger value="videos">{t("videos", language)}</TabsTrigger>
          <TabsTrigger value="community">{t("community", language)}</TabsTrigger>
        </TabsList>

        {resources.map((category) => (
          <TabsContent key={category.category} value={category.category} className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item, index) => {
                const IconComponent = iconMap[item.icon as keyof typeof iconMap]
                return (
                  <Card key={index} className="flex flex-col h-full">
                    <CardHeader className="flex flex-row items-start gap-4 pb-2">
                      {IconComponent && <IconComponent className="h-6 w-6 text-neutral-500 mt-1" />}
                      <div>
                        <CardTitle className="text-xl">{item.title[language]}</CardTitle>
                        <CardDescription className="mt-1">{item.description[language]}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow"></CardContent>
                    <CardFooter>
                      <Button asChild variant="ghost" className="w-full justify-between">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <span>{t("visitResource", language)}</span>
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
