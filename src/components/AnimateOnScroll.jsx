"use client"

import { useEffect, useRef, useState } from "react"

function AnimateOnScroll({
  children,
  animation = "fade-up",
  threshold = 0.1,
  delay = 0,
  duration = 700,
  distance = 50,
  once = true,
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.unobserve(entry.target)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: "10px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, once])

  // Define animation styles
  const getAnimationStyles = () => {
    const baseStyles = {
      opacity: 0,
      transition: `all ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}ms`,
    }

    const visibleStyles = {
      opacity: 1,
    }

    switch (animation) {
      case "fade-up":
        return {
          initial: { ...baseStyles, transform: `translateY(${distance}px)` },
          visible: { ...visibleStyles, transform: "translateY(0)" },
        }
      case "fade-down":
        return {
          initial: { ...baseStyles, transform: `translateY(-${distance}px)` },
          visible: { ...visibleStyles, transform: "translateY(0)" },
        }
      case "fade-left":
        return {
          initial: { ...baseStyles, transform: `translateX(${distance}px)` },
          visible: { ...visibleStyles, transform: "translateX(0)" },
        }
      case "fade-right":
        return {
          initial: { ...baseStyles, transform: `translateX(-${distance}px)` },
          visible: { ...visibleStyles, transform: "translateX(0)" },
        }
      case "zoom-in":
        return {
          initial: { ...baseStyles, transform: "scale(0.9)" },
          visible: { ...visibleStyles, transform: "scale(1)" },
        }
      case "zoom-out":
        return {
          initial: { ...baseStyles, transform: "scale(1.1)" },
          visible: { ...visibleStyles, transform: "scale(1)" },
        }
      case "flip-up":
        return {
          initial: { ...baseStyles, transform: "perspective(400px) rotateX(90deg)" },
          visible: { ...visibleStyles, transform: "perspective(400px) rotateX(0)" },
        }
      default:
        return {
          initial: baseStyles,
          visible: visibleStyles,
        }
    }
  }

  const { initial, visible } = getAnimationStyles()
  const currentStyles = isVisible ? visible : initial

  return (
    <div ref={ref} style={currentStyles}>
      {children}
    </div>
  )
}

export default AnimateOnScroll
