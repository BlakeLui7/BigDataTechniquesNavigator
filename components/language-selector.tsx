"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { t } from "@/lib/i18n"

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Select language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")} className={language === "en" ? "bg-accent" : ""}>
          {t("english", language)}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("zh")} className={language === "zh" ? "bg-accent" : ""}>
          {t("chinese", language)}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("de")} className={language === "de" ? "bg-accent" : ""}>
          {t("german", language)}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("fr")} className={language === "fr" ? "bg-accent" : ""}>
          {t("french", language)}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("es")} className={language === "es" ? "bg-accent" : ""}>
          {t("spanish", language)}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}