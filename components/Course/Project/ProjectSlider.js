import React from "react";
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
                    with a real person. Chatbots are used by businesses to
                    converse with their clients.
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
                    viewing suggestions and complaints of users, adding new
                    cities and states, and viewing the status of consignments.
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
                    increasing number of schools, certification agencies, and
                    training organisations, not only shows the validity and
                    impartiality of examinations but also relieves teachers of
                    some of their workload.
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
                    One of the best returns on the market may be found with
                    stock investments. Although they are volatile in nature,
                    share prices and other statistical indicators may be
                    visualised
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
                    strong back-end to support operations.
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
                    with friends and chilling.
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
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/amazon-flipkart-ecommerce-project.webp"
                    layout="intrinsic"
                    width={200}
                    height={34}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    Create authentication technology that controls system access
                    by determining if a user's credentials correspond to those
                    stored in a database of authorized users or in a data
                    authentication server.
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
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/amazon-flipkart-ecommerce-project.webp"
                    layout="intrinsic"
                    width={200}
                    height={34}
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
                  <h5>Video Conferencing Application</h5>
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
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/amazon-flipkart-ecommerce-project.webp"
                    layout="intrinsic"
                    width={200}
                    height={34}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    To connect two or more applications using their APIs so that
                    those systems can exchange data, learn advanced API
                    integration.
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
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/amazon-flipkart-ecommerce-project.webp"
                    layout="intrinsic"
                    width={200}
                    height={34}
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
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/amazon-flipkart-ecommerce-project.webp"
                    layout="intrinsic"
                    width={200}
                    height={34}
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
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/amazon-flipkart-ecommerce-project.webp"
                    layout="intrinsic"
                    width={200}
                    height={34}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    Modern fitness monitors go much beyond the standard
                    pedometer. Users' heart rates and run times are tracked and
                    stored by exercise trackers like Strava and FitBit.
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
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/amazon-flipkart-ecommerce-project.webp"
                    layout="intrinsic"
                    width={200}
                    height={34}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    This is merely the creation of a fundamental content
                    management system. Such a website or application has to have
                    greater content optimization features as well as visuals
                    optimization features.
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
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/amazon-flipkart-ecommerce-project.webp"
                    layout="intrinsic"
                    width={200}
                    height={34}
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
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/amazon-flipkart-ecommerce-project.webp"
                    layout="intrinsic"
                    width={200}
                    height={34}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    Make a VR programme of your own with enhanced audiovisual
                    capabilities. Learn how to use VR applications to relieve
                    anxiety and tension.
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
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/amazon-flipkart-ecommerce-project.webp"
                    layout="intrinsic"
                    width={200}
                    height={34}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    You will get knowledge about creating and improving
                    multi-use panels and components through this project. In
                    this case, you should focus primarily on the front end.
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
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/amazon-flipkart-ecommerce-project.webp"
                    layout="intrinsic"
                    width={200}
                    height={34}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    You will learn how to create a sizable, feature-rich meal
                    delivery website through this project. You'll build a
                    backend framework for restaurant registration.
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
                  <h5>Chatting/Messaging Applications</h5>
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
                    You will learn how to create a decent- looking and
                    incredibly functional front- end. This project focuses on
                    the finest methods for creating incredibly user- friendly
                    chat applications.
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
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/amazon-flipkart-ecommerce-project.webp"
                    layout="intrinsic"
                    width={200}
                    height={34}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    You will get knowledge about creating and improving
                    multi-use panels and components through this project. In
                    this case, you should focus primarily on the front end.
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
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/amazon-flipkart-ecommerce-project.webp"
                    layout="intrinsic"
                    width={200}
                    height={34}
                    loading="lazy"
                  />
                </div>
                <div className={styles.desc}>
                  <p>
                    This web application development project is at the advanced
                    level. Your attention will be drawn to prototyping, quick
                    hosting of newly published apps, and seamless collaboration.
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
              {" "}
              <SwiperSlide className={styles.ReviewBox}>
                <div className={styles.header}>
                  <h5>Predict credit default</h5>
                  <FaUniversity />
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
                    Predicting fare price based on demand and supply, weather
                    and other factors.You will have to analyse the data of the
                    ride sharing applications to identify the factors that are
                    driving the demand.
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
                    The telecom company wants to predict the customer’s
                    behaviour to predict and retain the customer before churning
                    off. You will have to predict the group of people who are
                    highly probable of churning off.
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
                    perform sentiment analysis on each product on the list. Here
                    you will use NLP to identify the sentiment of customers.
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
                    Predict the deals that will be closed.The list generates
                    data from lead generation to the closure of the lead as a
                    customer.
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
                    Cardiovascular diseases (CVDs) are the number 1 cause of
                    death globally and heart failure is the most common event
                    caused. So here have to create a model that could predict
                    heart failure before its occurrence that could help the
                    society.
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
                    Video analytics is a daily record of data on videos trending
                    on YouTube. You are required to analyze the data to predict
                    the sentiment of the videos, study the comments by
                    categorizing the videos and analyze the factors that affect
                    the popularity of the video.
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
                    Determine the vehicle type. You are going to train a model
                    with training data such that it predicts a new image of the
                    vehicle accurately.
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
                    Perform text translation, text parsing and summary of the
                    books. This dataset can be used for tasks like Machine
                    Translation, Text Generation, Text Parsing and Sematic
                    Understanding of Natural Language.
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
