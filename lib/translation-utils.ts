import { type LanguageKey, type TranslationKey, translations } from "./i18n"

/**
 * 安全的翻译函数，当翻译键不存在时返回默认值
 * @param key 翻译键
 * @param language 语言
 * @param defaultValue 默认值
 * @param params 替换参数
 * @returns 翻译后的文本或默认值
 */
export function safeTranslate(
  key: TranslationKey,
  language: LanguageKey,
  defaultValue: string = key as string,
  params?: Record<string, string>,
): string {
  try {
    // 尝试获取翻译
    const langTranslations = translations[language]
    if (!langTranslations || !langTranslations[key]) {
      // 如果当前语言没有该翻译，尝试使用英语
      if (language !== "en" && translations.en && translations.en[key]) {
        let text = translations.en[key]

        // 替换参数
        if (params) {
          Object.entries(params).forEach(([param, value]) => {
            text = text.replace(`{${param}}`, value)
          })
        }

        return text
      }

      // 如果英语也没有，返回默认值
      return defaultValue
    }

    let text = langTranslations[key]

    // 替换参数
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        text = text.replace(`{${param}}`, value)
      })
    }

    return text
  } catch (error) {
    console.error(`Translation error for key: ${key}`, error)
    return defaultValue
  }
}

/**
 * 检查翻译键是否存在于所有语言中
 * @returns 缺失翻译的列表
 */
export function checkTranslationCompleteness(): { language: LanguageKey; missingKeys: string[] }[] {
  const results: { language: LanguageKey; missingKeys: string[] }[] = []

  // 获取所有英语翻译键作为基准
  const englishKeys = Object.keys(translations.en || {})

  // 检查每种语言
  Object.entries(translations).forEach(([lang, langTranslations]) => {
    if (lang === "en") return // 跳过英语

    const missingKeys: string[] = []

    // 检查每个英语键是否存在于当前语言中
    englishKeys.forEach((key) => {
      if (!langTranslations[key as TranslationKey]) {
        missingKeys.push(key)
      }
    })

    if (missingKeys.length > 0) {
      results.push({
        language: lang as LanguageKey,
        missingKeys,
      })
    }
  })

  return results
}
