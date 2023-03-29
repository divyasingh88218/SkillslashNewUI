import React from "react";
import styles from "./Hiring.module.css";
import Image from "next/image";

const Hiring = () => {
  return (
    <div className={styles.HiringWrapper}>
      <div className="wrapperHeading">
        <hr />
        <h4>Get Hired at</h4>
        <hr />
      </div>
      <div className={styles.imgWrapper}>
        <Image
          src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Hiring-image.webp"
          width={1645}
          height={378}
          alt="hiring"
        />
      </div>
    </div>
  );
};

export default Hiring;
