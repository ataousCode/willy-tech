"use client"

import { Link } from "react-router-dom"

function ProjectCard({ image, title, category, description, isLoading = false }) {
  if (isLoading) {
    return (
      <div
        style={{
          overflow: "hidden",
          transition: "all 0.3s",
          backgroundColor: "#111827",
          borderRadius: "0.5rem",
          border: "1px solid #1f2b47",
          animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        }}
      >
        <div style={{ position: "relative", height: "12rem", backgroundColor: "#1f2b47" }}></div>
        <div style={{ padding: "1.5rem" }}>
          <div
            style={{
              height: "1.5rem",
              backgroundColor: "#1f2b47",
              borderRadius: "0.25rem",
              width: "75%",
              marginBottom: "0.75rem",
            }}
          ></div>
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
            style={{ height: "1rem", backgroundColor: "#1f2b47", borderRadius: "0.25rem", width: "83.333333%" }}
          ></div>
        </div>
        <div style={{ borderTop: "1px solid #1f2b47", padding: "1.5rem" }}>
          <div
            style={{ height: "1rem", backgroundColor: "#1f2b47", borderRadius: "0.25rem", width: "33.333333%" }}
          ></div>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        overflow: "hidden",
        transition: "all 0.3s",
        backgroundColor: "#111827",
        borderRadius: "0.5rem",
        border: "1px solid #1f2b47",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      }}
    >
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={image || "https://via.placeholder.com/600x400"}
          alt={title}
          style={{
            height: "12rem",
            width: "100%",
            objectFit: "cover",
            transition: "transform 0.7s ease-in-out",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        <span
          style={{
            position: "absolute",
            right: "0.75rem",
            top: "0.75rem",
            backgroundColor: "#5e5cff",
            color: "#0a0b14",
            fontSize: "0.75rem",
            padding: "0.25rem 0.5rem",
            borderRadius: "9999px",
          }}
        >
          {category}
        </span>
      </div>
      <div style={{ padding: "1.5rem" }}>
        <h3 style={{ fontSize: "1.25rem", fontWeight: "500", color: "#a3b3c9" }}>{title}</h3>
        <p style={{ marginTop: "0.5rem", fontSize: "0.875rem", color: "#8491a9" }}>{description}</p>
      </div>
      <div style={{ borderTop: "1px solid #1f2b47", padding: "1.5rem" }}>
        <Link
          to="/projects"
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "0.875rem",
            fontWeight: "500",
            color: "#5e5cff",
          }}
          onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
          onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
        >
          View Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 20 20"
            style={{
              marginLeft: "0.25rem",
              height: "1rem",
              width: "1rem",
              transform: "translateX(0)",
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "translateX(0.25rem)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "translateX(0)")}
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
