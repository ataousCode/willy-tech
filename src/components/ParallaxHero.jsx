"use client"

import { useEffect, useRef, useState } from "react"

function ParallaxHero({
  children,
  bgImage,
  height = "600px",
  overlayColor = "rgba(10, 11, 20, 0.7)",
  speed = 0.3,
  backgroundPosition = "center",
  backgroundSize = "cover",
  className = "",
}) {
  const heroRef = useRef(null)
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
      if (!heroRef.current) return

      const scrollPosition = window.scrollY
      setOffset(scrollPosition * speed)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, isMobile])

  return (
    <div
      ref={heroRef}
      style={{
        position: "relative",
        height,
        width: "100%",
        overflow: "hidden",
      }}
      className={className}
    >
      {/* Background with parallax effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${bgImage})`,
          backgroundPosition,
          backgroundSize,
          transform: isMobile ? "none" : `translateY(${offset}px)`,
          transition: "transform 100ms linear",
          willChange: "transform",
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: overlayColor,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>

      {/* Bottom gradient fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100px",
          background: "linear-gradient(to top, #0a0b14, transparent)",
          zIndex: 5,
        }}
      />
    </div>
  )
}

export default ParallaxHero
