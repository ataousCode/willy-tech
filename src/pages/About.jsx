"use client";
import AnimatedCounter from "../components/AnimatedCounter";
import AnimateOnScroll from "../components/AnimateOnScroll";
import ParallaxHero from "../components/ParallaxHero";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import Card3D from "../components/Card3D";
import GradientBorder from "../components/GradientBorder";

import CEO from "../Images/ceo.jpg";
import GROUP from "../Images/group.jpg";
import FARIDA from "../Images/Farida.jpg";
import ADAMA from "../Images/adam.jpg";
import T from "../Images/t.jpg";
import NET from "../Images/reseau.jpg";
import RES from "../Images/res.jpg";
import DEV from "../Images/dev.jpg";

function About() {
  return (
    <>
      {/* Hero Section with Parallax */}
      <ParallaxHero
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
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
              About Willi Technology
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
              We are a team of passionate technologists dedicated to creating
              innovative digital solutions
            </p>
          </AnimateOnScroll>
        </div>
      </ParallaxHero>

      {/* Our Story */}
      <section style={{ padding: "6rem 0", backgroundColor: "#0a0b14" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
              alignItems: "center",
              "@media (min-width: 1024px)": {
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
                  Our Story
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                    color: "#8491a9",
                    lineHeight: 1.8,
                    fontSize: "1.125rem",
                  }}
                >
                  <p>
                    Founded in 2018, Willi Technology began with a simple
                    mission: to help businesses leverage technology to achieve
                    their goals. What started as a small team of developers has
                    grown into a full-service technology company serving clients
                    across various industries.
                  </p>
                  <p>
                    Our journey has been defined by a commitment to innovation,
                    quality, and client satisfaction. We've evolved our services
                    to meet the changing needs of businesses in the digital age,
                    always staying at the forefront of technology trends.
                  </p>
                  <p>
                    Today, Willi Technology is recognized for delivering
                    cutting-edge solutions that drive business growth and
                    enhance user experiences. Our team of experts brings
                    together diverse skills and perspectives to create
                    technology that makes a difference.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left">
              <div style={{ position: "relative" }}>
                <Card3D>
                  <img
                    src={GROUP}
                    alt="Willi Technology Team"
                    style={{
                      width: "50%",
                      height: "auto",
                      borderRadius: "0.5rem",
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                  />
                </Card3D>
                <div
                  style={{
                    position: "absolute",
                    bottom: "-1.5rem",
                    right: "-1.5rem",
                    backgroundColor: "#5e5cff",
                    padding: "1.5rem",
                    borderRadius: "0.5rem",
                    color: "#0a0b14",
                    boxShadow:
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    zIndex: 10,
                  }}
                >
                  <p
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Since 2018
                  </p>
                  <p style={{ fontSize: "0.875rem" }}>
                    Creating Digital Excellence
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section
        style={{
          padding: "6rem 0",
          background: "linear-gradient(to right, #0a0b14, #111827, #0a0b14)",
          position: "relative",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}
        >
          <SectionTitle
            title="Our Values"
            subtitle="The principles that guide our work and relationships"
            animation="fade-up"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5e5cff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ),
                title: "Innovation",
                description:
                  "We constantly explore new technologies and approaches to deliver cutting-edge solutions that give our clients a competitive edge.",
                delay: 100,
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
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
                ),
                title: "Quality",
                description:
                  "We are committed to excellence in everything we do, from code quality to user experience, ensuring our solutions are robust, reliable, and user-friendly.",
                delay: 200,
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5e5cff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                ),
                title: "Collaboration",
                description:
                  "We believe in working closely with our clients, understanding their needs, and involving them throughout the development process to ensure successful outcomes.",
                delay: 300,
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5e5cff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                ),
                title: "Integrity",
                description:
                  "We conduct our business with honesty, transparency, and ethical practices, building trust with our clients and partners.",
                delay: 400,
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5e5cff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="16 12 12 8 8 12"></polyline>
                    <line x1="12" y1="16" x2="12" y2="8"></line>
                  </svg>
                ),
                title: "Growth",
                description:
                  "We are committed to continuous learning and improvement, staying updated with the latest technologies to deliver the best solutions.",
                delay: 500,
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5e5cff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v4l3 3"></path>
                  </svg>
                ),
                title: "Innovation",
                description:
                  "We approach each project with creativity and fresh thinking, finding innovative solutions to complex problems.",
                delay: 600,
              },
            ].map((value, index) => (
              <AnimateOnScroll
                key={index}
                animation="fade-up"
                delay={value.delay}
              >
                <div
                  style={{
                    backgroundColor: "#111827",
                    borderRadius: "0.5rem",
                    padding: "2rem",
                    boxShadow:
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#1f2b47",
                      borderRadius: "9999px",
                      padding: "1rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {value.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      color: "#a3b3c9",
                      marginBottom: "1rem",
                    }}
                  >
                    {value.title}
                  </h3>
                  <p style={{ color: "#8491a9", lineHeight: 1.7 }}>
                    {value.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: "6rem 0", backgroundColor: "#0a0b14" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}
        >
          <SectionTitle
            title="Our Impact"
            subtitle="The numbers that define our journey"
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
                <div style={{ textAlign: "center", padding: "2rem" }}>
                  <AnimatedCounter value={50} duration={2000} />
                  <p
                    style={{
                      marginTop: "0.5rem",
                      color: "#8491a9",
                      fontSize: "1rem",
                    }}
                  >
                    Completed Projects
                  </p>
                </div>
              </GradientBorder>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={300}>
              <GradientBorder>
                <div style={{ textAlign: "center", padding: "2rem" }}>
                  <AnimatedCounter value={30} duration={2000} />
                  <p
                    style={{
                      marginTop: "0.5rem",
                      color: "#8491a9",
                      fontSize: "1rem",
                    }}
                  >
                    Happy Clients
                  </p>
                </div>
              </GradientBorder>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={500}>
              <GradientBorder>
                <div style={{ textAlign: "center", padding: "2rem" }}>
                  <AnimatedCounter value={5} suffix="+" duration={2000} />
                  <p
                    style={{
                      marginTop: "0.5rem",
                      color: "#8491a9",
                      fontSize: "1rem",
                    }}
                  >
                    Years Experience
                  </p>
                </div>
              </GradientBorder>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={700}>
              <GradientBorder>
                <div style={{ textAlign: "center", padding: "2rem" }}>
                  <AnimatedCounter value={15} duration={2000} />
                  <p
                    style={{
                      marginTop: "0.5rem",
                      color: "#8491a9",
                      fontSize: "1rem",
                    }}
                  >
                    Team Members
                  </p>
                </div>
              </GradientBorder>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        style={{
          padding: "6rem 0",
          background: "linear-gradient(to right, #0a0b14, #111827, #0a0b14)",
          position: "relative",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}
        >
          <SectionTitle
            title="Our Team"
            subtitle="Meet the talented people behind Willi Technology"
            animation="fade-up"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                name: "Yacouba Willi",
                position: "CEO & Founder",
                image: CEO,
                bio: "With over 8 years of experience in entrepreneurship, Willi drives the company’s vision, growth, and strategic direction.",
                delay: 100,
              },
              {
                name: "Adama",
                position: "Team manager",
                image: ADAMA,
                bio: "Adama manages our team dynamics and project coordination, ensuring seamless collaboration and high performance.",
                delay: 300,
              },
              {
                name: "Almousleck Atalib Ag",
                position: "Full stack developer",
                image: DEV,
                bio: "Almousleck develops and maintains web and mobile applications, working across front-end, back-end, databases, and DevOps infrastructure.",
                delay: 500,
              },
              {
                name: "Farida",
                position: "Comptable",
                image: FARIDA,
                bio: "Farida handles the company’s accounting operations, ensuring financial accuracy, compliance, and efficient reporting.",
                delay: 500,
              },
              {
                name: "Djamila",
                position: "Responsable commerciale",
                image: RES,
                bio: "Djamila leads our B2B commercial strategy, building strong client relationships and driving business development.",
                delay: 500,
              },
              {
                name: "Kader",
                position: "Responsable reseaux",
                image: NET,
                bio: "Kader manages our network infrastructure, ensuring secure, reliable, and optimized connectivity across the organization.",
                delay: 500,
              },
              {
                name: "Mr Coulibaky",
                position: "Transitair",
                image: T,
                bio: "Mr Coulibaky oversees logistics and customs operations, ensuring smooth and compliant transport of goods.",
                delay: 500,
              },
            ].map((member, index) => (
              <AnimateOnScroll
                key={index}
                animation="fade-up"
                delay={member.delay}
              >
                <Card3D>
                  <div
                    style={{
                      backgroundColor: "#111827",
                      borderRadius: "0.5rem",
                      overflow: "hidden",
                      boxShadow:
                        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                    }}
                  >
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                    <div style={{ padding: "1.5rem" }}>
                      <h3
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "600",
                          color: "#a3b3c9",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {member.name}
                      </h3>
                      <p style={{ color: "#5e5cff", marginBottom: "1rem" }}>
                        {member.position}
                      </p>
                      <p style={{ color: "#8491a9", lineHeight: 1.7 }}>
                        {member.bio}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          gap: "1rem",
                          marginTop: "1.5rem",
                        }}
                      >
                        <a
                          href="#"
                          style={{
                            color: "#8491a9",
                            transition: "color 0.3s ease",
                          }}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.color = "#5e5cff")
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.color = "#8491a9")
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                          </svg>
                        </a>
                        <a
                          href="#"
                          style={{
                            color: "#8491a9",
                            transition: "color 0.3s ease",
                          }}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.color = "#5e5cff")
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.color = "#8491a9")
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </Card3D>
              </AnimateOnScroll>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <AnimateOnScroll animation="fade-up" delay={700}>
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              >
                Join Our Team
              </Button>
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

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1rem",
            position: "relative",
          }}
        >
          <AnimateOnScroll animation="fade-up">
            <div
              style={{
                textAlign: "center",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  color: "#0a0b14",
                  marginBottom: "1.5rem",
                }}
              >
                Ready to Work With Us?
              </h2>
              <p
                style={{
                  fontSize: "1.25rem",
                  color: "#0a0b14",
                  marginBottom: "2.5rem",
                  opacity: 0.9,
                }}
              >
                Let's discuss how our team can help bring your ideas to life.
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
  );
}

export default About;
