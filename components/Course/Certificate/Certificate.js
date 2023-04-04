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
    if (width < 801) {
      setMobile(true);
    }
    if (width > 801) {
      setMobile(false);
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
      {mobile ? (
        <>
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
              Our comprehensive curriculum, Live interactive sessions ,
              excellent placement assistance and more makes us the ideal choice
              for your career development.
            </p>
            <p className={styles.point}>
              <BsCheck2Circle className={styles.check} /> Get High value
              Microsoft certification.
            </p>
            <p className={styles.point}>
              <BsCheck2Circle className={styles.check} /> Get Real work
              experience certification.
            </p>
            <p className={styles.point}>
              <BsCheck2Circle className={styles.check} /> World class training
              from top-notch faculties.
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
                      ? "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/data-sample-certificate.webp"
                      : "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/MOVIDU_Sample%2BCertificate%2B-%2B1%2B(1).webp"
                  }
                  alt="Certificate of Course"
                  quality={100}
                  layout="intrinsic"
                  width={450}
                  loading="lazy"
                  height={306}
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
        </>
      ) : (
        <>
          {" "}
          {redirectFs || redirectWeb || redirectDSA ? (
            ""
          ) : (
            <div className={styles.topWrap}>
              <h4 className={styles.dualHead}>{subheading}</h4>
              {/* <h5>{title}</h5> */}
              <div className={styles.top}>
                <div className={styles.imgWrapper}>
                  <Image
                    className="shadow"
                    src={
                      redirectBa
                        ? "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/data-sample-certificate.webp"
                        : "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/MOVIDU_Sample%2BCertificate%2B-%2B1%2B(1).webp"
                    }
                    alt="Certificate of FUllstack Course"
                    quality={100}
                    layout="intrinsic"
                    width={450}
                    priority
                    height={300}
                  />
                </div>
                <div className={styles.btRight}>
                  <div className={styles.desc}>
                    <h4>Microsoft Certification</h4>
                    <p>Be in demand with Microsoft certification</p>
                    <p className={styles.point}>
                      <BsCheck2Circle className={styles.check} />
                      Be certified in Azure AI Fundamentals
                    </p>
                    <p className={styles.point}>
                      <BsCheck2Circle className={styles.check} />
                      Be ahead of those who don’t have one
                    </p>
                    <p className={styles.point}>
                      <BsCheck2Circle className={styles.check} /> Earn the
                      credibility of a true professional
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className={styles.bottom}>
            <div className={styles.desc}>
              <h4>Real Work Experience Certificate</h4>
              <p>Real work experience gives you the Real edge</p>
              <p className={styles.point}>
                <BsCheck2Circle className={styles.check} /> Project
                certification from top MNCs to gain that edge
              </p>
              <p className={styles.point}>
                <BsCheck2Circle className={styles.check} />
                Practical experience to tackle real-world problems
              </p>
              <p className={styles.point}>
                <BsCheck2Circle className={styles.check} />
                Edge over all those with just course certifications
              </p>
              <button className={styles.buttonDownload} onClick={popupShow}>
                Download Brochure
              </button>
            </div>
            <div className={styles.btRight}>
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
        </>
      )}
    </section>
  );
};

export default Certificate;
