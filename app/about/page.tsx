"use client"

import { Github } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { safeT } from "@/lib/i18n"

export default function AboutPage() {
  const { language } = useLanguage()

  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-2">{safeT("aboutTitle", language, "About Us")}</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          {safeT(
            "aboutSubtitle",
            language,
            "Learn more about our mission and the team behind Big Data Technologies Navigator.",
          )}
        </p>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>{safeT("ourMission", language, "Our Mission")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                {safeT(
                  "missionText",
                  language,
                  "Our mission is to simplify the complex world of big data technologies by providing clear, comprehensive, and up-to-date information. We aim to help developers, data scientists, and organizations make informed decisions about which technologies best suit their specific needs.",
                )}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{safeT("whatWeDo", language, "What We Do")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                {safeT(
                  "whatWeDoText",
                  language,
                  "We curate detailed information about various big data technologies, including their features, use cases, system requirements, and installation guides. Our platform allows you to compare different technologies side by side, helping you understand their strengths, weaknesses, and ideal use cases.",
                )}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{safeT("openSource", language, "Open Source")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {safeT(
                  "openSourceText",
                  language,
                  "Big Data Technologies Navigator is an open-source project. We believe in the power of community collaboration to create the most accurate and comprehensive resource possible. We welcome contributions from anyone who shares our passion for big data technologies.",
                )}
              </p>
              <Button asChild variant="outline" className="flex items-center gap-2">
                <a
                  href="https://github.com/BlakeLui7/BigDataTechniquesNavigator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  <span>{safeT("visitRepo", language, "Visit our GitHub repository")}</span>
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
