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
  redirectWeb,
  width,
  height,
  mainHeaderImg,
  backgroundImg,
  iconImg,
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
      <Image
        src={backgroundImg}
        layout="fill"
        alt="background"
        objectFit="cover"
      />
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          {changeHeading ? (
            <h5>Download Program Handbook</h5>
          ) : (
            <h5>
              Get a chance to experience our live-interactive class before
              enrolling
            </h5>
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
        {redirectDs || redirectFs || redirectDSA ? (
          <div className={styles.imgWrapper}>
            <Image
              src={mainHeaderImg}
              alt="data-science-course"
              layout="intrinsic"
              objectFit="contain"
              width={width}
              height={height}
            />
          </div>
        ) : (
          <Image
            src={mainHeaderImg}
            alt="data-science-course"
            layout="intrinsic"
            objectFit="contain"
            width={width}
            height={height}
          />
        )}
        {redirectWeb ? "" : <img src={iconImg} className={styles.iconImg} />}
      </div>
    </section>
  );
};

export default FirstSection;
