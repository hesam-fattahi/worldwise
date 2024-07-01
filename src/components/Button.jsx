import React from "react";
import styles from "../styles/components/Button.module.scss";

const Button = ({ children, className, onClick, type }) => {
  return (
    <button
      className={`${styles.btn} ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
