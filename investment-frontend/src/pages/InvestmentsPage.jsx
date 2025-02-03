import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSignInAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaFileExcel } from "react-icons/fa";

const InvestmentsPage = () => {
  const navigate = useNavigate();
  const [investments, setInvestments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    taxes: "",
    date: "",
  });

  const handleNavigation = (path) => {
    navigate(path);
  };

  useEffect(() => {
    fetchInvestments();
  }, []);

  const fetchInvestments = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/investments/");
      setInvestments(response.data);
    } catch (error) {
      console.error("Error fetching investments:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/investments/", formData);
      setInvestments([...investments, response.data]);
      setFormData({ name: "", amount: "", taxes: "", date: "" });
    } catch (error) {
      console.error("Error adding investment:", error);
      alert("Failed to add investment. Please check the input values.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://127.0.0.1:8000/api/investments/", { data: { id } });
      setInvestments(investments.filter((investment) => investment.id !== id));
    } catch (error) {
      console.error("Error deleting investment:", error);
      alert("Failed to delete investment.");
    }
  };

  const handleExportToExcel = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/export/", { responseType: "blob" });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "investments.xlsx");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error exporting to Excel:", error);
      alert("Failed to export to Excel.");
    }
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
      <div style={{ padding: "20px", marginLeft: "350px" }}>
      <h1 style={{ marginLeft: "100px" }}>Investment Dashboard</h1>
      <form onSubmit={handleFormSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Investment Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount Invested"
          value={formData.amount}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="taxes"
          placeholder="Taxes"
          value={formData.taxes}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="add-investment-button" style={{backgroundColor: "#4CAF50", marginLeft: "20px"}}>Add Investment</button>
      </form>
      <table border="1" style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Taxes</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {investments.map((investment) => (
            <tr key={investment.id}>
              <td>{investment.name}</td>
              <td>{investment.amount}</td>
              <td>{investment.taxes}</td>
              <td>{investment.date}</td>
              <td>
                <button onClick={() => handleDelete(investment.id)} className="add-investment-button" style={{backgroundColor: "#4CAF50"}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleExportToExcel} className="add-investment-button" style={{ marginTop: "20px", backgroundColor: "#4CAF50", marginLeft: "300px"}}>
        <FaFileExcel style={{ marginRight: "8px" }} />
        Export to Excel
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

export default InvestmentsPage;