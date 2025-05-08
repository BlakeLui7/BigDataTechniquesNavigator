/**
 * API端点配置文件
 *
 * 此文件定义了获取技术信息的API端点。
 * 当需要添加新的API端点或修改现有端点时，只需在此文件中进行更改。
 */

export interface ApiEndpoint {
  // 端点URL，可以包含占位符如 {techId}
  url: string
  // 请求方法
  method: "GET" | "POST" | "PUT" | "DELETE"
  // 请求头
  headers?: Record<string, string>
  // 请求超时时间（毫秒）
  timeout?: number
  // 是否需要身份验证
  requiresAuth?: boolean
  // 描述
  description: string
}

export interface ApiEndpoints {
  // 获取所有技术信息
  getAllTechnologies: ApiEndpoint
  // 获取特定技术信息
  getTechnology: ApiEndpoint
  // 获取特定技术的版本历史
  getVersionHistory: ApiEndpoint
  // 获取所有技术的最新版本
  getAllLatestVersions: ApiEndpoint
  // 获取特定技术的最新版本
  getLatestVersion: ApiEndpoint
  // 获取特定技术的特定版本详情
  getVersionDetails: ApiEndpoint
  // 自定义端点，可以根据需要扩展
  [key: string]: ApiEndpoint
}

// API端点配置
export const apiEndpoints: ApiEndpoints = {
  // 获取所有技术信息
  getAllTechnologies: {
    url: "/api/technologies",
    method: "GET",
    timeout: 5000,
    description: "获取所有技术的基本信息",
  },

  // 获取特定技术信息
  getTechnology: {
    url: "/api/technologies/{techId}",
    method: "GET",
    timeout: 5000,
    description: "获取特定技术的详细信息",
  },

  // 获取特定技术的版本历史
  getVersionHistory: {
    url: "/api/versions/{techId}",
    method: "GET",
    timeout: 5000,
    description: "获取特定技术的版本历史",
  },

  // 获取所有技术的最新版本
  getAllLatestVersions: {
    url: "/api/versions/latest",
    method: "GET",
    timeout: 5000,
    description: "获取所有技术的最新版本信息",
  },

  // 获取特定技术的最新版本
  getLatestVersion: {
    url: "/api/versions/latest/{techId}",
    method: "GET",
    timeout: 5000,
    description: "获取特定技术的最新版本信息",
  },

  // 获取特定技术的特定版本详情
  getVersionDetails: {
    url: "/api/versions/{techId}/{version}",
    method: "GET",
    timeout: 5000,
    description: "获取特定技术的特定版本详情",
  },

  // 示例：获取技术的兼容性信息
  getCompatibilityInfo: {
    url: "/api/compatibility/{techId}",
    method: "GET",
    timeout: 5000,
    description: "获取特定技术的兼容性信息",
  },

  // 示例：获取技术的性能基准测试
  getPerformanceBenchmarks: {
    url: "/api/benchmarks/{techId}",
    method: "GET",
    timeout: 5000,
    description: "获取特定技术的性能基准测试结果",
  },
}

// 构建API URL的辅助函数，替换URL中的占位符
export function buildApiUrl(endpoint: ApiEndpoint, params: Record<string, string>): string {
  let url = endpoint.url

  // 替换URL中的所有占位符
  Object.entries(params).forEach(([key, value]) => {
    url = url.replace(`{${key}}`, encodeURIComponent(value))
  })

  return url
}
