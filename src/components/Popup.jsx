"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

function Popup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const handleShowPopup = () => {
      setIsVisible(true)
      setIsAnimating(true)
    }

    window.addEventListener("showPopup", handleShowPopup)

    return () => {
      window.removeEventListener("showPopup", handleShowPopup)
    }
  }, [])

  const closePopup = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setIsVisible(false)
    }, 500) // Match animation duration
  }

  if (!isVisible) return null

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(10, 11, 20, 0.8)",
        zIndex: 9999,
        backdropFilter: "blur(5px)",
        opacity: isAnimating ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}
      onClick={closePopup}
    >
      <div
        style={{
          backgroundColor: "#111827",
          borderRadius: "0.75rem",
          padding: "2rem",
          maxWidth: "500px",
          width: "90%",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          position: "relative",
          transform: isAnimating ? "scale(1) translateY(0)" : "scale(0.9) translateY(20px)",
          opacity: isAnimating ? 1 : 0,
          transition: "transform 0.5s ease, opacity 0.5s ease",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            backgroundColor: "transparent",
            border: "none",
            color: "#8491a9",
            cursor: "pointer",
            padding: "0.5rem",
            borderRadius: "9999px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
          onClick={closePopup}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#1f2b47"
            e.currentTarget.style.color = "#5e5cff"
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "transparent"
            e.currentTarget.style.color = "#8491a9"
          }}
        >
          <X size={24} />
        </button>

        <div
          style={{
            textAlign: "center",
            marginBottom: "1.5rem",
          }}
        >
          <div
            style={{
              width: "4rem",
              height: "4rem",
              backgroundColor: "rgba(94, 92, 255, 0.1)",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5e5cff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
              <path d="M12 8v4"></path>
              <path d="M12 16h.01"></path>
            </svg>
          </div>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#a3b3c9",
              marginBottom: "1rem",
            }}
          >
            Coming Soon
          </h2>
        </div>

        <p
          style={{
            color: "#8491a9",
            lineHeight: 1.7,
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          This functionality is currently under development and will be implemented soon. We're working hard to bring
          you the best experience possible.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              backgroundColor: "#5e5cff",
              color: "#0a0b14",
              border: "none",
              borderRadius: "0.5rem",
              padding: "0.75rem 1.5rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 10px rgba(94, 92, 255, 0.2)",
            }}
            onClick={closePopup}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#4240d4"
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(94, 92, 255, 0.3)"
              e.currentTarget.style.transform = "translateY(-2px)"
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#5e5cff"
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(94, 92, 255, 0.2)"
              e.currentTarget.style.transform = "translateY(0)"
            }}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}

export default Popup
