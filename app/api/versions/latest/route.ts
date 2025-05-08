/**
 * 最新版本API路由
 *
 * 此API路由用于获取所有技术的最新版本信息。
 * 在实际应用中，这将连接到数据库或外部API。
 */

import { NextResponse } from "next/server"
import { versionHistories, type Version } from "@/config/versions"

export async function GET() {
  try {
    // 模拟API延迟
    await new Promise((resolve) => setTimeout(resolve, 800))

    // 获取每个技术的最新版本
    const latestVersions: Record<string, Version | null> = {}

    Object.keys(versionHistories).forEach((techId) => {
      const versions = versionHistories[techId]
      latestVersions[techId] = versions && versions.length > 0 ? versions[0] : null
    })

    return NextResponse.json({
      success: true,
      data: latestVersions,
    })
  } catch (error) {
    console.error("获取最新版本信息失败:", error)
    return NextResponse.json({ success: false, error: "获取最新版本信息失败" }, { status: 500 })
  }
}
