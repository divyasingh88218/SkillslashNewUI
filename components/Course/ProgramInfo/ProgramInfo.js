import styles from "./ProgramInfo.module.css";
import React from "react";
import Image from "next/image";

const ProgramInfo = ({ BatchDate, BatchDuration, Placement }) => {
  return (
    <div className={styles.feature}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/hike-icon.webp"
            width={40}
            height={40}
            alt="hiring"
          />
          <p>170% Average Salary Hike</p>
          {/* <h5>{BatchDate}</h5> */}
        </div>
        <div className={styles.middle}>
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/user-icon.webp"
            width={40}
            height={40}
            alt="hiring"
          />
          <p>M(F)AANG Instructors</p>
          {/* <h5>{BatchDuration}</h5> */}
        </div>
        <div className={styles.right}>
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Hiring-icon.webp"
            width={40}
            height={40}
            alt="hiring"
          />
          <p>400+ Hiring Partners</p>
          {/* <h5>{Placement}</h5> */}
        </div>
      </div>
    </div>
  );
};

export default ProgramInfo;
