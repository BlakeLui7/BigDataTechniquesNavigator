"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { t } from "@/lib/i18n"
import { privacyPolicy } from "@/config/privacy"

export default function PrivacyPage() {
  const { language } = useLanguage()
  const currentDate = new Date(privacyPolicy.lastUpdated).toLocaleDateString(language === "zh" ? "zh-CN" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-2">{t("privacyTitle", language)}</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-2">{t("privacySubtitle", language)}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          {t("lastUpdated", language)}: {currentDate}
        </p>

        <div className="space-y-8">
          {privacyPolicy.sections.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{language === "zh" ? section.title.zh : section.title.en}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  {language === "zh" ? section.content.zh : section.content.en}
                </p>

                {/* 特殊处理数据使用点 */}
                {section.title.en === "How We Use Your Data" && (
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mt-4">
                    {(language === "zh" ? privacyPolicy.dataUsagePoints.zh : privacyPolicy.dataUsagePoints.en).map(
                      (point, i) => (
                        <li key={i}>{point}</li>
                      ),
                    )}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}

          <div className="mt-8 text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-2">{t("contactForPrivacy", language)}</p>
            <a
              href={`mailto:${privacyPolicy.contactEmail}`}
              className="text-neutral-800 hover:underline dark:text-neutral-200"
            >
              {privacyPolicy.contactEmail}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
