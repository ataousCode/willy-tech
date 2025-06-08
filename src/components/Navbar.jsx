"use client"

import { useState, useEffect } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import Button from "./Button"
import LOGO from '../Images/1.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const activeClass =
    "text-[#5edbdb] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#5edbdb] after:transform after:scale-x-100 after:transition-transform after:duration-300"
  const inactiveClass =
    "text-slate-300 hover:text-[#5edbdb] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#5edbdb] after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-[#0f172a]/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-2">
          {/* <span className="text-2xl font-bold bg-gradient-to-r from-[#5edbdb] to-[#5edbdb] bg-clip-text text-transparent">
            Willi Tech
          </span> */}
          <img src={LOGO} alt="" width={200} />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : inactiveClass)} end>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
            About
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
            Services
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
            Contact
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
           <Link 
            to="/vendor-registration" 
            className="bg-[#5edbdb] hover:bg-[#4cc8c8] text-[#0f172a] font-medium py-2 px-4 rounded transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Inscription
          </Link>
        </div>

        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="text-slate-200 transition-transform duration-300 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#0f172a] md:hidden">
          <div className="container flex h-16 items-center justify-between px-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#5edbdb] to-[#5edbdb] bg-clip-text text-transparent">
                Willi Tech
              </span>
            </Link>
            <div className="flex items-center">
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-200 transition-transform duration-300 hover:rotate-90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="sr-only">Close menu</span>
              </button>
            </div>
          </div>
          <nav className="container grid gap-6 px-4 py-6 sm:px-6">
            {["Home", "Services", "About", "Projects", "Contact"].map((item, index) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-lg font-medium hover:bg-[#1a2e4c] transition-all duration-300"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span
                  className="animate-fade-in-right text-slate-300"
                  style={{ animationDelay: `${index * 100 + 300}ms` }}
                >
                  {item}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-slate-400 transform transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </NavLink>
            ))}
            <button
              className="mt-6 bg-[#5edbdb] hover:bg-[#4cc8c8] text-[#0f172a] font-medium py-2 px-4 rounded transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
            >
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
