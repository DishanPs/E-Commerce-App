import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Products from "./components/Products";
import ProductsCustomer from "./components/ProductsCustomer";
import UserProfile from "./components/UserProfile";

const App = () => {
  const token = sessionStorage.getItem("token");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {token == null ? (
            <>
            </>
          ) : (
            <>
              <Route path="/products" element={<Products />} />
              <Route path="/procus" element={<ProductsCustomer />} />
              <Route path="/profile" element={<UserProfile />} />
            </>
          )}
          

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
