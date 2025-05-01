"use client"

import { useEffect, useState } from "react"

function ThemeToggle() {
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Return null - no theme toggle needed
  return null
}

export default ThemeToggle
