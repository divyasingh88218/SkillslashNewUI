import styles from "./ProgramInfo.module.css";
import React from "react";
import Image from "next/image";
import { TbFileCertificate } from "react-icons/tb";

const ProgramInfo = ({
  Emi,
  homePage,
  redirectWeb,
  redirectFs,
  redirectDSA,
}) => {
  return (
    <div className={styles.feature}>
      <div className={styles.container}>
        <div className={styles.left}>
          {homePage || redirectWeb || redirectFs || redirectDSA ? (
            <>
              {" "}
              <Image
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/hike-icon-h.webp"
                width={40}
                height={40}
                alt="hiring"
              />
              <p>170% Average Salary Hike</p>
            </>
          ) : (
            <>
              {" "}
              <Image
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/hike-icon.webp"
                width={40}
                height={40}
                alt="hiring"
              />
              <p>Microsoft Certification</p>
            </>
          )}

          {/* <h5>{BatchDate}</h5> */}
        </div>
        <div className={styles.middle}>
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/live-classes.webp"
            width={40}
            height={40}
            alt="hiring"
          />
          <p>Live Interactive Sessions</p>
          {/* <h5>{BatchDuration}</h5> */}
        </div>
        <div className={styles.right}>
          {homePage ? (
            <>
              {" "}
              <Image
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Hiring-icon.webp"
                width={40}
                height={40}
                alt="hiring"
              />
              <p>400+ Hiring Partners</p>
            </>
          ) : (
            <>
              {" "}
              <Image
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/emi-icon-desktop.webp"
                width={40}
                height={40}
                alt="hiring"
              />
              <p>EMI starting @ {Emi}</p>
            </>
          )}

          {/* <h5>{Placement}</h5> */}
        </div>
      </div>
    </div>
  );
};

export default ProgramInfo;
