import React from "react";
import styles from "../styles/Home.module.css";

const hello = () => {
  return (
    <>
      <div className={styles.buttonWrap}>
        <button className={styles.button}>Button</button>
        <button className={styles.button1}>Button</button>
      </div>
      <div className={styles.loginbox}>
        <p>Login</p>
        <form>
          <div className={styles.userbox}>
            <input required="" name="" type="text" />
            <label>Email</label>
          </div>
          <div className={styles.userbox}>
            <input required="" name="" type="password" />
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
        <p>
          Don't have an account?{" "}
          <a href="" class="a2">
            Sign up!
          </a>
        </p>
      </div>
    </>
  );
};

export default hello;
