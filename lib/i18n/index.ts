// 集中管理翻译的入口文件
import { common } from "./common"
import { home } from "./home"
import { technologies } from "./technologies"
import { comparison } from "./comparison"
import { installation } from "./installation"
import { resources } from "./resources"
import { about } from "./about"
import { contact } from "./contact"
import { privacy } from "./privacy"

// 合并所有翻译
export const translations = {
  en: {
    ...common.en,
    ...home.en,
    ...technologies.en,
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
    ...technologies.zh,
    ...comparison.zh,
    ...installation.zh,
    ...resources.zh,
    ...about.zh,
    ...contact.zh,
    ...privacy.zh,
  },
}

export type LanguageKey = keyof typeof translations
export type TranslationKey = keyof typeof translations.en

/**
 * 翻译函数
 * @param key 翻译键
 * @param language 语言
 * @param params 替换参数
 * @returns 翻译后的文本
 */
export function t(key: TranslationKey, language: LanguageKey, params?: Record<string, string>): string {
  let text = translations[language][key] || translations.en[key] || key

  if (params) {
    Object.entries(params).forEach(([param, value]) => {
      text = text.replace(`{${param}}`, value)
    })
  }

  return text
}
