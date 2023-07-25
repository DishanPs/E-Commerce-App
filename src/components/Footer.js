import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Footer = () => {
  return (
    <div>
      <Navbar data-bs-theme="dark" style={{ backgroundColor: "#51f07c" }}>
        <Container>
          <FacebookIcon />
          <InstagramIcon />
          <WhatsAppIcon />
          <TwitterIcon />
          <MailOutlineIcon />
          <LocalPhoneIcon />
          +94712568963 <br />
          +94112456896
          <LocationOnIcon />
          OftenSale (Pvt) Ltd, <br />
          No.123, Galle Road, Colombo 03. <br />
          00300
          <img src="../logo.ico" alt="logo" height="90px" />
          All Rights Reserved © {new Date().getFullYear()} <br />
          Privacy Policy | Terms and Conditions
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
