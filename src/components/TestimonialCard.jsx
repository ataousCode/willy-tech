"use client"

function TestimonialCard({ quote, author, position, avatar, isLoading = false }) {
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
        <div style={{ padding: "1.5rem" }}>
          <div
            style={{
              marginBottom: "1rem",
              height: "2rem",
              width: "2rem",
              backgroundColor: "#1f2b47",
              borderRadius: "0.25rem",
            }}
          ></div>
          <div style={{ gap: "0.5rem" }}>
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
            <div
              style={{ height: "1rem", backgroundColor: "#1f2b47", borderRadius: "0.25rem", width: "66.666667%" }}
            ></div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #1f2b47", backgroundColor: "#111827", padding: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{ height: "2.5rem", width: "2.5rem", backgroundColor: "#1f2b47", borderRadius: "9999px" }}
            ></div>
            <div style={{ marginLeft: "1rem" }}>
              <div
                style={{
                  height: "1rem",
                  backgroundColor: "#1f2b47",
                  borderRadius: "0.25rem",
                  width: "6rem",
                  marginBottom: "0.5rem",
                }}
              ></div>
              <div
                style={{ height: "0.75rem", backgroundColor: "#1f2b47", borderRadius: "0.25rem", width: "8rem" }}
              ></div>
            </div>
          </div>
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
        transform: "translateY(0)",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        e.currentTarget.style.transform = "translateY(-0.5rem)"
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.boxShadow = "none"
        e.currentTarget.style.transform = "translateY(0)"
      }}
    >
      <div style={{ padding: "1.5rem" }}>
        <div style={{ marginBottom: "1rem", fontSize: "2.25rem", color: "#1f2b47" }}>"</div>
        <p style={{ fontStyle: "italic", color: "#8491a9" }}>{quote}</p>
      </div>
      <div style={{ borderTop: "1px solid #1f2b47", backgroundColor: "rgba(17, 24, 39, 0.5)", padding: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={avatar || "https://via.placeholder.com/40"}
            alt={author}
            style={{
              height: "2.5rem",
              width: "2.5rem",
              borderRadius: "9999px",
              objectFit: "cover",
              transition: "transform 0.5s",
              transform: "scale(1)",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          <div style={{ marginLeft: "1rem" }}>
            <p style={{ fontSize: "0.875rem", fontWeight: "500", color: "#a3b3c9" }}>{author}</p>
            <p style={{ fontSize: "0.75rem", color: "#8491a9" }}>{position}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
