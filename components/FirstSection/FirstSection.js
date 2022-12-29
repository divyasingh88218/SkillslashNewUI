import React, { useState, useEffect } from "react";
import styles from "./FirstSection.module.css";
import Image from "next/image";
import { BsArrowRightShort, BsPlayFill } from "react-icons/bs";
import TextAnimation from "../Animation/TextAnimation";
import VideoPopup from "../VideoPopup/VideoPopup";
import TopHeaderAnimation from "../Animation/Text/TopHeaderAnimation";

const FirstSection = () => {
  const [mobile, setMobile] = useState(false);
  const [video, setVideo] = useState(false);

  const videoSHow = () => {
    setVideo(true);
  };
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  });
  return (
    <div className={styles.FirstWrap}>
      <VideoPopup triggers={video} setTriggers={setVideo} ids="512xWUs9uXs" />
      <div className={styles.leftFirst}>
        <p className="pTop">Get Trained From</p>
        <h1>
          India's Best Project Based  <span className={styles.btnShine} >
        Experiential Learning Platform
      </span>
        </h1>
        
        <p className={styles.pBot}>
          Get real-work experience and certifications. Learn from industry
          experts and get placed in top product companies!
        </p>

        <TextAnimation />

        <div className={styles.btnWrapper}>
          <a href="#explore">
            <button>
              Explore Courses<BsArrowRightShort className="bIconS" />   <svg className={styles.border}>
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
      </svg>
            </button>
          </a>
          <BsPlayFill className={styles.playIcon} onClick={videoSHow} />
          <p onClick={videoSHow}>Intro Video</p>
        </div>
      </div>
      <div className={styles.rightFirst}>
        <Image
          src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/home-header-image-desktop.webp"
          height="535"
          width="596"
          layout="intrinsic"
        />
      </div>
    </div>
  );
};

export default FirstSection;
