import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "./Button";
import LOGO from "../Images/1.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const activeClass =
    "text-[#5edbdb] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#5edbdb] after:transform after:scale-x-100 after:transition-transform after:duration-300";
  const inactiveClass =
    "text-slate-300 hover:text-[#5edbdb] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#5edbdb] after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#0f172a]/95 backdrop-blur-md shadow-lg"
          : "bg-[#0f172a]/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-3 sm:px-4 lg:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src={LOGO} 
            alt="Willi Tech" 
            className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            to="/vendor-registration"
            className="bg-[#5edbdb] hover:bg-[#4cc8c8] text-[#0f172a] font-medium py-2 px-3 xl:px-4 rounded text-sm xl:text-base transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Inscription
          </Link>
        </div>

        {/* Mobile/Tablet Menu Button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="text-slate-200 transition-transform duration-300 hover:scale-110 p-1"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#0f172a] lg:hidden"
          style={{ backgroundColor: "#0f172a" }}
        >
          {/* Mobile Header */}
          <div className="flex h-14 sm:h-16 items-center justify-between px-3 sm:px-4 bg-[#0f172a] border-b border-slate-700">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src={LOGO} 
                alt="Willi Tech" 
                className="w-20 sm:w-24 md:w-28 h-auto"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-200 transition-transform duration-300 hover:rotate-90 p-1"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex flex-col px-3 sm:px-4 py-4 space-y-1 bg-[#0f172a] min-h-screen">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/contact" }
            ].map((item, index) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => `
                  flex items-center justify-between rounded-lg px-3 py-3 sm:py-4 text-sm sm:text-base font-medium transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#1a2e4c] text-[#5edbdb] border-l-4 border-[#5edbdb]"
                      : "text-slate-300 hover:bg-[#1a2e4c] hover:text-[#5edbdb]"
                  }
                `}
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span
                  className="animate-fade-in-right"
                  style={{ animationDelay: `${index * 100 + 300}ms` }}
                >
                  {item.name}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-slate-400 transform transition-transform duration-300 group-hover:translate-x-1"
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
            
            {/* Mobile CTA Button */}
            <div className="pt-4 mt-4 border-t border-slate-700">
              <Link
                to="/vendor-registration"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-[#5edbdb] hover:bg-[#4cc8c8] text-[#0f172a] font-semibold py-3 sm:py-4 px-4 text-sm sm:text-base rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 animate-fade-in-up text-center"
                style={{ animationDelay: "600ms" }}
              >
                Inscription
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;