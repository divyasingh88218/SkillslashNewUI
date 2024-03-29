import Head from "next/head";
import FirstSection from "../components/Course/FirstSection/FirstSection";
import Tabs from "../components/Tabs/Tabs";
import styles from "../styles/Home.module.css";
import Reviews from "../components/Review/Reviews";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import OfferPopup from "../components/Course/OfferPopup/OfferPopup";
import { useState, useEffect } from "react";
import BoxAnimation from "../components/BoxAnimation/BoxAnimation";
import ProgramInfo from "../components/Course/ProgramInfo/ProgramInfo";
import Hiring from "../components/Hiring/Hiring";
import OurEvents from "../components/OurEvents/OurEvents";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Image from "next/image";

import Popup from "../components/Popup/Popup";
import ContactForm from "../components/ContactusForm/ContactusForm";

export default function Home() {
  const [popupData, setPopupData] = useState([]);
  const [popupDate, setPopupDate] = useState({
    startDate: "",
    endDate: "",
  });
  const [popups, setPopups] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [tablet, setTablet] = useState(false);

  useEffect(() => {
    let width = window.innerWidth;
    if (width > 642) {
      setTablet(false);
    }
    if (width < 642) {
      setTablet(true);
    }
    if (width < 481) {
      setMobile(true);
    }
  });

  const today = new Date();
  useEffect(() => {
    const fetchPopup = async () => {
      const data = await fetch("/api/v1/fetchPopup", {
        method: "GET",
      });
      if (data.status === 200) {
        const { popData } = await data.json();
        console.log(popData);
        if (!popData.length) {
          console.log("length");
          setPopupData({ endDate: "", startDate: "" });
          setPopupData([]);
        } else {
          setPopupDate({
            endDate: new Date(popData[0].endDate),
            startDate: new Date(popData[0].startDate),
          });

          setPopupData(popData[0]);
        }
      }
    };
    fetchPopup();
  }, []);
  const popupShow = () => {
    setPopups(true);
  };
  return (
    <>
      <Navbar course={false} />
      <div className={styles.container}>
        <Head>
          <title>Skillslash - Project Based Learning Platform.</title>
          <meta
            name="description"
            content="Learn latest blogs about Artificial Intelligence (AI), Python, Machine Learning, Data Science, NLP, Business Analysis, Data Science"
          />
        </Head>
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            <p>Fill the below Details to get started</p>
            <ContactForm setTrigger={setPopups} popup={true} />
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
          deskTopPara="India’s 1st"
          mTopPara="India’s 1st"
          title="Project Based Experiential Learning Platform"
          spanTitleText=""
          homePage={true}
          desc="Get real work experience and certifications. Learn from industry experts and get placed in top product companies!"
          backgroundImg="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Homepagefirstsection.webp"
          mainHeaderImg="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/homepageGirl.webp"
          iconImg="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/HomepageDataCollection.webp"
          usp1=" Live Interactive "
          usp2=" Direct Company "
          usp3=" Microsoft"
          usp4=" 100% Interview"
          usp1Span="Classroom"
          usp2Span="Exp Certifications"
          usp3Span="Certification"
          usp4Span="Guarantee"
          width="364"
          height="430"
        />
        {tablet ? "" : <ProgramInfo homePage={true} />}

        <div className={styles.Explore} id="explore">
          <h4 className={styles.ExploreH}>Explore Our Courses</h4>
          <Tabs />
        </div>
        <BoxAnimation />
        <div className={styles.advantage}>
          <Hiring />
        </div>

        <Reviews
          home={true}
          title="Our Mission Is To Provide World-Class Education"
          desc="Our courses are designed for both students and working professionals. Hear from our students to know more."
        />
        <OurEvents />
        <div className={styles.ctaWrap}>
          {mobile ? (
            ""
          ) : (
            <div className="bgWrap">
              <Image
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/New-cta-background-section.webp"
                layout="fill"
                loading="lazy"
              />
            </div>
          )}

          <div className={styles.cta}>
            <div></div>
            <div className={styles.left}>
              <Image
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/CTAimg.webp"
                layout="intrinsic"
                width={410}
                height={333}
                objectFit={mobile ? "contain" : "cover"}
                loading="lazy"
              />
            </div>
            <div className={styles.right}>
              <h5>
                Having Doubts? <br />
                Talk with our Experts
              </h5>
              <p>
                Elevate your career with our courses - gain the skills and
                knowledge that will set you apart and propel you toward success.
                Check your eligibility now and enroll today. Let's make your
                career dreams a reality.
              </p>
              <button onClick={popupShow}>
                Enquire Now <BsFillArrowRightCircleFill />
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
