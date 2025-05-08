"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useLanguage } from "@/contexts/language-context"
import { t } from "@/lib/i18n"
import { getAllLatestVersions } from "@/services/version-service"

interface VersionInfo {
  name: string
  latestVersion: string
  releaseDate: string
  fetchedAt: string
  status: "loading" | "success" | "error"
  error?: string
}

export default function VersionFetcher() {
  const [versions, setVersions] = useState<VersionInfo[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const { language } = useLanguage()

  // 获取最新版本信息
  const fetchLatestVersions = async () => {
    setIsLoading(true)

    try {
      const latestVersions = await getAllLatestVersions()
      const now = new Date().toISOString()

      const versionInfos: VersionInfo[] = Object.entries(latestVersions).map(([techId, version]) => {
        if (!version) {
          return {
            name: techId,
            latestVersion: language === "zh" ? "无法获取版本信息" : "Version information unavailable",
            releaseDate: "N/A",
            fetchedAt: now,
            status: "error",
          }
        }

        return {
          name: techId,
          latestVersion: version.version,
          releaseDate: language === "zh" ? version.date.zh : version.date.en,
          fetchedAt: now,
          status: "success",
        }
      })

      setVersions(versionInfos)
    } catch (error) {
      console.error("获取版本信息失败:", error)
      // 处理错误情况
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("latestVersionInfo", language)}</CardTitle>
        <CardDescription>{t("latestVersionDesc", language)}</CardDescription>
      </CardHeader>
      <CardContent>
        <Alert className="mb-4">
          <AlertTitle>{t("versionNote", language)}</AlertTitle>
          <AlertDescription>{t("versionNoteDesc", language)}</AlertDescription>
        </Alert>

        {versions.length > 0 ? (
          <div className="space-y-4">
            {versions.map((version) => (
              <div key={version.name} className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">{version.name}</p>
                  <p className="text-sm text-gray-500">
                    {version.status === "success"
                      ? version.latestVersion
                      : language === "zh"
                        ? "获取版本时出错"
                        : "Error fetching version"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm">{version.releaseDate}</p>
                  <p className="text-xs text-gray-500">
                    {language === "zh" ? "检查时间: " : "Checked: "}
                    {new Date(version.fetchedAt).toLocaleString(language === "zh" ? "zh-CN" : "en-US")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">
              {language === "zh"
                ? "点击下方按钮检查最新版本"
                : "Click the button below to check for the latest versions"}
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={fetchLatestVersions} disabled={isLoading} className="w-full">
          {isLoading ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              {t("checkingVersions", language)}
            </>
          ) : (
            <>
              <RefreshCw className="mr-2 h-4 w-4" />
              {t("checkVersions", language)}
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
