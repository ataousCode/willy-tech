"use client"

import { createContext, useContext, useEffect } from "react"

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  // Always use dark theme
  const theme = "dark"

  // Set dark theme on mount
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light")
    root.classList.add("dark")
    localStorage.setItem("theme", "dark")
  }, [])

  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
}

// Custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
