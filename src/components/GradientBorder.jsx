function GradientBorder({
    children,
    borderWidth = "2px",
    borderRadius = "0.5rem",
    gradientColors = ["#5e5cff", "#6e6aff"],
    backgroundColor = "#111827",
    padding = "1.5rem",
    className = "",
    style = {},
  }) {
    return (
      <div
        style={{
          position: "relative",
          padding: borderWidth,
          borderRadius: borderRadius,
          background: `linear-gradient(45deg, ${gradientColors.join(", ")})`,
          ...style,
        }}
        className={className}
      >
        <div
          style={{
            backgroundColor,
            borderRadius: `calc(${borderRadius} - ${borderWidth})`,
            padding,
            height: "100%",
          }}
        >
          {children}
        </div>
      </div>
    )
  }
  
  export default GradientBorder
  