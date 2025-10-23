import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Banner */}
      <div className="banner">
        <img
          src="/images/banner.jpg"
          alt="Banner"
        />
      </div>

      {/* Sản phẩm nổi bật */}
      <div className="product-section">
        <h2>Sản phẩm nổi bật</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="/images/sp1.jpg" alt="sp1" />
            <p>Industrial PC</p>
          </div>
          <div className="product-card">
            <img src="/images/sp2.jpg" alt="sp2" />
            <p>PLC</p>
          </div>
          <div className="product-card">
            <img src="/images/sp3.jpg" alt="sp3" />
            <p>Servo</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
