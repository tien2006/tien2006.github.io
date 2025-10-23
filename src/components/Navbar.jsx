import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="menu">
        <li className="menu-item">
          <Link to="/" className="menu-link">Trang Chủ</Link>
        </li>

        <li className="menu-item">
          <span className="menu-link">Tự Động Hóa</span>
          <ul className="dropdown">
            <li><Link to="/products/ipc">Industrial PC</Link></li>
            <li><Link to="/products/io">I/O</Link></li>
            <li><Link to="/products/hmi">Màn Hình HMI</Link></li>
            <li><Link to="/products/plc">PLC</Link></li>
            <li><Link to="/products/servo">Servo</Link></li>
            <li><Link to="/products/vt">Biến Tần</Link></li>
            <li><Link to="/products/dienro">Điện Trở Xả</Link></li>
            <li><Link to="/products/kdm">Khởi Động Mềm</Link></li>
            <li><Link to="/products/motor">Motor</Link></li>
          </ul>
        </li>

        <li className="menu-item">
          <span className="menu-link">Đo Lường & Điều Khiển</span>
        </li>

        <li className="menu-item">
          <span className="menu-link">Thiết Bị Đóng Cắt</span>
        </li>

        <li className="menu-item">
          <span className="menu-link">Vật Tư Tủ Điện</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
