/**
 * 特定技术最新版本API路由
 *
 * 此API路由用于获取特定技术的最新版本信息。
 * 在实际应用中，这将连接到数据库或外部API。
 */

import { NextResponse } from "next/server"
import { versionHistories } from "@/config/versions"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const techId = params.id

    // 模拟API延迟
    await new Promise((resolve) => setTimeout(resolve, 300))

    // 获取该技术的版本历史
    const versions = versionHistories[techId] || []

    // 获取最新版本
    const latestVersion = versions.length > 0 ? versions[0] : null

    if (!latestVersion) {
      return NextResponse.json(
        {
          success: false,
          error: `未找到技术 ${techId} 的版本信息`,
        },
        { status: 404 },
      )
    }

    return NextResponse.json({
      success: true,
      data: latestVersion,
    })
  } catch (error) {
    console.error("获取最新版本信息失败:", error)
    return NextResponse.json(
      {
        success: false,
        error: "获取最新版本信息失败",
      },
      { status: 500 },
    )
  }
}
