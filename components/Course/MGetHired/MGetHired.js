import React, { useState, useEffect } from "react";
import style from "./MGetHired.module.css";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsDownload } from "react-icons/bs";

import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";

const MGetHired = ({
  redirectDs,
  redirectFs,
  redirectDe,
  redirectBa,
  redirectDSA,
  redirectWeb,
  redirectAI,
}) => {
  const [mobile, setMobile] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [spaceBetween, setSpaceBetween] = useState(90);
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
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
    if (width < 961) {
      setSlidesPerView(3);
      setSpaceBetween(20);
    }
    if (width < 641) {
      setSlidesPerView(2);
      setSpaceBetween(20);
    }
  });

  return (
    <div className={style.wrapper}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Detail placement report with students background</h5>
          <p>Fill the below Details to get started</p>
          <Form
            popup={true}
            placement={true}
            downloadBrochure={true}
            setTrigger={setPopups}
            redirectDs={redirectDs}
            redirectFs={redirectFs}
            redirectBa={redirectBa}
            redirectDe={redirectDe}
            redirectDSA={redirectDSA}
            redirectWeb={redirectWeb}
            redirectAI={redirectAI}
          />
        </div>
      </Popup>
      <h4>Our Alumni Placed @</h4>
      <div className={style.innerWrap}>
        <div className={style.slider}>
          <Swiper
            spaceBetween={mobile ? 20 : spaceBetween}
            slidesPerView={mobile ? 1.5 : slidesPerView}
            slidesPerGroup={2}
            loop={true}
            loopFillGroupWithBlank={true}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            // }}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            style={{ width: "100%" }}
            grabCursor={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className={style.ReviewBox} id="1">
              <div className={style.profile}>
                <Image
                  src={
                    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/akarsh-srivastava-big.webp"
                  }
                  width={85}
                  height={85}
                  alt="akarsh-srivastava"
                  layout="intrinsic"
                  loading="lazy"
                />
              </div>
              <div className={style.transition}>
                <p>Data Analyst</p>

                <Image
                  src={
                    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/trueblue-big.webp"
                  }
                  width={135}
                  height={30}
                  alt="trueblue"
                  layout="intrinsic"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className={style.ReviewBox} id="2">
              <div className={style.profile}>
                <Image
                  src={
                    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/rishabh-jaiswal-icon-big.webp"
                  }
                  width={85}
                  height={85}
                  alt="rishabh-jaiswal"
                  layout="intrinsic"
                  loading="lazy"
                />
              </div>
              <div className={style.transition} style={{ marginTop: "40px" }}>
                <p style={{ marginBottom: "-5px" }}>Credit Risk Analyst</p>

                <Image
                  src={
                    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/dvara.webp"
                  }
                  width={80}
                  height={58}
                  alt="trueblue"
                  layout="intrinsic"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className={style.ReviewBox} id="3">
              <div className={style.profile}>
                <Image
                  src={
                    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Madhuparana.webp"
                  }
                  width={85}
                  height={85}
                  alt="Pragyan_prakash_review"
                  layout="intrinsic"
                  loading="lazy"
                />
              </div>
              <div className={style.transition}>
                <p style={{ marginBottom: "-5px" }}>
                  {redirectBa ? "Sr. Data Analyst" : "Data Scientist"}
                </p>

                <Image
                  src={
                    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/tech-mahindra-big.webp"
                  }
                  width={130}
                  height={38}
                  alt="trueblue"
                  layout="intrinsic"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className={style.ReviewBox} id="4">
              <div className={style.profile}>
                <Image
                  src={
                    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-big.webp"
                  }
                  width={85}
                  height={85}
                  alt="Pragyan_prakash_review"
                  layout="intrinsic"
                  loading="lazy"
                />
              </div>
              <div className={style.transition}>
                <p style={{ marginBottom: "-5px" }}>
                  {redirectBa ? "Business Analyst" : "Data Scientist"}
                </p>

                <Image
                  src={
                    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Accenture-big.webp"
                  }
                  width={130}
                  height={39}
                  alt="trueblue"
                  layout="intrinsic"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={style.button}>
          <button onClick={popupShow}>
            <BsDownload className={style.icon} />
            Placement Report
          </button>
        </div>
        <div className={style.bottom}>
          <p>Our Hiring Partners</p>
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
            style={{ width: "100%" }}
            grabCursor={true}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {mobile ? (
              <div key={1}>
                <SwiperSlide>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Google.webp"
                    alt="Google"
                    width={mobile ? "70" : "150"}
                    height="30"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Amazon.png"
                    alt="Amazon"
                    width="124"
                    height="50"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Microsoft.png"
                    alt="Microsoft"
                    width="120"
                    height="40"
                    loading="lazy"
                  />
                </SwiperSlide>
                {redirectFs ? (
                  ""
                ) : (
                  <SwiperSlide>
                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Flipkart.png"
                      alt="Flipkart"
                      width="100"
                      height="40"
                      loading="lazy"
                    />
                  </SwiperSlide>
                )}

                <SwiperSlide>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/facebook.png"
                    alt="Facebook Logo"
                    objectFit="contain"
                    width="120"
                    height="40"
                    loading="lazy"
                  />
                </SwiperSlide>
                {redirectFs ? (
                  ""
                ) : (
                  <SwiperSlide>
                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/TCS.png"
                      alt="TCS"
                      width="120"
                      height="40"
                      loading="lazy"
                    />
                  </SwiperSlide>
                )}
              </div>
            ) : (
              <>
                <SwiperSlide>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Google.webp"
                    alt="Google"
                    width="80"
                    height="20"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Amazon.png"
                    alt="Google"
                    width="120"
                    height="40"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Microsoft.png"
                    alt="Google"
                    width="150"
                    height="40"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/facebook.png"
                    alt="facebook"
                    width="150"
                    height="40"
                    loading="lazy"
                  />
                </SwiperSlide>
                {redirectFs ? (
                  ""
                ) : (
                  <>
                    {" "}
                    <SwiperSlide>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/PAYTM_logo.png"
                        alt="Paytm"
                        width="140"
                        height="44"
                        loading="lazy"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Zoho.png"
                        alt="Zoho"
                        width="140"
                        height="48"
                        loading="lazy"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/TCS.png"
                        alt="TCS"
                        width="150"
                        height="60"
                        loading="lazy"
                      />
                    </SwiperSlide>
                  </>
                )}
              </>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MGetHired;
