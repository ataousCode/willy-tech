"use client"
import AnimateOnScroll from "../components/AnimateOnScroll"
import ParallaxHero from "../components/ParallaxHero"
import Button from "../components/Button"
import SectionTitle from "../components/SectionTitle"
import Card3D from "../components/Card3D"
import GradientBorder from "../components/GradientBorder"

import SHOP from '../Images/shop.png'
import PAY from '../Images/pay.png'
import D from '../Images/chart.png'

function Services() {
  return (
    <>
      {/* Hero Section with Parallax */}
      <ParallaxHero
        bgImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
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
              Our Services
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
              Comprehensive technology solutions tailored to your business needs
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={900}>
            <Button
              showPopup={true}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              }
            >
              Get Started
            </Button>
          </AnimateOnScroll>
        </div>
      </ParallaxHero>

      {/* Services Section */}
      <section style={{ padding: "6rem 0", backgroundColor: "#0a0b14" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <div style={{ marginBottom: "5rem" }}>
            {/* eCommerce Platform */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "3rem",
                alignItems: "center",
                marginBottom: "5rem",
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
                    eCommerce Platform
                  </h2>
                  <p
                    style={{
                      fontSize: "1.125rem",
                      color: "#8491a9",
                      marginBottom: "2rem",
                      lineHeight: 1.7,
                    }}
                  >
                    Custom eCommerce solutions with seamless payment integration, inventory management, and responsive
                    design for optimal user experience.
                  </p>
                  <ul style={{ marginBottom: "2rem" }}>
                    {[
                      "Secure payment processing",
                      "Inventory management",
                      "Mobile-responsive design",
                      "Analytics dashboard",
                    ].map((feature, index) => (
                      <li
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "1rem",
                          color: "#8491a9",
                        }}
                      >
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
                          style={{ marginRight: "1rem", flexShrink: 0 }}
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button to="/contact" variant="primary" size="lg">
                    Learn More
                  </Button>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-left">
                <Card3D>
                  <img
                    src={SHOP}
                    alt="eCommerce Platform"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "0.5rem",
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                  />
                </Card3D>
              </AnimateOnScroll>
            </div>

            {/* Mobile App Payment */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "3rem",
                alignItems: "center",
                marginBottom: "5rem",
                "@media (min-width: 768px)": {
                  gridTemplateColumns: "1fr 1fr",
                },
              }}
            >
              <AnimateOnScroll animation="fade-right" className="order-last md:order-first">
                <Card3D>
                  <img
                    src={PAY}
                    alt="Mobile App Payment"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "0.5rem",
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                  />
                </Card3D>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-left">
                <div>
                  <h2
                    style={{
                      fontSize: "2.25rem",
                      fontWeight: "700",
                      color: "#5e5cff",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Mobile App Payment
                  </h2>
                  <p
                    style={{
                      fontSize: "1.125rem",
                      color: "#8491a9",
                      marginBottom: "2rem",
                      lineHeight: 1.7,
                    }}
                  >
                    Secure and intuitive mobile payment applications that streamline transactions and enhance customer
                    satisfaction.
                  </p>
                  <ul style={{ marginBottom: "2rem" }}>
                    {[
                      "Multiple payment methods",
                      "Biometric authentication",
                      "Transaction history",
                      "Offline capabilities",
                    ].map((feature, index) => (
                      <li
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "1rem",
                          color: "#8491a9",
                        }}
                      >
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
                          style={{ marginRight: "1rem", flexShrink: 0 }}
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button to="/contact" variant="primary" size="lg">
                    Learn More
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Restaurant Ordering App */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "3rem",
                alignItems: "center",
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
                    Restaurant Ordering App
                  </h2>
                  <p
                    style={{
                      fontSize: "1.125rem",
                      color: "#8491a9",
                      marginBottom: "2rem",
                      lineHeight: 1.7,
                    }}
                  >
                    Comprehensive restaurant ordering and delivery solutions that connect customers with their favorite
                    food establishments.
                  </p>
                  <ul style={{ marginBottom: "2rem" }}>
                    {[
                      "Real-time order tracking",
                      "Menu management",
                      "Delivery logistics",
                      "Customer loyalty programs",
                    ].map((feature, index) => (
                      <li
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "1rem",
                          color: "#8491a9",
                        }}
                      >
                        <svg
                          src="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#5e5cff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ marginRight: "1rem", flexShrink: 0 }}
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button to="/contact" variant="primary" size="lg">
                    Learn More
                  </Button>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-left">
                <Card3D>
                  <img
                    src={D}
                    alt="Restaurant Ordering App"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "0.5rem",
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                  />
                </Card3D>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section
        style={{
          padding: "6rem 0",
          background: "linear-gradient(to right, #0a0b14, #111827, #0a0b14)",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <SectionTitle
            title="Additional Services"
            subtitle="We offer a wide range of technology solutions to meet your business needs"
            withLine={true}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "2rem",
              marginTop: "3rem",
            }}
          >
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5e5cff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                ),
                title: "Custom Software Development",
                description:
                  "Tailored software solutions designed to address your specific business challenges and requirements.",
                features: [
                  "Scalable architecture",
                  "Cross-platform compatibility",
                  "Integration with existing systems",
                  "Ongoing maintenance and support",
                ],
                delay: 100,
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5e5cff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                    <path d="M2 2l7.586 7.586"></path>
                    <circle cx="11" cy="11" r="2"></circle>
                  </svg>
                ),
                title: "UI/UX Design",
                description:
                  "User-centered design that enhances user experience and drives engagement with your digital products.",
                features: [
                  "User research and testing",
                  "Wireframing and prototyping",
                  "Visual design",
                  "Accessibility compliance",
                ],
                delay: 300,
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5e5cff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3v18h18"></path>
                    <path d="M18.4 7.8l-8.5 8.4L5 12.3"></path>
                  </svg>
                ),
                title: "Digital Marketing",
                description:
                  "Strategic digital marketing services to increase your online presence and drive customer acquisition.",
                features: ["SEO optimization", "Social media marketing", "Content strategy", "Analytics and reporting"],
                delay: 500,
              },
            ].map((service, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={service.delay}>
                <div style={{ height: "100%" }}>
                  <GradientBorder style={{ height: "100%" }}>
                    <div style={{ padding: "2rem", height: "100%", display: "flex", flexDirection: "column" }}>
                      <div style={{ marginBottom: "1.5rem" }}>{service.icon}</div>
                      <h3 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#a3b3c9", marginBottom: "1rem" }}>
                        {service.title}
                      </h3>
                      <p style={{ color: "#8491a9", marginBottom: "1.5rem", lineHeight: 1.7 }}>{service.description}</p>
                      <ul style={{ marginTop: "auto" }}>
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "0.75rem",
                              color: "#8491a9",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#5e5cff"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              style={{ marginRight: "0.75rem", flexShrink: 0 }}
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GradientBorder>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                showPopup={true}
                variant="secondary"
                size="xl"
              >
                Contact Us
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}

export default Services
