"use client"

import { Github } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { t } from "@/lib/i18n"

export default function AboutPage() {
  const { language } = useLanguage()

  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-2">{t("aboutTitle", language)}</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">{t("aboutSubtitle", language)}</p>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>{t("ourMission", language)}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">{t("missionText", language)}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("whatWeDo", language)}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">{t("whatWeDoText", language)}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("ourTeam", language)}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">{t("teamText", language)}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("openSource", language)}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{t("openSourceText", language)}</p>
              <Button asChild className="flex items-center gap-2">
                <a href="https://github.com/yourusername/big-data-navigator" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span>{t("visitRepo", language)}</span>
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
