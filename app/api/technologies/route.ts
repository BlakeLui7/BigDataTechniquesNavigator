/**
 * 技术API路由
 *
 * 此API路由用于获取所有技术信息。
 * 在实际应用中，这将连接到数据库或外部API。
 */

import { NextResponse } from "next/server"
import { technologies } from "@/config/technologies"

export async function GET() {
  try {
    // 模拟API延迟
    await new Promise((resolve) => setTimeout(resolve, 600))

    return NextResponse.json({
      success: true,
      data: technologies,
    })
  } catch (error) {
    console.error("获取技术信息失败:", error)
    return NextResponse.json({ success: false, error: "获取技术信息失败" }, { status: 500 })
  }
}
