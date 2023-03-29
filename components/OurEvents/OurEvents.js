import React from "react";
import style from "./OurEvents.module.css";
import Image from "next/image";
import { IoCallSharp } from "react-icons/io5";
import Link from "next/link";

const OurEvents = () => {
  return (
    <div className={style.wrapper}>
      <div className="wrapperHeading">
        <hr />
        <h4>Our Events</h4>
        <hr />
      </div>

      <div className={style.wrapperBlock}>
        <div className={style.wrapperBlock1}>
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/MAANG1pic.webp"
            alt="Skillslash"
            quality={100}
            objectFit="contain"
            width="464px"
            height="464px"
          />
          <div className={style.bottomBtn}>
            <Link href="/">
              <div className={style.LearnMore}>
                <IoCallSharp />
                <p>Learn More</p>
              </div>
            </Link>
            {/* <p>Register</p> */}
          </div>
        </div>
        <div className={style.wrapperBlock2}>
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/AcingInterview2pic.webp"
            alt="Skillslash"
            quality={100}
            objectFit="contain"
            width="492px"
            height="492px"
          />
          <div className={style.bottomBtn}>
            <Link href="/">
              <div className={style.LearnMore}>
                <IoCallSharp />
                <p>Learn More</p>
              </div>
            </Link>
            {/* <p>Register</p> */}
          </div>
        </div>
        <div className={style.wrapperBlock3}>
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/interview3pic.webp"
            alt="Skillslash"
            quality={100}
            objectFit="contain"
            width="492px"
            height="492px"
          />
          <div className={style.bottomBtn}>
            <Link href="/">
              <div className={style.LearnMore}>
                <IoCallSharp />
                <p>Learn More</p>
              </div>
            </Link>
            {/* <p>Register</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEvents;
