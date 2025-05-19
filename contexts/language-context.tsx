"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Language = "en" | "zh" | "de" | "fr" | "es"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  // Load saved language preference on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (
      savedLanguage &&
      (savedLanguage === "en" ||
        savedLanguage === "zh" ||
        savedLanguage === "de" ||
        savedLanguage === "fr" ||
        savedLanguage === "es")
    ) {
      setLanguage(savedLanguage)
    } else {
      // Try to detect browser language
      const browserLanguage = navigator.language.split("-")[0]
      if (browserLanguage === "zh") {
        setLanguage("zh")
      } else if (browserLanguage === "de") {
        setLanguage("de")
      } else if (browserLanguage === "fr") {
        setLanguage("fr")
      } else if (browserLanguage === "es") {
        setLanguage("es")
      } else {
        // Default to English if no match or detection fails
        setLanguage("en")
      }
    }
  }, [])

  // Save language preference when it changes
  useEffect(() => {
    localStorage.setItem("language", language)
    document.documentElement.lang = language
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
