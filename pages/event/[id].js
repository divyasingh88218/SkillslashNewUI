import React, { useEffect, useState } from "react";
import Head from "next/head";
import { EventHeader } from "../../components/Event/EventHeader/EventHeader";
import styles from "../../styles/DataScienceEvent.module.css";
import Form from "../../components/Form/Form";
import { FiUserCheck } from "react-icons/fi";
import Image from "next/image";
import EventDetails from "../../components/Event/EventDetails/EventDetails";
import EventFeature from "../../components/Event/EventFeatures/EventFeature";
import { BsArrowRightCircleFill, BsDot } from "react-icons/bs";
import Reviews from "../../components/Review/Reviews";
import { TiTick } from "react-icons/ti";
import { getAllPostIds, getPostData } from "../../lib/event";
import Navbar from "../../components/Navbar/Navbar";

export default function DataScienceEvent({ eventData }) {
  const [mobile, setMobile] = useState(false);

  let today = new Date();
  let eventDateInfo = new Date(eventData.data.mainData.eventEnd);
  let eventStart = new Date(eventData.data.mainData.eventStart);

  useEffect(() => {
    let width = window.innerWidth;

    if (width < 481) {
      setMobile(true);
    }

    if (width > 481) {
      setMobile(false);
    }
  }, [mobile]);

  return (
    <div className={styles.container}>
      <Head>
        <title>{eventData.data.metaInfo.title}t</title>
        <meta name="description" content={eventData.data.metaInfo.desc} />
        <link
          rel="icon"
          href="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/favicon.ico"
        />
      </Head>
      <Navbar event={true} />
      <div className={styles.Page}>
        <div className={styles.bgWrap}>
          {mobile ? (
            ""
          ) : (
            <Image
              src={eventData.data.header.backImg}
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
              alt="backImg"
            />
          )}
        </div>
        <div className={styles.PageContent}>
          <div className={styles.bgWrap}>
            {mobile ? (
              <Image
                src={eventData.data.header.mBackImg}
                layout="fill"
                objectFit="cover"
                quality={100}
                alt="backImg"
                priority
              />
            ) : (
              ""
            )}
          </div>
          <EventHeader
            desc1={eventData.data.header.desc1}
            imgSrc1={eventData.data.header.img1Src}
            title={eventData.data.header.title}
            reverseImg={eventData.data.header.reverseImg}
            titleText={eventData.data.header.titleText}
            titleSpan={eventData.data.header.titleSpan}
            spanStyle={eventData.data.header.spanStyle}
            desc={eventData.data.header.desc}
            eventDate={eventData.data.header.eventDate}
            eventTime={eventData.data.header.eventTime}
            imgSrc={eventData.data.header.imgSrc}
            dark={eventData.data.header.dark}
            tag={eventData.data.header.tag}
            lightNew={eventData.data.header.lightNew}
            profileImg={eventData.data.header.profileImg}
            profileImgH={eventData.data.header.profileImgH}
            profileImgW={eventData.data.header.profileImgW}
          />
        </div>
        {today > eventDateInfo ? (
          ""
        ) : (
          <div className={styles.right}>
            <div className={styles.form}>
              <div className={styles.header}>
                <h3>Register NOW!</h3>
                <p>
                  <FiUserCheck className={styles.Icon} />
                  {eventData.data.header.register}
                </p>
              </div>

              <Form
                event={true}
                redirectZoom={eventData.data.header.redirectZoom}
                link={eventData.data.header.link}
              />
            </div>
            {today === eventStart ? (
              <div className={styles.timer}>
                <a href={eventData.data.header.link}>
                  <button>
                    Join Masterclass
                    <BsArrowRightCircleFill />
                  </button>
                </a>
              </div>
            ) : (
              <div className={styles.timerS}>
                <button>
                  Join Masterclass
                  <BsArrowRightCircleFill />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <div className={today >= eventDateInfo ? styles.Pages : styles.Page2}>
        <div className={styles.left}>
          <EventDetails
            img1={eventData.data.eventDetails.img1}
            img2={eventData.data.eventDetails.img2}
            img3={eventData.data.eventDetails.img3}
            firstH={eventData.data.eventDetails.firstH}
            firstP={eventData.data.eventDetails.firstP}
            secondH={eventData.data.eventDetails.secondH}
            secondP={eventData.data.eventDetails.secondP}
            thirdH={eventData.data.eventDetails.thirdH}
            thirdP={eventData.data.eventDetails.thirdP}
          />
          <div className={styles.aboutUS}>
            <div className={styles.aLeft}>
              <Image
                src={eventData.data.aboutUs.imgSrc}
                width="320"
                height="320"
                layout="intrinsic"
                className={styles.ABoutImg}
              />
            </div>
            <div className={styles.aRight}>
              <h6>{eventData.data.aboutUs.title}</h6>
              <p>
                {eventData.data.aboutUs.desc}
                <br />
                <br />
                {eventData.data.aboutUs.desc1}{" "}
                <b>{eventData.data.aboutUs.strong}</b>{" "}
                {eventData.data.aboutUs.desc2}
              </p>
            </div>
          </div>
          <div className={styles.prgrmFeature} id="Feature">
            <EventFeature
              title={eventData.data.feature.title}
              h1={eventData.data.feature.h1}
              h2={eventData.data.feature.h2}
              h3={eventData.data.feature.h3}
              p1={eventData.data.feature.p1}
              p2={eventData.data.feature.p2}
              p3={eventData.data.feature.p3}
              img1={eventData.data.feature.img1}
              img2={eventData.data.feature.img2}
              img3={eventData.data.feature.img3}
              mImg1={eventData.data.feature.mImg1}
              mImg2={eventData.data.feature.mImg2}
              mImg3={eventData.data.feature.mImg3}
            />
          </div>
          <div className={styles.Profile}>
            <div className="bgWrap">
              <Image
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/event/Instructor_info_bg-09.webp"
                layout="fill"
                objectFit="cover"
                quality={100}
                loading="lazy"
                alt="backImg"
              />
            </div>
            <div className={styles.prpWrap}>
              <div className={styles.profilePic}>
                <div className={styles.Pic}>
                  <Image
                    width="60"
                    height="60"
                    src={eventData.data.profile.pImg}
                    layout="intrinsic"
                  />
                </div>
                <div className={styles.PrpLeft}>
                  <p>{eventData.data.profile.desc}</p>
                  <h6>
                    {eventData.data.profile.pName}
                    <span>
                      <a href={eventData.data.profile.link} target="_blank">
                        (Linkedin)
                      </a>
                    </span>
                  </h6>
                </div>
              </div>

              <div className={styles.PrpRight}>
                {eventData.data.profile.mIcon === "" ? (
                  ""
                ) : (
                  <Image
                    width="40"
                    height="40"
                    src={eventData.data.profile.mIcon}
                    layout="intrinsic"
                  />
                )}
              </div>
            </div>

            <div className={styles.infoWrap}>
              {eventData.data.profile.list1 === "" ? (
                ""
              ) : (
                <p>
                  <BsDot className={styles.dots} />
                  {eventData.data.profile.list1}
                </p>
              )}
              {eventData.data.profile.list2 === "" ? (
                ""
              ) : (
                <p>
                  <BsDot className={styles.dots} />
                  {eventData.data.profile.list2}
                </p>
              )}
            </div>
            <p>
              <TiTick className={styles.Tick} />
              {eventData.data.profile.list3}
            </p>
            <p>
              <TiTick className={styles.Tick} />
              {eventData.data.profile.list4}
            </p>
            <p>
              <TiTick className={styles.Tick} />
              {eventData.data.profile.list5}
            </p>
            {eventData.data.profile.workAt === "" ? (
              ""
            ) : (
              <>
                <h6 className={styles.PH}>{eventData.data.profile.workAt}</h6>
                <div className={styles.workImg}>
                  <img
                    width={eventData.data.profile.width1}
                    height={eventData.data.profile.height1}
                    src={eventData.data.profile.cIcon1}
                    className={styles.ProfImg}
                  />
                  <img
                    width={eventData.data.profile.width3}
                    height={eventData.data.profile.height3}
                    src={eventData.data.profile.cIcon2}
                    className={styles.ProfImg}
                  />
                  <img
                    width={eventData.data.profile.width}
                    height={eventData.data.profile.height}
                    src={eventData.data.profile.cIcon3}
                    className={styles.ProfImg}
                  />
                </div>
              </>
            )}
          </div>

          <div className={styles.WhyWrap}>
            <div className={styles.why}>
              <div className={styles.whyLeft}>
                <h6>{eventData.data.whyUs.title}</h6>
                <div className={styles.line}></div>
                <p>
                  <TiTick className={styles.Tick} />
                  {eventData.data.whyUs.l1}
                </p>
                <p>
                  <TiTick className={styles.Tick} />
                  {eventData.data.whyUs.l2}
                </p>
                <p>
                  <TiTick className={styles.Tick} />
                  {eventData.data.whyUs.l3}
                </p>

                <p>
                  <TiTick className={styles.Tick} />
                  {eventData.data.whyUs.l4}
                </p>
              </div>
              <div className={styles.whyRight}>
                <Image
                  width="435"
                  height="350"
                  src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/event/Learning_Skillslash.webp"
                  layout="intrinsic"
                />
              </div>
            </div>
          </div>

          <div className={styles.Who} id="who">
            <div className={styles.whoLeft}>
              <h6>{eventData.data.whoCan.title}</h6>
              {mobile ? (
                ""
              ) : (
                <BsArrowRightCircleFill className={styles.gIcon} />
              )}
            </div>
            <div className={styles.whoRight}>
              <div className={styles.wrapper}>
                <div className={styles.number}>
                  <p className={styles.nIcon}>01.</p>
                </div>
                <div className={styles.nContent}>
                  <h6>{eventData.data.whoCan.heading1}</h6>
                  <p>{eventData.data.whoCan.para1}</p>
                </div>
              </div>

              <div className={styles.wrapper}>
                <div className={styles.number}>
                  <p className={styles.nIcon}>02.</p>
                </div>
                <div className={styles.nContent}>
                  <h6>{eventData.data.whoCan.heading2}</h6>
                  <p>{eventData.data.whoCan.para2}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.eReview} id="review">
            <Reviews event={today >= eventDateInfo} redirectFs={true} />
          </div>
          <div className={styles.about} id="About">
            <div className={styles.aboutLeft}>
              <h6>{eventData.data.About.title}</h6>
              <p>{eventData.data.About.desc}</p>
            </div>
          </div>
          <div className={styles.aboutContent}>
            <div className={styles.left}>
              <Image
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/event/1_Project.svg"
                width="60"
                height="60"
              />
              <img
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/event/icons_1.png"
                width="120"
                height="120"
                className={styles.Numbers}
              />
              <h6>{eventData.data.About.heading1}</h6>

              <p>{eventData.data.About.para1}</p>
            </div>
            <div className={styles.Middle}>
              <Image
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/event/icons_Job.svg"
                width="60"
                height="60"
              />
              <img
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/event/icons 2_Count.png"
                width="120"
                height="120"
                className={styles.Numbers}
              />
              <h6>{eventData.data.About.heading2}</h6>
              <p>{eventData.data.About.para2}</p>
            </div>
            <div className={styles.Right}>
              <Image
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/event/icons_Skill_Upgrdation.svg"
                width="60"
                height="60"
              />
              <img
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/event/icons 3_Count.png"
                width="120"
                height="120"
                className={styles.Numbers}
              />
              <h6>{eventData.data.About.heading3}</h6>
              <p>{eventData.data.About.para3}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const eventData = getPostData(params.id);
  return {
    props: {
      eventData,
    },
  };
}
