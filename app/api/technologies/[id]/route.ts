/**
 * 特定技术API路由
 *
 * 此API路由用于获取特定技术的详细信息。
 * 在实际应用中，这将连接到数据库或外部API。
 */

import { NextResponse } from "next/server"
import { technologies } from "@/config/technologies"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const techId = params.id

    // 模拟API延迟
    await new Promise((resolve) => setTimeout(resolve, 400))

    // 查找技术
    const tech = technologies.find((t) => t.id === techId)

    if (!tech) {
      return NextResponse.json({ success: false, error: "技术未找到" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      data: tech,
    })
  } catch (error) {
    console.error("获取技术信息失败:", error)
    return NextResponse.json({ success: false, error: "获取技术信息失败" }, { status: 500 })
  }
}
