"use client"

import { useState } from "react"

function ContactForm({ isLoading = false }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState(null)
  const [focusedField, setFocusedField] = useState(null)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleFocus = (field) => {
    setFocusedField(field)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission with loading animation
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage({
        type: "success",
        text: "Message sent! We'll get back to you as soon as possible.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null)
      }, 5000)
    }, 1500)
  }

  if (isLoading) {
    return (
      <div
        style={{
          backgroundColor: "#111827",
          borderRadius: "0.5rem",
          border: "1px solid #1f2b47",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
          animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          padding: "1.5rem",
        }}
      >
        <div style={{ gap: "1.5rem" }}>
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "1fr 1fr" }}>
            <div style={{ gap: "0.5rem" }}>
              <div
                style={{
                  height: "1rem",
                  backgroundColor: "#1f2b47",
                  borderRadius: "0.25rem",
                  width: "4rem",
                  marginBottom: "0.5rem",
                }}
              ></div>
              <div
                style={{ height: "2.5rem", backgroundColor: "#1f2b47", borderRadius: "0.375rem", width: "100%" }}
              ></div>
            </div>
            <div style={{ gap: "0.5rem" }}>
              <div
                style={{
                  height: "1rem",
                  backgroundColor: "#1f2b47",
                  borderRadius: "0.25rem",
                  width: "4rem",
                  marginBottom: "0.5rem",
                }}
              ></div>
              <div
                style={{ height: "2.5rem", backgroundColor: "#1f2b47", borderRadius: "0.375rem", width: "100%" }}
              ></div>
            </div>
          </div>
          <div style={{ gap: "0.5rem", marginTop: "1.5rem" }}>
            <div
              style={{
                height: "1rem",
                backgroundColor: "#1f2b47",
                borderRadius: "0.25rem",
                width: "5rem",
                marginBottom: "0.5rem",
              }}
            ></div>
            <div
              style={{ height: "2.5rem", backgroundColor: "#1f2b47", borderRadius: "0.375rem", width: "100%" }}
            ></div>
          </div>
          <div style={{ gap: "0.5rem", marginTop: "1.5rem" }}>
            <div
              style={{
                height: "1rem",
                backgroundColor: "#1f2b47",
                borderRadius: "0.25rem",
                width: "6rem",
                marginBottom: "0.5rem",
              }}
            ></div>
            <div style={{ height: "8rem", backgroundColor: "#1f2b47", borderRadius: "0.375rem", width: "100%" }}></div>
          </div>
          <div
            style={{
              height: "2.5rem",
              backgroundColor: "#1f2b47",
              borderRadius: "0.375rem",
              width: "100%",
              marginTop: "1.5rem",
            }}
          ></div>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        backgroundColor: "#111827",
        borderRadius: "0.5rem",
        border: "1px solid #1f2b47",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        transform: "translateY(0)",
        transition: "transform 0.5s, box-shadow 0.5s",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        e.currentTarget.style.transform = "translateY(-0.25rem)"
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.boxShadow = "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
        e.currentTarget.style.transform = "translateY(0)"
      }}
    >
      <div style={{ padding: "1.5rem" }}>
        <form onSubmit={handleSubmit} style={{ gap: "1.5rem", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "1fr 1fr" }}>
            <div style={{ gap: "0.5rem", display: "flex", flexDirection: "column" }}>
              <label
                htmlFor="name"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  transition: "color 0.3s",
                  color: focusedField === "name" ? "#5e5cff" : "#8491a9",
                }}
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus("name")}
                onBlur={handleBlur}
                style={{
                  width: "100%",
                  borderRadius: "0.375rem",
                  border: `1px solid ${focusedField === "name" ? "#5e5cff" : "#1f2b47"}`,
                  backgroundColor: "#111827",
                  padding: "0.5rem 0.75rem",
                  fontSize: "0.875rem",
                  color: "#a3b3c9",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                  boxShadow: focusedField === "name" ? "0 0 0 1px #5e5cff" : "none",
                  outline: "none",
                }}
                placeholder="Your name"
                required
              />
            </div>
            <div style={{ gap: "0.5rem", display: "flex", flexDirection: "column" }}>
              <label
                htmlFor="email"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  transition: "color 0.3s",
                  color: focusedField === "email" ? "#5e5cff" : "#8491a9",
                }}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus("email")}
                onBlur={handleBlur}
                style={{
                  width: "100%",
                  borderRadius: "0.375rem",
                  border: `1px solid ${focusedField === "email" ? "#5e5cff" : "#1f2b47"}`,
                  backgroundColor: "#111827",
                  padding: "0.5rem 0.75rem",
                  fontSize: "0.875rem",
                  color: "#a3b3c9",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                  boxShadow: focusedField === "email" ? "0 0 0 1px #5e5cff" : "none",
                  outline: "none",
                }}
                placeholder="Your email"
                required
              />
            </div>
          </div>
          <div style={{ gap: "0.5rem", display: "flex", flexDirection: "column" }}>
            <label
              htmlFor="subject"
              style={{
                fontSize: "0.875rem",
                fontWeight: "500",
                transition: "color 0.3s",
                color: focusedField === "subject" ? "#5e5cff" : "#8491a9",
              }}
            >
              Subject
            </label>
            <input
              id="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              onFocus={() => handleFocus("subject")}
              onBlur={handleBlur}
              style={{
                width: "100%",
                borderRadius: "0.375rem",
                border: `1px solid ${focusedField === "subject" ? "#5e5cff" : "#1f2b47"}`,
                backgroundColor: "#111827",
                padding: "0.5rem 0.75rem",
                fontSize: "0.875rem",
                color: "#a3b3c9",
                transition: "border-color 0.3s, box-shadow 0.3s",
                boxShadow: focusedField === "subject" ? "0 0 0 1px #5e5cff" : "none",
                outline: "none",
              }}
              placeholder="How can we help you?"
              required
            />
          </div>
          <div style={{ gap: "0.5rem", display: "flex", flexDirection: "column" }}>
            <label
              htmlFor="message"
              style={{
                fontSize: "0.875rem",
                fontWeight: "500",
                transition: "color 0.3s",
                color: focusedField === "message" ? "#5e5cff" : "#8491a9",
              }}
            >
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus("message")}
              onBlur={handleBlur}
              style={{
                minHeight: "8rem",
                width: "100%",
                borderRadius: "0.375rem",
                border: `1px solid ${focusedField === "message" ? "#5e5cff" : "#1f2b47"}`,
                backgroundColor: "#111827",
                padding: "0.5rem 0.75rem",
                fontSize: "0.875rem",
                color: "#a3b3c9",
                transition: "border-color 0.3s, box-shadow 0.3s",
                boxShadow: focusedField === "message" ? "0 0 0 1px #5e5cff" : "none",
                outline: "none",
                resize: "vertical",
              }}
              placeholder="Tell us about your project..."
              required
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              borderRadius: "0.375rem",
              backgroundColor: "#5e5cff",
              padding: "0.625rem 0.875rem",
              fontSize: "0.875rem",
              fontWeight: "600",
              color: "#0a0b14",
              boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s",
              position: "relative",
              overflow: "hidden",
              opacity: isSubmitting ? "0.5" : "1",
            }}
            disabled={isSubmitting}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#4240d4")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#5e5cff")}
          >
            {isSubmitting ? (
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg
                  style={{
                    animation: "spin 1s linear infinite",
                    marginRight: "0.75rem",
                    height: "1.25rem",
                    width: "1.25rem",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    style={{ opacity: "0.25" }}
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    style={{ opacity: "0.75" }}
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>

          {submitMessage && (
            <div
              style={{
                marginTop: "1rem",
                padding: "0.75rem",
                borderRadius: "0.375rem",
                backgroundColor: submitMessage.type === "success" ? "rgba(6, 78, 59, 0.3)" : "rgba(153, 27, 27, 0.3)",
                color: submitMessage.type === "success" ? "#34d399" : "#f87171",
                animation: "fade-in-down 0.5s ease-out forwards",
              }}
            >
              {submitMessage.text}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default ContactForm
