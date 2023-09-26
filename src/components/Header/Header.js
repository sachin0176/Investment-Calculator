import React from "react";
import logo from "../../assets/investment-calculator-logo.png";
import styles from  "./Header.module.css";

const Header = () => {
  return (
    <div id={styles['logo']}>
      <img src={logo} alt="Investment Logo" />
      <h1>Investment Calculator</h1>
    </div>
  );
};

export default Header;
