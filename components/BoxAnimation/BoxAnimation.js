import React, { useState, useEffect } from "react";
import AnimateHeading from "../Animation/Text/AnimateHeading";
import styles from "./BoxAnimation.module.css";
import Image from "next/image";
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
      <div className={styles.imgWrap}>
        <Image
          src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/skillslash-logo-faded.png"
          width={198}
          height={182}
          layout="intrinsic"
          alt="logo"
        />
      </div>
      {animateHeader ? <AnimateHeading /> : ""}

      <div className={styles.contentGrid}>
        <div className={styles.lineWrap}>
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/line-home.png"
            layout="fill"
            alt="logo"
          />
        </div>
        <div className={styles.first}>
          <ul className={styles.iconWrap}>
            <li>
              <RiNumber1 className={styles.number} />
            </li>
          </ul>
          <h5>Acquire Expertise</h5>
          <p>
            Attend live sessions led by industry veterans for an immersive
            experience that builds your expertise.
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
            Mentors help you select the domain and guide you through live
            projects to build relevant expertise.
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
            Build confidence to ace major interviews by attending sessions and
            working on real-work projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoxAnimation;
