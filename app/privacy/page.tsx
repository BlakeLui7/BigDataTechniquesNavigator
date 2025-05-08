"use client"

import { useLanguage } from "@/contexts/language-context"
import { t } from "@/lib/i18n"
import { privacyPolicy } from "@/config/privacy"

export default function PrivacyPage() {
  const { language } = useLanguage()

  return (
    <main className="flex-1">
      <div className="container max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">{t("privacyTitle", language)}</h1>
            <p className="text-muted-foreground">{t("privacySubtitle", language)}</p>
          </div>
          <div className="text-sm text-muted-foreground">
            {t("lastUpdated", language)}: {privacyPolicy.lastUpdated}
          </div>
          <div className="space-y-8">
            {privacyPolicy.sections.map((section, index) => (
              <div key={index} className="space-y-2">
                <h2 className="text-xl font-semibold">{section.title[language]}</h2>
                <p className="leading-7">{section.content[language]}</p>
                {section.title[language] === t("howWeUseData", language) && (
                  <ul className="list-disc pl-6 space-y-1">
                    {privacyPolicy.dataUsagePoints[language].map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div className="space-y-2">
              <p className="leading-7">
                {t("contactForPrivacy", language)}{" "}
                <a href={`mailto:${privacyPolicy.contactEmail}`} className="text-primary hover:underline">
                  {privacyPolicy.contactEmail}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
