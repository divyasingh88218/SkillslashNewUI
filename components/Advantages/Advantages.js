import React, { useState } from "react";
import styles from "./Advantages.module.css";
import Image from "next/image";
import Popup from "../Popup/Popup";
import ContactForm from "../ContactusForm/ContactusForm";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Advantages = () => {
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };

  const static_url = process.env.CDN_URL;
  const img_url = `${static_url}/web/Advantages_of_skillslash.webp`;

  return (
    <div className={styles.Advantages}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <p>Fill the below Details to get started</p>
          <ContactForm setTrigger={setPopups} popup={true} />
        </div>
      </Popup>
      <div className={styles.leftAdv}>
        <Image
          src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Advantages_of_skillslash.webp"
          width="535"
          height="535"
          layout="intrinsic"
        />
      </div>
      <div className={styles.RightAdv}>
        <h5>The Advantages Of Skillslash</h5>
        <div className={styles.DivIcon}>
          <div className={styles.leftIcon}>
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Custom_tracks.webp"
              width="65"
              height="65"
              layout="intrinsic"
              loading="lazy"
            />
          </div>
          <div className={styles.rightIcon}>
            <h6>Build Custom Learning Tracks</h6>
            <p>Design your courses at Skillslash under our supervision</p>
          </div>
        </div>
        <div className={styles.DivIcon}>
          <div className={styles.leftIcon}>
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/project_certificate.webp"
              width="65"
              height="65"
              layout="intrinsic"
              loading="lazy"
            />
          </div>
          <div className={styles.rightIcon}>
            <h6 style={{ color: "#f28705" }}>
              Project Experience Certification
            </h6>
            <p>We help you build real-work experience during the program</p>
          </div>
        </div>
        <div className={styles.DivIcon}>
          <div className={styles.leftIcon}>
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Job_ Guarante.webp"
              width="65"
              height="65"
              layout="intrinsic"
              loading="lazy"
            />
          </div>
          <div className={styles.rightIcon}>
            <h6>Guaranteed job referral</h6>
            <p>Get Guaranteed job referral in top MNC's and Startups</p>
          </div>
        </div>
        <button className={styles.btn} onClick={popupShow}>
          Apply for Profile Review{" "}
          <BsFillArrowRightCircleFill className={styles.btnIcon} />
        </button>
      </div>
    </div>
  );
};

export default Advantages;
