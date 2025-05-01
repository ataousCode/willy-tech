"use client"

import { useEffect, useRef, useState } from "react"

function ParallaxSection({
  children,
  bgImage,
  bgColor = "bg-slate-900",
  speed = 0.3,
  overlayOpacity = 0.5,
  className = "",
}) {
  const sectionRef = useRef(null)
  const [offset, setOffset] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Handle parallax effect on scroll
  useEffect(() => {
    if (isMobile) return // Disable parallax on mobile for better performance

    const handleScroll = () => {
      if (!sectionRef.current) return

      const { top, height } = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate how far the section is from the viewport center
      const sectionCenter = top + height / 2
      const viewportCenter = windowHeight / 2
      const distanceFromCenter = sectionCenter - viewportCenter

      // Calculate parallax offset based on distance from center
      const parallaxOffset = distanceFromCenter * speed
      setOffset(parallaxOffset)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, isMobile])

  return (
    <section ref={sectionRef} className={`relative overflow-hidden ${bgColor} ${className}`}>
      {/* Background with parallax effect */}
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-100"
          style={{
            backgroundImage: `url(${bgImage})`,
            transform: isMobile ? "none" : `translateY(${offset}px)`,
            willChange: "transform",
          }}
        />
      )}

      {/* Overlay for better text readability */}
      <div className={`absolute inset-0 bg-slate-900`} style={{ opacity: overlayOpacity }} />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  )
}

export default ParallaxSection
