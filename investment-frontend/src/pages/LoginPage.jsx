import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.email === "admin@example.com" && formData.password === "password123") {
      alert("Login successful!");
      navigate("/"); 
    } else {
      setError("Invalid email or password.");
    }
  };

  const handleOAuthLogin = (provider) => {
    alert(`Login with ${provider} is under construction.`);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          marginLeft: "575px",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#4CAF50" }}>Login</h2>
        {error && (
          <p
            style={{
              color: "red",
              fontSize: "14px",
              marginBottom: "10px",
            }}
          >
            {error}
          </p>
        )}
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <button
            type="submit"
            className="login-button"
            onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
            onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
          >
            Login
          </button>
        </form>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "20px 0",
            color: "#888",
          }}
        >
          <hr style={{ flex: 1, border: "none", height: "1px", backgroundColor: "#ddd" }} />
          <span style={{ margin: "0 10px", fontSize: "14px" }}>or</span>
          <hr style={{ flex: 1, border: "none", height: "1px", backgroundColor: "#ddd" }} />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            marginTop: "15px",
          }}
        >
          <button
            onClick={() => handleOAuthLogin("Google")}
            style={{
              flex: "1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
              fontSize: "16px",
              color: "white",
              backgroundColor: "#DB4437",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              gap: "10px",
            }}
          >
            <FaGoogle /> Google
          </button>
          <button
            onClick={() => handleOAuthLogin("Facebook")}
            style={{
              flex: "1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
              fontSize: "16px",
              color: "white",
              backgroundColor: "#4267B2",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              gap: "10px",
            }}
          >
            <FaFacebook /> Facebook
          </button>
          <button
            onClick={() => handleOAuthLogin("Apple")}
            style={{
              flex: "1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
              fontSize: "16px",
              color: "white",
              backgroundColor: "black",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              gap: "10px",
            }}
          >
            <FaApple /> Apple
          </button>
        </div>

        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          Don't have an account?{" "}
          <span
            style={{
              color: "#4CAF50",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </div>
      <style>
        {`
          .login-button {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            color: white;
            background-color: #4CAF50;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: transform 0.2s ease, box-shadow 0.3s ease, background-color 0.3s ease;
          }

          .login-button:hover {
            background-color: #388e3c;
            transform: translateY(-2px) scale(1.05);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          }

          .login-button:active {
            transform: scale(0.95);
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </div>
  );
};

export default LoginPage;
