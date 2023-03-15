import React from "react";
import Image from "next/image";
import styles from "./Project.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { SiApachehadoop } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { SiMicrosoftexcel } from "react-icons/si";
import { AiOutlineRobot } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaUniversity } from "react-icons/fa";

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
              <h5>Predict credit default</h5>
              <FaUniversity />
            </div>
            <div className={styles.desc}>
              <p>
                {" "}
                Develop a prediction model for identifying probable credit
                default for a retail bank. The bank has a huge dataset of credit
                card customers.
              </p>
            </div>
            <p className={styles.tools}>
              Tools:
              <FaReact className={styles.react} />
              <SiMongodb className={styles.mongo} />
              <SiMicrosoftexcel className={styles.database} />
              <AiOutlineRobot className={styles.node} />
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.ReviewBox}>
            <div className={styles.header}>
              <h5>Google Mobility data</h5>
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
                Identification of COVID-19 surge in cases based on mobility
                within the country.The goal is to study the pattern of COVID-19
                cases in different regions in India.
              </p>
            </div>
            <p className={styles.tools}>
              Tools:
              <FaReact className={styles.react} />
              <SiMongodb className={styles.mongo} />
              <SiMicrosoftexcel className={styles.database} />
              <AiOutlineRobot className={styles.node} />
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.ReviewBox}>
            <div className={styles.header}>
              <h5>Uber - fare prediction</h5>
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
                Predicting fare price based on demand and supply, weather and
                other factors.You will have to analyse the data of the ride
                sharing applications to identify the factors that are driving
                the demand.
              </p>
            </div>
            <p className={styles.tools}>
              Tools:
              <FaReact className={styles.react} />
              <SiMongodb className={styles.mongo} />
              <SiMicrosoftexcel className={styles.database} />
              <AiOutlineRobot className={styles.node} />
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.ReviewBox}>
            <div className={styles.header}>
              <h5>Telecom customer prediction</h5>
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
                The telecom company wants to predict the customer’s behaviour to
                predict and retain the customer before churning off. You will
                have to predict the group of people who are highly probable of
                churning off.
              </p>
            </div>
            <p className={styles.tools}>
              Tools:
              <FaReact className={styles.react} />
              <SiMongodb className={styles.mongo} />
              <SiMicrosoftexcel className={styles.database} />
              <AiOutlineRobot className={styles.node} />
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.ReviewBox}>
            <div className={styles.header}>
              <h5>Amazon Food Reviews </h5>
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
                Classify food reviews based on customer feedback. You will
                perform sentiment analysis on each product on the list. Here you
                will use NLP to identify the sentiment of customers.
              </p>
            </div>
            <p className={styles.tools}>
              Tools:
              <FaReact className={styles.react} />
              <SiMongodb className={styles.mongo} />
              <SiMicrosoftexcel className={styles.database} />
              <AiOutlineRobot className={styles.node} />
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.ReviewBox}>
            <div className={styles.header}>
              <h5>Olist store – Marketing Funnel </h5>
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
                Predict the deals that will be closed.The list generates data
                from lead generation to the closure of the lead as a customer.
              </p>
            </div>
            <p className={styles.tools}>
              Tools:
              <FaReact className={styles.react} />
              <SiMongodb className={styles.mongo} />
              <SiMicrosoftexcel className={styles.database} />
              <AiOutlineRobot className={styles.node} />
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.ReviewBox}>
            <div className={styles.header}>
              <h5>Predict heart failure</h5>
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
                Cardiovascular diseases (CVDs) are the number 1 cause of death
                globally and heart failure is the most common event caused. So
                here have to create a model that could predict heart failure
                before its occurrence that could help the society.
              </p>
            </div>
            <p className={styles.tools}>
              Tools:
              <FaReact className={styles.react} />
              <SiMongodb className={styles.mongo} />
              <SiMicrosoftexcel className={styles.database} />
              <AiOutlineRobot className={styles.node} />
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.ReviewBox}>
            <div className={styles.header}>
              <h5>YouTube trending video analytics</h5>
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
                Video analytics is a daily record of data on videos trending on
                YouTube. You are required to analyze the data to predict the
                sentiment of the videos, study the comments by categorizing the
                videos and analyze the factors that affect the popularity of the
                video.
              </p>
            </div>
            <p className={styles.tools}>
              Tools:
              <FaReact className={styles.react} />
              <SiMongodb className={styles.mongo} />
              <SiMicrosoftexcel className={styles.database} />
              <AiOutlineRobot className={styles.node} />
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.ReviewBox}>
            <div className={styles.header}>
              <h5>Vehicle type recognition from image</h5>
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
                Determine the vehicle type. You are going to train a model with
                training data such that it predicts a new image of the vehicle
                accurately.
              </p>
            </div>
            <p className={styles.tools}>
              Tools:
              <FaReact className={styles.react} />
              <SiMongodb className={styles.mongo} />
              <SiMicrosoftexcel className={styles.database} />
              <AiOutlineRobot className={styles.node} />
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.ReviewBox}>
            <div className={styles.header}>
              <h5>Machine Translation</h5>
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
                Perform text translation, text parsing and summary of the books.
                This dataset can be used for tasks like Machine Translation,
                Text Generation, Text Parsing and Sematic Understanding of
                Natural Language.
              </p>
            </div>
            <p className={styles.tools}>
              Tools:
              <FaReact className={styles.react} />
              <SiMongodb className={styles.mongo} />
              <SiMicrosoftexcel className={styles.database} />
              <AiOutlineRobot className={styles.node} />
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectSlider;
