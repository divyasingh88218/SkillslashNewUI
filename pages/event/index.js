import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";
import styles from "../../styles/DataScienceEvent.module.css";
import Footer from "../../components/Footer/Footer";
import EventTab from "../../components/Event/EventTab/EventTab";
import { getSortedPostsData } from "../../lib/event";
import { sortByDateEvent } from "../../utils";

export default function index({ eventData }) {
  return (
    <div>
      <Head>
        <title>
          Register for Free webinars, workshop, Masterclass -Skillslash
        </title>
        <meta
          name="description"
          content="Enroll in Full stack and and data science masterclass for free and learn from industry experts."
        />
        <link
          rel="icon"
          href="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/favicon.ico"
        />
      </Head>
      <Navbar course={false} />

      <div className={styles.event}>
        <h2>Events on Skillslash</h2>
        <div className={styles.eventTab}>
          <EventTab data={eventData} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const eventData = getSortedPostsData();
  return {
    props: {
      eventData: eventData.sort(sortByDateEvent),
    },
  };
}
