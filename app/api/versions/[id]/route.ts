/**
 * 版本API路由
 *
 * 此API路由用于获取特定技术的版本历史信息。
 * 在实际应用中，这将连接到数据库或外部API。
 */

import { NextResponse } from "next/server"
import { versionHistories } from "@/config/versions"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const techId = params.id

    // 模拟API延迟
    await new Promise((resolve) => setTimeout(resolve, 500))

    // 获取版本历史
    const versions = versionHistories[techId] || []

    return NextResponse.json({
      success: true,
      data: {
        [techId]: versions,
      },
    })
  } catch (error) {
    console.error("获取版本历史失败:", error)
    return NextResponse.json({ success: false, error: "获取版本历史失败" }, { status: 500 })
  }
}
