import React, { useState, useEffect } from "react";
import styles from "./Fee.module.css";
import Image from "next/image";
import { MdCheckCircle } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Fee = ({
  changeFee,
  desc,
  desc1,
  BasicPrice,
  BasicDesc,
  ProPrice,
  ProDesc,
  ProMaxPrice,
  ProMaxDesc,
  dataScience,
  redirectDs,
  redirectFs,
  redirectDe,
  redirectBa,
  redirectBl,
}) => {
  const [popups, setPopups] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [spaceBetween, setSpaceBetween] = useState(20);

  const popupShow = () => {
    setPopups(true);
  };
  useEffect(() => {
    let width = window.innerWidth;

    if (width < 801) {
      setSlidesPerView(7);
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
    <div className={styles.FeeS}>
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
          />
        </div>
      </Popup>

      {changeFee ? (
        <>
          <div className={styles.fourthS}>
            {/* <p className="pTop"> Finance</p> */}
            <h4>Program Fees</h4>
            <div className={styles.feeWrapperTop}>
              <p className="pBotS">{desc}</p>

              <h6>Payment Partners</h6>
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
                          width={mobile ? "90" : "200"}
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
          <div className={styles.priceTableData}>
            <div className={styles.fourth}>
              <p className="pTop"> Finance</p>
              <h4>Program Fees & Financing</h4>
              <div className={styles.feeWrapperTop}>
                <span>
                  <p className="pBotS">{desc}</p>

                  <h5>Payment Partners</h5>
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
                              width={mobile ? "90" : "200"}
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
                </span>
                <span></span>
              </div>
            </div>
            <div className={styles.first}>
              <span className={styles.Price}>Program Features</span>

              <span className={styles.PFeatures}>Job Assistance</span>
              <hr className={styles.priceLine} />
              <span className={styles.PFeatures}>Live Class Subscription</span>
              <hr className={styles.priceLine} />
              <span className={styles.PFeatures}>LMS Subscription</span>
              <hr className={styles.priceLine} />
              <span className={styles.PFeatures}>Job Referrals</span>
              <hr className={styles.priceLine} />
              <span className={styles.PFeatures}>Industry Projects</span>
              <hr className={styles.priceLine} />
              <span className={styles.PFeatures}>Capstone Projects</span>
              <hr className={styles.priceLine} />
              <span className={styles.PFeatures}>Domain Training</span>
              <hr className={styles.priceLine} />
              <span className={styles.PFeatures}>
                Project Certification from Companies
              </span>

              {dataScience || redirectDs ? (
                <>
                  <hr className={styles.priceLine} />
                  <span className={styles.PFeatures}>Adv AI + DSA</span>
                </>
              ) : (
                ""
              )}
              {redirectBa ? (
                <>
                  <hr className={styles.priceLine} />
                  <span className={styles.PFeatures}>Project Management</span>
                </>
              ) : (
                ""
              )}

              <span className={styles.PFeatures}>
                <FiArrowRight className={styles.Arrow} />
              </span>
            </div>
            <div className={styles.fourth}>
              <div className={styles.firstDivInn}>
                <span className={styles.sub}>
                  {dataScience || redirectDs || redirectBa ? "Pro" : "Basic"}
                </span>
                <span className={styles.Price}>{BasicPrice}</span>
                <span className={styles.desc}>{BasicDesc}</span>
                <span className={styles.PFeatures}>
                  <AiOutlineCloseCircle className={styles.cross} />
                </span>
                <hr className={styles.priceLine} />
                <span className={styles.PFeatures}>1 Year</span>
                <hr className={styles.priceLine} />
                <span className={styles.PFeatures}>2 Year</span>
                <hr className={styles.priceLine} />
                <span className={styles.PFeatures}>
                  <AiOutlineCloseCircle className={styles.cross} />
                </span>
                <hr className={styles.priceLine} />
                <span className={styles.PFeatures}>7+</span>
                <hr className={styles.priceLine} />
                <span className={styles.PFeatures}>1</span>
                <hr className={styles.priceLine} />
                <span className={styles.PFeatures}>
                  <AiOutlineCloseCircle className={styles.cross} />
                </span>
                <hr className={styles.priceLine} />
                <span className={styles.PFeatures}>
                  <AiOutlineCloseCircle className={styles.cross} />
                </span>
                <hr className={styles.priceLine} />

                {dataScience || redirectDs || redirectBa ? (
                  <>
                    <hr className={styles.priceLine} />
                    <span className={styles.PFeatures}>
                      <AiOutlineCloseCircle className={styles.cross} />
                    </span>
                  </>
                ) : (
                  ""
                )}
              </div>

              <span className={styles.PFeatures}>
                <button className={styles.button} onClick={popupShow}>
                  Enrol Now
                </button>
              </span>
            </div>
            <div className={styles.fourth}>
              <span className={styles.sub}>
                {dataScience || redirectDs || redirectBa ? "Pro Max" : "Pro"}
              </span>
              <span className={styles.Price}>{ProPrice}</span>
              <span className={styles.desc}>{ProDesc}</span>
              <span className={styles.PFeatures}>
                <MdCheckCircle className={styles.check} />
              </span>
              <hr className={styles.priceLine} />
              <span className={styles.PFeatures}>4 Year</span>
              <hr className={styles.priceLine} />
              <span className={styles.PFeatures}>Lifetime</span>
              <hr className={styles.priceLine} />
              <span className={styles.PFeatures}>Unlimited</span>
              <hr className={styles.priceLine} />
              <span className={styles.PFeatures}>15+</span>
              <hr className={styles.priceLine} />
              <span className={styles.PFeatures}>3</span>
              <hr className={styles.priceLine} />
              <span className={styles.PFeatures}>2</span>
              <hr className={styles.priceLine} />
              <span className={styles.PFeatures}>6 Months</span>
              <hr className={styles.priceLine} />
              {dataScience || redirectDs || redirectBa ? (
                <>
                  <hr className={styles.priceLine} />
                  <span className={styles.PFeatures}>
                    <MdCheckCircle className={styles.check} />
                  </span>
                </>
              ) : (
                ""
              )}
              <span className={styles.PFeatures}>
                <button className={styles.button} onClick={popupShow}>
                  Enrol Now
                </button>
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.fourthS}>
            {/* <p className="pTop"> Finance</p> */}
            <h4>Program Fees</h4>
            <div className={styles.feeWrapperTop}>
              <p className="pBotS">{desc}</p>

              <h6>Payment Partners</h6>
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
                          width={mobile ? "90" : "200"}
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
          <div className={styles.priceTableData}>
            <div className={styles.fourth1}>
              {/* <p className="pTop"> Finance</p> */}
              <h4>Program Fees</h4>
              <div className={styles.feeWrapperTop}>
                <p className="pBotS">{desc}</p>

                <h6>Payment Partners</h6>
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
                            width={mobile ? "90" : "200"}
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
            <div className={styles.first}>
              <span className={styles.Price}>Program Features</span>
              <span className={styles.PFeatures}>Job Assistance</span>
              <hr className={styles.priceLine} />
              <span className={styles.PFeatures}>Live Class Subscription</span>
              <hr className={styles.priceLine} />
              <span className={styles.PFeatures}>LMS Subscription</span>
              <hr className={styles.priceLine} />
              <span className={styles.PFeatures}>Job Referrals</span>
              <hr className={styles.priceLine} />
              <span className={styles.PFeatures}>Industry Projects</span>
              <hr className={styles.priceLine} />

              <span className={styles.PFeatures}>Domain Training</span>
              <hr className={styles.priceLine} />
              <span className={styles.PFeatures}>Project Certification</span>

              <span className={styles.PFeatures}>
                <FiArrowRight className={styles.Arrow} />
              </span>
            </div>

            <div className={styles.fourth}>
              <span className={styles.sub}>Pro</span>
              <span className={styles.Price}>₹ 95,000 + GST</span>
              <span className={styles.desc}>
                Get Full Stack Software Development with real work Experience
              </span>
              <span className={styles.PFeatures}>
                <MdCheckCircle className={styles.check} />
              </span>
              <span className={styles.PFeatures}>3 Year</span>
              <span className={styles.PFeatures}>Lifetime</span>
              <span className={styles.PFeatures}>5+</span>
              <span className={styles.PFeatures}>4+</span>

              <span className={styles.PFeatures}>
                <MdCheckCircle className={styles.check} />
              </span>
              <span className={styles.PFeatures}>
                <MdCheckCircle className={styles.check} />
              </span>

              <span className={styles.PFeatures}>
                <button className={styles.button} onClick={popupShow}>
                  Enrol Now
                </button>
              </span>
            </div>
            <div className={styles.fourth}>
              <span className={styles.sub}>Pro Max</span>
              <span className={styles.Price}>₹ 1,35,000 + GST</span>
              <span className={styles.desc}>
                Get Full Stack Software Development with Guaranteed job referral
              </span>
              <span className={styles.PFeatures}>
                <MdCheckCircle className={styles.check} />
              </span>
              <span className={styles.PFeatures}>3 Year</span>
              <span className={styles.PFeatures}>Lifetime</span>
              <span className={styles.PFeatures}>Unlimited</span>
              <span className={styles.PFeatures}>6+</span>

              <span className={styles.PFeatures}>
                <MdCheckCircle className={styles.check} />
              </span>
              <span className={styles.PFeatures}>
                <MdCheckCircle className={styles.check} />
              </span>

              <span className={styles.PFeatures}>
                <button className={styles.button} onClick={popupShow}>
                  Enrol Now
                </button>
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Fee;
