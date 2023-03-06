import React, { useState } from "react";
import styles from "./Certificate.module.css";
import { BiDownload } from "react-icons/bi";
import Image from "next/image";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";

const Certificate = ({
  popupHead,
  title,
  desc,
  src,
  dataScience,
  redirectDs,
  redirectFs,
  redirectDe,
  redirectDSA,
  redirectBa,
  redirectBl,
}) => {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <section className={styles.Certifcate}>
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        downloadBrochure
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "350px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>{popupHead}</h5>
          <p>Please enter the following details to initiate your download</p>
          <Form
            setTrigger={setPopups}
            downloadBrochure
            dataScience={dataScience}
            redirectDs={redirectDs}
            redirectFs={redirectFs}
            redirectBa={redirectBa}
            redirectBl={redirectBl}
            redirectDe={redirectDe}
            redirectDSA={redirectDSA}
          />
        </div>
      </Popup>

      <div className={styles.right}>
        <div className={styles.imgWrap}>
          <Image
            className="shadow"
            src={src}
            alt="Certificate of FUllstack Course"
            quality={100}
            layout="intrinsic"
            width={327}
            loading="lazy"
            height={451}
          />
        </div>
      </div>
      <div className={styles.left}>
        <p className={styles.pTop}> Certificate from companies</p>
        <h5>{title}</h5>

        <p className={styles.pBotC}>{desc}</p>

        <div className={styles.btnWrapper}>
          <button onClick={popupShow} className={styles.buttonDownload}>
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
