import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from "../NavBar/NavBar.module.css";
import logo from "../../assests/navlogo.png";
import { FaPhoneAlt, FaAngleDown } from "react-icons/fa";


const NavBar = () => {

  return (
    <div className={styles["grid-container"]}>
      <div className={styles["column-1"]}>
        <div className={styles.row}>
          <Link to="/">
            <img src={logo} alt="Logo" className={styles.logo} />
          </Link>
        </div>
        <div className={styles.row11}>
          <p>GOLDEN ROYCE DESIGN</p>
          <p>BUISNESS MADE SMART</p>
        </div>
      </div>
      <div className={styles["column-2"]}>
        <div className={styles.row1}>
          <nav className={styles["horizontal-nav"]}>
            <ul className={styles["horizontal-nav1"]}>
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) => {
                    return { color: isActive ? "#BFAB6D" : "#000" };
                  }}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  style={({ isActive }) => {
                    return { color: isActive ? "#BFAB6D" : "#000" };
                  }}
                >
                  ABOUT US
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/verticals"
                  style={({ isActive }) => {
                    return { color: isActive ? "#BFAB6D" : "#000" };
                  }}
                >
                  <span className={styles.row2}>
                    VERTICALS <FaAngleDown className="icon" />
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  style={({ isActive }) => {
                    return { color: isActive ? "#BFAB6D" : "#000" };
                  }}
                >
                  <span className={styles.row2}>
                    <span>CONTACT US</span>
                    <FaPhoneAlt className="contact-icon" />
                  </span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavBar;