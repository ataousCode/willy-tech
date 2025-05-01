"use client"

import { useState, useEffect } from "react"

/**
 * A hook to simulate loading states for components
 * @param {boolean} initialState - Initial loading state
 * @param {number} delay - Delay in milliseconds before loading completes
 * @returns {boolean} - Current loading state
 */
function useLoading(initialState = true, delay = 1500) {
  const [isLoading, setIsLoading] = useState(initialState)

  useEffect(() => {
    if (initialState) {
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [initialState, delay])

  return isLoading
}

export default useLoading
