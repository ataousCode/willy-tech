import AnimateOnScroll from "./AnimateOnScroll"

function SectionTitle({
  title,
  subtitle,
  align = "center",
  titleColor = "#5e5cff",
  subtitleColor = "#8491a9",
  withLine = true,
  animation = "fade-up",
  delay = 0,
}) {
  return (
    <AnimateOnScroll animation={animation} delay={delay}>
      <div
        style={{
          textAlign: align,
          marginBottom: "2.5rem",
          position: "relative",
        }}
      >
        {withLine && (
          <div
            style={{
              position: "absolute",
              top: "-1.5rem",
              left: align === "center" ? "50%" : align === "right" ? "auto" : "0",
              right: align === "right" ? "0" : "auto",
              transform: align === "center" ? "translateX(-50%)" : "none",
              width: "3rem",
              height: "3px",
              background: "linear-gradient(to right, #5e5cff, #6e6aff)",
              marginBottom: "1rem",
            }}
          />
        )}
        <h2
          style={{
            fontSize: "2.25rem",
            fontWeight: "700",
            color: titleColor,
            marginBottom: "1rem",
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            style={{
              fontSize: "1.125rem",
              color: subtitleColor,
              maxWidth: align === "center" ? "42rem" : "100%",
              margin: align === "center" ? "0 auto" : "0",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </AnimateOnScroll>
  )
}

export default SectionTitle
