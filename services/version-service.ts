/**
 * 版本服务
 *
 * 此服务负责获取技术的版本信息。
 * 它使用ApiService发送请求，如果API请求失败则回退到静态配置数据。
 */

import { versionHistories, type Version } from "@/config/versions"
import { ApiService } from "@/services/api-service"

/**
 * 获取技术的版本历史
 * @param techId 技术ID
 * @returns 版本历史数组
 */
export async function getVersionHistory(techId: string): Promise<Version[]> {
  try {
    // 使用ApiService获取版本信息
    const response = await ApiService.getVersionHistory(techId)

    if (response.success && response.data && response.data[techId]) {
      // 如果API返回成功且包含所需技术的数据，则使用API数据
      return response.data[techId]
    } else {
      // 否则回退到静态数据
      return versionHistories[techId] || []
    }
  } catch (error) {
    console.warn(`获取${techId}版本信息失败，使用静态数据`, error)
    // 发生错误时回退到静态数据
    return versionHistories[techId] || []
  }
}

/**
 * 获取所有技术的最新版本
 * @returns 包含所有技术最新版本的对象
 */
export async function getAllLatestVersions(): Promise<Record<string, Version | null>> {
  try {
    // 使用ApiService获取所有最新版本信息
    const response = await ApiService.getAllLatestVersions()

    if (response.success && response.data) {
      return response.data
    } else {
      throw new Error("API返回失败状态")
    }
  } catch (error) {
    console.warn("获取最新版本信息失败，使用静态数据", error)

    // 从静态数据中提取每个技术的最新版本
    const latestVersions: Record<string, Version | null> = {}

    Object.keys(versionHistories).forEach((techId) => {
      const versions = versionHistories[techId]
      latestVersions[techId] = versions && versions.length > 0 ? versions[0] : null
    })

    return latestVersions
  }
}

/**
 * 获取特定技术的最新版本
 * @param techId 技术ID
 * @returns 最新版本或null（如果未找到）
 */
export async function getLatestVersion(techId: string): Promise<Version | null> {
  try {
    // 使用ApiService获取特定技术的最新版本
    const response = await ApiService.getLatestVersion(techId)

    if (response.success && response.data) {
      return response.data
    } else {
      throw new Error("API返回失败状态")
    }
  } catch (error) {
    console.warn(`获取${techId}最新版本信息失败，使用静态数据`, error)

    // 从静态数据中提取该技术的最新版本
    const versions = versionHistories[techId] || []
    return versions.length > 0 ? versions[0] : null
  }
}

/**
 * 获取特定技术的特定版本详情
 * @param techId 技术ID
 * @param version 版本号
 * @returns 版本详情或null（如果未找到）
 */
export async function getVersionDetails(techId: string, version: string): Promise<Version | null> {
  try {
    // 使用ApiService获取特定版本详情
    const response = await ApiService.getVersionDetails(techId, version)

    if (response.success && response.data) {
      return response.data
    } else {
      throw new Error("API返回失败状态")
    }
  } catch (error) {
    console.warn(`获取${techId}版本${version}详情失败，使用静态数据`, error)

    // 从静态数据中查找该版本
    const versions = versionHistories[techId] || []
    return versions.find((v) => v.version === version) || null
  }
}
