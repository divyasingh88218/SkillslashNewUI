import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./EventHeader.module.css";
import { BsCalendarCheck } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";

export const EventHeader = ({
  title,
  titleSpan,
  desc,
  titleText,
  eventDate,
  eventTime,
  imgSrc,
  profileImg,
  dark,
  spanStyle,
  lightNew,
  tag,
  reverseImg,
  profileImgH,
  profileImgW,
  imgSrc1,
  desc1,
}) => {
  const router = useRouter();

  const [mobile, setMobile] = useState(false);
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
    <div className={styles.Wrapper}>
      <div className={styles.left}>
        <h1 className={dark ? styles.darkH1 : styles.head}>
          {title} <br />
          {tag ? <br /> : null}
          <span style={spanStyle}>
            {titleSpan}

            <span className={styles.gSpan}>
              MAAN
              <FcGoogle className={styles.gIcon} />
            </span>
          </span>
          {titleText === "" ? "" : titleText}
        </h1>
        {tag ? (
          <p className={styles.skewP}>{desc}</p>
        ) : (
          <p className={dark ? styles.darkP : styles.p}>{desc}</p>
        )}

        {dark || lightNew ? (
          <div className={styles.profile}>
            <Image
              src={profileImg}
              width={profileImgW}
              height={profileImgH}
              layout="intrinsic"
              alt="header"
            />
          </div>
        ) : (
          ""
        )}

        {/* {tag ? (
          ""
        ) : (
          <div className={dark ? styles.EventInfos : styles.EventInfo}>
            <div className={styles.lefts}>
              <BsCalendarCheck className={styles.eIcon} />
              <p>{eventDate}</p>
            </div>
            <div className={styles.line} />

            <div className={styles.rights}>
              <AiOutlineClockCircle className={styles.eIcon} />
              <p>{eventTime}</p>
            </div>
          </div>
        )} */}

        {mobile && tag ? (
          <img
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/event/dhaval-dave-2-nov-date-image.webp"
            width="151"
            style={{ marginLeft: "20px", marginTop: "30px" }}
          />
        ) : (
          <div className={dark ? styles.EventInfos : styles.EventInfo}>
            <div className={styles.lefts}>
              <BsCalendarCheck className={styles.eIcon} />
              <p>{eventDate}</p>
            </div>
            <div className={styles.line} />

            <div className={styles.rights}>
              <AiOutlineClockCircle className={styles.eIcon} />
              <p>{eventTime}</p>
            </div>
          </div>
        )}
        {desc1 === "" ? (
          ""
        ) : (
          <p className={dark ? styles.darkP : styles.p}>
            <Image src={imgSrc1} width="28" height="28" alt="announcement" />
            {desc1.part1}
            <span className={styles.surprise}> {desc1.desc1Bold} </span>
            {desc1.desc1h}{" "}
            <span className={styles.surprise}>{desc1.desc1Bold2} </span>{" "}
          </p>
        )}
        {dark || lightNew ? (
          ""
        ) : (
          <div className={styles.img}>
            {mobile ? (
              <Image src={imgSrc} width="90" height="42" layout="intrinsic" />
            ) : (
              ""
            )}
          </div>
        )}
      </div>

      <div className={styles.middle}></div>
    </div>
  );
};
