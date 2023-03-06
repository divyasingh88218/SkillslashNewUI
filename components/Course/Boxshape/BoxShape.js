/* eslint-disable @next/next/no-img-element */
import React from "react";

import styles from "./BoxShape.module.css";

import Form from "../../Form/Form";

const BoxShape = ({
  title,
  Box1h5,
  box1desc,
  Box2h5,
  box2desc,
  Box3h5,
  box3desc,
  Box4h5,
  box4desc,
  redirectDs,
  redirectFs,
  redirectDe,
  redirectBa,
  redirectDSA,
  redirectBl,
  redirectWd,
  dataScience,
}) => {
  return (
    <div className={styles.boxWrapper}>
      <div className={styles.BoxDiv}>
        <div className={styles.left}>
          <h2>{title}</h2>
          <p className="pBot">
            With the curated Web Development syllabus, we assist our learners to
            focus on improving business along with coding skills that firms
            require. We encourage building technical skills through web
            development in our course.
          </p>
          <div className={styles.boxWrap}>
            <div className={styles.box}>
              <div className={styles.ImgB}>
                <img
                  src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/work-experience-icon.webp"
                  alt="Real work Experience"
                  className={styles.icon}
                  width="40"
                  height="40"
                  loading="lazy"
                />
              </div>
              <div className={styles.contentWrapper}>
                <h5>{Box1h5}</h5>
                <p>{box1desc}</p>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.ImgC}>
                <img
                  src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/professional-icon.webp"
                  alt="Build your own course"
                  className={styles.icon}
                  width="35"
                  height="35"
                  loading="lazy"
                />
              </div>
              <div className={styles.contentWrapper}>
                <h5>{Box2h5}</h5>
                <p>{box2desc}</p>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.ImgC}>
                <img
                  src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/chat-inerview-icon.webp"
                  alt="Job G"
                  className={styles.icon}
                  width="35"
                  height="35"
                  loading="lazy"
                />
              </div>
              <div className={styles.contentWrapper}>
                <h5>{Box3h5}</h5>
                <p>{box3desc}</p>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.ImgC}>
                <img
                  src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/work-experience-icon.webp"
                  alt="Eligibility Criteria"
                  className={styles.icon}
                  width="35"
                  height="35"
                  loading="lazy"
                />
              </div>
              <div className={styles.contentWrapper}>
                <h5>{Box4h5}</h5>
                <p>{box4desc}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imgBack}>
            <div className={styles.formWrapper}>
              <div className={styles.formHeadWrap}>
                <h5>
                  Land In Your Dream Job With <br />
                  <span>Real Work Experience</span>
                </h5>
              </div>
              <Form
                dataScience={dataScience}
                redirectDs={redirectDs}
                redirectFs={redirectFs}
                redirectBa={redirectBa}
                redirectBl={redirectBl}
                redirectDe={redirectDe}
                redirectDSA={redirectDSA}
                redirectWd={redirectWd}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxShape;
