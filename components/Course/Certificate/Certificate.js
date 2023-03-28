import React, { useState, useEffect } from "react";
import styles from "./Certificate.module.css";
import { BsCheck2Circle } from "react-icons/bs";
import Image from "next/image";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";

const Certificate = ({
  popupHead,
  title,
  desc,
  src,
  subheading,
  dataScience,
  redirectDs,
  redirectFs,
  redirectDe,
  redirectDSA,
  redirectBa,
  redirectBl,
  redirectWeb,
  redirectAI,
}) => {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
  });

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
            redirectWeb={redirectWeb}
            redirectAI={redirectAI}
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
        <p className={styles.pTop}>Certification</p>
        <h5>{title}</h5>
        <p>
          Our comprehensive curriculum, Live interactive sessions , excellent
          placement assistance and more makes us the ideal choice for your
          career development.
        </p>
        <p className={styles.point}>
          <BsCheck2Circle className={styles.check} /> Get High value Microsoft
          certification.
        </p>
        <p className={styles.point}>
          <BsCheck2Circle className={styles.check} /> Get Real work experience
          certification.
        </p>
        <p className={styles.point}>
          <BsCheck2Circle className={styles.check} /> World class training from
          top-notch faculties.
        </p>

        <div className={styles.btnWrapper}>
          <button onClick={popupShow} className={styles.buttonDownload}>
            Download Brochure
          </button>
        </div>
      </div>
      <div className={styles.mobileCertificateWrap}>
        <div className={styles.rightS}>
          <div className={styles.imgWrapper}>
            <Image
              className="shadow"
              src={
                redirectBa
                  ? "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/data-sample-certificate.jpg"
                  : "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/MOVIDU_Sample+Certificate+-+1+(1).jpeg"
              }
              alt="Certificate of FUllstack Course"
              quality={100}
              layout="intrinsic"
              width={450}
              loading="lazy"
              height={300}
            />
          </div>
        </div>
        <div className={styles.mCertificate}>
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
      </div>
    </section>
  );
};

export default Certificate;
