import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <br />
      <h1>Online Shopping with OftenSale</h1>
      <br />
      <img src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b25saW5lJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
      style={{marginBottom:"2%"}}
      alt="Online Shopping" />
      <Footer />
    </div>
  );
};

export default Home;
