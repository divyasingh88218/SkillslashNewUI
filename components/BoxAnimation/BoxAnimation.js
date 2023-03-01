import React, { useState, useEffect } from "react";
import AnimateHeading from "../Animation/Text/AnimateHeading";
import styles from "./BoxAnimation.module.css";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
const BoxAnimation = () => {
  const [animateHeader, setAnimateHeader] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 640) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);
  return (
    <div className={styles.Wrapper}>
      {animateHeader ? <AnimateHeading /> : ""}

      <div className={styles.contentGrid}>
        <div className={styles.first}>
          <ul className={styles.iconWrap}>
            <li>
              <RiNumber1 className={styles.number} />
            </li>
          </ul>
          <h5>Acquire Expertise</h5>
          <p>
            Attend our live interactive sessions led by industry veterans to
            enjoy an immersive learning experience
          </p>
        </div>
        <div className={styles.second}>
          <ul className={styles.iconWrap}>
            <li>
              <RiNumber2 className={styles.number} />
            </li>
          </ul>
          <h5>Build Relevant Experience</h5>
          <p>
            Our mentors will guide you to select relevant domains based on your
            prior experience and work on live projects to build expertise
          </p>
        </div>
        <div className={styles.third}>
          <ul className={styles.iconWrap}>
            <li>
              <RiNumber3 className={styles.number} />
            </li>
          </ul>
          <h5> Get Hired</h5>
          <p>
            Leverage the acquired expertise and experience to interview for your
            targeted roles and clear them with confidence
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoxAnimation;
