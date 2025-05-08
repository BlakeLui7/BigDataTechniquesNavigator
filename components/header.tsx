"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Database, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import LanguageSelector from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"
import { t } from "@/lib/i18n"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { setTheme } = useTheme()
  const { language } = useLanguage()

  const navigation = [
    { name: t("home", language), href: "/" },
    { name: t("technologies", language), href: "/technologies" },
    { name: t("comparison", language), href: "/comparison" },
    { name: t("installation", language), href: "/installation" },
    { name: t("resources", language), href: "/resources" },
  ]

  return (
    <header className="bg-white/80 dark:bg-gray-950/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Database className="h-8 w-8 text-neutral-800 dark:text-neutral-200" />
            <span className="font-semibold text-xl">{t("appName", language)}</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium leading-6 ${
                pathname === item.href
                  ? "text-neutral-800 dark:text-neutral-200"
                  : "text-gray-600 dark:text-gray-400 hover:text-neutral-800 dark:hover:text-neutral-200"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-2">
          <LanguageSelector />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>{t("lightMode", language)}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>{t("darkMode", language)}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>{t("systemMode", language)}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                <Database className="h-8 w-8 text-neutral-800 dark:text-neutral-200" />
                <span className="font-semibold text-xl">{t("appName", language)}</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 ${
                        pathname === item.href
                          ? "text-neutral-800 dark:text-neutral-200"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 flex items-center gap-4">
                  <LanguageSelector />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setTheme("light")}>{t("lightMode", language)}</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("dark")}>{t("darkMode", language)}</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("system")}>
                        {t("systemMode", language)}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
  // 检查深色模式切换功能是否正常工作
  // 确认DropdownMenu和setTheme函数是否正确实现

  // 特别检查以下部分是否正确：
  // 1. useTheme hook的导入和使用
  // 2. DropdownMenu的实现
  // 3. setTheme函数的调用
}
