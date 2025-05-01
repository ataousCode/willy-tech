
"use client"

import { useState, useEffect, useRef } from "react"

function AnimatedCounter({ value, duration = 2000, suffix = "", isLoading = false }) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const startTimeRef = useRef(null)

  useEffect(() => {
    if (isLoading) return

    const animate = (timestamp) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }

      const progress = timestamp - startTimeRef.current
      const percentage = Math.min(progress / duration, 1)

      // Easing function for smoother animation
      const easeOutQuad = (t) => t * (2 - t)
      const easedProgress = easeOutQuad(percentage)

      countRef.current = Math.floor(easedProgress * value)
      setCount(countRef.current)

      if (percentage < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)

    return () => {
      startTimeRef.current = null
    }
  }, [value, duration, isLoading])

  if (isLoading) {
    return (
      <div className="text-4xl font-bold animate-pulse">
        <div className="h-10 bg-slate-700 rounded w-16 mx-auto"></div>
      </div>
    )
  }

  return (
    <div className="text-4xl font-bold text-slate-100">
      {count}
      {suffix}
    </div>
  )
}

export default AnimatedCounter
