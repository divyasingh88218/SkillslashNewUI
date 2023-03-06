import React from "react";
import styles from "./Cta.module.css";
import { IoMdCall } from "react-icons/io";
import Image from "next/image";

const CTA = ({ redirectDSA }) => {
  return (
    <div className={styles.CtaWrapper}>
      <div className={styles.firstCta}>
        <Image
          src="  https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Skillslash+New+Logo+(white)+3.webp"
          alt="CTA"
          layout="intrinsic"
          objectFit="contain"
          width={137}
          height={200}
          loading="lazy"
        />
      </div>
      <div className={styles.leftCta}>
        <h4>Get Free Career Counselling</h4>
        <p className={styles.pTop}>For queries, feedback & assistance</p>
        <p className={styles.smallCTA}>(7AM -12 AM)</p>
        <a href="tel:+91-8391-911-911">
          <button>
            <IoMdCall className={styles.cIcon} />
            8391-911-911
          </button>
        </a>
      </div>
      <div className={styles.rightCta}>
        <div className={styles.imgwrap}>
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/200_finance+%5BConverted%5D-01-011+1.webp"
            alt="CTA"
            layout="intrinsic"
            objectFit="contain"
            width={235}
            height={250}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
