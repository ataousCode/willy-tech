"use client"
import ProjectCard from "../components/ProjectCard"
import SkeletonProjectCard from "../components/SkeletonProjectCard"
import useLoading from "../hooks/useLoading"
import ParallaxHero from "../components/ParallaxHero"
import AnimateOnScroll from "../components/AnimateOnScroll"
import Card3D from "../components/Card3D"
import Button from "../components/Button"
import SectionTitle from "../components/SectionTitle"
import GradientBorder from "../components/GradientBorder"

import SHOP from '../Images/shop.png'
import PAY from '../Images/pay.png'
import D from '../Images/d.png'
import R from '../Images/r.png'
import SH from '../Images/sh.png'



function Projects() {
  const projectsLoading = useLoading(true, 1800)
  const featuredProjectLoading = useLoading(true, 2200)

  return (
    <>
      {/* Hero Section */}
      <ParallaxHero
        bgImage="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
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
              Our Projects
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
              Explore our portfolio of successful technology solutions that have transformed businesses across
              industries
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={900}>
            <Button
              showPopup={true}
              variant="gradient"
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
              Start Your Project
            </Button>
          </AnimateOnScroll>
        </div>
      </ParallaxHero>

      {/* Projects Grid */}
      <section style={{ padding: "6rem 0", backgroundColor: "#0a0b14" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <SectionTitle
            title="Our Latest Work"
            subtitle="Discover how we've helped businesses achieve their goals through innovative technology solutions"
            withLine={true}
          />

          <div
            style={{
              display: "grid",
              gap: "2rem",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              marginTop: "3rem",
            }}
          >
            {projectsLoading ? (
              // Show skeleton cards while loading
              Array(9)
                .fill(0)
                .map((_, index) => <SkeletonProjectCard key={index} />)
            ) : (
              // Show actual project cards when loaded
              <>
                <AnimateOnScroll animation="fade-up" delay={100}>
                  <Card3D>
                    <ProjectCard
                      image={SHOP}
                      title="DjalilaShop eCommerce Platform"
                      category="eCommerce"
                      description="A comprehensive online shopping platform for a grocery chain with inventory management and delivery tracking."
                    />
                  </Card3D>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={200}>
                  <Card3D>
                    <ProjectCard
                      image={PAY}
                      title="DjalilaPay Mobile App"
                      category="Mobile Payment"
                      description="Secure and fast payment application with biometric authentication and multi-currency support."
                    />
                  </Card3D>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={300}>
                  <Card3D>
                    <ProjectCard
                      image={D}
                      title="Go_Restaurant App"
                      category="Food Delivery"
                      description="An all-in-one restaurant ordering and delivery platform with real-time tracking and loyalty program."
                    />
                  </Card3D>
                </AnimateOnScroll>

                {/* <AnimateOnScroll animation="fade-up" delay={150}>
                  <Card3D>
                    <ProjectCard
                      image={R}
                      title="HealthTrack Patient Portal"
                      category="Healthcare"
                      description="A secure patient portal allowing users to schedule appointments, view medical records, and communicate with healthcare providers."
                    />
                  </Card3D>
                </AnimateOnScroll> */}

                <AnimateOnScroll animation="fade-up" delay={250}>
                  <Card3D>
                    <ProjectCard
                      image={R}
                      title="EduLearn LMS"
                      category="Education"
                      description="A learning management system for schools with course management, assignment submission, and progress tracking."
                    />
                  </Card3D>
                </AnimateOnScroll>

                {/* <AnimateOnScroll animation="fade-up" delay={350}>
                  <Card3D>
                    <ProjectCard
                      image="https://via.placeholder.com/600x400"
                      title="TravelBuddy App"
                      category="Travel"
                      description="A travel companion app with itinerary planning, booking integration, and local recommendations."
                    />
                  </Card3D>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={200}>
                  <Card3D>
                    <ProjectCard
                      image="https://via.placeholder.com/600x400"
                      title="WorkFlow Project Management"
                      category="Business"
                      description="A comprehensive project management tool with task tracking, team collaboration, and reporting features."
                    />
                  </Card3D>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={300}>
                  <Card3D>
                    <ProjectCard
                      image="https://via.placeholder.com/600x400"
                      title="SecureVault Password Manager"
                      category="Security"
                      description="A secure password management solution with encryption, auto-fill, and cross-device synchronization."
                    />
                  </Card3D>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={400}>
                  <Card3D>
                    <ProjectCard
                      image="https://via.placeholder.com/600x400"
                      title="FitTrack Fitness App"
                      category="Health & Fitness"
                      description="A fitness tracking application with workout plans, progress monitoring, and nutrition guidance."
                    />
                  </Card3D>
                </AnimateOnScroll> */}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section style={{ backgroundColor: "#111827", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <SectionTitle
            title="Featured Project"
            subtitle="Go_Restau is a feature project under development for a multi vendor restaurants. Bellow you see the admin panel"
            withLine={true}
          />

          {featuredProjectLoading ? (
            <div
              style={{
                display: "grid",
                gap: "3rem",
                gridTemplateColumns: "1fr",
                marginTop: "3rem",
                "@media (min-width: 1024px)": {
                  gridTemplateColumns: "1fr 1fr",
                },
              }}
            >
              <div
                style={{
                  height: "600px",
                  backgroundColor: "#1f2b47",
                  borderRadius: "0.5rem",
                  animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "1.5rem",
                }}
              >
                <div
                  style={{
                    height: "1.5rem",
                    width: "8rem",
                    backgroundColor: "#1f2b47",
                    borderRadius: "9999px",
                    animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                  }}
                ></div>
                <div
                  style={{
                    height: "2.5rem",
                    width: "75%",
                    backgroundColor: "#1f2b47",
                    borderRadius: "0.375rem",
                    animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
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
                      animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "1rem",
                      backgroundColor: "#1f2b47",
                      borderRadius: "0.25rem",
                      width: "100%",
                      marginBottom: "0.5rem",
                      animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "1rem",
                      backgroundColor: "#1f2b47",
                      borderRadius: "0.25rem",
                      width: "83.333333%",
                      marginBottom: "0.5rem",
                      animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "1rem",
                      backgroundColor: "#1f2b47",
                      borderRadius: "0.25rem",
                      width: "66.666667%",
                      animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                    }}
                  ></div>
                </div>
                <div style={{ gap: "1rem" }}>
                  {[1, 2, 3].map((i) => (
                    <div key={i} style={{ display: "flex", alignItems: "start", marginBottom: "1rem" }}>
                      <div
                        style={{
                          height: "1.5rem",
                          width: "1.5rem",
                          backgroundColor: "#1f2b47",
                          borderRadius: "9999px",
                          marginRight: "0.75rem",
                          animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                        }}
                      ></div>
                      <div style={{ gap: "0.5rem", flex: "1" }}>
                        <div
                          style={{
                            height: "1.25rem",
                            backgroundColor: "#1f2b47",
                            borderRadius: "0.25rem",
                            width: "25%",
                            marginBottom: "0.5rem",
                            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                          }}
                        ></div>
                        <div
                          style={{
                            height: "1rem",
                            backgroundColor: "#1f2b47",
                            borderRadius: "0.25rem",
                            width: "100%",
                            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    height: "3rem",
                    width: "10rem",
                    backgroundColor: "#1f2b47",
                    borderRadius: "0.375rem",
                    animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                  }}
                ></div>
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gap: "3rem",
                gridTemplateColumns: "1fr",
                marginTop: "3rem",
                "@media (min-width: 1024px)": {
                  gridTemplateColumns: "1fr 1fr",
                },
              }}
            >
              <AnimateOnScroll animation="fade-right">
                <Card3D>
                  <img
                    src={SH}
                    alt="Featured Project"
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
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <GradientBorder
                    borderWidth="1px"
                    borderRadius="9999px"
                    gradientColors={["#5e5cff", "#6e6aff"]}
                    style={{ alignSelf: "flex-start", marginBottom: "1.5rem" }}
                  >
                    <div style={{ padding: "0.5rem 1rem" }}>
                      <span style={{ color: "#5e5cff", fontWeight: "600" }}>Case Study</span>
                    </div>
                  </GradientBorder>

                  <h3 style={{ fontSize: "2.25rem", fontWeight: "700", color: "#a3b3c9", marginBottom: "1.5rem" }}>
                    FreshCart eCommerce Platform
                  </h3>

                  <p style={{ fontSize: "1.125rem", color: "#8491a9", marginBottom: "2rem", lineHeight: 1.7 }}>
                    FreshCart is a leading grocery chain that needed a comprehensive eCommerce solution to expand their
                    business online. We developed a custom platform that integrated with their existing inventory system
                    and provided a seamless shopping experience for their customers.
                  </p>

                  <div style={{ marginBottom: "2rem" }}>
                    {[
                      {
                        title: "Challenge",
                        description:
                          "Integrating with legacy inventory systems while providing a modern shopping experience.",
                      },
                      {
                        title: "Solution",
                        description:
                          "Custom API development for seamless integration and a responsive, user-friendly interface.",
                      },
                      {
                        title: "Results",
                        description: "40% increase in online sales and 25% reduction in order processing time.",
                      },
                    ].map((item, index) => (
                      <div key={index} style={{ display: "flex", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                        <div
                          style={{
                            backgroundColor: "#1f2b47",
                            borderRadius: "50%",
                            width: "3rem",
                            height: "3rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "1rem",
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
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <div>
                          <h4
                            style={{ fontSize: "1.25rem", fontWeight: "600", color: "#a3b3c9", marginBottom: "0.5rem" }}
                          >
                            {item.title}
                          </h4>
                          <p style={{ color: "#8491a9", lineHeight: 1.7 }}>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button to="/contact" variant="primary" size="lg">
                    View Full Case Study
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>
          )}
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
                Ready to Start Your Project?
              </h2>
              <p
                style={{
                  fontSize: "1.25rem",
                  color: "#0a0b14",
                  marginBottom: "2.5rem",
                  opacity: 0.9,
                }}
              >
                Let's discuss how we can help bring your ideas to life with our technology solutions.
              </p>
              <Button
                to="/contact"
                variant="secondary"
                size="xl"
                style={{ backgroundColor: "#0a0b14", color: "#5e5cff" }}
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

export default Projects
