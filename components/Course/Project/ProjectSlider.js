import React from "react";
import Image from "next/image";
import styles from "./Project.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { DiNodejsSmall } from "react-icons/di";
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
              <p>10+</p>
            </div>
            <div className={styles.right}>
              <span>Projects</span>
            </div>
          </div>
          <div className={styles.iconBox}>
            <div className={styles.left}>
              <p>6+</p>
            </div>
            <div className={styles.right}>
              <span>Domains</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.line}>
        <div className={styles.left}>
          <p>
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/toolsProject.webp"
              layout="intrinsic"
              width={33}
              height={33}
              loading="lazy"
            />
            Practice with 20+ tools
          </p>
        </div>
        <div className={styles.middle}>
          <p>
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/industry-expert-project.webp"
              layout="intrinsic"
              width={39}
              height={39}
              loading="lazy"
            />
            Designed by Industry Experts
          </p>
        </div>
        <div className={styles.right}>
          <p>
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/chat-project.webp"
              layout="intrinsic"
              width={31}
              height={31}
              loading="lazy"
            />
            Get Real-world Experience
          </p>
        </div>
      </div>
      <div className={styles.sliderWrap}>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          loopFillGroupWithBlank={true}
          style={{ width: "100%" }}
          grabCursor={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className={styles.ReviewBox}>
            <div className={styles.header}>
              <h5>E-Commerce</h5>
              <Image
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/amazon-flipkart-ecommerce-project.webp"
                layout="intrinsic"
                width={200}
                height={34}
                loading="lazy"
              />
            </div>
            <div className={styles.desc}>
              <p>
                {" "}
                Create a dynamic and responsive environment.E-commerce web
                application using technologies such as Angular, Hibernate,
                MySQL, and Docker.
              </p>
            </div>
            <p className={styles.tools}>
              Tools:
              <FaReact className={styles.react} />
              <SiMongodb className={styles.mongo} />
              <FaDatabase className={styles.database} />
              <DiNodejsSmall className={styles.node} />
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.ReviewBox}>
            <div className={styles.header}>
              <h5>E-Commerce</h5>
              <Image
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/amazon-flipkart-ecommerce-project.webp"
                layout="intrinsic"
                width={200}
                height={34}
                loading="lazy"
              />
            </div>
            <div className={styles.desc}>
              <p>
                {" "}
                Create a dynamic and responsive environment.E-commerce web
                application using technologies such as Angular, Hibernate,
                MySQL, and Docker.
              </p>
            </div>
            <p className={styles.tools}>
              Tools:
              <FaReact className={styles.react} />
              <SiMongodb className={styles.mongo} />
              <FaDatabase className={styles.database} />
              <DiNodejsSmall className={styles.node} />
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.ReviewBox}>
            <div className={styles.header}>
              <h5>E-Commerce</h5>
              <Image
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/amazon-flipkart-ecommerce-project.webp"
                layout="intrinsic"
                width={200}
                height={34}
                loading="lazy"
              />
            </div>
            <div className={styles.desc}>
              <p>
                {" "}
                Create a dynamic and responsive environment.E-commerce web
                application using technologies such as Angular, Hibernate,
                MySQL, and Docker.
              </p>
            </div>
            <p className={styles.tools}>
              Tools:
              <FaReact className={styles.react} />
              <SiMongodb className={styles.mongo} />
              <FaDatabase className={styles.database} />
              <DiNodejsSmall className={styles.node} />
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.ReviewBox}>
            <div className={styles.header}>
              <h5>E-Commerce</h5>
              <Image
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/amazon-flipkart-ecommerce-project.webp"
                layout="intrinsic"
                width={200}
                height={34}
                loading="lazy"
              />
            </div>
            <div className={styles.desc}>
              <p>
                {" "}
                Create a dynamic and responsive environment.E-commerce web
                application using technologies such as Angular, Hibernate,
                MySQL, and Docker.
              </p>
            </div>
            <p className={styles.tools}>
              Tools:
              <FaReact className={styles.react} />
              <SiMongodb className={styles.mongo} />
              <FaDatabase className={styles.database} />
              <DiNodejsSmall className={styles.node} />
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectSlider;
