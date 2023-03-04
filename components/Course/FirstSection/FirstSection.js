import React, { useEffect, useState } from "react";
import styles from "./FirstSection.module.css";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import { BsArrowRightCircleFill, BsPlayFill } from "react-icons/bs";
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
  const [slidesPerView, setSlidesPerView] = useState(5);
  const [spaceBetween, setSpaceBetween] = useState(70);
  const [video, setVideo] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };

  const videoSHow = () => {
    setVideo(true);
  };

  useEffect(() => {
    let width = window.innerWidth;

    if (width < 801) {
      setSlidesPerView(3);
      setSpaceBetween(20);
    }
    if (width < 481) {
      setMobile(true);
    }
  });

  return (
    <section className={styles.wrapper}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
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
          <button onClick={popupShow}>
            Apply for Counselling <BsArrowRightCircleFill />
          </button>
          <BsPlayFill className={styles.playIcon} onClick={videoSHow} />
          <p onClick={videoSHow}>Intro Video</p>
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
