"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Terminal, ExternalLink, Server, Github } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { safeT } from "@/lib/i18n"
import { getAllTechnologies } from "@/services/tech-service"
import type { Technology } from "@/config/technologies"
import { iconMap } from "@/config/technologies"
import { t } from "@/lib/i18n" // Declare the t variable

export default function InstallationPage() {
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

  return (
    <div className="container px-4 py-12 md:px-6">
      <h1 className="text-3xl font-bold tracking-tight mb-2">
        {safeT("installationTitle", language, "Installation Guides")}
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        {safeT(
          "installationSubtitle",
          language,
          "Step-by-step installation guides for big data technologies including standalone and containerized options",
        )}
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((tech) => {
          const IconComponent = iconMap[tech.icon as keyof typeof iconMap]
          return (
            <Card key={tech.id} className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  {IconComponent && <IconComponent className="h-6 w-6 text-neutral-500" />}
                  <CardTitle>{tech.name}</CardTitle>
                </div>
                <CardDescription>
                  {safeT("installationOptions", language, "Installation options for {name}", { name: tech.name })}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <Tabs defaultValue="standalone" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="standalone">{safeT("standalone", language, "Standalone")}</TabsTrigger>
                    <TabsTrigger value="container">{safeT("container", language, "Container")}</TabsTrigger>
                  </TabsList>
                  <TabsContent value="standalone" className="mt-4 space-y-4">
                    <div className="flex items-start gap-2">
                      <Terminal className="h-5 w-5 text-neutral-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="text-sm font-medium">
                          {safeT("systemRequirements", language, "System Requirements")}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {language === "zh"
                            ? tech.systemRequirements.zh
                            : language === "de" && tech.systemRequirements.de
                              ? tech.systemRequirements.de
                              : language === "fr" && tech.systemRequirements.fr
                                ? tech.systemRequirements.fr
                                : language === "es" && tech.systemRequirements.es
                                  ? tech.systemRequirements.es
                                  : tech.systemRequirements.en}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Server className="h-5 w-5 text-neutral-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="text-sm font-medium">{safeT("quickInstall", language, "Quick Install")}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {language === "zh"
                            ? tech.quickInstall.zh
                            : language === "de" && tech.quickInstall.de
                              ? tech.quickInstall.de
                              : language === "fr" && tech.quickInstall.fr
                                ? tech.quickInstall.fr
                                : language === "es" && tech.quickInstall.es
                                  ? tech.quickInstall.es
                                  : tech.quickInstall.en}
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="container" className="mt-4 space-y-4">
                    <div className="flex items-start gap-2">
                      <Terminal className="h-5 w-5 text-neutral-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="text-sm font-medium">{safeT("docker", language, "Docker")}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{tech.dockerCommand}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Github className="h-5 w-5 text-neutral-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="text-sm font-medium">{safeT("dockerCompose", language, "Docker Compose")}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {safeT(
                            "dockerComposeDesc",
                            language,
                            "Available in the official GitHub repository with sample configurations for production deployments.",
                          )}
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button asChild variant="outline" className="w-full justify-between">
                  <a href={tech.documentation} target="_blank" rel="noopener noreferrer">
                    <span>{safeT("officialInstallGuide", language, "Official installation guide")}</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
          )
        })}
      </div>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>{t("versionUpdateResources", language)}</CardTitle>
            <CardDescription>{t("versionUpdateDesc", language)}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium mb-4">{t("officialReleasePages", language)}</h3>
                <ul className="space-y-3">
                  {technologies.map((tech) => {
                    const IconComponent = iconMap[tech.icon as keyof typeof iconMap]
                    return (
                      <li key={tech.id} className="flex items-center gap-2">
                        {IconComponent && <IconComponent className="h-5 w-5 text-neutral-500" />}
                        <a
                          href={tech.downloadLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-800 hover:underline dark:text-neutral-200"
                        >
                          {tech.name} {t("downloads", language)}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">{t("releaseNotesChangelogs", language)}</h3>
                <ul className="space-y-3">
                  {technologies.map((tech) => {
                    const IconComponent = iconMap[tech.icon as keyof typeof iconMap]
                    return (
                      <li key={tech.id} className="flex items-center gap-2">
                        {IconComponent && <IconComponent className="h-5 w-5 text-neutral-500" />}
                        <a
                          href={tech.releaseNotesLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-800 hover:underline dark:text-neutral-200"
                        >
                          {tech.name} {t("releaseNotes", language)}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>{t("keepingUpToDate", language)}</CardTitle>
            <CardDescription>{t("upToDateDesc", language)}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose dark:prose-invert max-w-none">
              <h3>{t("bestPracticesTitle", language)}</h3>
              <ul>
                <li>
                  <strong>{t("subscribeMailing", language)}:</strong> {t("subscribingDesc", language)}
                </li>
                <li>
                  <strong>{t("followReleaseNotes", language)}:</strong> {t("followingDesc", language)}
                </li>
                <li>
                  <strong>{t("testStaging", language)}:</strong> {t("testingDesc", language)}
                </li>
                <li>
                  <strong>{t("backupData", language)}:</strong> {t("backupDesc", language)}
                </li>
                <li>
                  <strong>{t("useAutomation", language)}:</strong> {t("automationDesc", language)}
                </li>
              </ul>
              <p>{t("containerTip", language)}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
