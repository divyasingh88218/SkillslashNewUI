import React, { useState, useEffect } from "react";
import style from "./TrainSlider.module.css";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsDownload } from "react-icons/bs";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";

const TrainerSlider = ({
  redirectDs,
  redirectFs,
  redirectDe,
  redirectBa,
  redirectBl,
  redirectDSA,
  redirectWeb,
  redirectAI,
}) => {
  const [mobile, setMobile] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [spaceBetween, setSpaceBetween] = useState(60);
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
      setSlidesPerView(2);
      setSpaceBetween(20);
    }
    if (width < 641) {
      setSlidesPerView(1.4);
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
          <h5>Complete trainers background and experience</h5>
          <p>Fill the below Details to get started</p>
          <Form
            popup={true}
            downloadBrochure={true}
            setTrigger={setPopups}
            redirectDs={redirectDs}
            redirectFs={redirectFs}
            redirectBa={redirectBa}
            redirectDe={redirectDe}
            redirectDSA={redirectDSA}
            redirectWeb={redirectWeb}
            redirectAI={redirectAI}
            trainer={true}
          />
        </div>
      </Popup>
      <h4 className={style.heading}>Our Trainers and Mentors</h4>
      <div className={style.innerWrap}>
        <div className={style.slider}>
          <Swiper
            spaceBetween={mobile ? 20 : spaceBetween}
            slidesPerView={mobile ? 1.3 : slidesPerView}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            style={{ width: "100%" }}
            grabCursor={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {redirectFs || redirectWeb ? (
              <>
                <SwiperSlide className={style.ReviewBox}>
                  <div className={style.profile}>
                    {mobile ? (
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/fsTrainer1.webp"
                        alt="Sanket Singh"
                        layout="fill"
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/SinghSanket.webp"
                        alt="Sanket Singh"
                        layout="intrinsic"
                        objectFit="contain"
                        width={270}
                        height={258}
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className={style.transition}>
                    <h5>Sanket Singh</h5>
                    <p>Software Engineer II</p>

                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/GoogleM.webp"
                      width="83"
                      height="27"
                      alt="Google"
                      layout="intrinsic"
                      objectFit="contain"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className={style.ReviewBox}>
                  <div className={style.profile}>
                    {mobile ? (
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Chirag.webp"
                        alt="Chirag Goel"
                        layout="fill"
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Goel.webp"
                        alt="Chirag Goel"
                        layout="intrinsic"
                        objectFit="contain"
                        width={271}
                        height={258}
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className={style.transition}>
                    <h5 style={{ marginTop: "25px" }}>Chirag Goel</h5>
                    <p style={{ marginBottom: "-10px" }}>
                      Sr. Software Engineer
                    </p>

                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Micro.png"
                      width="150"
                      height="68"
                      alt="Microsoft"
                      layout="intrinsic"
                      objectFit="contain"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className={style.ReviewBox}>
                  <div className={style.profile}>
                    {mobile ? (
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/MAmit.webp"
                        alt="KumarAmit"
                        layout="fill"
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/KumarAmit.webp"
                        alt="KumarAmit"
                        layout="intrinsic"
                        objectFit="contain"
                        width={271}
                        height={258}
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className={style.transition}>
                    <h5 style={{ marginTop: "25px" }}>Amit Kumar</h5>
                    <p style={{ marginBottom: "-10px" }}>Software Engineer</p>

                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/microsoftM.webp"
                      width="150"
                      height="68"
                      alt="Microsoft"
                      layout="intrinsic"
                      objectFit="contain"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className={style.ReviewBox}>
                  <div className={style.profile}>
                    {mobile ? (
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/dhaval-dhave-trainer.webp"
                        alt="DaveDhawal"
                        layout="fill"
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/DaveDhawal.webp"
                        alt="DaveDhawal"
                        layout="intrinsic"
                        objectFit="contain"
                        width={271}
                        height={258}
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className={style.transition}>
                    <h5>Dhaval Dave</h5>
                    <p>Staff Software Engineer</p>

                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/image%2B230.png"
                      width="112"
                      height="32"
                      alt="Walmart"
                      layout="intrinsic"
                      objectFit="contain"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className={style.ReviewBox}>
                  <div className={style.profile}>
                    {mobile ? (
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/aman.webp"
                        alt="Aman Garg"
                        layout="fill"
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/AmanA.webp"
                        alt="Aman Garg"
                        layout="intrinsic"
                        objectFit="contain"
                        width={271}
                        height={258}
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className={style.transition}>
                    <h5>Aman Garg</h5>
                    <p>Software Engineer II</p>

                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/amazon.png"
                      width="90"
                      height="27"
                      alt="Amazon"
                      layout="intrinsic"
                      objectFit="contain"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide className={style.ReviewBox}>
                  <div className={style.profile}>
                    {mobile ? (
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/NaveenM.webp"
                        alt="Naveen Yadav"
                        layout="fill"
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Naveen.webp"
                        alt="Naveen Yadav"
                        layout="intrinsic"
                        objectFit="contain"
                        width={271}
                        height={258}
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className={style.transition}>
                    <h5>Naveen Yadav</h5>
                    <p>Software Engineer II</p>

                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/PngItem_7189867%2B1.png"
                      width="110"
                      height="14"
                      alt="Oracle"
                      layout="intrinsic"
                      objectFit="contain"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className={style.ReviewBox}>
                  <div className={style.profile}>
                    {mobile ? (
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/sum.webp"
                        alt="Soumya S. Mangaraj"
                        layout="fill"
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/SoumNag.webp"
                        alt="Soumya S. Mangaraj"
                        layout="intrinsic"
                        objectFit="contain"
                        width={271}
                        height={258}
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className={style.transition}>
                    <h5>Soumya S. Mangaraj</h5>
                    <p>Sr. Software Engineer</p>

                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/paypal-de.png"
                      width="110"
                      height="31"
                      alt="paypal"
                      layout="intrinsic"
                      objectFit="contain"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              </>
            ) : (
              <>
                <SwiperSlide className={style.ReviewBox}>
                  <div className={style.profile}>
                    {mobile ? (
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pratiskish-icon.webp"
                        alt="akarsh-srivastava"
                        layout="fill"
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Prathap-ds-desktop.webp"
                        alt="Prathap"
                        layout="intrinsic"
                        objectFit="contain"
                        width={262}
                        height={257}
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className={style.transition}>
                    <h5>Prathap Balachandra</h5>
                    <p>Senior Lead Data Scientist</p>
                    <Image
                      src={
                        mobile
                          ? "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/mercedez-ixon.png"
                          : "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Mercedes-Benz-Logo.webp"
                      }
                      width={mobile ? 20 : 89}
                      height={mobile ? 20 : 47}
                      alt="trueblue"
                      layout="intrinsic"
                      objectFit="contain"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className={style.ReviewBox}>
                  <div className={style.profile}>
                    {mobile ? (
                      <Image
                        src={
                          "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/deepak-kumar-singh-mobile.webp"
                        }
                        alt="deepak-kumar-singh"
                        layout="fill"
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src={
                          "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/deepak-kumar-singh.webp"
                        }
                        alt="deepak-kumar-singh"
                        layout="intrinsic"
                        objectFit="contain"
                        width={262}
                        height={257}
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className={style.transition}>
                    <h5>Deepak Kumar Singh</h5>
                    <p>Senior Data Scientist</p>
                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Logo-1-icon.webp"
                      width="60"
                      height="29"
                      alt="inmobi"
                      layout="intrinsic"
                      objectFit="contain"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className={style.ReviewBox}>
                  <div className={style.profile}>
                    {mobile ? (
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/kpmg-mentor.webp"
                        alt="rohan-aher"
                        layout="fill"
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/rohan-aher-desktop.webp"
                        alt="rohanaher"
                        layout="intrinsic"
                        objectFit="contain"
                        width={262}
                        height={257}
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className={style.transition}>
                    <h5>Rohan Aher</h5>
                    <p>Assistant Manager</p>
                    <Image
                      src={
                        mobile
                          ? "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/kpmg-logo.webp"
                          : "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/kpmg-logo.webp"
                      }
                      width="49"
                      height="20"
                      alt="trueblue"
                      layout="intrinsic"
                      objectFit="contain"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className={style.ReviewBox}>
                  <div className={style.profile}>
                    {mobile ? (
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Lekha-Janardhan-logo.webp"
                        alt="Lekha Janardhan"
                        layout="fill"
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Lekha-Janardhan-logo-big.webp"
                        alt="Lekha Janardhan"
                        layout="intrinsic"
                        objectFit="contain"
                        width={262}
                        height={257}
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className={style.transition}>
                    <h5>Lekha Janardhan</h5>
                    <p>Data Scientist</p>
                    <Image
                      src={
                        mobile
                          ? "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/analyticedge-logo.png"
                          : "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/analyticedge-logo-big.webp"
                      }
                      width={mobile ? 53 : 109}
                      height={mobile ? 17 : 30}
                      alt="trueblue"
                      objectFit="contain"
                      layout="intrinsic"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide className={style.ReviewBox}>
                  <div className={style.profile}>
                    {mobile ? (
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/maytronics-trainer.webp"
                        alt="aravind-reddy"
                        layout="fill"
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/aravind-reddy.webp"
                        alt="aravind-reddy"
                        layout="intrinsic"
                        objectFit="contain"
                        width={262}
                        height={257}
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className={style.transition}>
                    <h5>Aravind Reddy Dudipala</h5>
                    <p>Senior Data Scientist</p>
                    <Image
                      src={
                        mobile
                          ? "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/maytronics-logo.webp"
                          : "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/maytronics-logo-big.webp"
                      }
                      width={mobile ? 78 : 105}
                      height={mobile ? 16 : 24}
                      alt="trueblue"
                      layout="intrinsic"
                      objectFit="contain"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className={style.ReviewBox}>
                  <div className={style.profile}>
                    {mobile ? (
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/parikshit-trainer.webp"
                        alt="akarsh-srivastava"
                        layout="fill"
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Parikshit.webp"
                        alt="akarsh-srivastava"
                        layout="intrinsic"
                        objectFit="contain"
                        width={262}
                        height={257}
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className={style.transition}>
                    <h5>Parikshit Sohoni</h5>
                    <p>Co-founder @</p>
                    <Image
                      src={
                        mobile
                          ? "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Glovatrix-icon.webp"
                          : "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Glovatrix-icon-big.webp"
                      }
                      width={mobile ? 99 : 80}
                      height={mobile ? 20 : 21}
                      alt="trueblue"
                      layout="intrinsic"
                      objectFit="contain"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide className={style.ReviewBox}>
                  <div className={style.profile}>
                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/ajay-kumar-gupta.webp"
                      alt="Ajay Kumar Gupta"
                      layout="intrinsic"
                      objectFit="contain"
                      width={262}
                      height={257}
                      loading="lazy"
                    />
                  </div>
                  <div className={style.transition}>
                    <h5>Ajay Kumar Gupta</h5>
                    <p>R&D Engineer and Data Scientist</p>
                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/synopsis-logo.webp"
                      width={80}
                      height={21}
                      alt="trueblue"
                      layout="intrinsic"
                      objectFit="contain"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              </>
            )}
          </Swiper>
        </div>
        <div className={style.button}>
          <button onClick={popupShow}>
            <BsDownload className={style.icon} />
            More Trainer Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainerSlider;
