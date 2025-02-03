import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";

const FeedbackPage = () => {
  const navigate = useNavigate();

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [step, setStep] = useState(1);
  const [review, setReview] = useState("");
  const [featuresSuggestion, setFeaturesSuggestion] = useState("");
  const [problemsFeedback, setProblemsFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    console.log({
      rating,
      review,
      featuresSuggestion,
      problemsFeedback,
    });
    setSubmitted(true);
  };


  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
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
            onClick={() => handleNavigation("/investments")}
            className="nav-option"
            style={{
              cursor: "pointer",
              fontSize: "16px",
              color: "black",
              textDecoration: "none",
              paddingBottom: "2px",
            }}
          >
            Add Investments
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
          fontFamily: "Arial, sans-serif",
          minHeight: "75vh",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "80px",
          marginLeft: "625px"
        }}
      >
        {!submitted ? (
          <>
            {step === 1 && (
              <div style={{ textAlign: "center" }}>
                <h2>Give Us a Star Rating</h2>
                <div>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      size={40}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(0)}
                      color={star <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                      style={{ cursor: "pointer", transition: "color 0.3s" }}
                    />
                  ))}
                </div>
                {rating > 0 && (
                  <button
                    onClick={() => setStep(2)}
                    className="add-investment-button"
                    style={{
                      marginTop: "20px",
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
                    Next
                  </button>
                )}
              </div>
            )}

            {step === 2 && (
              <div style={{ textAlign: "center" }}>
                <h2>Please Leave a Review</h2>
                <textarea
                  placeholder="Write your review here..."
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  style={{
                    width: "80%",
                    height: "100px",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    marginTop: "10px",
                  }}
                />
                <br />
                <button
                  onClick={() => setStep(3)}
                  className="add-investment-button"
                  style={{
                    marginTop: "20px",
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
                  Next
                </button>
              </div>
            )}

            {step === 3 && (
              <div style={{ textAlign: "center", marginRight:"600px" }}>
                <h2>Help Us Improve</h2>
                <p>Is there any features you think should be added?</p>
                <textarea
                  placeholder="Share your suggestions here..."
                  value={featuresSuggestion}
                  onChange={(e) => setFeaturesSuggestion(e.target.value)}
                  style={{
                    width: "80%",
                    height: "100px",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    marginTop: "10px",
                  }}
                />
                <br />
                <button
                  onClick={() => setStep(4)}
                  className="add-investment-button"
                  style={{
                    marginTop: "20px",
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
                  Next
                </button>
              </div>
            )}

            {step === 4 && (
              <div style={{ textAlign: "center", marginRight: "600px" }}>
                <h2>Help Us Improve</h2>
                <p>Was there any problems you faced on this website? If so, let us know.</p>
                <textarea
                  placeholder="Share your feedback here..."
                  value={problemsFeedback}
                  onChange={(e) => setProblemsFeedback(e.target.value)}
                  style={{
                    width: "80%",
                    height: "100px",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    marginTop: "10px",
                  }}
                />
                <br />
                <button
                  onClick={handleSubmit}
                  className="add-investment-button"
                  style={{
                    marginTop: "20px",
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
                  Submit
                </button>
              </div>
            )}
          </>
        ) : (
          <div style={{ textAlign: "center", marginRight: "600px" }}>
            <h2>Thank You for Your Valuable Feedback!</h2>
            <button
              onClick={() => navigate("/")}
              className="add-investment-button"
              style={{
                marginTop: "20px",
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
              Go Back to Home Page
            </button>
          </div>
        )}
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

export default FeedbackPage;
