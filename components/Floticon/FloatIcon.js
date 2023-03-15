import React, { useState } from "react";
import { MdAddCall } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdCall, MdClear } from "react-icons/md";
import styles from "./FLoatIcon.module.css";

const FloatIcon = () => {
  const [show, setShow] = useState(false);
  const showCall = () => {
    console.log("called");
    setShow(!show);
  };
  return (
    <div className={styles.callWrap}>
      {show ? (
        <div className={styles.show}>
          <p className={styles.callText}>call Me back</p>
          <div className={styles.callWrapBack}>
            <MdCall className={styles.call} />
          </div>
          <p className={styles.whatsText}>Chat with us</p>
          <div className={styles.callWrapBack}>
            <IoLogoWhatsapp className={styles.whatsapp} />
          </div>
        </div>
      ) : (
        ""
      )}

      <div className={styles.callWrapBack} onClick={showCall}>
        {show ? (
          <MdClear className={styles.cross} />
        ) : (
          <MdAddCall className={styles.call} />
        )}
      </div>
    </div>
  );
};

export default FloatIcon;
