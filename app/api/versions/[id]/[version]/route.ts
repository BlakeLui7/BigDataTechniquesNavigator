/**
 * 特定版本详情API路由
 *
 * 此API路由用于获取特定技术的特定版本详情。
 * 在实际应用中，这将连接到数据库或外部API。
 */

import { NextResponse } from "next/server"
import { versionHistories } from "@/config/versions"

export async function GET(request: Request, { params }: { params: { id: string; version: string } }) {
  try {
    const { id: techId, version } = params

    // 模拟API延迟
    await new Promise((resolve) => setTimeout(resolve, 300))

    // 获取该技术的版本历史
    const versions = versionHistories[techId] || []

    // 查找特定版本
    const versionDetails = versions.find((v) => v.version === version)

    if (!versionDetails) {
      return NextResponse.json(
        {
          success: false,
          error: `未找到技术 ${techId} 的版本 ${version}`,
        },
        { status: 404 },
      )
    }

    return NextResponse.json({
      success: true,
      data: versionDetails,
    })
  } catch (error) {
    console.error("获取版本详情失败:", error)
    return NextResponse.json(
      {
        success: false,
        error: "获取版本详情失败",
      },
      { status: 500 },
    )
  }
}
