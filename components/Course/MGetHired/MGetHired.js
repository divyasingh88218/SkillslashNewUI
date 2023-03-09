import React, { useState, useEffect } from "react";
import style from "./MGetHired.module.css";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsDownload } from "react-icons/bs";
import { CgArrowLongDown } from "react-icons/cg";
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
  const [spaceBetween, setSpaceBetween] = useState(70);
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
  });

  return (
    <div className={style.wrapper}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h4>Detail placement report with students background</h4>
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
            slidesPerView={mobile ? 2 : slidesPerView}
            slidesPerGroup={2}
            loop={true}
            loopFillGroupWithBlank={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            style={{ width: "100%" }}
            grabCursor={true}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className={style.ReviewBox} id="1">
              <div className={style.profile}>
                <Image
                  src={
                    mobile
                      ? "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/akarsh-srivastava.webp"
                      : "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/akarsh-srivastava-big.webp"
                  }
                  width={mobile ? 60 : 120}
                  height={mobile ? 60 : 120}
                  alt="akarsh-srivastava"
                  layout="intrinsic"
                  loading="lazy"
                />
              </div>
              <div className={style.transition}>
                <p>Data Analyst</p>
                <CgArrowLongDown className={style.downArrow} />
                <Image
                  src={
                    mobile
                      ? "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/trueblue-icon.webp"
                      : "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/trueblue-big.webp"
                  }
                  width={mobile ? 86 : 100}
                  height={mobile ? 21 : 23}
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
                    mobile
                      ? "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/rishabh-jaiswal-icon.webp"
                      : "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/rishabh-jaiswal-icon-big.webp"
                  }
                  width={mobile ? 60 : 120}
                  height={mobile ? 60 : 120}
                  alt="rishabh-jaiswal"
                  layout="intrinsic"
                  loading="lazy"
                />
              </div>
              <div className={style.transition}>
                <p>Credit Risk Analyst</p>
                <CgArrowLongDown className={style.downArrow} />
                <Image
                  src={
                    mobile
                      ? "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/dharva-icon.png"
                      : "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/dvara.webp"
                  }
                  width={mobile ? 86 : 100}
                  height={mobile ? 21 : 73}
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
                    mobile
                      ? "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Madhuparana-icon.webp"
                      : "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Madhuparana.webp"
                  }
                  width={mobile ? 60 : 120}
                  height={mobile ? 60 : 120}
                  alt="Pragyan_prakash_review"
                  layout="intrinsic"
                  loading="lazy"
                />
              </div>
              <div className={style.transition}>
                <p>{redirectBa ? "Sr. Data Analyst" : "Data Scientist"}</p>
                <CgArrowLongDown className={style.downArrow} />
                <Image
                  src={
                    mobile
                      ? "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/tech-mahindra.png"
                      : "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/tech-mahindra-big.webp"
                  }
                  width={mobile ? 60 : 100}
                  height={mobile ? 40 : 28}
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
                    mobile
                      ? "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Pragyan_Prakash.webp"
                      : "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-big.webp"
                  }
                  width={mobile ? 60 : 120}
                  height={mobile ? 60 : 120}
                  alt="Pragyan_prakash_review"
                  layout="intrinsic"
                  loading="lazy"
                />
              </div>
              <div className={style.transition}>
                <p>{redirectBa ? "Business Analyst" : "Data Scientist"}</p>
                <CgArrowLongDown className={style.downArrow} />
                <Image
                  src={
                    mobile
                      ? "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Accenture.webp"
                      : "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Accenture-big.webp"
                  }
                  width={mobile ? 86 : 100}
                  height={mobile ? 40 : 29}
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
