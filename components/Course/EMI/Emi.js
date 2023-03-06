import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Emi.module.css";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Emi = () => {
  const [popups, setPopups] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(5);
  const [spaceBetween, setSpaceBetween] = useState(70);

  const popupShow = () => {
    setPopups(true);
  };

  useEffect(() => {
    let width = window.innerWidth;

    if (width < 801) {
      setSlidesPerView(9);
      setSpaceBetween(20);
    }
    if (width < 641) {
      setSlidesPerView(5);
      setSpaceBetween(20);
    }
    if (width < 481) {
      setSlidesPerView(3);
      setSpaceBetween(10);
      setMobile(true);
    }
  });
  return (
    <div className={styles.EmiWrapper}>
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
            dataScience={false}
            redirectDs={false}
            redirectFs={false}
            redirectBa={false}
            redirectBl={false}
            redirectDe={false}
            redirectDSA={true}
          />
        </div>
      </Popup>
      <div className={styles.leftEmi}>
        <h6>Why choose us?</h6>
        <div className={styles.list}>
          <span>
            <TiTick className={styles.tick} />
            250+ Hours of Live class
          </span>
          <span>
            <TiTick className={styles.tick} />
            15+ Industry Project
          </span>
          <span>
            <TiTick className={styles.tick} />
            Guaranteed job referral
          </span>
          <span>
            <TiTick className={styles.tick} />
            Real Work Experience
          </span>
          <span>
            <TiTick className={styles.tick} />
            Learn From Industry Experts
          </span>
          <span>
            <TiTick className={styles.tick} />
            Life Time Accessability
          </span>
        </div>
      </div>
      <div className={styles.rightEmi}>
        <h5 className={styles.EmiHeading}>
          Prog<span>ram Fees</span>
        </h5>
        <p className={styles.pBot}>
          We are driven by the idea of program affordability. So, we give you
          several financial options to manage and budget the expenses of your
          Data Structures and Algorithms System Design.
        </p>
        <div className={styles.top}>
          <div className={styles.topEmiLeft}>
            <h6>Starting at ₹65,000 + GST </h6>
            <p>EMI starting from: ₹5416/month</p>
          </div>
          <div className={styles.topEmiRight}>
            <button onClick={popupShow}>Apply Now</button>
          </div>
        </div>

        <div className={styles.emiLeftMiddle}>
          <h5>Payment Partner</h5>
          <div className={styles.bottom}>
            <Swiper
              spaceBetween={mobile ? 30 : spaceBetween}
              centeredSlides={true}
              slidesPerView={mobile ? 3 : slidesPerView}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              grabCursor={true}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {mobile ? (
                <>
                  {" "}
                  <SwiperSlide>
                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/liquiloans.webp"
                      alt="liqiloans"
                      width={mobile ? "90" : "150"}
                      height="40"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/propelld.webp"
                      alt="Propelled"
                      width="120"
                      height="40"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/zest-logo.webp"
                      alt="zest"
                      width="80"
                      height="20"
                    />
                  </SwiperSlide>
                </>
              ) : (
                <>
                  <SwiperSlide>
                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/liquiloans.webp"
                      alt="liqiLoans"
                      width="300"
                      height="120"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/propelld.webp"
                      alt="propelld"
                      width="500"
                      height="200"
                      layout="intrinsic"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/zest-logo.webp"
                      alt="Zest"
                      width="200"
                      height="58"
                    />
                  </SwiperSlide>
                </>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emi;
