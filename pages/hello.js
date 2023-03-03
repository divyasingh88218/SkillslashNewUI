import React from "react";
import styles from "../styles/Home.module.css";

const hello = () => {
  return (
    <div className={styles.buttonWrap}>
      <button className={styles.button}>Button</button>
      <button className={styles.button1}>Button</button>
    </div>
  );
};

export default hello;
