import React from "react";
import style from "./NewCTA.module.css";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import { BsFillTriangleFill } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";

function NewCTA() {
  return (
    <section className={style.mainBlock}>
      <div className={style.mainHeading}>
        <div className={style.heading}>
          <h4>New CTA</h4>
          <hr />
        </div>

        <div className={style.mainContent}>
          <div className={style.Content}>
            <h4>Gain Real Work Experience?</h4>
            <p>
              We believe in application-based learning approach that is focused
              on helping learners build relevant experience in the technologies
              they upskill to demonstrate expertise.
            </p>
            <p className={style.para}>
              {" "}
              <TiTick />
              Implement what you Learn.
            </p>
            <p className={style.para}>
              {" "}
              <TiTick />
              Implement what you Learn.
            </p>
            <p className={style.para}>
              {" "}
              <TiTick />
              Implement what you Learn.
            </p>
          </div>

          <div className={style.subContent}>
            <div className={style.rise1}>
              <div className={style.top}>
                <div className={style.imgWrapper}>
                  <Image
                    alt="cta-img"
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/rise.webp"
                    height={39}
                    width={39}
                    layout="intrinsic"
                    className={style.img}
                  />
                </div>

                <p>Maximum Salary</p>
              </div>

              <div className={style.bottomRise}>
                <div>
                  <p>350%</p>
                </div>
                <div>
                  <button>
                    <BsFillTriangleFill className={style.triIcon} /> 8%
                  </button>
                </div>
              </div>
            </div>
            <div className={style.rise2}>
              <div className={style.top}>
                <div className={style.imgWrapper}>
                  <Image
                    alt="cta-img"
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/rise.webp"
                    height={39}
                    width={39}
                    layout="intrinsic"
                    className={style.img}
                  />
                </div>

                <p>Average Salary</p>
              </div>

              <div className={style.bottomRise}>
                <div>
                  <p>170%</p>
                </div>
                <div>
                  <button>
                    <BsFillTriangleFill className={style.triIcon} /> 8%
                  </button>
                </div>
              </div>
            </div>
            <div className={style.rise3}>
              {" "}
              <div className={style.top}>
                <div className={style.imgWrapper}>
                  <Image
                    alt="cta-img"
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/rise.webp"
                    height={39}
                    width={39}
                    layout="intrinsic"
                    className={style.img}
                  />
                </div>

                <p>Hiring Partners</p>
              </div>
              <div className={style.bottomRise}>
                <div>
                  <p>400+</p>
                </div>
                <div>
                  <button>
                    <BsFillTriangleFill className={style.triIcon} /> 8%
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.rightBlock}>
        <div className={style.imageWrapper}>
          <Image
            alt="cta-img"
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/newCTA.png"
            height="317"
            width="668"
            layout="intrinsic"
          />
        </div>

        <div className={style.infoSection}>
          <h5>For queries, feedback & assistance </h5>
          <h4>Get Free Career Counselling</h4>
          <h6>(7AM -12 AM)</h6>
          <p>For Working Professionals & Freshers</p>
          <button>
            <IoMdCall />
            8391-911-911
            <span></span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewCTA;
