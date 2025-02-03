import React, { useEffect, useState } from "react";
import { FaFileExcel } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import * as XLSX from "xlsx";


const DataPage = () => {
    const navigate = useNavigate();
  
    const handleNavigation = (path) => {
      navigate(path);
    };

  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/investments/")
      .then((response) => response.json())
      .then((data) => setInvestments(data))
      .catch((error) => console.error("Error fetching investments:", error));
  }, []);


  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(investments);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Investments");
    XLSX.writeFile(workbook, "Investments.xlsx");
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
          color: "grey",
          marginLeft: "550px"
        }}
      >
        Your investments data can be viewed here!
      </div>
      <div 
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          minHeight: "50vh",
          marginLeft: "550px",
        }}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Investments Data
        </h1>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: "20px",
          }}
        >
          <thead>
            <tr>
              {investments.length > 0 &&
              Object.keys(investments[0])
              .filter((key) => key !== "id")
              .map((key) => (
              <th
                key={key}
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                {key}
              </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {investments.map((investment, index) => (
            <tr key={index}>
            {Object.entries(investment)
            .filter(([key]) => key !== "id") 
            .map(([key, value], idx) => (
              <td
                key={idx}
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                {value}
              </td>
            ))}
            </tr>
            ))}
          </tbody>
        </table>
        <div 
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <button
            onClick={exportToExcel}
            className="add-investment-button"
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <FaFileExcel style={{ marginRight: "8px" }} />
            Export to Excel
          </button>
          <button
            onClick={() => handleNavigation("/investments")}
            className="add-investment-button"
            style={{
              backgroundColor: "#4CAF50",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add Investments
          </button>
        </div>
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
export default DataPage;
