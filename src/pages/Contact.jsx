"use client"
import ContactForm from "../components/ContactForm"
import ParallaxHero from "../components/ParallaxHero"
import AnimateOnScroll from "../components/AnimateOnScroll"
import Button from "../components/Button"
import SectionTitle from "../components/SectionTitle"
import Card3D from "../components/Card3D"

function Contact() {
  return (
    <>
      {/* Hero Section with Parallax */}
      <ParallaxHero
        bgImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
        height="80vh"
        overlayColor="rgba(10, 11, 20, 0.8)"
        speed={0.5}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1rem",
            textAlign: "center",
            width: "100%",
          }}
        >
          <AnimateOnScroll animation="fade-down" delay={300}>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: "800",
                background: "linear-gradient(to right, #5e5cff, #6e6aff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "1.5rem",
                lineHeight: 1.2,
              }}
            >
              Contact Us
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={600}>
            <p
              style={{
                fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                color: "#a3b3c9",
                maxWidth: "800px",
                margin: "0 auto 2.5rem",
                lineHeight: 1.6,
              }}
            >
              Get in touch with our team to discuss your project
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={900}>
            <Button
              to="#contact-form"
              variant="primary"
              size="lg"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              }
            >
              Reach Out Now
            </Button>
          </AnimateOnScroll>
        </div>
      </ParallaxHero>

      {/* Contact Section */}
      <section id="contact-form" style={{ padding: "6rem 0", backgroundColor: "#0a0b14" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
              "@media (min-width: 768px)": {
                gridTemplateColumns: "1fr 1fr",
              },
            }}
          >
            <AnimateOnScroll animation="fade-right">
              <div>
                <h2
                  style={{
                    fontSize: "2.25rem",
                    fontWeight: "700",
                    color: "#5e5cff",
                    marginBottom: "1.5rem",
                  }}
                >
                  Get In Touch
                </h2>
                <p
                  style={{
                    fontSize: "1.125rem",
                    color: "#8491a9",
                    marginBottom: "2.5rem",
                    lineHeight: 1.6,
                  }}
                >
                  Have a question or want to discuss a project? Reach out to us and we'll get back to you shortly.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {[
                    {
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#5e5cff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      ),
                      title: "Email Us",
                      content: "info@willitechnology.com",
                    },
                    {
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#5e5cff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      ),
                      title: "Call Us",
                      content: "+1 (555) 123-4567",
                    },
                    {
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#5e5cff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      ),
                      title: "Visit Us",
                      content: (
                        <>
                          123 Tech Avenue, Suite 100
                          <br />
                          San Francisco, CA 94107
                        </>
                      ),
                    },
                    {
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#5e5cff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                        </svg>
                      ),
                      title: "Technical Support",
                      content: "support@willitechnology.com",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "1rem",
                        transition: "transform 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = "translateX(10px)")}
                      onMouseOut={(e) => (e.currentTarget.style.transform = "translateX(0)")}
                    >
                      <div
                        style={{
                          backgroundColor: "#1f2b47",
                          borderRadius: "50%",
                          width: "3rem",
                          height: "3rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h3
                          style={{ fontSize: "1.25rem", fontWeight: "600", color: "#a3b3c9", marginBottom: "0.5rem" }}
                        >
                          {item.title}
                        </h3>
                        <p style={{ color: "#8491a9" }}>{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: "2.5rem" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#a3b3c9", marginBottom: "1rem" }}>
                    Follow Us
                  </h3>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    {[
                      {
                        icon: (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                          </svg>
                        ),
                        label: "Facebook",
                      },
                      {
                        icon: (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          </svg>
                        ),
                        label: "Twitter",
                      },
                      {
                        icon: (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        ),
                        label: "Instagram",
                      },
                      {
                        icon: (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                          </svg>
                        ),
                        label: "LinkedIn",
                      },
                    ].map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        style={{
                          color: "#8491a9",
                          backgroundColor: "#1f2b47",
                          borderRadius: "50%",
                          width: "2.5rem",
                          height: "2.5rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.3s ease",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.color = "#5e5cff"
                          e.currentTarget.style.transform = "translateY(-5px)"
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.color = "#8491a9"
                          e.currentTarget.style.transform = "translateY(0)"
                        }}
                      >
                        {item.icon}
                        <span
                          style={{
                            position: "absolute",
                            width: "1px",
                            height: "1px",
                            padding: 0,
                            margin: "-1px",
                            overflow: "hidden",
                            clip: "rect(0, 0, 0, 0)",
                            whiteSpace: "nowrap",
                            borderWidth: 0,
                          }}
                        >
                          {item.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left">
              <Card3D>
                <ContactForm />
              </Card3D>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ backgroundColor: "#111827", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <SectionTitle title="Our Location" subtitle="Visit our office to meet the team" withLine={true} />

          <AnimateOnScroll animation="fade-up" delay={300}>
            <Card3D style={{ marginTop: "3rem" }}>
              <div
                style={{
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                {/* This would be replaced with an actual map component in a real application */}
                <div
                  style={{
                    backgroundColor: "#1f2b47",
                    height: "400px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ color: "#8491a9", fontSize: "1.125rem" }}>Interactive Map would be displayed here</p>
                </div>
              </div>
            </Card3D>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Section with Parallax */}
      <section
        style={{
          padding: "6rem 0",
          background: "linear-gradient(45deg, #5e5cff, #6e6aff)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ffffff" fillOpacity="0.1" fillRule="evenodd"/%3E%3C/svg%3E\')',
          }}
        />

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem", position: "relative" }}>
          <AnimateOnScroll animation="fade-up">
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  color: "#0a0b14",
                  marginBottom: "1.5rem",
                }}
              >
                Ready to Get Started?
              </h2>
              <p
                style={{
                  fontSize: "1.25rem",
                  color: "#0a0b14",
                  marginBottom: "2.5rem",
                  opacity: 0.9,
                }}
              >
                Contact us today to discuss how our services can help your business grow.
              </p>
              <Button
                to="#contact-form"
                variant="secondary"
                size="xl"
                style={{ backgroundColor: "#0a0b14", color: "#5e5cff" }}
              >
                Get in Touch
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}

export default Contact
