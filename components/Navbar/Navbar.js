import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  MdOutlineArrowForward,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";
import { RiWhatsappFill } from "react-icons/ri";
import MegaMenu from "../MegaMenu/MegaMenu";
import ContactForm from "../ContactusForm/ContactusForm";

const Navbar = ({
  dataScience,
  course,
  redirectDs,
  redirectFs,
  redirectDe,
  redirectBa,
  redirectBl,
  event,
}) => {
  const [show, setShow] = useState(false);
  const [icon, setIcon] = useState(false);
  const [popups, setPopups] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  });

  const popupShow = () => {
    setPopups(true);
  };
  const showMenu = () => {
    setShow(!show);
  };
  const handleIcon = (data) => {
    setIcon(data);
  };

  return (
    <div>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <p>Fill the below Details to get started</p>
          {course ? (
            <Form
              popup={true}
              setTrigger={setPopups}
              dataScience={dataScience}
              redirectDs={redirectDs}
              redirectFs={redirectFs}
              redirectBa={redirectBa}
              redirectBl={redirectBl}
              redirectDe={redirectDe}
            />
          ) : (
            <ContactForm setTrigger={setPopups} popup={true} />
          )}
        </div>
      </Popup>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <GiHamburgerMenu
            className={styles.ham}
            onClick={() => {
              showMenu();
              setIcon(false);
            }}
          />
          <div className={show ? styles.mobileWrapper : styles.hide}>
            <div className={styles.mobileMenu}>
              <span onClick={showMenu}>
                <Link href="/event">Events</Link>
              </span>
              <span onClick={showMenu}>
                <Link href="/About">About Us</Link>
              </span>

              <span onClick={showMenu}>
                <Link href="/Contact-us">Contact Us</Link>
              </span>

              <span onClick={showMenu}>
                <a href="https://blog.skillslash.com/">Blog</a>
              </span>
            </div>
          </div>
          <a href="/">
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Skillslash-logo-new.png"
              alt="Skillslash"
              quality={100}
              objectFit="contain"
              width={mobile ? "140px" : "180px"}
              height="60px"
            />
          </a>
          <button
            onMouseEnter={() => setIcon(true)}
            onMouseOver={() => setIcon(true)}
            onClick={() => {
              setIcon(!icon);
              setShow(false);
            }}
            className={styles.MegaBtn}
          >
            Our Courses
            {icon ? (
              <MdKeyboardArrowUp className={styles.bIcon} />
            ) : (
              <MdKeyboardArrowDown className={styles.bIcon} />
            )}
          </button>
          {icon ? (
            <div
              className="megaMenu"
              onMouseOver={() => setIcon(true)}
              onMouseLeave={() => setIcon(false)}
            >
              <MegaMenu handleIcon={handleIcon} />
            </div>
          ) : (
            ""
          )}
          <button onClick={popupShow} className={styles.mbtn}>
            Apply Now
          </button>
        </div>
        <div className={styles.right}>
          {event ? (
            <>
              <span>
                <Link href="#Feature">Program Features</Link>
              </span>

              <span>
                <Link href="#who">Who can join</Link>
              </span>
              <span>
                <Link href="#About">About us</Link>
              </span>
            </>
          ) : (
            <>
              {" "}
              <span>
                <Link href="/event">Events</Link>
              </span>
              <span>
                <Link href="/About">About us</Link>
              </span>
              <span>
                <Link href="/Contact-us">Contact us</Link>
              </span>
              <span>
                <a href="https://blog.skillslash.com/">Blog</a>
              </span>
              <button onClick={popupShow}>
                Apply Now <MdOutlineArrowForward />
              </button>
            </>
          )}
        </div>
      </nav>
      {/* <main className={styles.TopBar}>
        INR 10,000/- Cashback** For the 1st 10 students ** Selective courses.
      </main> */}
    </div>
  );
};

export default Navbar;
