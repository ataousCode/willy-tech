"use client"

import { useState } from "react"

function ServiceCard({ icon, title, description, features, isLoading = false }) {
  const [isHovered, setIsHovered] = useState(false)

  if (isLoading) {
    return (
      <div
        style={{
          overflow: "hidden",
          transition: "all 0.5s",
          backgroundColor: "#111827",
          borderRadius: "0.5rem",
          border: "1px solid #1f2b47",
          animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          padding: "1.5rem",
        }}
      >
        <div
          style={{
            marginBottom: "1rem",
            height: "2.5rem",
            width: "2.5rem",
            backgroundColor: "#1f2b47",
            borderRadius: "0.25rem",
          }}
        ></div>
        <div
          style={{
            height: "1.5rem",
            backgroundColor: "#1f2b47",
            borderRadius: "0.25rem",
            width: "75%",
            marginBottom: "0.75rem",
          }}
        ></div>
        <div style={{ marginBottom: "1rem" }}>
          <div
            style={{
              height: "1rem",
              backgroundColor: "#1f2b47",
              borderRadius: "0.25rem",
              width: "100%",
              marginBottom: "0.5rem",
            }}
          ></div>
          <div
            style={{
              height: "1rem",
              backgroundColor: "#1f2b47",
              borderRadius: "0.25rem",
              width: "83.333333%",
              marginBottom: "0.5rem",
            }}
          ></div>
          <div style={{ height: "1rem", backgroundColor: "#1f2b47", borderRadius: "0.25rem", width: "80%" }}></div>
        </div>
        <div style={{ gap: "0.5rem" }}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
              <div
                style={{
                  height: "1rem",
                  width: "1rem",
                  backgroundColor: "#1f2b47",
                  borderRadius: "9999px",
                  marginRight: "0.5rem",
                }}
              ></div>
              <div style={{ height: "1rem", backgroundColor: "#1f2b47", borderRadius: "0.25rem", width: "75%" }}></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        overflow: "hidden",
        transition: "all 0.5s",
        backgroundColor: "#111827",
        borderRadius: "0.5rem",
        border: "1px solid #1f2b47",
        padding: "1.5rem",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseOver={(e) =>
        (e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)")
      }
      onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      <div
        style={{
          marginBottom: "1rem",
          transform: "scale(1)",
          transition: "transform 0.5s ease-out",
        }}
        className={isHovered ? "scale-110" : ""}
      >
        {icon}
      </div>
      <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "0.5rem", color: "#a3b3c9" }}>{title}</h3>
      <p style={{ color: "#8491a9", marginBottom: "1rem" }}>{description}</p>
      <ul style={{ gap: "0.5rem" }}>
        {features.map((feature, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              transform: isHovered ? "translateX(0.625rem)" : "translateX(0)",
              transition: "transform 0.3s ease-out",
              transitionDelay: `${index * 50}ms`,
              marginBottom: "0.5rem",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="#5e5cff"
              style={{ marginRight: "0.5rem", height: "1.25rem", width: "1.25rem" }}
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span style={{ fontSize: "0.875rem", color: "#8491a9" }}>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ServiceCard
