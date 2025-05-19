// 集中管理翻译的入口文件
import { common } from "./common"
import { home } from "./home"
import * as technologiesModule from "./technologies" // 使用命名空间导入
import { comparison } from "./comparison"
import { installation } from "./installation"
import { resources } from "./resources"
import { about } from "./about"
import { contact } from "./contact"
import { privacy } from "./privacy"

// 确保technologies模块正确导入
const technologies = technologiesModule.default || technologiesModule

// 合并所有翻译
export const translations = {
  en: {
    ...common.en,
    ...home.en,
    ...(technologies.en || {}),
    ...comparison.en,
    ...installation.en,
    ...resources.en,
    ...about.en,
    ...contact.en,
    ...privacy.en,
  },
  zh: {
    ...common.zh,
    ...home.zh,
    ...(technologies.zh || {}),
    ...comparison.zh,
    ...installation.zh,
    ...resources.zh,
    ...about.zh,
    ...contact.zh,
    ...privacy.zh,
  },
  de: {
    ...common.de,
    ...home.de,
    ...(technologies.de || {}),
    ...comparison.de,
    ...installation.de,
    ...resources.de,
    ...about.de,
    ...contact.de,
    ...privacy.de,
  },
  fr: {
    ...common.fr,
    ...home.fr,
    ...(technologies.fr || {}),
    ...comparison.fr,
    ...installation.fr,
    ...resources.fr,
    ...about.fr,
    ...contact.fr,
    ...privacy.fr,
  },
  es: {
    ...common.es,
    ...home.es,
    ...(technologies.es || {}),
    ...comparison.es,
    ...installation.es,
    ...resources.es,
    ...about.es,
    ...contact.es,
    ...privacy.es,
  },
}

export type LanguageKey = "en" | "zh" | "de" | "fr" | "es"
export type TranslationKey = keyof typeof translations.en

/**
 * 翻译函数
 * @param key 翻译键
 * @param language 语言
 * @param params 替换参数
 * @returns 翻译后的文本
 */
export function t(key: TranslationKey, language: LanguageKey, params?: Record<string, string>): string {
  // 首先尝试使用指定语言的翻译
  let text = translations[language]?.[key]

  // 如果指定语言没有该翻译，回退到英语
  if (!text && language !== "en") {
    text = translations.en[key]
  }

  // 如果英语也没有该翻译，则使用键名作为最后的回退
  if (!text) {
    text = key as string
  }

  // 替换参数
  if (params) {
    Object.entries(params).forEach(([param, value]) => {
      text = text.replace(`{${param}}`, value)
    })
  }

  return text
}

/**
 * 安全的翻译函数，当翻译键不存在时返回默认值或英文翻译
 */
export function safeT(key: string, language: LanguageKey, defaultValue = "", params?: Record<string, string>): string {
  // 首先尝试使用指定语言的翻译
  let text = translations[language]?.[key as TranslationKey]

  // 如果指定语言没有该翻译，回退到英语
  if (!text && language !== "en") {
    text = translations.en[key as TranslationKey]
  }

  // 如果英语也没有该翻译，则使用默认值或键名作为最后的回退
  if (!text) {
    text = defaultValue || key
  }

  // 替换参数
  if (params) {
    Object.entries(params).forEach(([param, value]) => {
      text = text.replace(`{${param}}`, value)
    })
  }

  return text
}

/**
 * 检查翻译完整性
 * 返回每种语言缺失的翻译键
 */
export function checkTranslationCompleteness(): Record<string, string[]> {
  const missingTranslations: Record<string, string[]> = {}
  const englishKeys = Object.keys(translations.en)

  Object.keys(translations).forEach((lang) => {
    if (lang === "en") return // 跳过英语

    const langKeys = Object.keys(translations[lang as LanguageKey])
    const missing = englishKeys.filter((key) => !langKeys.includes(key))

    if (missing.length > 0) {
      missingTranslations[lang] = missing
    }
  })

  return missingTranslations
}
