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
import { safeT } from "@/lib/i18n"

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
          <span>{safeT("filter", language, "Filter")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>{safeT("categories", language, "Categories")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={showCollection} onCheckedChange={setShowCollection}>
          {safeT("dataCollection", language, "Data Collection")}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={showProcessing} onCheckedChange={setShowProcessing}>
          {safeT("dataProcessing", language, "Data Processing")}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={showVisualization} onCheckedChange={setShowVisualization}>
          {safeT("dataVisualization", language, "Data Visualization")}
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
