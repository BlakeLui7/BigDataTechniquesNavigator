/**
 * 技术服务
 *
 * 此服务负责获取技术信息。
 * 它使用ApiService发送请求，如果API请求失败则回退到静态配置数据。
 */

import { technologies, type Technology } from "@/config/technologies"
import { ApiService } from "@/services/api-service"

/**
 * 获取所有技术信息
 * @returns 技术数组
 */
export async function getAllTechnologies(): Promise<Technology[]> {
  try {
    // 使用ApiService获取技术信息
    const response = await ApiService.getAllTechnologies()

    if (response.success && Array.isArray(response.data)) {
      return response.data
    } else {
      throw new Error("API返回无效数据")
    }
  } catch (error) {
    console.warn("获取技术信息失败，使用静态数据", error)
    // 发生错误时回退到静态数据
    return technologies
  }
}

/**
 * 获取特定技术的信息
 * @param techId 技术ID
 * @returns 技术信息或undefined（如果未找到）
 */
export async function getTechnology(techId: string): Promise<Technology | undefined> {
  try {
    // 使用ApiService获取特定技术信息
    const response = await ApiService.getTechnology(techId)

    if (response.success && response.data) {
      return response.data
    } else {
      throw new Error("API返回无效数据")
    }
  } catch (error) {
    console.warn(`获取技术${techId}信息失败，使用静态数据`, error)
    // 发生错误时回退到静态数据
    return technologies.find((tech) => tech.id === techId)
  }
}

/**
 * 按类别获取技术
 * @param category 类别
 * @returns 属于指定类别的技术数组
 */
export async function getTechnologiesByCategory(category: string): Promise<Technology[]> {
  const allTechs = await getAllTechnologies()
  return allTechs.filter((tech) => tech.category === category)
}
