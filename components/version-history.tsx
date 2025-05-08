"use client"

import { useState, useEffect } from "react"
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@/components/ui/timeline"
import { useLanguage } from "@/contexts/language-context"
import { t } from "@/lib/i18n"
import { getVersionHistory } from "@/services/version-service"
import type { Version } from "@/config/versions"

export default function VersionHistory({ techId }: { techId: string }) {
  const [versions, setVersions] = useState<Version[]>([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})
  const { language } = useLanguage()

  // 加载版本历史数据
  useEffect(() => {
    async function loadVersions() {
      try {
        const data = await getVersionHistory(techId)
        setVersions(data)
      } catch (error) {
        console.error("加载版本历史失败:", error)
      } finally {
        setLoading(false)
      }
    }

    loadVersions()
  }, [techId])

  const toggleExpand = (version: string) => {
    setExpanded((prev) => ({
      ...prev,
      [version]: !prev[version],
    }))
  }

  if (loading) {
    return <div className="py-4 text-center text-gray-500">{language === "zh" ? "加载中..." : "Loading..."}</div>
  }

  if (versions.length === 0) {
    return (
      <div className="py-4 text-center text-gray-500">
        {language === "zh" ? "没有可用的版本历史" : "No version history available"}
      </div>
    )
  }

  return (
    <Timeline>
      {versions.map((version, index) => (
        <TimelineItem key={version.version}>
          {index < versions.length - 1 && <TimelineConnector />}
          <TimelineHeader>
            <TimelineIcon />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
              <p className="text-sm font-medium">{version.version}</p>
              <time className="text-xs text-gray-500 dark:text-gray-400">
                {language === "zh" ? version.date.zh : version.date.en}
              </time>
            </div>
          </TimelineHeader>
          <TimelineBody className="mt-2">
            <button
              onClick={() => toggleExpand(version.version)}
              className="text-sm font-medium text-primary hover:underline mb-1"
            >
              {expanded[version.version] ? t("hideDetails", language) : t("showDetails", language)}
            </button>
            {expanded[version.version] && (
              <ul className="mt-2 space-y-1 text-sm">
                {(language === "zh" ? version.highlights.zh : version.highlights.en).map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-xs">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </TimelineBody>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
