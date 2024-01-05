import React, { useState } from "react";
import './Reg.css';
import { Link } from 'react-router-dom';
import Footer from "./Footer";

export default function (props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();

    // Basic validation
    if (!firstName || !lastName || !mobileNumber || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Additional validation (e.g., email format, password strength)
    if (!isValidEmail(email)) {
      alert("Invalid email address");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    // Save user data to local storage
    saveUserDataToLocalStorage();

    // Redirect to the login page
    window.location.href = "/Login";
  };

  const isValidEmail = (email) => {
    // Basic email format validation (you may want to use a more sophisticated validation library)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const saveUserDataToLocalStorage = () => {
    // Save user data to local storage
    const userData = {
      firstName,
      lastName,
      mobileNumber,
      email,
      password,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSignUp}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">SIGN UP</h3>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Doe"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Mobile Number</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Phone.no"
              required
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              SUBMIT
              
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}
