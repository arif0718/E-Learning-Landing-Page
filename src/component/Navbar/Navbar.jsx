import React from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ setDarkMode, darkMode }) => {

  const handleLogoClick = () => {
    // Smooth scroll to the top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      className={`navbar`}
      style={{
        boxShadow: !darkMode && "none"
      }}
    >
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, bounce: 0.3 }}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Logo Section */}
          {!darkMode ? (
            <Link to="/" onClick={handleLogoClick}>
              <img
                loading="lazy"
                width={200}
                src={"assets/Short-White-Rectangle.png"}
                alt="Logo"
                style={{
                  transition: "none !important", // Prevent transitions from being applied
                }}
              />
            </Link>
          ) : (
            <Link to="/" onClick={handleLogoClick}>
              <img
                loading="lazy"
                width={200}
                src={"assets/black2.png"}
                alt="Logo"
                style={{
                  transition: "none !important", // Prevent transitions from being applied
                }}
              />
            </Link>
          )}
        </motion.span>

        <motion.div className="social">
          <motion.div
            className="first"
            onClick={() => setDarkMode((prev) => !prev)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              width: "60px",
              height: "30px",
              borderRadius: "15px",
              background: darkMode ? "#101010" : "#fff",
              position: "relative",
              padding: "5px",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              style={{
                width: "25px",
                height: "25px",
                borderRadius: "50%",
                background: darkMode ? "#FFD700" : "#333",
                position: "absolute",
                top: "10%",
                left: darkMode ? "5px" : "calc(100% - 30px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "16px",
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {darkMode ? <FaMoon /> : <FaSun />}
            </motion.div>
          </motion.div>

          <motion.a href="#contact" className="navbar-contact-btn">
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
