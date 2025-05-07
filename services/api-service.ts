/**
 * API服务
 *
 * 此服务提供了与API交互的通用方法。
 * 它使用apiEndpoints配置来构建请求URL和设置请求选项。
 */

import { apiEndpoints, buildApiUrl, type ApiEndpoint } from "@/config/api-endpoints"

// 通用API响应接口
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  meta?: {
    total?: number
    page?: number
    pageSize?: number
  }
}

// API服务类
export class ApiService {
  // 发送API请求的通用方法
  static async request<T>(
    endpoint: ApiEndpoint,
    params: Record<string, string> = {},
    body?: any,
  ): Promise<ApiResponse<T>> {
    try {
      const url = buildApiUrl(endpoint, params)

      const options: RequestInit = {
        method: endpoint.method,
        headers: {
          "Content-Type": "application/json",
          ...endpoint.headers,
        },
        signal: endpoint.timeout ? AbortSignal.timeout(endpoint.timeout) : undefined,
      }

      if (body && (endpoint.method === "POST" || endpoint.method === "PUT")) {
        options.body = JSON.stringify(body)
      }

      const response = await fetch(url, options)

      if (!response.ok) {
        throw new Error(`API请求失败: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error("API请求出错:", error)
      return {
        success: false,
        error: error instanceof Error ? error.message : "未知错误",
      }
    }
  }

  // 获取所有技术信息
  static async getAllTechnologies() {
    return this.request(apiEndpoints.getAllTechnologies)
  }

  // 获取特定技术信息
  static async getTechnology(techId: string) {
    return this.request(apiEndpoints.getTechnology, { techId })
  }

  // 获取特定技术的版本历史
  static async getVersionHistory(techId: string) {
    return this.request(apiEndpoints.getVersionHistory, { techId })
  }

  // 获取所有技术的最新版本
  static async getAllLatestVersions() {
    return this.request(apiEndpoints.getAllLatestVersions)
  }

  // 获取特定技术的最新版本
  static async getLatestVersion(techId: string) {
    return this.request(apiEndpoints.getLatestVersion, { techId })
  }

  // 获取特定技术的特定版本详情
  static async getVersionDetails(techId: string, version: string) {
    return this.request(apiEndpoints.getVersionDetails, { techId, version })
  }

  // 自定义API请求方法
  static async customRequest<T>(
    endpointKey: keyof typeof apiEndpoints,
    params: Record<string, string> = {},
    body?: any,
  ) {
    const endpoint = apiEndpoints[endpointKey]
    if (!endpoint) {
      return {
        success: false,
        error: `未找到API端点: ${endpointKey}`,
      }
    }

    return this.request<T>(endpoint, params, body)
  }
}
