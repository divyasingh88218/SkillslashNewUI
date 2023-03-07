import React from "react";
import styles from "./SecondNavbar.module.css";
import { FiDownload } from "react-icons/fi";

const SecondNavbar = ({ activeData }) => {
  return (
    <div className={styles.navWrap}>
      <nav>
        <div className={styles.left}>
          <div className={activeData.alumni ? styles.activeDiv : styles.div}>
            Alumni
          </div>
          <div className={activeData.trainer ? styles.activeDiv : styles.div}>
            Trainer
          </div>
          <div className={activeData.benefits ? styles.activeDiv : styles.div}>
            Benefits
          </div>
          <div
            className={activeData.certificate ? styles.activeDiv : styles.div}
          >
            Certificate
          </div>
          <div className={activeData.syllabus ? styles.activeDiv : styles.div}>
            Syllabus
          </div>
          <div className={activeData.project ? styles.activeDiv : styles.div}>
            Projects
          </div>
          <div className={activeData.review ? styles.activeDiv : styles.div}>
            Reviews
          </div>
          <div className={activeData.fee ? styles.activeDiv : styles.div}>
            Fee
          </div>
          <div className={activeData.batchDate ? styles.activeDiv : styles.div}>
            Batch Date
          </div>
          <div className={activeData.faq ? styles.activeDiv : styles.div}>
            Faq
          </div>
        </div>
        <div className={styles.right}>
          <button className={styles.outline}>
            <FiDownload className={styles.icon} />
            Brochure
          </button>
          <button>Apply Now</button>
        </div>
      </nav>
    </div>
  );
};

export default SecondNavbar;
