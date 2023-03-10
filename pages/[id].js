/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import FirstSection from "../components/Course/FirstSection/FirstSection";
import ProgramInfo from "../components/Course/ProgramInfo/ProgramInfo";
import GetHired from "../components/GetHired/GetHired";
import Certificate from "../components/Course/Certificate/Certificate";
import OurExpert from "../components/Course/OurExpert/OurExpert";
import ToolsCovered from "../components/Course/ToolsCovered/ToolsCovered";
import Benefits from "../components/Course/Benefits/Benefits";
import BatchDetails from "../components/Course/BatchDetails/BatchDetails";
import BannerCTA from "../components/Course/BannerCTA/BannerCTA";
import FAQ from "../components/Course/FAQ/FAQ";
import Fee from "../components/Course/Fee/Fee";
import styles from "../styles/Home.module.css";
import BoxShape from "../components/Course/Boxshape/BoxShape";
import MGetHired from "../components/Course/MGetHired/MGetHired";
import TrainerSlider from "../components/Course/TrainerSlider/TrainerSlider";
import Reviews from "../components/Review/Reviews";
import Footer from "../components/Footer/Footer";
import React, { useState, useEffect, useRef } from "react";
import Popup from "../components/Popup/Popup";
import Form from "../components/Form/Form";
import BottomBar from "../components/Course/BottomBar/BottomBar";
import Image from "next/image";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { getAllPostIds, getPostData } from "../lib/page";
import DataScienceSyllabus from "../components/Course/Syllabus/DataScienceSyllabs";
import Navbar from "../components/Navbar/Navbar";
import OfferPopup from "../components/Course/OfferPopup/OfferPopup";
import Emi from "../components/Course/EMI/Emi";
import BatchDates from "../components/Batch/BatchDates";
import ProjectSlider from "../components/Course/Project/ProjectSlider";
import SecondNavbar from "../components/Navbar/SecondNavbar";
import CTA from "../components/CTA/CTA";

export default function Home({ DataScienceCourseData }) {
  const [popups, setPopups] = useState(false);
  const redirectDs = DataScienceCourseData.data.form.dataScience;
  const redirectFs = DataScienceCourseData.data.form.FullStack;
  const redirectDSA = DataScienceCourseData.data.form.dsa;
  const [popupData, setPopupData] = useState([]);
  const [popupDate, setPopupDate] = useState({
    startDate: "",
    endDate: "",
  });

  const getHired = useRef();
  const trainer = useRef();
  const benefits = useRef();
  const certificate = useRef();
  const syllabus = useRef();
  const project = useRef();
  const review = useRef();
  const fee = useRef();
  const batchDate = useRef();
  const faq = useRef();
  const cta = useRef();
  const today = new Date();
  //active navbar state useEffect
  console.log("this Home Page");
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
            if (popupData === "Adv Data Science and AI" && redirectDs) {
              console.log("inside data science");
              setPopupDate({
                endDate: new Date(data.endDate),
                startDate: new Date(data.startDate),
              });
              setPopupData(data);
              return;
            }
            if (
              popupData === "Blockchain program and certification" &&
              DataScienceCourseData.data.form.blockchain
            ) {
              console.log("inside block chain");
              setPopupDate({
                endDate: new Date(data.endDate),
                startDate: new Date(data.startDate),
              });
              setPopupData(data);
              return;
            }
            if (
              popupData === "Full Stack Developer course with certification" &&
              redirectFs
            ) {
              console.log("inside Full stack");
              setPopupDate({
                endDate: new Date(data.endDate),
                startDate: new Date(data.startDate),
              });
              console.log(data, "data inside condition");
              setPopupData(data);
              return;
            }
            if (
              popupData === "Business Analytics Program For Professionals" &&
              DataScienceCourseData.data.form.BusinessAnalytics
            ) {
              console.log("inside business analytics");
              setPopupDate({
                endDate: new Date(data.endDate),
                startDate: new Date(data.startDate),
              });
              setPopupData(data);
              return;
            }
            if (
              popupData === "Data Structures and Algorithms + System Design" &&
              redirectDSA
            ) {
              console.log("inside data structure");
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

  let fullStackProject;
  if (redirectFs || redirectDSA) {
    fullStackProject = false;
  } else {
    fullStackProject = true;
  }

  const popupShow = () => {
    setPopups(true);
  };

  return (
    <>
      <Navbar
        course={true}
        dataScience={false}
        redirectDs={redirectDs}
        redirectFs={redirectFs}
        redirectDe={DataScienceCourseData.data.form.DataEngineering}
        redirectBl={DataScienceCourseData.data.form.blockchain}
        redirectBa={DataScienceCourseData.data.form.BusinessAnalytics}
      />
      <SecondNavbar
        getHired={getHired}
        trainer={trainer}
        benefits={benefits}
        certificate={certificate}
        syllabus={syllabus}
        project={project}
        review={review}
        fee={fee}
        batchDate={batchDate}
        faq={faq}
        cta={cta}
      />
      {popupData != [] ? (
        today >= popupDate.startDate && today <= popupDate.endDate ? (
          <OfferPopup popupData={popupData} />
        ) : (
          ""
        )
      ) : (
        ""
      )}

      <div className={styles.container}>
        <Head>
          <title>{DataScienceCourseData.data.metaInfo.title}</title>
          <meta
            name="description"
            content={DataScienceCourseData.data.metaInfo.desc}
          />
          <meta
            name="keywords"
            content={DataScienceCourseData.data.metaInfo.keyword}
          />
          <link
            rel="canonical"
            href={DataScienceCourseData.data.metaInfo.canonical}
          />
          <link
            rel="icon"
            href="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/favicon.ico"
          />
          <script
            defer
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                DataScienceCourseData.data.metaInfo.ReviewSchema
              ),
            }}
          />
          <script
            defer
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                DataScienceCourseData.data.metaInfo.ReviewSchema1
              ),
            }}
          />
        </Head>
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            <p>Fill the below Details to get started</p>
            <Form
              popup={true}
              dataScience={false}
              setTrigger={setPopups}
              redirectDs={DataScienceCourseData.data.form.dataScience}
              redirectFs={DataScienceCourseData.data.form.FullStack}
              redirectDe={DataScienceCourseData.data.form.DataEngineering}
              redirectBl={DataScienceCourseData.data.form.blockchain}
              redirectBa={DataScienceCourseData.data.form.BusinessAnalytics}
              redirectDSA={DataScienceCourseData.data.form.dsa}
            />
          </div>
        </Popup>

        <FirstSection
          dataScience={false}
          redirectDs={DataScienceCourseData.data.form.dataScience}
          redirectFs={DataScienceCourseData.data.form.FullStack}
          redirectDe={DataScienceCourseData.data.form.DataEngineering}
          redirectBl={DataScienceCourseData.data.form.blockchain}
          redirectBa={DataScienceCourseData.data.form.BusinessAnalytics}
          deskTopPara={DataScienceCourseData.data.FirstSection.deskTopPara}
          mTopPara={DataScienceCourseData.data.FirstSection.mTopPara}
          redirectDSA={DataScienceCourseData.data.form.dsa}
          title={DataScienceCourseData.data.FirstSection.title}
          spanTitleText={DataScienceCourseData.data.FirstSection.spanTitleText}
          desc={DataScienceCourseData.data.FirstSection.desc}
          mainHeaderImg={DataScienceCourseData.data.FirstSection.mainHeaderImg}
          width={DataScienceCourseData.data.FirstSection.width}
          height={DataScienceCourseData.data.FirstSection.height}
        />
        <div className={styles.program}>
          <ProgramInfo
            BatchDate={DataScienceCourseData.data.ProgramInfo.BatchDate}
            BatchDuration={DataScienceCourseData.data.ProgramInfo.BatchDuration}
            Placement={DataScienceCourseData.data.ProgramInfo.Placement}
          />
        </div>
        <div id="hired" ref={getHired}>
          <MGetHired
            heading1={DataScienceCourseData.data.GetHired.heading1}
            heading={DataScienceCourseData.data.GetHired.heading}
            dataScience={false}
            redirectDs={DataScienceCourseData.data.form.dataScience}
            redirectFs={DataScienceCourseData.data.form.FullStack}
            redirectDe={DataScienceCourseData.data.form.DataEngineering}
            redirectBl={DataScienceCourseData.data.form.blockchain}
            redirectBa={DataScienceCourseData.data.form.BusinessAnalytics}
            redirectDSA={DataScienceCourseData.data.form.dsa}
            redirectAI={DataScienceCourseData.data.form.ai}
          />
        </div>
        <div id="trainer" ref={trainer}>
          <TrainerSlider
            dataScience={false}
            redirectDs={DataScienceCourseData.data.form.dataScience}
            redirectFs={DataScienceCourseData.data.form.FullStack}
            redirectDe={DataScienceCourseData.data.form.DataEngineering}
            redirectBl={DataScienceCourseData.data.form.blockchain}
            redirectBa={DataScienceCourseData.data.form.BusinessAnalytics}
            redirectDSA={DataScienceCourseData.data.form.dsa}
            redirectAI={DataScienceCourseData.data.form.ai}
            redirectWeb={DataScienceCourseData.data.form.webDevelopment}
          />
        </div>
        <div className="Feature" id="Feature" ref={benefits}>
          <BoxShape
            dataScience={false}
            redirectDs={DataScienceCourseData.data.form.dataScience}
            redirectFs={DataScienceCourseData.data.form.FullStack}
            redirectDe={DataScienceCourseData.data.form.DataEngineering}
            redirectBl={DataScienceCourseData.data.form.blockchain}
            redirectBa={DataScienceCourseData.data.form.BusinessAnalytics}
            redirectDSA={DataScienceCourseData.data.form.dsa}
            redirectWd={DataScienceCourseData.data.form.webDevelopment}
            title={DataScienceCourseData.data.BoxShape.title}
            Box1h5={DataScienceCourseData.data.BoxShape.Box1h5}
            box1desc={DataScienceCourseData.data.BoxShape.box1desc}
            Box2h5={DataScienceCourseData.data.BoxShape.Box2h5}
            box2desc={DataScienceCourseData.data.BoxShape.box2desc}
            Box3h5={DataScienceCourseData.data.BoxShape.Box3h5}
            box3desc={DataScienceCourseData.data.BoxShape.box3desc}
            Box4h5={DataScienceCourseData.data.BoxShape.Box4h5}
            box4desc={DataScienceCourseData.data.BoxShape.box4desc}
          />
        </div>
        <div className={styles.ctaWrap}>
          <div className="bgWrap">
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/New-cta-background-section.webp"
              layout="fill"
              loading="lazy"
            />
          </div>
          <div className={styles.cta}>
            <div></div>
            <div className={styles.left}>
              <Image
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/CTAimg.webp"
                layout="intrinsic"
                width={410}
                height={333}
                loading="lazy"
              />
            </div>
            <div className={styles.right}>
              <h5>
                Having Doubts? <br />
                Talk with our Experts
              </h5>
              <p>
                Enroll in our software development course to cope with the
                advancements in Web Development training. If you are
                concentrating on a career transition, check your eligibility.
              </p>
              <button onClick={popupShow}>
                Enquire Now <BsFillArrowRightCircleFill />
              </button>
            </div>
          </div>
        </div>

        <div id="certificate" ref={certificate}>
          <Certificate
            dataScience={false}
            redirectDs={DataScienceCourseData.data.form.dataScience}
            redirectFs={DataScienceCourseData.data.form.FullStack}
            redirectDe={DataScienceCourseData.data.form.DataEngineering}
            redirectBl={DataScienceCourseData.data.form.blockchain}
            redirectBa={DataScienceCourseData.data.form.BusinessAnalytics}
            redirectDSA={DataScienceCourseData.data.form.dsa}
            popupHead={DataScienceCourseData.data.Certificate.popupHead}
            title={DataScienceCourseData.data.Certificate.title}
            desc={DataScienceCourseData.data.Certificate.desc}
            src={DataScienceCourseData.data.Certificate.src}
          />
        </div>
        <div id="syllabus" ref={syllabus}>
          <DataScienceSyllabus
            dataScience={false}
            redirectDs={DataScienceCourseData.data.form.dataScience}
            redirectFs={DataScienceCourseData.data.form.FullStack}
            redirectDe={DataScienceCourseData.data.form.DataEngineering}
            redirectBl={DataScienceCourseData.data.form.blockchain}
            redirectBa={DataScienceCourseData.data.form.BusinessAnalytics}
            redirectDSA={DataScienceCourseData.data.form.dsa}
            syllabus={DataScienceCourseData.data.syllabus}
            syllabusDesc={DataScienceCourseData.data.syllabusDesc}
            popupHead={DataScienceCourseData.data.popupHead}
          />
        </div>
        {DataScienceCourseData.data.form.FullStack ? <ToolsCovered /> : ""}
        <div id="project" ref={project}>
          <ProjectSlider />
        </div>
        <div className="review" id="review" ref={review}>
          <Reviews
            title={DataScienceCourseData.data.Review.title}
            desc={DataScienceCourseData.data.Review.desc}
            changeReview={true}
            redirectDs={DataScienceCourseData.data.form.dataScience}
            redirectFs={DataScienceCourseData.data.form.FullStack}
            redirectDe={DataScienceCourseData.data.form.DataEngineering}
            redirectBl={DataScienceCourseData.data.form.blockchain}
            redirectBa={DataScienceCourseData.data.form.BusinessAnalytics}
            redirectDSA={DataScienceCourseData.data.form.dsa}
            redirectWeb={DataScienceCourseData.data.form.webDevelopment}
          />
        </div>

        {DataScienceCourseData.data.form.webDevelopment || redirectFs ? (
          <div id="fee" ref={fee}>
            <Emi
              web={DataScienceCourseData.data.form.webDevelopment}
              price={DataScienceCourseData.data.Fee.ProPrice}
              emi={DataScienceCourseData.data.Fee.emi}
              redirectDs={DataScienceCourseData.data.form.dataScience}
              redirectFs={DataScienceCourseData.data.form.FullStack}
              redirectDe={DataScienceCourseData.data.form.DataEngineering}
              redirectBl={DataScienceCourseData.data.form.blockchain}
              redirectWeb={DataScienceCourseData.data.form.webDevelopment}
              redirectBa={DataScienceCourseData.data.form.BusinessAnalytics}
              redirectDSA={DataScienceCourseData.data.form.dsa}
            />
          </div>
        ) : (
          <div id="fee" ref={fee}>
            <Fee
              ref={fee}
              dataScience={false}
              redirectDs={DataScienceCourseData.data.form.dataScience}
              redirectFs={DataScienceCourseData.data.form.FullStack}
              redirectDe={DataScienceCourseData.data.form.DataEngineering}
              redirectBl={DataScienceCourseData.data.form.blockchain}
              redirectBa={DataScienceCourseData.data.form.BusinessAnalytics}
              redirectDSA={DataScienceCourseData.data.form.dsa}
              redirectWeb={DataScienceCourseData.data.form.webDevelopment}
              changeFee={DataScienceCourseData.data.Fee.FullStack}
              desc={DataScienceCourseData.data.Fee.desc}
              desc1={DataScienceCourseData.data.Fee.desc1}
              BasicPrice={DataScienceCourseData.data.Fee.BasicPrice}
              BasicDesc={DataScienceCourseData.data.Fee.BasicDesc}
              ProPrice={DataScienceCourseData.data.Fee.ProPrice}
              ProDesc={DataScienceCourseData.data.Fee.ProDesc}
              ProMaxPrice={DataScienceCourseData.data.Fee.ProMaxPrice}
              ProMaxDesc={DataScienceCourseData.data.Fee.ProMaxDesc}
            />
          </div>
        )}
        <div id="date" ref={batchDate}>
          <BatchDates
            batchDetails={DataScienceCourseData.data.BatchDates}
            redirectDs={DataScienceCourseData.data.form.dataScience}
            redirectFs={DataScienceCourseData.data.form.FullStack}
            redirectDe={DataScienceCourseData.data.form.DataEngineering}
            redirectBl={DataScienceCourseData.data.form.blockchain}
            redirectBa={DataScienceCourseData.data.form.BusinessAnalytics}
            redirectDSA={DataScienceCourseData.data.form.dsa}
          />
        </div>

        <div className="faq" id="faq" ref={faq}>
          <FAQ
            FaqData={DataScienceCourseData.data.FaqDATA}
            desc={DataScienceCourseData.data.FAQ.desc}
          />
        </div>

        <BottomBar changeBottom={true} />
        <div className="cta" id="cta" ref={cta}>
          <CTA redirectDSA={DataScienceCourseData.data.form.dsa} />
        </div>
        <Footer />
      </div>
    </>
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
  const DataScienceCourseData = getPostData(params.id);
  return {
    props: {
      DataScienceCourseData,
    },
  };
}
