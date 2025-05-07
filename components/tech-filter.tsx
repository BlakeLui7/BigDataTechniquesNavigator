"use client"

import { useState } from "react"
import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/language-context"
import { t } from "@/lib/translations"

export default function TechFilter() {
  const [showCollection, setShowCollection] = useState(true)
  const [showProcessing, setShowProcessing] = useState(true)
  const [showVisualization, setShowVisualization] = useState(true)
  const { language } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          <span>{t("filter", language)}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>{t("categories", language)}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={showCollection} onCheckedChange={setShowCollection}>
          {t("dataCollection", language)}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={showProcessing} onCheckedChange={setShowProcessing}>
          {t("dataProcessing", language)}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={showVisualization} onCheckedChange={setShowVisualization}>
          {t("dataVisualization", language)}
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
