import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";

const LandingPage = () => {
  const navigate = useNavigate();
  const [displayText, setDisplayText] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [showText, setShowText] = useState(false);

  const fullText = "Welcome to NaMy Portfolios.";

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText((prev) => fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowText(true), 250);
        setTimeout(() => setShowButton(true), 1000); 
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div 
      style={{ 
        fontFamily: "Arial, sans-serif", 
        minHeight: "100vh",
        margin: 0,
        padding: 0,
       }}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `linear-gradient(
              rgba(0, 0, 0, 0.5), 
              rgba(0, 0, 0, 0.5)
            ), 
            url('/background.png')`, 
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1, 
        }}
      ></div>
      <div
        style={{
          backgroundColor: "white",
          color: "black",
          padding: "10px 20px",
          display: "flex",
          flexWrap: "wrap", 
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        <div
          onClick={() => handleNavigation("/")}
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center"
          }}
        >
          <img src="/favicon.png" alt="Company Logo" style={{height: "60px", width: "auto",}} /><span style={{ color: "black", textAlign: "center" }}>Portfolios</span>
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            alignItems: "center",
            marginRight: "50px",
          }}
        >
          <span
            onClick={() => handleNavigation("/data")}
            className="nav-option"
            style={{
              cursor: "pointer",
              fontSize: "16px",
              color: "black",
              textDecoration: "none",
              paddingBottom: "2px",
            }}
          >
            Data
          </span>
          <span
            onClick={() => handleNavigation("/feedback")}
            className="nav-option"
            style={{
              cursor: "pointer",
              fontSize: "16px",
              color: "black",
              textDecoration: "none",
              paddingBottom: "2px",
            }}
          >
            Feedback
          </span>
          <span
            onClick={() => handleNavigation("/about")}
            className="nav-option"
            style={{
              cursor: "pointer",
              fontSize: "16px",
              color: "black",
              textDecoration: "none",
              paddingBottom: "2px",
            }}
          >
            About Us
          </span>
          <span
            onClick={() => handleNavigation("/login")}
            className="nav-option"
            style={{
              cursor: "pointer",
              fontSize: "16px",
              color: "black",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              textDecoration: "none",
              paddingBottom: "2px",
            }}
          >
            <FaSignInAlt style={{ fontSize: "18px", color: "#4CAF50" }} />
            Login
          </span>
        </div>
      </div>

      <div
        style={{
          marginTop: "80px",
          textAlign: "center",
          fontSize: "14px",
          color: "white",
          position: "fixed",
          marginLeft: "675px",
        }}
      >
        You are using{" "}
        <span
          style={{
            textDecoration: "underline",
            color: "#4CAF50",
            fontWeight: "bold",
          }}
        >
          version 1.0.0
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          minHeight: "100vh",
          marginLeft: "425px", 
        }}
      >
        <div>
          <h1
          className="typing-text"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)", 
            marginBottom: "1rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
          >
            {displayText}
          </h1>
        </div>
        <div>
          {showText && (
          <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.5rem)", 
            marginBottom: "2rem",
            opacity: 0,
            animation: "fadeIn 1s ease forwards",
          }}
          > 
            Track and manage your investments efficiently.
          </p>
          )}
          {showButton && (
          <button
            onClick={() => handleNavigation("/investments")}
            className="add-investment-button"
            >
              Add Investments
            </button>
          )}
        </div>
      </div>

      <style>
        {`
          @keyframes typing {
            from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink {
          50% {
            border-right-color: transparent;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .typing-text {
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid #4caf50;
          width: 100%;
          display: inline-block;
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: bold;
          animation: typing 3s steps(40, end), blink 0.5s step-end infinite;
        }

        .subtext {
          opacity: 0;
          animation: fadeIn 1s ease-out 3.2s forwards;
        }

        .add-investment-button {
          opacity: 0;
          animation: fadeIn 2s ease forwards;
          padding: 10px 20px;
          font-size: 16px;
          color: white;
          background-color: #4CAF50;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }

        .add-investment-button:hover {
          background-color: #388e3c;
            transform: translateY(-2px) scale(1.05);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .add-investment-button:active {
          transform: scale(0.95);
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        }

        .nav-option {
          color: black;
          text-decoration: none;
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-option::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 0;
          height: 2px;
          background-color: green;
          transition: width 0.4s ease, left 0.4s ease; 
        }

        .nav-option:hover {
          color: green; 
        }

        .nav-option:hover::after {
          width: 100%;
          left: 0; 
        }
      `}
      </style>
    </div>
  );
};

export default LandingPage;                                                                                                                             