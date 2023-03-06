import React, { useEffect, useState } from "react";
import styles from "./FirstSection.module.css";
import { AiOutlineDownload } from "react-icons/ai";
import Image from "next/image";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";

import TextAnimation from "../../Animation/TextAnimation";

const FirstSection = ({
  deskTopPara,
  title,
  spanTitleText,
  desc,
  dataScience,
  mTopPara,
  redirectDs,
  redirectFs,
  redirectDe,
  redirectBa,
  redirectBl,
  redirectDSA,
  width,
  height,
  mainHeaderImg,
  backgroundImg,
}) => {
  const [mobile, setMobile] = useState(false);

  const [popups, setPopups] = useState(false);
  const [changeHeading, setChangeHeading] = useState(false);
  const [changeText, setChangeText] = useState(false);
  const popupShow = (demoClass, changeText) => {
    setChangeHeading(demoClass);
    setChangeText(changeText);
    setPopups(true);
  };

  return (
    <section className={styles.wrapper}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          {changeHeading ? (
            <h5>Download Program Handbook</h5>
          ) : (
            <h4>
              Get a chance to experience our live-interactive class before
              enrolling
            </h4>
          )}
          <p>Fill the below Details to get started</p>
          <Form
            popup={true}
            setTrigger={setPopups}
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

      <div className={styles.left}>
        {mobile ? (
          <p className="pTop">{mTopPara}</p>
        ) : (
          <p className="pTop">{deskTopPara}</p>
        )}

        <h1>
          {title}
          <span> {spanTitleText}</span>
        </h1>
        <p className={styles.pBot}>{desc}</p>
        <TextAnimation />
        <div className={styles.btnWrapper}>
          <button
            onClick={() => popupShow(true, false)}
            className={styles.btn2}
          >
            <AiOutlineDownload className={styles.download} />
            Program Handbook
          </button>
          <button
            onClick={() => popupShow(false, true)}
            className={styles.btn1}
          >
            Demo Class
          </button>
        </div>
      </div>
      <div className={styles.right}>
        {redirectBa || redirectBl || redirectFs ? (
          <img
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/FirstsecRimg.webp"
            alt="business-analytics-course"
          />
        ) : (
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/FirstsecRimg.webp"
            alt="data-science-course"
            layout="intrinsic"
            objectFit="contain"
            width={900}
            height={607}
          />
        )}
      </div>
    </section>
  );
};

export default FirstSection;
