import Head from "next/head";
import Advantages from "../components/Advantages/Advantages";
import BoxShape from "../components/BoxShape/BoxShape";
import FirstSection from "../components/FirstSection/FirstSection";
import Tabs from "../components/Tabs/Tabs";
import GetHired from "../components/GetHired/GetHired";
import styles from "../styles/Home.module.css";
import Steps from "../components/Steps/Steps";
import RealWork from "../components/ReaWork/RealWork";
import Reviews from "../components/Review/Reviews";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import OfferPopup from "../components/Course/OfferPopup/OfferPopup";
import { useState, useEffect } from "react";
import BoxAnimation from "../components/BoxAnimation/BoxAnimation";
import ProgramInfo from "../components/Course/ProgramInfo/ProgramInfo";
import Hiring from "../components/Hiring/Hiring";
import OurEvents from "../components/OurEvents/OurEvents";
import NewCTA from "../components/NewCTA/NewCTA";
import NewPricingTable from "../components/Course/NewPricingTable/NewPricingTable";

export default function Home() {
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
        {popupData != [] ? (
          today >= popupDate.startDate && today <= popupDate.endDate ? (
            <OfferPopup popupData={popupData} />
          ) : (
            ""
          )
        ) : (
          ""
        )}
        <FirstSection />
        <ProgramInfo />

        <div className={styles.Explore} id="explore">
          <h4 className={styles.ExploreH}>Explore Our Courses</h4>
          <Tabs />
        </div>
        <div className={styles.advantage}>
          <NewCTA />
        </div>

        <div className={styles.advantage}>
          <Hiring />
        </div>
        <BoxAnimation />
        <Reviews
          home={true}
          title="Our Mission Is To Provide World-Class Education"
          desc="Our courses are designed for both students and working professionals. Hear from our students to know more."
        />
        <OurEvents />
        <NewPricingTable />
        <Footer />
      </div>
    </>
  );
}
