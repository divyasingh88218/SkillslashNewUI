import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Project.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { FaReact } from "react-icons/fa";
import {
  SiMongodb,
  SiApachehadoop,
  SiPowerbi,
  SiMicrosoftexcel,
} from "react-icons/si";
import { FaDatabase, FaUniversity } from "react-icons/fa";
import { DiNodejsSmall } from "react-icons/di";
import { AiOutlineRobot } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";

const ProjectSlider = ({
  redirectDs,
  redirectFs,
  redirectDe,
  redirectBa,
  redirectWd,
  redirectBl,
  redirectDSA,
}) => {
  const [mobile, setMobile] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(5);
  const [spaceBetween, setSpaceBetween] = useState(70);
  useEffect(() => {
    let width = window.innerWidth;

    if (width < 801) {
      setSlidesPerView(2);
      setSpaceBetween(20);
    }
    if (width < 481) {
      setSlidesPerView(1.1);
      setSpaceBetween(10);
      setMobile(true);
    }
  });
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
          spaceBetween={mobile ? 10 : spaceBetween}
          slidesPerView={mobile ? 1 : slidesPerView}
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
          {redirectWd ? (
            <>
              {" "}
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
                  <h5>Chatbot Application</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/slush-icon.webp"
                    layout="intrinsic"
                    width={200}
                    height={34}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    Chatbots are computer programmes that mimic spoken or
                    written language. So these mimic communication or contact
                    with a real person.
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
                  <h5>Show Booking App</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/bookmyshow.webp"
                    layout="intrinsic"
                    width={200}
                    height={34}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    Create an entertainment application like BookMyShow using
                    your back-end knowledge, API development, and HTML and CSS
                    skills.
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
                  <h5>Courier Tracking System</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/prohance.webp"
                    layout="intrinsic"
                    width={266}
                    height={42}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    Contains information about both administrator and user
                    functions, including office registration, creating users,
                    viewing suggestions and complaints of users.
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
                  <h5>Fuel Delivery Flutter App</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/fuelbody.webp"
                    layout="intrinsic"
                    width={83}
                    height={25}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    When it comes to refilling their vehicles, businesses who
                    manage a fleet of vehicles, such as taxi and cab firms,
                    intercity and long-distance bus service providers, trucking
                    agencies, etc., frequently run into problems.
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
                  <h5>Healthcare App</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/generis.webp"
                    layout="intrinsic"
                    width={200}
                    height={34}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    Build a dynamic and effective healthcare app. Create a rich
                    UI for effective diagnosis and health advice with Angular,
                    Javascript ES6, and more.
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
                  <h5>Online Examination System</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/synap.webp"
                    layout="intrinsic"
                    width={200}
                    height={34}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    The online examination system, which is adopted by an
                    increasing number of schools not only shows the validity and
                    impartiality of examinations of some of their workload.
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
                  <h5>Sorting Visualizer</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/sortilizer.webp"
                    layout="intrinsic"
                    width={85}
                    height={21}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    This is the ideal project for you if you're looking for a
                    fresh JavaScript project concept, want to learn JavaScript
                    inside and out, or want to advance your JavaScript
                    abilities.
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
                  <h5>Visualizing and Forecasting Stocks</h5>
                </div>
                <div className={styles.desc}>
                  <p>
                    One of the best returns on the market may be found with
                    stock investments. Although they are volatile in nature,
                    share prices and other statistical indicators may be
                    visualised by developing this application.
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
                  <h5>Food Delivery App</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/swiggy.webp"
                    layout="intrinsic"
                    width={200}
                    height={34}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    Build a food delivery app from scratch using your knowledge
                    of the Spring framework, web services, and MySQL with a
                    strong back-end to support operations. Learn to use latest
                    frameworks
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
                  <h5>Social Media Applications</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/facebook.webp"
                    layout="intrinsic"
                    width={174}
                    height={47}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    Immersing yourself in the field of socializing, hanging out
                    with friends and chilling. Build a full stack application
                    like instagram and facebook.
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
            </>
          ) : (
            ""
          )}
          {redirectFs ? (
            <>
              {" "}
              <SwiperSlide className={styles.ReviewBox}>
                <div className={styles.header}>
                  <h5>Authentication</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/cisco.webp"
                    layout="intrinsic"
                    width={220}
                    height={37}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    Create authentication technology to give access, Correspond
                    to those stored in a database of authorized users.
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
                  <h5>CRUD</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/sql.webp"
                    layout="intrinsic"
                    width={170}
                    height={35}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    Create an online tool that allows users to edit, delete, and
                    add records while viewing the database's contents in list
                    format.
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
                  <h5>Video Conferencing App</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/gmeet.webp"
                    layout="intrinsic"
                    width={280}
                    height={35}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    This is an innovative full-stack web development project
                    with seamless audio-video call management capabilities.
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
                  <h5>API Integration</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/accuweather.webp"
                    layout="intrinsic"
                    width={230}
                    height={37}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    To connect two or more applications using their APIs so that
                    those systems can exchange data.
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
                  <h5>Travel Booking Application</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/happay.webp"
                    layout="intrinsic"
                    width={234}
                    height={42}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    The associated website must provide registration, login and
                    logout, and profile building and modification.
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
                  <h5>Payment Gateway</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/gpay.webp"
                    layout="intrinsic"
                    width={212}
                    height={33}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    Learn how to integrate the payment gateway that online
                    businesses use to authorise and process credit card and
                    debit payments.
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
                  <h5>Workout Application</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/trx.webp"
                    layout="intrinsic"
                    width={135}
                    height={25}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    Modern fitness monitors go much beyond the standard
                    pedometer. Users' heart rates and run times are tracked and
                    stored.
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
                  <h5>Blog Site</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/wix.webp"
                    layout="intrinsic"
                    width={50}
                    height={19}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    Create a CMS website or application which has a better
                    content optimization and visuals optimization.
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
                  <h5>Home Service Application</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/codiant.webp"
                    layout="intrinsic"
                    width={250}
                    height={26}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    Local services will be listed on this website. Local
                    businesses and services can promote their offerings,
                    pricing, and locations.
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
                  <h5>VR Based Application</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/cryengine.webp"
                    layout="intrinsic"
                    width={277}
                    height={26}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    Make a VR programme with enhanced audiovisual capabilities.
                    Learn how to use VR applications to relieve anxiety and
                    tension.
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
                  <h5>To-Do List Application</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/task.webp"
                    layout="intrinsic"
                    width={200}
                    height={24}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    You will get knowledge about creating and improving
                    multi-use panels and components through this project.
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
                  <h5>Food Delivery Application</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/swiggy.webp"
                    layout="intrinsic"
                    width={200}
                    height={24}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    Create a sizable, feature-rich meal delivery website through
                    this project. Build a backend framework for restaurant
                    registration.
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
                  <h5>Chatting/Messaging App</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/telegram.png"
                    layout="intrinsic"
                    width={85}
                    height={23}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    Create a decent- looking and incredibly functional front-
                    end. This project focuses on creating a user- friendly chat
                    applications.
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
                  <h5>Stock Investment App</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/centra.webp"
                    layout="intrinsic"
                    width={169}
                    height={24}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    You will get knowledge about creating and improving
                    multi-use panels and components through this project.
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
                  <h5>Online Code Editor</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/leetcode.webp"
                    layout="intrinsic"
                    width={200}
                    height={24}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    Your attention will be drawn to prototyping, quick hosting
                    of newly published apps, and seamless collaboration.
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
            </>
          ) : (
            ""
          )}
          {redirectDs ? (
            <>
              <SwiperSlide className={styles.ReviewBox}>
                <div className={styles.header}>
                  <h5>Predict credit default</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Moodys-Project.webp"
                    layout="intrinsic"
                    width={107}
                    height={40}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    Develop a prediction model for identifying probable credit
                    default for a retail bank. The bank has a huge dataset of
                    credit card customers.
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
                  <h5>Google Mobility data </h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Google_logo.webp"
                    layout="intrinsic"
                    width={95}
                    height={40}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    {" "}
                    Identification of COVID-19 surge in cases based on mobility
                    within the country.The goal is to study the pattern of
                    COVID-19 cases in different regions in India.
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
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Uber.webp"
                    layout="intrinsic"
                    width={70}
                    height={26}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    Predicting fare price based on demand and supply.You will
                    have to analyse the data of the ride sharing applications to
                    identify the factors that are driving the demand.
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
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/proscia.webp"
                    layout="intrinsic"
                    width={107}
                    height={40}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    Cardiovascular diseases (CVDs) are the number 1 cause of
                    death globally. So here have to create a model that could
                    predict heart failure before its occurrence.
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
                  <h5>YouTube video analytics</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Youtube.webp"
                    layout="intrinsic"
                    width={107}
                    height={40}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    Collect record of data on videos trending on YouTube.
                    Analyze the data to predict the sentiment of the videos,
                    study the comments by categorizing the videos.
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
                  <h5>Analyze exchange rates</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Bloombreg.webp"
                    layout="intrinsic"
                    width={107}
                    height={40}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    {" "}
                    Determine the forecast. Model a program to forecast value of
                    a currency in global market. Study and analyse the data to
                    predict exchange rates in global markets.
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
                  <h5>Understand mobile banking</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Razorpay.webp"
                    layout="intrinsic"
                    width={107}
                    height={40}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    {" "}
                    Analyze customers usage of mobile banking like at Razorpay.
                    Use the dummy data to create a model like razorpay.
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
                  <h5>Mercedes-Benz – Reduce time</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Mercedez.webp"
                    layout="intrinsic"
                    width={72}
                    height={40}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    Reduce the time for a Mercedes-Benz to reach the market by
                    optimizing the testing time. Elimination of bench time would
                    reduce the total testing duration.
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
                  <h5>Amazon Food Reviews</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/amazon.png"
                    width={93}
                    height={28}
                    layout="intrinsic"
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    Classify food reviews based on customer feedback. You will
                    perform sentiment analysis on each product on the list. use
                    NLP to identify the sentiment of customers.
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
                  <h5>Predict Machine Maintenance</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/lyft.webp"
                    width={110}
                    height={40}
                    layout="intrinsic"
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    Classify food reviews based on customer feedback. You will
                    perform sentiment analysis on each product on the list. use
                    NLP to identify the sentiment of customers.
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
                  <h5>Google Playstore analytics</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Google-play.webp"
                    width={110}
                    height={40}
                    layout="intrinsic"
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    Predict the factors that contribute to the success of an
                    application. store. Your task will be to draw actionable
                    insights for developers to work on.
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
                  <h5>Recommend Music- Spotify</h5>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/soptify-logo.webp"
                    width={110}
                    height={40}
                    layout="intrinsic"
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    work on the dataset and Find a Geographical connection with
                    popular songs. Analyze and identify the geographical
                    connection with the popular songs.
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
            </>
          ) : (
            ""
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectSlider;
