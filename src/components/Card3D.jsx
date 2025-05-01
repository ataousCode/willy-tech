"use client"

import { useState, useRef } from "react"

function Card3D({ children, maxRotation = 10, perspective = 1000, className = "", style = {} }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = e.clientX
    const mouseY = e.clientY

    // Calculate rotation based on mouse position relative to card center
    const rotateY = ((mouseX - centerX) / (rect.width / 2)) * maxRotation
    const rotateX = ((centerY - mouseY) / (rect.height / 2)) * maxRotation

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotation({ x: 0, y: 0 })
  }

  const cardStyle = {
    transform: isHovered
      ? `perspective(${perspective}px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)`
      : `perspective(${perspective}px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`,
    transition: isHovered ? "transform 0.1s" : "transform 0.5s ease",
    ...style,
  }

  return (
    <div
      ref={cardRef}
      style={cardStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </div>
  )
}

export default Card3D
