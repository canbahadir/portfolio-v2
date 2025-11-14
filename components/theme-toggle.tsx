"use client"

import * as React from "react"
import { Sun } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-10 w-10"
      disabled
    >
      <Sun className="h-5 w-5" />
      <span className="sr-only">Theme</span>
    </Button>
  )
}

