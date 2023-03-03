import React, { useEffect, useState } from "react";

import styles from "./Reviews.module.css";
import { MdPlayCircleFilled } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

import { AiFillCheckCircle } from "react-icons/ai";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import Image from "next/image";
import VideoPopup from "../VideoPopup/VideoPopup";

const Reviews = ({
  title,
  desc,
  redirectDs,
  redirectFs,
  redirectDe,
  redirectBa,
  redirectBl,
  redirectDSA,
  dataScience,
  home,
  redirectWeb,
  event,
}) => {
  const [hover, setHover] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [spaceBetween, setSpaceBetween] = useState(60);
  const [slidePerView, setSlidePerView] = useState(3);
  const [readMore, setReadMore] = useState([
    {
      open: false,
    },
    {
      open: false,
    },
    {
      open: false,
    },
    {
      open: false,
    },
    {
      open: false,
    },
    {
      open: false,
    },
    {
      open: false,
    },
  ]);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
    if (width < 1281) {
      setSpaceBetween(20);
      setSlidePerView(2);
    }
    if (width > 1281) {
      setSpaceBetween(30);
    }
    if (event) {
      setSlidePerView(3);
      setSpaceBetween(30);
    }
    if (event === false) {
      setSlidePerView(2);
      setSpaceBetween(30);
    }
  }, [mobile]);
  const [video, setVideo] = useState(false);
  const videoSHow = () => {
    setVideo(true);
  };
  const handel = (id) => {
    console.log(id, "reviews");
    setReadMore(
      readMore.map((faq, i) => {
        if (i === id) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <>
      <div className={styles.ReviewSlider}>
        <p className="pTop">What Our Learners Think</p>
        <h4>Student Reviews</h4>
        <Swiper
          slidesPerView={mobile ? 1 : slidePerView}
          spaceBetween={mobile ? 10 : spaceBetween}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          style={{ paddingBottom: "20px" }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <>
            {dataScience ? (
              <>
                <SwiperSlide className={styles.ReviewBox}>
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Pragyan_Prakash.webp"
                        width="80"
                        height="80"
                        alt="Pragyan_prakash_review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Pragyan Prakash</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>

                    <p>
                      Thanks a ton Skillslash Family. As a part of the Full
                      stack course in Data Science i had a great learning
                      experience.
                      {readMore[0].open ? (
                        <span>
                          I was able to successfully move into a data science
                          role in 7 months , which was amazing.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(0)}
                        className={styles.readMore}
                      >
                        {readMore[0].open ? "ReadLess" : "ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide key="1" id="1" className={styles.ReviewBox1}>
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Mirnal_sahay_review.webp"
                        width="80"
                        height="80"
                        alt="Mirnal_sahay_review"
                        loading="lazy"
                        layout="intrinsic"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Mrinal Sahay</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>
                    <p>
                      One of the best course providers is Skillslash, their data
                      science course has helped me become the data
                      {readMore[1].open ? (
                        <span>
                          scientist I am today. There are tons of differences
                          between studying data science and working as a data
                          scientist.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(1)}
                        className={styles.readMore}
                      >
                        {readMore[1].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox2} key="2" id="2">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Gautum_skillslash_review.webp"
                        width="80"
                        height="80"
                        alt="Gautum_Skillslash_review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Gautam</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>

                    <p>
                      One of the best platform for working professionals.
                      Although a new startup but training quality scientist I
                      {readMore[2].open ? (
                        <span>
                          am today. There are tons of differences between
                          studying data science and working as a data scientist.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(2)}
                        className={styles.readMore}
                      >
                        {readMore[2].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox1} key="3" id="3">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/sameer-ahemed-skillslash-review.webp"
                        width="80"
                        height="80"
                        alt="Sameer-ahemed_review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Sammer Ahmed</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>

                    <p>
                      Skillslash is truly one of the best institutes to study
                      machine learning, I thank my brother for suggesting me
                      {readMore[3].open ? (
                        <span>
                          this course. The course has amazing perks for working
                          professionals like live classes, faculty of industry
                          professionals
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(3)}
                        className={styles.readMore}
                      >
                        {readMore[3].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox2} key="4" id="4">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Tilak-rao-skillslash-review.webp"
                        width="80"
                        height="80"
                        alt="Tilak_rao_review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Tilak Rao</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>

                    <p>
                      AI and ML full stack program is too good and helpful for
                      working professionals, I have done BCA so I was
                      {readMore[4].open ? (
                        <span>
                          well versed in Java, C, basic SQL and C++. At
                          Skillslash I learnt Python, core SQL, R, math - stats,
                          ML and More.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(4)}
                        className={styles.readMore}
                      >
                        {readMore[4].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
              </>
            ) : (
              ""
            )}
            {redirectDs ? (
              <>
                <SwiperSlide className={styles.ReviewBox}>
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Pragyan_Prakash.webp"
                        width="80"
                        height="80"
                        alt="Pragyan_prakash_review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Pragyan Prakash</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>

                    <p>
                      Thanks a ton Skillslash Family. As a part of the Full
                      stack course in Data Science i had a great learning
                      experience.
                      {readMore[0].open ? (
                        <span>
                          I was able to successfully move into a data science
                          role in 7 months , which was amazing.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(0)}
                        className={styles.readMore}
                      >
                        {readMore[0].open ? "ReadLess" : "ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide key="1" id="1" className={styles.ReviewBox1}>
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Mirnal_sahay_review.webp"
                        width="80"
                        height="80"
                        alt="Mirnal_sahay_review"
                        loading="lazy"
                        layout="intrinsic"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Mrinal Sahay</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>
                    <p>
                      One of the best course providers is Skillslash, their data
                      science course has helped me become the data
                      {readMore[1].open ? (
                        <span>
                          scientist I am today. There are tons of differences
                          between studying data science and working as a data
                          scientist.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(1)}
                        className={styles.readMore}
                      >
                        {readMore[1].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox2} key="2" id="2">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Gautum_skillslash_review.webp"
                        width="80"
                        height="80"
                        alt="Gautum_Skillslash_review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Gautam</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>

                    <p>
                      One of the best platform for working professionals.
                      Although a new startup but training quality scientist I am
                      today.
                      {readMore[2].open ? (
                        <span>
                          There are tons of differences between studying data
                          science and working as a data scientist.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(2)}
                        className={styles.readMore}
                      >
                        {readMore[2].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox1} key="3" id="3">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/sameer-ahemed-skillslash-review.webp"
                        width="80"
                        height="80"
                        alt="Sameer-ahemed_review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Sammer Ahmed</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>

                    <p>
                      Skillslash is truly one of the best institutes to study
                      machine learning, I thank my brother for suggesting me
                      {readMore[3].open ? (
                        <span>
                          this course. The course has amazing perks for working
                          professionals like live classes, faculty of industry
                          professionals
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(3)}
                        className={styles.readMore}
                      >
                        {readMore[3].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox2} key="4" id="4">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Tilak-rao-skillslash-review.webp"
                        width="80"
                        height="80"
                        alt="Tilak_rao_review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Tilak Rao</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>

                    <p>
                      AI and ML full stack program is too good and helpful for
                      working professionals, I have done BCA so I was
                      {readMore[4].open ? (
                        <span>
                          well versed in Java, C, basic SQL and C++. At
                          Skillslash I learnt Python, core SQL, R, math - stats,
                          ML and More.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(4)}
                        className={styles.readMore}
                      >
                        {readMore[4].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
              </>
            ) : (
              ""
            )}
            {redirectFs || redirectDSA ? (
              <>
                <SwiperSlide className={styles.ReviewBox} key="5" id="5">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/PANKAJ_CHOWDHURY.webp"
                        layout="intrinsic"
                        width="80"
                        height="80"
                        alt="PANKAJ_CHOWDHURY"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Pankaj Chowdhury</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>
                    <p>
                      The trainers at Skillslash are quite amazing. The teaching
                      style was simple yet effective. I was able to get into my
                      dream company IBM within 7 months{" "}
                      {readMore[0].open ? (
                        <span>
                          of joining the full stack program. The best part in
                          the program was when they assigned an IBM mentor to
                          help me crack my interview which really gave my
                          preparation a solid boost.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(0)}
                        className={styles.readMore}
                      >
                        {readMore[0].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox1} key="4" id="4">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Manisha_singh.webp"
                        layout="intrinsic"
                        width="80"
                        height="80"
                        alt="Manisha_singh"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Manisha singh</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>
                    <p>
                      I wanted to brush up my full stack skills when I joined
                      Skillslash program. I had been in a software role and this
                      course helped me improve my
                      {readMore[1].open ? (
                        <span>
                          weak areas significantly. Mentors were amazing and the
                          interview prep module really helped me become more
                          confident in interviews. Got multiple offers in a
                          period of 3 months, thanks to Skillslash.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(1)}
                        className={styles.readMore}
                      >
                        {readMore[1].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox2} key="13" id="13">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Muralikrishna_Alichetty.webp"
                        layout="intrinsic"
                        width="80"
                        height="80"
                        alt="Muralikrishna_Alichetty"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Muralikrishna Alichetty</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>
                    <p>
                      The reason I joined Skillslash was because of the Data
                      engineering and Cloud specialisation. The course was quite
                      helpful as I was able to
                      {readMore[2].open ? (
                        <span>
                          get a Senior DBA role at the end of the program.
                          Interview preparation module was also very helpful as
                          I was able to build a strong portfolio as a result of
                          this.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(2)}
                        className={styles.readMore}
                      >
                        {readMore[2].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox} key="7" id="7">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/GIRISH_BALLAMPALLI.webp"
                        layout="intrinsic"
                        width="80"
                        height="80"
                        alt="GIRISH_BALLAMPALLI"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>GIRISH BALLAMPALLI</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>
                    <p>
                      I think Dhaval has clear understanding of whatever he
                      teach, wheher it is Data Structures, Algorithms, Dynamic
                      Programming, he explains
                      {readMore[3].open ? (
                        <span>
                          with such ease that even hard problem seems easy. Hats
                          off to his teaching and Dhaval keep on motivating and
                          helping othersh really gave my preparation a solid
                          boost.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(3)}
                        className={styles.readMore}
                      >
                        {readMore[3].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox1} key="8" id="8">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Anukalp_Desai.webp"
                        layout="intrinsic"
                        width="80"
                        height="80"
                        alt="Anukalp_Desai"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Anukalp Desai</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>
                    <p>
                      I have taken data structures and algorithms course taught
                      by Dhaval, he is very accessible and does
                      {readMore[4].open ? (
                        <span>
                          an amazing job at making difficult concepts easily
                          understandable.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(4)}
                        className={styles.readMore}
                      >
                        {readMore[4].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox2} key="9" id="9">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Anurag_Sinha.webp"
                        layout="intrinsic"
                        width="80"
                        height="80"
                        alt="Anurag_Sinha"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5> Anurag Sinha</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>
                    <p>
                      Dhawal Sir is a really great mentor. He helped me identify
                      my weak areas and work on it consistently. He was always
                      supportive and his style
                      {readMore[5].open ? (
                        <span>
                          of teaching kept hinged to my goals. I was able to
                          crack a senior software role as a result of that and I
                          will always be thankful for all his support and
                          guidance.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(5)}
                        className={styles.readMore}
                      >
                        {readMore[5].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox} key="10" id="10">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Ankur_Singh.webp"
                        layout="intrinsic"
                        width="80"
                        height="80"
                        alt="Ankur_Singh"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Ankur Singh</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>
                    <p>
                      The course structure was really good and covered most of
                      the topics like Linked list, trees , graphs, recursion,
                      dynamic programming etc. Dhaval Sir did
                      {readMore[6].open ? (
                        <span>
                          a great job taking each topic to a great clarity
                          level. Rather than remembering the solution to the
                          problem, he taught me how to approach problem and
                          solve it.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(6)}
                        className={styles.readMore}
                      >
                        {readMore[6].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
              </>
            ) : (
              ""
            )}
            {home ? (
              <>
                <SwiperSlide className={styles.ReviewBox}>
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Pragyan_Prakash.webp"
                        width="80"
                        height="80"
                        alt="Pragyan_prakash_review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Pragyan Prakash</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>

                    <p>
                      Thanks a ton Skillslash Family. As a part of the Full
                      stack course in Data Science i had a great learning
                      experience.
                      {readMore[0].open ? (
                        <span>
                          I was able to successfully move into a data science
                          role in 7 months , which was amazing.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(0)}
                        className={styles.readMore}
                      >
                        {readMore[0].open ? "ReadLess" : "ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide key="1" id="1" className={styles.ReviewBox1}>
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Mirnal_sahay_review.webp"
                        width="80"
                        height="80"
                        alt="Mirnal_sahay_review"
                        loading="lazy"
                        layout="intrinsic"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Mrinal Sahay</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>
                    <p>
                      One of the best course providers is Skillslash, their data
                      science course has helped me become the data
                      {readMore[1].open ? (
                        <span>
                          scientist I am today. There are tons of differences
                          between studying data science and working as a data
                          scientist.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(1)}
                        className={styles.readMore}
                      >
                        {readMore[1].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox2} key="2" id="2">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Gautum_skillslash_review.webp"
                        width="80"
                        height="80"
                        alt="Gautum_Skillslash_review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Gautam</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>

                    <p>
                      One of the best platform for working professionals.
                      Although a new startup but training quality scientist I
                      {readMore[2].open ? (
                        <span>
                          am today. There are tons of differences between
                          studying data science and working as a data scientist.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(2)}
                        className={styles.readMore}
                      >
                        {readMore[2].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox1} key="3" id="3">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/sameer-ahemed-skillslash-review.webp"
                        width="80"
                        height="80"
                        alt="Sameer-ahemed_review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Sammer Ahmed</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>

                    <p>
                      Skillslash is truly one of the best institutes to study
                      machine learning, I thank my brother for suggesting me
                      {readMore[3].open ? (
                        <span>
                          this course. The course has amazing perks for working
                          professionals like live classes, faculty of industry
                          professionals
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(3)}
                        className={styles.readMore}
                      >
                        {readMore[3].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox2} key="4" id="4">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Tilak-rao-skillslash-review.webp"
                        width="80"
                        height="80"
                        alt="Tilak_rao_review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Tilak Rao</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>

                    <p>
                      AI and ML full stack program is too good and helpful for
                      working professionals, I have done BCA so I was
                      {readMore[4].open ? (
                        <span>
                          well versed in Java, C, basic SQL and C++. At
                          Skillslash I learnt Python, core SQL, R, math - stats,
                          ML and More.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(4)}
                        className={styles.readMore}
                      >
                        {readMore[4].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox} key="5" id="5">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/PANKAJ_CHOWDHURY.webp"
                        layout="intrinsic"
                        width="80"
                        height="80"
                        alt="PANKAJ_CHOWDHURY"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Pankaj Chowdhury</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>
                    <p>
                      The trainers at Skillslash are quite amazing. The teaching
                      style was simple yet effective. I was able to get into my
                      dream company IBM within 7 months{" "}
                      {readMore[0].open ? (
                        <span>
                          of joining the full stack program. The best part in
                          the program was when they assigned an IBM mentor to
                          help me crack my interview which really gave my
                          preparation a solid boost.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(0)}
                        className={styles.readMore}
                      >
                        {readMore[0].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox1} key="4" id="4">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Manisha_singh.webp"
                        layout="intrinsic"
                        width="80"
                        height="80"
                        alt="Manisha_singh"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Manisha singh</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>
                    <p>
                      I wanted to brush up my full stack skills when I joined
                      Skillslash program. I had been in a software role and this
                      course helped me improve my
                      {readMore[1].open ? (
                        <span>
                          weak areas significantly. Mentors were amazing and the
                          interview prep module really helped me become more
                          confident in interviews. Got multiple offers in a
                          period of 3 months, thanks to Skillslash.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(1)}
                        className={styles.readMore}
                      >
                        {readMore[1].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox2} key="13" id="13">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Muralikrishna_Alichetty.webp"
                        layout="intrinsic"
                        width="80"
                        height="80"
                        alt="Muralikrishna_Alichetty"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Muralikrishna Alichetty</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>
                    <p>
                      The reason I joined Skillslash was because of the Data
                      engineering and Cloud specialisation. The course was quite
                      helpful as I was able to
                      {readMore[2].open ? (
                        <span>
                          get a Senior DBA role at the end of the program.
                          Interview preparation module was also very helpful as
                          I was able to build a strong portfolio as a result of
                          this.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(2)}
                        className={styles.readMore}
                      >
                        {readMore[2].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox} key="7" id="7">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/GIRISH_BALLAMPALLI.webp"
                        layout="intrinsic"
                        width="80"
                        height="80"
                        alt="GIRISH_BALLAMPALLI"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>GIRISH BALLAMPALLI</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>
                    <p>
                      I think Dhaval has clear understanding of whatever he
                      teach, wheher it is Data Structures, Algorithms, Dynamic
                      Programming, he explains
                      {readMore[3].open ? (
                        <span>
                          with such ease that even hard problem seems easy. Hats
                          off to his teaching and Dhaval keep on motivating and
                          helping othersh really gave my preparation a solid
                          boost.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(3)}
                        className={styles.readMore}
                      >
                        {readMore[3].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox1} key="8" id="8">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Anukalp_Desai.webp"
                        layout="intrinsic"
                        width="80"
                        height="80"
                        alt="Anukalp_Desai"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Anukalp Desai</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>
                    <p>
                      I have taken data structures and algorithms course taught
                      by Dhaval, he is very accessible and does
                      {readMore[4].open ? (
                        <span>
                          an amazing job at making difficult concepts easily
                          understandable.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(4)}
                        className={styles.readMore}
                      >
                        {readMore[4].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox2} key="9" id="9">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Anurag_Sinha.webp"
                        layout="intrinsic"
                        width="80"
                        height="80"
                        alt="Anurag_Sinha"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5> Anurag Sinha</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>
                    <p>
                      Dhawal Sir is a really great mentor. He helped me identify
                      my weak areas and work on it consistently. He was always
                      supportive and his style
                      {readMore[5].open ? (
                        <span>
                          of teaching kept hinged to my goals. I was able to
                          crack a senior software role as a result of that and I
                          will always be thankful for all his support and
                          guidance.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(5)}
                        className={styles.readMore}
                      >
                        {readMore[5].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox} key="10" id="10">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Ankur_Singh.webp"
                        layout="intrinsic"
                        width="80"
                        height="80"
                        alt="Ankur_Singh"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Ankur Singh</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>
                    <p>
                      The course structure was really good and covered most of
                      the topics like Linked list, trees , graphs, recursion,
                      dynamic programming etc. Dhaval Sir did
                      {readMore[6].open ? (
                        <span>
                          a great job taking each topic to a great clarity
                          level. Rather than remembering the solution to the
                          problem, he taught me how to approach problem and
                          solve it.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(6)}
                        className={styles.readMore}
                      >
                        {readMore[6].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
              </>
            ) : (
              ""
            )}
            {redirectBa ? (
              <>
                <SwiperSlide className={styles.ReviewBox}>
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Pragyan_Prakash.webp"
                        width="80"
                        height="80"
                        alt="Pragyan_prakash_review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Pragyan Prakash</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>

                    <p>
                      Thanks a ton Skillslash Family. As a part of the Full
                      stack course in Data Science i had a great learning
                      experience.
                      {readMore[0].open ? (
                        <span>
                          I was able to successfully move into a data science
                          role in 7 months , which was amazing.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(0)}
                        className={styles.readMore}
                      >
                        {readMore[0].open ? "ReadLess" : "ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide key="1" id="1" className={styles.ReviewBox1}>
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Mirnal_sahay_review.webp"
                        width="80"
                        height="80"
                        alt="Mirnal_sahay_review"
                        loading="lazy"
                        layout="intrinsic"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Mrinal Sahay</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>
                    <p>
                      One of the best course providers is Skillslash, their data
                      science course has helped me become the data
                      {readMore[1].open ? (
                        <span>
                          scientist I am today. There are tons of differences
                          between studying data science and working as a data
                          scientist.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(1)}
                        className={styles.readMore}
                      >
                        {readMore[1].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox2} key="2" id="2">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Gautum_skillslash_review.webp"
                        width="80"
                        height="80"
                        alt="Gautum_Skillslash_review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Gautam</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>

                    <p>
                      One of the best platform for working professionals.
                      Although a new startup but training quality scientist I
                      {readMore[2].open ? (
                        <span>
                          am today. There are tons of differences between
                          studying data science and working as a data scientist.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(2)}
                        className={styles.readMore}
                      >
                        {readMore[2].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox1} key="3" id="3">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/sameer-ahemed-skillslash-review.webp"
                        width="80"
                        height="80"
                        alt="Sameer-ahemed_review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Sammer Ahmed</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>

                    <p>
                      Skillslash is truly one of the best institutes to study
                      machine learning, I thank my brother for suggesting me
                      {readMore[3].open ? (
                        <span>
                          this course. The course has amazing perks for working
                          professionals like live classes, faculty of industry
                          professionals
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(3)}
                        className={styles.readMore}
                      >
                        {readMore[3].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox2} key="4" id="4">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Tilak-rao-skillslash-review.webp"
                        width="80"
                        height="80"
                        alt="Tilak_rao_review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Tilak Rao</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>

                    <p>
                      AI and ML full stack program is too good and helpful for
                      working professionals, I have done BCA so I was
                      {readMore[4].open ? (
                        <span>
                          well versed in Java, C, basic SQL and C++. At
                          Skillslash I learnt Python, core SQL, R, math - stats,
                          ML and More.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(4)}
                        className={styles.readMore}
                      >
                        {readMore[4].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
              </>
            ) : (
              ""
            )}
            {redirectDe ? (
              <>
                <SwiperSlide className={styles.ReviewBox}>
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Pragyan_Prakash.webp"
                        width="80"
                        height="80"
                        alt="Pragyan_prakash_review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Pragyan Prakash</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>

                    <p>
                      Thanks a ton Skillslash Family. As a part of the Full
                      stack course in Data Science i had a great learning
                      experience.
                      {readMore[0].open ? (
                        <span>
                          I was able to successfully move into a data science
                          role in 7 months , which was amazing.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(0)}
                        className={styles.readMore}
                      >
                        {readMore[0].open ? "ReadLess" : "ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide key="1" id="1" className={styles.ReviewBox1}>
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Mirnal_sahay_review.webp"
                        width="80"
                        height="80"
                        alt="Mirnal_sahay_review"
                        loading="lazy"
                        layout="intrinsic"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Mrinal Sahay</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>
                    <p>
                      One of the best course providers is Skillslash, their data
                      science course has helped me become the data
                      {readMore[1].open ? (
                        <span>
                          scientist I am today. There are tons of differences
                          between studying data science and working as a data
                          scientist.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(1)}
                        className={styles.readMore}
                      >
                        {readMore[1].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox2} key="2" id="2">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Gautum_skillslash_review.webp"
                        width="80"
                        height="80"
                        alt="Gautum_Skillslash_review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Gautam</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>

                    <p>
                      One of the best platform for working professionals.
                      Although a new startup but training quality scientist I
                      {readMore[2].open ? (
                        <span>
                          am today. There are tons of differences between
                          studying data science and working as a data scientist.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(2)}
                        className={styles.readMore}
                      >
                        {readMore[2].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox1} key="3" id="3">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/sameer-ahemed-skillslash-review.webp"
                        width="80"
                        height="80"
                        alt="Sameer-ahemed_review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Sammer Ahmed</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>

                    <p>
                      Skillslash is truly one of the best institutes to study
                      machine learning, I thank my brother for suggesting me
                      {readMore[3].open ? (
                        <span>
                          this course. The course has amazing perks for working
                          professionals like live classes, faculty of industry
                          professionals
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(3)}
                        className={styles.readMore}
                      >
                        {readMore[3].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox2} key="4" id="4">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Tilak-rao-skillslash-review.webp"
                        width="80"
                        height="80"
                        alt="Tilak_rao_review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Tilak Rao</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>

                    <p>
                      AI and ML full stack program is too good and helpful for
                      working professionals, I have done BCA so I was
                      {readMore[4].open ? (
                        <span>
                          well versed in Java, C, basic SQL and C++. At
                          Skillslash I learnt Python, core SQL, R, math - stats,
                          ML and More.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(4)}
                        className={styles.readMore}
                      >
                        {readMore[4].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
              </>
            ) : (
              ""
            )}
            {redirectBl ? (
              <>
                <SwiperSlide className={styles.ReviewBox}>
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Pragyan_Prakash.webp"
                        width="80"
                        height="80"
                        alt="Pragyan_prakash_review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Pragyan Prakash</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>

                    <p>
                      Thanks a ton Skillslash Family. As a part of the Full
                      stack course in Data Science i had a great learning
                      experience.
                      {readMore[0].open ? (
                        <span>
                          I was able to successfully move into a data science
                          role in 7 months , which was amazing.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(0)}
                        className={styles.readMore}
                      >
                        {readMore[0].open ? "ReadLess" : "ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide key="1" id="1" className={styles.ReviewBox1}>
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Mirnal_sahay_review.webp"
                        width="80"
                        height="80"
                        alt="Mirnal_sahay_review"
                        loading="lazy"
                        layout="intrinsic"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Mrinal Sahay</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>
                    <p>
                      One of the best course providers is Skillslash, their data
                      science course has helped me become the data
                      {readMore[1].open ? (
                        <span>
                          scientist I am today. There are tons of differences
                          between studying data science and working as a data
                          scientist.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(1)}
                        className={styles.readMore}
                      >
                        {readMore[1].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox2} key="2" id="2">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Gautum_skillslash_review.webp"
                        width="80"
                        height="80"
                        alt="Gautum_Skillslash_review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Gautam</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>

                    <p>
                      One of the best platform for working professionals.
                      Although a new startup but training quality scientist I
                      {readMore[2].open ? (
                        <span>
                          am today. There are tons of differences between
                          studying data science and working as a data scientist.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(2)}
                        className={styles.readMore}
                      >
                        {readMore[2].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox1} key="3" id="3">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/sameer-ahemed-skillslash-review.webp"
                        width="80"
                        height="80"
                        alt="Sameer-ahemed_review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Sammer Ahmed</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>

                    <p>
                      Skillslash is truly one of the best institutes to study
                      machine learning, I thank my brother for suggesting me
                      {readMore[3].open ? (
                        <span>
                          this course. The course has amazing perks for working
                          professionals like live classes, faculty of industry
                          professionals
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(3)}
                        className={styles.readMore}
                      >
                        {readMore[3].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox2} key="4" id="4">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Tilak-rao-skillslash-review.webp"
                        width="80"
                        height="80"
                        alt="Tilak_rao_review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Tilak Rao</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>

                    <p>
                      AI and ML full stack program is too good and helpful for
                      working professionals, I have done BCA so I was
                      {readMore[4].open ? (
                        <span>
                          well versed in Java, C, basic SQL and C++. At
                          Skillslash I learnt Python, core SQL, R, math - stats,
                          ML and More.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(4)}
                        className={styles.readMore}
                      >
                        {readMore[4].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
              </>
            ) : (
              ""
            )}
            {redirectWeb ? (
              <>
                <SwiperSlide className={styles.ReviewBox}>
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/satya agravarapu-web-development-review.png"
                        width="80"
                        height="80"
                        alt="satya_agravarapu_review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>satya agravarapu</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>

                    <p>
                      I have done a course in javascript / React. The quality of
                      content they provide was very good, mentor was very
                      polite, responsible and interesting to learn.
                      {readMore[0].open ? (
                        <span>
                          The example problems and their assignments were doing
                          good. I gained more knowledge aboubt react. I feel
                          it's worthy to spend my time for this course. I
                          recommend you to take courses in skill slash.
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(0)}
                        className={styles.readMore}
                      >
                        {readMore[0].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide key="1" id="1" className={styles.ReviewBox1}>
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/SHASHIKANT SAI-web-development-review.png"
                        width="80"
                        height="80"
                        alt="SHASHIKANT SAI-web-development-review"
                        loading="lazy"
                        layout="intrinsic"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Shashikant Sai</h5>

                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>
                    <p>
                      i have attended sessions on react js. The proctors are
                      very friendly and cheerful. They thought us amazing
                      knowledge about how to create components.
                      {readMore[1].open ? (
                        <span>
                          the session was good. They start from basic and it is
                          an perfect learning for freshers. Thank you Skillslash
                          Academy for this sessions..!
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(1)}
                        className={styles.readMore}
                      >
                        {readMore[1].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox2} key="2" id="2">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/spoorti-v-web-development-review.png"
                        width="80"
                        height="80"
                        alt="spoorti-v-web-development-review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>spoorti v</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>
                    <p>
                      I had attended React JS session The overall session was
                      awesome and was very useful for beginners.Expecting still
                      more sessions on latest technical language
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox} key="3" id="3">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Pravin-Kumar-web-development-review.png"
                        width="80"
                        height="80"
                        alt="Sameer-ahemed_review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Pravin Kumar</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>

                    <p>
                      Skillslash Provides Variety Of Bootcamps On Latest
                      Technology Which Helps Many Students And Work Professional
                      To Learn New Skills
                      {readMore[2].open ? (
                        <span>
                          And Improve Theire Knowledge. I Have Attend One Of
                          Thier Bootcamp On Reactjs And I Got To know About Some
                          New Concept Of Reactjs, It Was Really A Good
                          Experience
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        onClick={() => handel(2)}
                        className={styles.readMore}
                      >
                        {readMore[2].open ? " ReadLess" : " ReadMore"}
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.ReviewBox1} key="4" id="4">
                  <div className={styles.leftDiv}>
                    <div className={styles.profileWrapper}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Brijisha-Doshi-webdevelopment-review.png"
                        width="80"
                        height="80"
                        alt="Brijisha-Doshi-webdevelopment-review"
                        layout="intrinsic"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <h5>Brijisha Doshi</h5>
                    <div className={styles.careerWrap}>
                      <Image
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/pragyan-prakash-career.png"
                        width={434}
                        height={51}
                        alt="pragyan-prakash"
                      />
                    </div>

                    <p>
                      I have attended React.js course..It was amazing. All
                      concepts about React js were explained nicely. Thank you
                      Skillslash 😊
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className={styles.ReviewBox2}
                  onMouseEnter={() => {
                    setHover(true);
                  }}
                  onMouseLeave={() => {
                    setHover(false);
                  }}
                  key="4"
                  id="4"
                >
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Harshal-Chougule-web-development-review.png"
                    width="80"
                    height="80"
                    alt="Harshal-Chougule-web-development-review"
                    layout="intrinsic"
                    loading="lazy"
                  />
                  <h5>Harshal Chougule</h5>
                  <div className={styles.rating}>
                    <img
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Star_review_icon.webp"
                      width="80px"
                      height="20px"
                      alt="5 Star Rating"
                    />
                  </div>

                  <p>
                    I have attended 2 sessions of react js. The proctors are
                    very friendly and cheerful. They thought us amazing
                    knowledge about how to create components and use of data
                    structure. You should also join upcoming sessions of skill
                    slash for improving your skills.
                  </p>
                </SwiperSlide>
                <SwiperSlide
                  className={styles.ReviewBox2}
                  onMouseEnter={() => {
                    setHover(true);
                  }}
                  onMouseLeave={() => {
                    setHover(false);
                  }}
                  key="4"
                  id="4"
                >
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Merlin Thomas-web-development-review.png"
                    width="80"
                    height="80"
                    alt="Merlin Thomas-web-development-review"
                    layout="intrinsic"
                    loading="lazy"
                  />
                  <h5>Merlin Thomas</h5>
                  <div className={styles.rating}>
                    <img
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Star_review_icon.webp"
                      width="80px"
                      height="20px"
                      alt="5 Star Rating"
                    />
                  </div>

                  <p>
                    I have attended React js sessions and the session was good..
                    It was a great session by Skillslash Academy. The way of
                    teaching is very good. They start from basic and it is an
                    perfect learning for freshers. Thank you Skillslash Academy
                    for this sessions..!
                  </p>
                </SwiperSlide>
                <SwiperSlide
                  className={styles.ReviewBox2}
                  onMouseEnter={() => {
                    setHover(true);
                  }}
                  onMouseLeave={() => {
                    setHover(false);
                  }}
                  key="4"
                  id="4"
                >
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Prarthana-Thokal-web-development-review.png"
                    width="80"
                    height="80"
                    alt="Prarthana-Thokal-web-development-review"
                    layout="intrinsic"
                    loading="lazy"
                  />
                  <h5>Prarthana Thokal</h5>
                  <div className={styles.rating}>
                    <img
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Star_review_icon.webp"
                      width="80px"
                      height="20px"
                      alt="5 Star Rating"
                    />
                  </div>

                  <p>
                    I had attended sessions on SQL..All that sessions really
                    helped me to brush up my knowledge to very extent..Tutor
                    covered all the topics very well & also made the sessions
                    more interactive.. I feel so worthy to spend my time on this
                    sessions..
                  </p>
                </SwiperSlide>
              </>
            ) : (
              ""
            )}
          </>
        </Swiper>
      </div>
      {event ? (
        <div className={styles.ReviewTop}>
          <VideoPopup
            triggers={video}
            setTriggers={setVideo}
            ids="iT54dOHPQpU"
          />
          <div className={styles.ReviewLeft}>
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Reviews_of_Skillslash.webp"
              width="595"
              height="356"
              loading="lazy"
              layout="intrinsic"
            />
            <MdPlayCircleFilled className={styles.pIcon} onClick={videoSHow} />
          </div>
          <div className={styles.ReviewRight}>
            <p className="pTop">What Our Learners Think</p>
            <h4>{title}</h4>
            <p className="pBotS">{desc}</p>
            <div className={styles.points}>
              <div className={styles.leftPoints}>
                <p>
                  <AiFillCheckCircle className="bIcon" />
                  Get interactive training with 1:1 mentorship
                </p>
                <p>
                  <AiFillCheckCircle className="bIcon" />
                  Work in real-time projects and get exposure
                </p>
                <p>
                  <AiFillCheckCircle className="bIcon" />
                  Get assured job referrals and land in top firms
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Reviews;
