"use client"

import Link from "next/link"
import { Database } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { t } from "@/lib/i18n"

export default function Footer() {
  const { language } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="/about" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            {t("about", language)}
          </Link>
          <Link href="/contact" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            {t("contact", language)}
          </Link>
          <Link href="/privacy" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            {t("privacy", language)}
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <Link href="/" className="flex items-center gap-2">
            <Database className="h-6 w-6 text-neutral-800 dark:text-neutral-200" />
            <span className="font-medium">{t("appName", language)}</span>
          </Link>
          <p className="mt-2 text-xs leading-5 text-gray-500">
            {t("copyright", language, { year: currentYear.toString() })}
          </p>
        </div>
      </div>
    </footer>
  )
}
