import React from "react";
import { FiSearch } from "react-icons/fi";
import { MdWork } from "react-icons/md";
import styles from "./Project.module.css";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const ProjectSlider = () => {
  return (
    <div className={styles.projectWrap}>
      <div className={styles.projectHeader}>
        <div className={styles.leftWrap}>
          <p>Industry – partnered capstone projects</p>
          <h4>Hands-on Projects</h4>
        </div>
        <div className={styles.rightWrap}>
          <div className={styles.iconBox}>
            <div className={styles.left}>
              <MdWork className={styles.headIcon} />
            </div>
            <div className={styles.right}>
              <p>
                10+<span>Projects</span>
              </p>
            </div>
          </div>
          <div className={styles.iconBox}>
            <div className={styles.left}>
              <FiSearch className={styles.headIcon} />
            </div>
            <div className={styles.right}>
              <p>
                6+<span>Domains</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sliderWrap}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1.6}
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
          <SwiperSlide className={styles.ReviewBox}>
            <h5>E-commer</h5>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectSlider;
