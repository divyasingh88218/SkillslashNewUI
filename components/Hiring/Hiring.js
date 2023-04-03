import React, { useEffect, useState } from "react";
import styles from "./Hiring.module.css";
import Image from "next/image";

const Hiring = () => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;

    if (width < 481) {
      setMobile(true);
    }
  });
  return (
    <div className={styles.HiringWrapper}>
      <div className="wrapperHeading">
        <hr />
        <h4>Get Hired at</h4>
        <hr />
      </div>
      <div className={styles.imgWrapper}>
        <Image
          src={
            mobile
              ? "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/getHired-mobile.webp"
              : "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Hiring-image.webp"
          }
          width={mobile ? 369 : 1645}
          height={mobile ? 174 : 378}
          alt="hiring"
        />
      </div>
    </div>
  );
};

export default Hiring;
