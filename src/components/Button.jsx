"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  iconPosition = "right",
  onClick,
  fullWidth = false,
  disabled = false,
  type = "button",
  showPopup = false,
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false)

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return {
          backgroundColor: isHovered ? "#4240d4" : "#5e5cff",
          color: "#0a0b14",
          border: "none",
          boxShadow: isHovered ? "0 8px 20px rgba(94, 92, 255, 0.3)" : "0 4px 10px rgba(94, 92, 255, 0.2)",
        }
      case "secondary":
        return {
          backgroundColor: isHovered ? "#1a2e4c" : "#111827",
          color: "#5e5cff",
          border: "1px solid #5e5cff",
          boxShadow: isHovered ? "0 8px 20px rgba(94, 92, 255, 0.15)" : "0 4px 10px rgba(94, 92, 255, 0.1)",
        }
      case "outline":
        return {
          backgroundColor: isHovered ? "rgba(94, 92, 255, 0.05)" : "transparent",
          color: "#5e5cff",
          border: "1px solid #1f2b47",
          boxShadow: isHovered ? "0 8px 20px rgba(94, 92, 255, 0.1)" : "none",
        }
      case "ghost":
        return {
          backgroundColor: isHovered ? "#1a2e4c" : "transparent",
          color: "#a3b3c9",
          border: "none",
          boxShadow: "none",
        }
      case "gradient":
        return {
          background: isHovered
            ? "linear-gradient(45deg, #4240d4, #5e5cff)"
            : "linear-gradient(45deg, #5e5cff, #6e6aff)",
          color: "#0a0b14",
          border: "none",
          boxShadow: isHovered ? "0 8px 20px rgba(94, 92, 255, 0.3)" : "0 4px 10px rgba(94, 92, 255, 0.2)",
        }
      default:
        return {
          backgroundColor: isHovered ? "#4240d4" : "#5e5cff",
          color: "#0a0b14",
          border: "none",
          boxShadow: isHovered ? "0 8px 20px rgba(94, 92, 255, 0.3)" : "0 4px 10px rgba(94, 92, 255, 0.2)",
        }
    }
  }

  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return {
          padding: "0.375rem 0.75rem",
          fontSize: "0.875rem",
          borderRadius: "0.375rem",
        }
      case "md":
        return {
          padding: "0.625rem 1.25rem",
          fontSize: "1rem",
          borderRadius: "0.5rem",
        }
      case "lg":
        return {
          padding: "0.75rem 1.5rem",
          fontSize: "1.125rem",
          borderRadius: "0.5rem",
        }
      case "xl":
        return {
          padding: "1rem 2rem",
          fontSize: "1.25rem",
          borderRadius: "0.625rem",
        }
      default:
        return {
          padding: "0.625rem 1.25rem",
          fontSize: "1rem",
          borderRadius: "0.5rem",
        }
    }
  }

  const baseStyles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    fontWeight: 600,
    transition: "all 0.3s ease",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
    width: fullWidth ? "100%" : "auto",
    transform: isHovered && !disabled ? "translateY(-2px)" : "translateY(0)",
    ...getVariantStyles(),
    ...getSizeStyles(),
  }

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="button-icon-left">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="button-icon-right">{icon}</span>}
    </>
  )

  const handleMouseEnter = () => {
    if (!disabled) setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleClick = (e) => {
    if (showPopup) {
      e.preventDefault()
      // Show popup via global state
      window.dispatchEvent(new CustomEvent("showPopup"))
    }

    if (onClick) {
      onClick(e)
    }
  }

  if (to) {
    return (
      <Link
        to={to}
        style={baseStyles}
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={showPopup ? handleClick : undefined}
        {...props}
      >
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        style={baseStyles}
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={showPopup ? handleClick : undefined}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      style={baseStyles}
      className={className}
      onClick={showPopup ? handleClick : onClick}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {content}
    </button>
  )
}

export default Button
