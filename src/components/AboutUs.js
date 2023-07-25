import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ marginLeft: "5%", marginTop: "4%" }}>
          <h1>About Us</h1>
          <br />
          <h5>
            We envision OftenSale becoming the go-to online shopping destination
            in Sri Lanka, trusted for its exceptional service, diverse product
            range, and commitment to customer satisfaction. Our goal is to
            continually innovate and enhance our platform to meet the evolving
            needs of our valued customers.
            <br />
            <br />
            Join us at OftenSale and embark on a delightful shopping journey
            that combines convenience, variety, and value. We're excited to have
            you on board, and we promise to make your online shopping experience
            truly remarkable.
          </h5>
          <br />

          <h3>Happy Shopping!</h3>
        </div>
        <div>
          <img
            src="../logo.png"
            alt="OftenSale Logo"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
