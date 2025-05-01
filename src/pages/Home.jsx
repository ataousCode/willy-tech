"use client"
import ServiceCard from "../components/ServiceCard"
import TestimonialCard from "../components/TestimonialCard"
import ProjectCard from "../components/ProjectCard"
import ContactForm from "../components/ContactForm"
import AnimatedCounter from "../components/AnimatedCounter"
import AnimateOnScroll from "../components/AnimateOnScroll"
import ParallaxHero from "../components/ParallaxHero"
import Button from "../components/Button"
import SectionTitle from "../components/SectionTitle"
import Card3D from "../components/Card3D"
import GradientBorder from "../components/GradientBorder"

function Home() {
  return (
    <>
      {/* Hero Section with Parallax */}
      <ParallaxHero
        bgImage="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
        height="100vh"
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
             Solutions technologiques innovantes pour les entreprises modernes
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
              Nous créons des produits numériques de pointe qui transforment les entreprises et améliorent l'expérience client.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={900}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                justifyContent: "center",
              }}
            >
              <Button
                to="/services"
                variant="primary"
                size="lg"
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              >
                Explore Our Services
              </Button>

              <Button showPopup={true} variant="secondary" size="lg">
                Contact Us
              </Button>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={1200}>
            <div
              style={{
                marginTop: "4rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <p style={{ color: "#5e5cff", fontSize: "1.5rem", fontWeight: "700" }}>50+</p>
                <p style={{ color: "#8491a9", fontSize: "0.875rem" }}>Projects Completed</p>
              </div>

              <div
                style={{
                  width: "1px",
                  height: "2.5rem",
                  background: "linear-gradient(to bottom, transparent, #1f2b47, transparent)",
                }}
              />

              <div style={{ textAlign: "center" }}>
                <p style={{ color: "#5e5cff", fontSize: "1.5rem", fontWeight: "700" }}>30+</p>
                <p style={{ color: "#8491a9", fontSize: "0.875rem" }}>Happy Clients</p>
              </div>

              <div
                style={{
                  width: "1px",
                  height: "2.5rem",
                  background: "linear-gradient(to bottom, transparent, #1f2b47, transparent)",
                }}
              />

              <div style={{ textAlign: "center" }}>
                <p style={{ color: "#5e5cff", fontSize: "1.5rem", fontWeight: "700" }}>5+</p>
                <p style={{ color: "#8491a9", fontSize: "0.875rem" }}>Years Experience</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </ParallaxHero>

      {/* Services Section */}
      <section style={{ padding: "6rem 0", backgroundColor: "#0a0b14" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <SectionTitle
            title="Our Services"
            subtitle="Comprehensive technology solutions tailored to your business needs"
            animation="fade-up"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            <AnimateOnScroll animation="fade-up" delay={100}>
              <Card3D>
                <ServiceCard
                  icon={
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
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                  }
                  title="eCommerce Platform"
                  description="Custom eCommerce solutions with seamless payment integration, inventory management, and responsive design for optimal user experience."
                  features={[
                    "Secure payment processing",
                    "Inventory management",
                    "Mobile-responsive design",
                    "Analytics dashboard",
                  ]}
                />
              </Card3D>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={300}>
              <Card3D>
                <ServiceCard
                  icon={
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
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                      <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                  }
                  title="Mobile App Payment"
                  description="Secure and intuitive mobile payment applications that streamline transactions and enhance customer satisfaction."
                  features={[
                    "Multiple payment methods",
                    "Biometric authentication",
                    "Transaction history",
                    "Offline capabilities",
                  ]}
                />
              </Card3D>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={500}>
              <Card3D>
                <ServiceCard
                  icon={
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
                  }
                  title="Restaurant Ordering App"
                  description="Comprehensive restaurant ordering and delivery solutions that connect customers with their favorite food establishments."
                  features={[
                    "Real-time order tracking",
                    "Menu management",
                    "Delivery logistics",
                    "Customer loyalty programs",
                  ]}
                />
              </Card3D>
            </AnimateOnScroll>
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <AnimateOnScroll animation="fade-up" delay={700}>
              <Button
                to="/services"
                variant="outline"
                size="lg"
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              >
                View All Services
              </Button>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        style={{
          padding: "6rem 0",
          background: "linear-gradient(to right, #0a0b14, #111827, #0a0b14)",
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
              'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%235e5cff" fillOpacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
            opacity: 0.5,
          }}
        />

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem", position: "relative" }}>
          <SectionTitle
            title="Our Impact"
            subtitle="The numbers that define our journey and success"
            animation="fade-up"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2rem",
            }}
          >
            <AnimateOnScroll animation="fade-up" delay={100}>
              <GradientBorder>
                <div style={{ textAlign: "center", padding: "1.5rem" }}>
                  <AnimatedCounter value={50} duration={2000} />
                  <p style={{ marginTop: "0.5rem", color: "#8491a9", fontSize: "1rem" }}>Completed Projects</p>
                </div>
              </GradientBorder>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={300}>
              <GradientBorder>
                <div style={{ textAlign: "center", padding: "1.5rem" }}>
                  <AnimatedCounter value={30} duration={2000} />
                  <p style={{ marginTop: "0.5rem", color: "#8491a9", fontSize: "1rem" }}>Happy Clients</p>
                </div>
              </GradientBorder>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={500}>
              <GradientBorder>
                <div style={{ textAlign: "center", padding: "1.5rem" }}>
                  <AnimatedCounter value={5} suffix="+" duration={2000} />
                  <p style={{ marginTop: "0.5rem", color: "#8491a9", fontSize: "1rem" }}>Years Experience</p>
                </div>
              </GradientBorder>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={700}>
              <GradientBorder>
                <div style={{ textAlign: "center", padding: "1.5rem" }}>
                  <AnimatedCounter value={99} suffix="%" duration={2000} />
                  <p style={{ marginTop: "0.5rem", color: "#8491a9", fontSize: "1rem" }}>Client Satisfaction</p>
                </div>
              </GradientBorder>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section style={{ padding: "6rem 0", backgroundColor: "#0a0b14" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <SectionTitle
            title="Our Projects"
            subtitle="Explore some of our recent projects and success stories"
            animation="fade-up"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            <AnimateOnScroll animation="fade-up" delay={100}>
              <ProjectCard
                image="https://via.placeholder.com/600x400"
                title="FreshCart eCommerce Platform"
                category="eCommerce"
                description="A comprehensive online shopping platform for a grocery chain with inventory management and delivery tracking."
              />
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={300}>
              <ProjectCard
                image="https://via.placeholder.com/600x400"
                title="PayQuick Mobile App"
                category="Mobile Payment"
                description="Secure and fast payment application with biometric authentication and multi-currency support."
              />
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={500}>
              <ProjectCard
                image="https://via.placeholder.com/600x400"
                title="DineConnect Restaurant App"
                category="Food Delivery"
                description="An all-in-one restaurant ordering and delivery platform with real-time tracking and loyalty program."
              />
            </AnimateOnScroll>
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <AnimateOnScroll animation="fade-up" delay={700}>
              <Button
                to="/projects"
                variant="outline"
                size="lg"
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              >
                View All Projects
              </Button>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        style={{
          padding: "6rem 0",
          background: "linear-gradient(to right, #0a0b14, #111827, #0a0b14)",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <SectionTitle
            title="What Our Clients Say"
            subtitle="Hear from businesses that have transformed with our technology solutions"
            animation="fade-up"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            <AnimateOnScroll animation="fade-up" delay={100}>
              <TestimonialCard
                quote="Willi Technology transformed our business with their eCommerce platform. Sales have increased by 40% since launch."
                author="Sarah Johnson"
                position="CEO, Urban Styles"
                avatar="https://via.placeholder.com/100"
              />
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={300}>
              <TestimonialCard
                quote="The mobile payment solution developed by Willi has streamlined our operations and improved customer satisfaction significantly."
                author="Michael Chen"
                position="CTO, FinTech Solutions"
                avatar="https://via.placeholder.com/100"
              />
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={500}>
              <TestimonialCard
                quote="Our restaurant chain has seen a 60% increase in online orders thanks to the intuitive app developed by the Willi team."
                author="Jessica Martinez"
                position="Operations Director, Flavor Fusion"
                avatar="https://via.placeholder.com/100"
              />
            </AnimateOnScroll>
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
                Ready to Transform Your Business?
              </h2>
              <p
                style={{
                  fontSize: "1.25rem",
                  color: "#0a0b14",
                  marginBottom: "2.5rem",
                  opacity: 0.9,
                }}
              >
                Let's discuss how our technology solutions can help you achieve your business goals.
              </p>
              <Button
                to="/contact"
                variant="secondary"
                size="xl"
                style={{ backgroundColor: "#0a0b14", color: "#5e5cff" }}
              >
                Get Started Today
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: "6rem 0", backgroundColor: "#0a0b14" }}>
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
                  Contact Us
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
                  <div
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
                    </div>
                    <div>
                      <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#a3b3c9", marginBottom: "0.5rem" }}>
                        Email Us
                      </h3>
                      <p style={{ color: "#8491a9" }}>info@willitechnology.com</p>
                    </div>
                  </div>

                  <div
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
                    </div>
                    <div>
                      <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#a3b3c9", marginBottom: "0.5rem" }}>
                        Call Us
                      </h3>
                      <p style={{ color: "#8491a9" }}>+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div
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
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </div>
                    <div>
                      <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#a3b3c9", marginBottom: "0.5rem" }}>
                        Technical Support
                      </h3>
                      <p style={{ color: "#8491a9" }}>support@willitechnology.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left">
              <ContactForm />
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
