function SkeletonProjectCard() {
    return (
      <div
        style={{
          overflow: "hidden",
          borderRadius: "0.5rem",
          border: "1px solid #1f2b47",
          backgroundColor: "#111827",
          animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        }}
      >
        {/* Image placeholder */}
        <div style={{ height: "12rem", backgroundColor: "#1f2b47" }}></div>
  
        <div style={{ padding: "1.5rem" }}>
          {/* Title placeholder */}
          <div
            style={{
              height: "1.75rem",
              width: "75%",
              backgroundColor: "#1f2b47",
              borderRadius: "0.25rem",
              marginBottom: "0.5rem",
            }}
          ></div>
  
          {/* Description placeholder */}
          <div style={{ marginTop: "1rem", gap: "0.5rem" }}>
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
  
        <div style={{ borderTop: "1px solid #1f2b47", padding: "1.5rem" }}>
          {/* Button placeholder */}
          <div style={{ height: "1.5rem", backgroundColor: "#1f2b47", borderRadius: "0.25rem", width: "8rem" }}></div>
        </div>
      </div>
    )
  }
  
  export default SkeletonProjectCard
  