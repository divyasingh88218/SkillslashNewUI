/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import FirstSection from "../components/Course/FirstSection/FirstSection";
import ProgramInfo from "../components/Course/ProgramInfo/ProgramInfo";
import GetHired from "../components/GetHired/GetHired";
import Certificate from "../components/Course/Certificate/Certificate";
import OurExpert from "../components/Course/OurExpert/OurExpert";
import Benefits from "../components/Course/Benefits/Benefits";
import BatchDetails from "../components/Course/BatchDetails/BatchDetails";
import BannerCTA from "../components/Course/BannerCTA/BannerCTA";
import FAQ from "../components/Course/FAQ/FAQ";
import Fee from "../components/Course/Fee/Fee";
import styles from "../styles/Home.module.css";
import BoxShape from "../components/Course/Boxshape/BoxShape";
import RealWork from "../components/Course/ReaWork/RealWork";
import ProjectSlider from "../components/Course/Project/ProjectSlider";
import Reviews from "../components/Review/Reviews";
import DataScienceSyllabus from "../components/Course/Syllabus/DataScienceSyllabs";
import Footer from "../components/Footer/Footer";
import React, { useState, useEffect } from "react";
import Popup from "../components/Popup/Popup";
import Form from "../components/Form/Form";
import BottomBar from "../components/Course/BottomBar/BottomBar";
import CTA from "../components/CTA/CTA";
import { DataScienceFaqData } from "../Data/DatascienceFaqData";
import { DataScienceCourseData } from "../Data/DataScienceCourse/DataScienceCourseData";
import { BsArrowRightCircleFill } from "react-icons/bs";
import Navbar from "../components/Navbar/Navbar";
import OfferPopup from "../components/Course/OfferPopup/OfferPopup";
import BatchDates from "../components/Batch/BatchDates";

export default function Home() {
  const [popups, setPopups] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [popupData, setPopupData] = useState([]);
  const [popupDate, setPopupDate] = useState({
    startDate: "",
    endDate: "",
  });

  const today = new Date();

  useEffect(() => {
    const fetchPopup = async () => {
      const data = await fetch("/api/v1/fetchPopup", {
        method: "GET",
      });
      if (data.status === 200) {
        const { popData } = await data.json();
        if (popData === []) {
          setPopupData({ endDate: "", startDate: "" });
          setPopupData([]);
        }
        popData.map((data, i) => {
          console.log(data, "inside map");
          data.page.map((popupData, i) => {
            console.log(popupData, "inside map map");
            if (popupData === "Adv Data Science and AI") {
              console.log("inside data science");
              setPopupDate({
                endDate: new Date(data.endDate),
                startDate: new Date(data.startDate),
              });
              setPopupData(data);
              return;
            }
          });
        });
      }
    };
    fetchPopup();
  }, []);

  const popupShow = () => {
    setPopups(true);
  };

  return (
    <>
      <Navbar dataScience={true} course={true} />
      <div className={styles.container}>
        <Head>
          <title>Data Science Course -Skillslash</title>
          <meta name="description" content="Generated by create next app" />
          <link
            rel="icon"
            href="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/favicon.ico"
          />
        </Head>
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            <p>Fill the below Details to get started</p>
            <Form popup={true} setTrigger={setPopups} dataScience={true} />
          </div>
        </Popup>
        {popupData != [] ? (
          today >= popupDate.startDate && today <= popupDate.endDate ? (
            <OfferPopup popupData={popupData} />
          ) : (
            ""
          )
        ) : (
          ""
        )}
        <FirstSection
          dataScience={true}
          deskTopPara={DataScienceCourseData[0].FirstSection.deskTopPara}
          mTopPara={DataScienceCourseData[0].FirstSection.mTopPara}
          title={DataScienceCourseData[0].FirstSection.title}
          spanTitleText={DataScienceCourseData[0].FirstSection.spanTitleText}
          desc={DataScienceCourseData[0].FirstSection.desc}
          backgroundImg="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/FirstSecBackgroundImg.webp"
          mainHeaderImg="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/FirstSecBanner.webp"
          width="917"
          height="660"
        />
        <div className={styles.program}>
          <ProgramInfo
            BatchDate={DataScienceCourseData[0].ProgramInfo.BatchDate}
            BatchDuration={DataScienceCourseData[0].ProgramInfo.BatchDuration}
            Placement={DataScienceCourseData[0].ProgramInfo.Placement}
          />
        </div>
        <div className="Feature" id="Feature">
          <BoxShape
            dataScience={true}
            title={DataScienceCourseData[0].BoxShape.title}
            Box1h5={DataScienceCourseData[0].BoxShape.Box1h5}
            box1desc={DataScienceCourseData[0].BoxShape.box1desc}
            Box2h5={DataScienceCourseData[0].BoxShape.Box2h5}
            box2desc={DataScienceCourseData[0].BoxShape.box2desc}
            Box3h5={DataScienceCourseData[0].BoxShape.Box3h5}
            box3desc={DataScienceCourseData[0].BoxShape.box3desc}
            Box4h5={DataScienceCourseData[0].BoxShape.Box4h5}
            box4desc={DataScienceCourseData[0].BoxShape.box4desc}
          />
        </div>
        <div className={styles.cta}>
          <div className={styles.left}></div>
          <div className={styles.middle}>
            <h6>{DataScienceCourseData[0].TopCTA.title}</h6>
            <p>
              {DataScienceCourseData[0].TopCTA.BeforeBR}

              {DataScienceCourseData[0].TopCTA.AfterBR}
            </p>
          </div>
          <div className={styles.right}>
            <button onClick={popupShow}>
              Enquire Now <BsArrowRightCircleFill />
            </button>
          </div>
        </div>

        <Benefits
          dataScience={true}
          desc={DataScienceCourseData[0].Benefits.desc}
          InterviewT={DataScienceCourseData[0].Benefits.InterviewT}
          InterviewD={DataScienceCourseData[0].Benefits.InterviewD}
          CertificateT={DataScienceCourseData[0].Benefits.CertificateT}
          CertificateD={DataScienceCourseData[0].Benefits.CertificateD}
          JobT={DataScienceCourseData[0].Benefits.JobT}
          JobD={DataScienceCourseData[0].Benefits.JobD}
        />

        <GetHired />
        <Certificate
          dataScience={true}
          popupHead={DataScienceCourseData[0].Certificate.popupHead}
          title={DataScienceCourseData[0].Certificate.title}
          desc={DataScienceCourseData[0].Certificate.desc}
          src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Advance-data-science-course-certificate-26th-october-2022.webp"
        />
        <div className={styles.ExpertWrapper}>
          <div className={styles.expert}>
            <h5>Our experts are from:</h5>
          </div>
          <div className={styles.expertBody}>
            <OurExpert />
          </div>
        </div>
        <RealWork
          desc={DataScienceCourseData[0].RealWork.desc}
          dataScience={true}
        />
        <DataScienceSyllabus
          dataScience={true}
          syllabus={DataScienceCourseData[0].syllabus}
          syllabusDesc={DataScienceCourseData[0].syllabusDesc}
          popupHead={DataScienceCourseData[0].popupHead}
        />
        <div className={styles.ProjectWrapper} id="project">
          <ProjectSlider ChangeProject={true} />
        </div>

        <div className="review" id="review">
          <Reviews
            dataScience={true}
            title={DataScienceCourseData[0].Review.title}
            desc={DataScienceCourseData[0].Review.desc}
            changeReview={true}
          />
        </div>

        <Fee
          dataScience={true}
          changeFee={true}
          desc={DataScienceCourseData[0].Fee.desc}
          desc1={DataScienceCourseData[0].Fee.desc1}
          BasicPrice={DataScienceCourseData[0].Fee.BasicPrice}
          BasicDesc={DataScienceCourseData[0].Fee.BasicDesc}
          ProPrice={DataScienceCourseData[0].Fee.ProPrice}
          ProDesc={DataScienceCourseData[0].Fee.ProDesc}
          ProMaxPrice={DataScienceCourseData[0].Fee.ProMaxPrice}
          ProMaxDesc={DataScienceCourseData[0].Fee.ProMaxDesc}
        />
        <BatchDates
          dataScience={true}
          batchDetails={DataScienceCourseData[0].BatchDates}
        />

        <BannerCTA dataScience={true} />
        <div className="faq" id="faq">
          <FAQ
            FaqData={DataScienceFaqData}
            desc={DataScienceCourseData[0].FAQ.desc}
          />
        </div>

        <div className={styles.CWrap}>
          <CTA dataScience={true} />
        </div>
        <BottomBar changeBottom={true} />

        <Footer />
      </div>
    </>
  );
}
