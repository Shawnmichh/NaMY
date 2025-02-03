import React from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh", margin: 0, padding: 0 }}>
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
                alignItems: "center",
            }}
        >
            <img
                src="/favicon.png"
                alt="Company Logo"
                style={{ height: "60px", width: "auto" }}
            />
            <span style={{ color: "black", textAlign: "center" }}>Portfolios</span>
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
                onClick={() => handleNavigation("/")}
                className="nav-option"
                style={{
                    cursor: "pointer",
                    fontSize: "16px",
                    color: "black",
                    textDecoration: "none",
                    paddingBottom: "2px",
                }}
            >
                Home
            </span>
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
          padding: "100px 20px 50px",
          marginTop: "80px",
          textAlign: "center",
          marginLeft: "350px"
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px", color: "white" }}>About NaMy</h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto", lineHeight: "1.8", color: "white" }}>
          At <strong>NaMy</strong>, our mission is to solve real-world problems with innovative and practical solutions.
          We are a small team with big dreams. While we are starting off small, our goal is to tackle significant challenges 
          and make a meaningful impact on society.
        </p>
        <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "20px auto", lineHeight: "1.8", color: "white" }}>
          By addressing everyday challenges, we aim to improve lives and create a ripple effect of positive change. 
          Our journey is just beginning, but we are committed to growing and evolving to solve larger and more complex 
          issues in the future.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              padding: "20px",
              backgroundColor: "#4CAF50",
              color: "white",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              maxWidth: "300px",
            }}
          >
            <h3>Our Mission</h3>
            <p>
              To solve real-world problems with scalable and innovative solutions, improving lives one step at a time.
            </p>
          </div>

          <div
            style={{
              padding: "20px",
              backgroundColor: "#4CAF50",
              color: "white",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              maxWidth: "300px",
            }}
          >
            <h3>Our Vision</h3>
            <p>
              To grow into a global force for solving major societal challenges and driving sustainable progress.
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "50px",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h2 style={{ marginBottom: "10px", color: "white" }}>Contact Us</h2>
          <p style={{ marginBottom: "10px", color: "white" }}>
            For any queries or support, feel free to reach out to us at:
          </p>
          <a
            href="mailto:namyprivatelimited@gmail.com"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              color: "#4CAF50",
              fontSize: "18px",
              fontWeight: "bold",
              gap: "10px",
            }}
          >
            <FaEnvelope size={24} />
            namyprivatelimited@gmail.com
          </a>
        </div>

        <button
          onClick={() => handleNavigation("/")}
          className="add-investment-button"
          style={{
            marginTop: "50px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          Back to Home
        </button>
      </div>
      <style>
        {`
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

          .add-investment-button {
            transition: background-color 0.3s ease, transform 0.3s ease;
          }

          .add-investment-button:hover {
            background-color: #388e3c;
            transform: scale(1.05); 
          }
        `}
      </style>
    </div>
  );
};

export default AboutUs;
