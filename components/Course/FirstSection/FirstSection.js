import React, { useEffect, useState } from "react";
import styles from "./FirstSection.module.css";
import { AiOutlineDownload } from "react-icons/ai";
import Image from "next/image";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import { FaAward } from "react-icons/fa";
import TextAnimation from "../../Animation/TextAnimation";
import { BsArrowRightShort, BsPlayFill } from "react-icons/bs";
import { TbFileCertificate } from "react-icons/tb";
import { AiOutlineFileDone } from "react-icons/ai";
import VideoPopup from "../../VideoPopup/VideoPopup";
const FirstSection = ({
  deskTopPara,
  title,
  homePage,
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
  usp1,
  usp2,
  usp3,
  usp4,
  usp1Span,
  usp2Span,
  usp3Span,
  usp4Span,
}) => {
  const [mobile, setMobile] = useState(false);
  const [tablet, setTablet] = useState(false);
  const [popups, setPopups] = useState(false);
  const [changeHeading, setChangeHeading] = useState(false);
  const [changeText, setChangeText] = useState(false);
  const popupShow = (demoClass, changeText) => {
    setChangeHeading(demoClass);
    setChangeText(changeText);
    setPopups(true);
  };
  useEffect(() => {
    let width = window.innerWidth;
    if (width > 642) {
      setTablet(false);
    }
    if (width < 642) {
      setTablet(true);
    }
    if (width < 481) {
      setMobile(true);
    }
  });
  const [video, setVideo] = useState(false);

  const videoSHow = () => {
    setVideo(true);
  };
  return (
    <section className={styles.wrapper}>
      {homePage ? (
        <VideoPopup triggers={video} setTriggers={setVideo} ids="512xWUs9uXs" />
      ) : (
        ""
      )}

      {tablet ? (
        ""
      ) : (
        <Image
          priority
          src={backgroundImg}
          layout="fill"
          alt="background"
          objectFit="cover"
        />
      )}

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
        <div className={styles.imgWrap}>
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/mobile-white-microst-icon.png"
            height={80}
            width={80}
            priority
            layout="intrinsic"
          />
        </div>
        <div className={styles.paraWrap}>
          <p className={styles.pTop}>{deskTopPara}</p>
          {homePage ? (
            ""
          ) : (
            <p className={styles.sidePara}>
              {mobile ? "" : <FaAward />}

              {spanTitleText}
            </p>
          )}
        </div>

        {homePage ? (
          <h1 className={styles.homeH1}>
            Experiential Project-Based
            <br /> Learning Platform
          </h1>
        ) : (
          <h1>{title}</h1>
        )}
        {homePage || redirectFs || redirectWeb ? (
          ""
        ) : (
          <p className={styles.powered}>
            Powered by{" "}
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/microsoft-white.webp"
              height={26}
              width={114}
              priority
              layout="intrinsic"
            />
          </p>
        )}

        {homePage ? (
          <p className={styles.pBotM}>
            Enjoy the benefits of dual certification. Become Microsoft-certified
            with our program and also receive real-work certification from top
            MNC/Startups
          </p>
        ) : (
          <p className={styles.pBot}>{desc}</p>
        )}

        {tablet ? "" : <TextAnimation />}
        {homePage ? (
          <div className={styles.btnWrapper}>
            <a href="#explore">
              <button>
                Explore Courses
                <BsArrowRightShort className="bIconS" />
              </button>
            </a>
            <span>
              <BsPlayFill className={styles.playIcon} onClick={videoSHow} />
              <p onClick={videoSHow}>Intro Video</p>
            </span>
          </div>
        ) : (
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
        )}

        <div className={styles.uspFeatures}>
          <div className={styles.left}>
            <div className={styles.uspFeatures1}>
              <div>
                <Image
                  src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/liveTV.webp"
                  priority
                  alt="feature-1"
                  layout="intrinsic"
                  width={32}
                  height={34}
                />
              </div>
              <p>
                {usp1} <span>{usp1Span}</span>
              </p>
            </div>
            <div className={styles.uspFeatures2}>
              <div>
                <AiOutlineFileDone className={styles.realWorkIcon} />
              </div>
              <p>
                {usp2} <span>{usp2Span}</span>
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.uspFeatures3}>
              <div>
                {homePage ? (
                  <TbFileCertificate className={styles.certIcon} />
                ) : (
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/emi-icon.webp"
                    alt="feature-3"
                    priority
                    layout="intrinsic"
                    width="30"
                    height="30"
                  />
                )}
              </div>
              <p>
                {usp3} <span>{usp3Span}</span>
              </p>
            </div>
            <div className={styles.uspFeatures4}>
              <div>
                <Image
                  src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/like.webp"
                  alt="feature-4"
                  layout="intrinsic"
                  width="32"
                  height="34"
                />
              </div>
              <p>
                {usp4} <span>{usp4Span}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        {homePage || redirectFs || redirectWeb ? (
          ""
        ) : (
          <div className={styles.imgWrap}>
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/mobile-white-microst-icon.png"
              height={120}
              width={120}
              layout="intrinsic"
            />
          </div>
        )}

        {redirectDs || redirectFs || redirectDSA || homePage || redirectBa ? (
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
        {redirectWeb || homePage ? (
          ""
        ) : (
          <img
            src={iconImg}
            className={
              redirectDs || redirectBa || redirectDSA || redirectFs
                ? styles.iconImgD
                : styles.iconImg
            }
            style={redirectBa ? { width: "150px" } : { width: "89px" }}
          />
        )}
      </div>
    </section>
  );
};

export default FirstSection;
