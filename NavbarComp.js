import React from "react";
import './NavbarComp.css';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav1">
            <Link to="/" className="home">
              <span className="trek">Ixigo Bookings</span><br />
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/offer" className="nav-link">
              Offer
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className="nav-link">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Login" className="nav-link">
              Signin/Signup
            </Link>
          </li>
        </ul>
      </nav>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
        <TextField label="From" variant="outlined" size="small" />
        <TextField label="To" variant="outlined" size="small" />
        <TextField label="Date" type="date" variant="outlined" size="small" />
      </Box>

      <Footer />
    </>
  );
};

export default Navbar;
