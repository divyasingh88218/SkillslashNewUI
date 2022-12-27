import React, { useState } from "react";
import styles from "./EventTab.module.css";
import Image from "next/image";
import Link from "next/link";
import { BiTime } from "react-icons/bi";
import { MdEvent } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
const EventTab = ({ data }) => {
  const [viewAll, setViewAll] = useState(false);
  const [dataScience, setDataScience] = useState(false);
  const [fullstack, setFullstack] = useState(true);

  const dataScienceDetails = data.filter((post) => post.tag === "Data science");
  const FullStackDetails = data.filter((post) => post.tag === "Fullstack");

  return (
    <div className={styles.Course} id="course">
      <div className={styles.courses}>
        <div className={styles.listPanel}>
          <span
            onClick={() => {
              setViewAll(false);
              setDataScience(false);
              setFullstack(true);
            }}
            className={fullstack ? styles.ActiveSpan : styles.span}
          >
            Full Stack ({FullStackDetails.length})
          </span>
          {fullstack ? (
            <div className={styles.mPanel}>
              <div className={styles.gridPanel}>
                {FullStackDetails.map((data) => {
                  const {
                    id,
                    title,
                    eventDate,
                    eventTime,
                    Duration,
                    eventEnd,
                    register,
                    img,
                  } = data;
                  let today = new Date();
                  let eventDateInfo = new Date(eventEnd);

                  const compare = today > eventDateInfo;

                  const url = `/event/${id}`;
                  return (
                    <div className={styles.leftSide} key={id}>
                      <Link href={url} passHref>
                        <div className={styles.contentBox}>
                          <div className={styles.headImg}>
                            <Image
                              alt={title}
                              src={img}
                              layout="intrinsic"
                              width="641"
                              height="190"
                            />
                          </div>
                          <div className={styles.contentI}>
                            <h6>{title}</h6>
                            <p>
                              {" "}
                              <BiTime className={styles.eIcon} />
                              <strong>Start time:</strong> {eventTime}
                            </p>
                            <p>
                              <MdEvent className={styles.eIcon} />
                              <strong>Start date:</strong> {eventDate}
                            </p>
                            <p>
                              <AiOutlineFieldTime className={styles.eIcon} />
                              <strong>Duration:</strong> {Duration}
                            </p>
                            <div className={styles.line} />
                            <div className={styles.footer}>
                              <p>
                                <strong>{register}</strong> people have
                                registered
                              </p>

                              {compare ? (
                                <span
                                  className={styles.expire}
                                  style={{ marginTop: "10px" }}
                                >
                                  Event Ended
                                </span>
                              ) : (
                                <button>
                                  <Link href={url} passHref>
                                    Register Now
                                  </Link>
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}
          <span
            onClick={() => {
              setViewAll(false);
              setDataScience(true);
              setFullstack(false);
            }}
            className={dataScience ? styles.ActiveSpan : styles.span}
          >
            Data Science ({dataScienceDetails.length + 2})
          </span>
          {dataScience ? (
            <div className={styles.mPanel}>
              <div className={styles.gridPanel}>
                {dataScience ? (
                  <div className={styles.gridPanel}>
                    {dataScienceDetails.map((data) => {
                      const {
                        id,
                        title,
                        eventDate,
                        eventTime,
                        Duration,
                        register,
                        eventEnd,
                        img,
                      } = data;
                      let today = new Date();
                      let eventDateInfo = new Date(eventEnd);
                      const compare = today > eventDateInfo;
                      const url = `/event/${id}`;
                      return (
                        <div className={styles.leftSide} key={id}>
                          <Link href={url} passHref>
                            <div className={styles.contentBox}>
                              <div className={styles.headImg}>
                                <Image
                                  alt={title}
                                  src={img}
                                  layout="intrinsic"
                                  width="641"
                                  height="190"
                                />
                              </div>
                              <div className={styles.contentI}>
                                <h6>{title}</h6>
                                <p>
                                  {" "}
                                  <BiTime className={styles.eIcon} />
                                  <strong>Start time:</strong> {eventTime}
                                </p>
                                <p>
                                  <MdEvent className={styles.eIcon} />
                                  <strong>Start date:</strong> {eventDate}
                                </p>
                                <p>
                                  <AiOutlineFieldTime
                                    className={styles.eIcon}
                                  />
                                  <strong>Duration:</strong> {Duration}
                                </p>
                                <div className={styles.line} />
                                <div className={styles.footer}>
                                  <p>
                                    <strong>{register}</strong> people have
                                    registered
                                  </p>
                                  {compare ? (
                                    <span
                                      className={styles.expire}
                                      style={{ marginTop: "10px" }}
                                    >
                                      Event Ended
                                    </span>
                                  ) : (
                                    <button>
                                      <Link href={url} passHref>
                                        Register Now
                                      </Link>
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
                <div className={styles.leftSide}>
                  <div className={styles.contentBox}>
                    <div className={styles.headImg}>
                      <Image
                        alt="NodeJS Event"
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/event/python-workshop-9-august-2022.webp"
                        layout="intrinsic"
                        width="641"
                        height="190"
                      />
                    </div>
                    <div className={styles.contentI}>
                      <h6>
                        Understanding The Concepts Of Python For Data Science
                      </h6>
                      <p>
                        <BiTime className={styles.eIcon} />{" "}
                        <strong>Start time:</strong>
                        6:00 PM to 8:00 PM
                      </p>
                      <p>
                        <MdEvent className={styles.eIcon} />{" "}
                        <strong>Start date:</strong> 9th August 2022
                      </p>
                      <p>
                        <AiOutlineFieldTime className={styles.eIcon} />
                        <strong>Duration:</strong> 4 Hours
                      </p>
                      <div className={styles.line} />
                      <div className={styles.footer}>
                        <p>
                          <strong>3245</strong> people have registered
                        </p>

                        <span
                          className={styles.expire}
                          style={{ marginTop: "10px" }}
                        >
                          Event Ended
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.leftSide}>
                  <div className={styles.contentBox}>
                    <div className={styles.headImg}>
                      <Image
                        alt="NodeJS Event"
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/event/SQL-workshop-26th-july-2022.webp"
                        layout="intrinsic"
                        width="641"
                        height="190"
                      />
                    </div>
                    <div className={styles.contentI}>
                      <h6>
                        Learn Fundamentals Of SQL With Practical Implementations{" "}
                      </h6>
                      <p>
                        <BiTime className={styles.eIcon} />{" "}
                        <strong>Start time:</strong>
                        6:00 PM to 8:00 PM
                      </p>
                      <p>
                        <MdEvent className={styles.eIcon} />{" "}
                        <strong>Start date:</strong> 26th July 2022
                      </p>
                      <p>
                        <AiOutlineFieldTime className={styles.eIcon} />
                        <strong>Duration:</strong> 4 Hours
                      </p>
                      <div className={styles.line} />
                      <div className={styles.footer}>
                        <p>
                          <strong>1545</strong> people have registered
                        </p>

                        <span
                          className={styles.expire}
                          style={{ marginTop: "10px" }}
                        >
                          Event Ended
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <span
            onClick={() => {
              setViewAll(true);
              setDataScience(false);
              setFullstack(false);
            }}
            className={viewAll ? styles.ActiveSpan : styles.span}
          >
            View All ({data.length + 2})
          </span>
          {viewAll ? (
            <div className={styles.mPanel}>
              <div className={styles.gridPanel}>
                {data.map((data) => {
                  const {
                    id,
                    title,
                    eventDate,
                    eventTime,
                    Duration,
                    eventEnd,
                    register,
                    img,
                  } = data;
                  let today = new Date();
                  let eventDateInfo = new Date(eventEnd);
                  const compare = today > eventDateInfo;
                  const url = `/event/${id}`;
                  return (
                    <div className={styles.leftSide} key={id}>
                      <Link href={url} passHref>
                        <div className={styles.contentBox}>
                          <div className={styles.headImg}>
                            <Image
                              alt={title}
                              src={img}
                              layout="intrinsic"
                              width="641"
                              height="190"
                            />
                          </div>
                          <div className={styles.contentI}>
                            <h6>{title}</h6>
                            <p>
                              {" "}
                              <BiTime className={styles.eIcon} />
                              <strong>Start time:</strong> {eventTime}
                            </p>
                            <p>
                              <MdEvent className={styles.eIcon} />
                              <strong>Start date:</strong> {eventDate}
                            </p>
                            <p>
                              <AiOutlineFieldTime className={styles.eIcon} />
                              <strong>Duration:</strong> {Duration}
                            </p>
                            <div className={styles.line} />
                            <div className={styles.footer}>
                              <p>
                                <strong>{register}</strong> people have
                                registered
                              </p>
                              {compare ? (
                                <span
                                  className={styles.expire}
                                  style={{ marginTop: "10px" }}
                                >
                                  Event Ended
                                </span>
                              ) : (
                                <button>
                                  <Link href={url} passHref>
                                    Register Now
                                  </Link>
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
                <div className={styles.leftSide}>
                  <div className={styles.contentBox}>
                    <div className={styles.headImg}>
                      <Image
                        alt="NodeJS Event"
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/event/python-workshop-9-august-2022.webp"
                        layout="intrinsic"
                        width="641"
                        height="190"
                      />
                    </div>
                    <div className={styles.contentI}>
                      <h6>
                        Understanding The Concepts Of Python For Data Science
                      </h6>
                      <p>
                        <BiTime className={styles.eIcon} />{" "}
                        <strong>Start time:</strong>
                        6:00 PM to 8:00 PM
                      </p>
                      <p>
                        <MdEvent className={styles.eIcon} />{" "}
                        <strong>Start date:</strong> 9th August 2022
                      </p>
                      <p>
                        <AiOutlineFieldTime className={styles.eIcon} />
                        <strong>Duration:</strong> 4 Hours
                      </p>
                      <div className={styles.line} />
                      <div className={styles.footer}>
                        <p>
                          <strong>3245</strong> people have registered
                        </p>

                        <span
                          className={styles.expire}
                          style={{ marginTop: "10px" }}
                        >
                          Event Ended
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.leftSide}>
                  <div className={styles.contentBox}>
                    <div className={styles.headImg}>
                      <Image
                        alt="NodeJS Event"
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/event/SQL-workshop-26th-july-2022.webp"
                        layout="intrinsic"
                        width="641"
                        height="190"
                      />
                    </div>
                    <div className={styles.contentI}>
                      <h6>
                        Learn Fundamentals Of SQL With Practical Implementations{" "}
                      </h6>
                      <p>
                        <BiTime className={styles.eIcon} />{" "}
                        <strong>Start time:</strong>
                        6:00 PM to 8:00 PM
                      </p>
                      <p>
                        <MdEvent className={styles.eIcon} />{" "}
                        <strong>Start date:</strong> 26th July 2022
                      </p>
                      <p>
                        <AiOutlineFieldTime className={styles.eIcon} />
                        <strong>Duration:</strong> 4 Hours
                      </p>
                      <div className={styles.line} />
                      <div className={styles.footer}>
                        <p>
                          <strong>1545</strong> people have registered
                        </p>

                        <span
                          className={styles.expire}
                          style={{ marginTop: "10px" }}
                        >
                          Event Ended
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={styles.middlePanel}>
          {viewAll ? (
            <>
              <div className={styles.gridPanel}>
                {data.map((data) => {
                  const {
                    id,
                    title,
                    eventDate,
                    eventTime,
                    Duration,
                    eventEnd,
                    register,
                    img,
                  } = data;
                  let today = new Date();
                  let eventDateInfo = new Date(eventEnd);
                  const compare = today > eventDateInfo;
                  const url = `/event/${id}`;
                  return (
                    <div className={styles.leftSide} key={id}>
                      <Link href={url} passHref>
                        <div className={styles.contentBox}>
                          <div className={styles.headImg}>
                            <Image
                              alt={title}
                              src={img}
                              layout="intrinsic"
                              width="641"
                              height="190"
                            />
                          </div>
                          <div className={styles.contentI}>
                            <h6>{title}</h6>
                            <p>
                              {" "}
                              <BiTime className={styles.eIcon} />
                              <strong>Start time:</strong> {eventTime}
                            </p>
                            <p>
                              <MdEvent className={styles.eIcon} />
                              <strong>Start date:</strong> {eventDate}
                            </p>
                            <p>
                              <AiOutlineFieldTime className={styles.eIcon} />
                              <strong>Duration:</strong> {Duration}
                            </p>
                            <div className={styles.line} />
                            <div className={styles.footer}>
                              <p>
                                <strong>{register}</strong> people have
                                registered
                              </p>
                              {compare ? (
                                <span
                                  className={styles.expire}
                                  style={{ marginTop: "10px" }}
                                >
                                  Event Ended
                                </span>
                              ) : (
                                <button>
                                  <Link href={url} passHref>
                                    Register Now
                                  </Link>
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
                <div className={styles.leftSide}>
                  <div className={styles.contentBox}>
                    <div className={styles.headImg}>
                      <Image
                        alt="NodeJS Event"
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/event/python-workshop-9-august-2022.webp"
                        layout="intrinsic"
                        width="641"
                        height="190"
                      />
                    </div>
                    <div className={styles.contentI}>
                      <h6>
                        Understanding The Concepts Of Python For Data Science
                      </h6>
                      <p>
                        <BiTime className={styles.eIcon} />{" "}
                        <strong>Start time:</strong>
                        6:00 PM to 8:00 PM
                      </p>
                      <p>
                        <MdEvent className={styles.eIcon} />{" "}
                        <strong>Start date:</strong> 9th August 2022
                      </p>
                      <p>
                        <AiOutlineFieldTime className={styles.eIcon} />
                        <strong>Duration:</strong> 4 Hours
                      </p>
                      <div className={styles.line} />
                      <div className={styles.footer}>
                        <p>
                          <strong>3245</strong> people have registered
                        </p>

                        <span
                          className={styles.expire}
                          style={{ marginTop: "10px" }}
                        >
                          Event Ended
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.leftSide}>
                  <div className={styles.contentBox}>
                    <div className={styles.headImg}>
                      <Image
                        alt="NodeJS Event"
                        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/event/SQL-workshop-26th-july-2022.webp"
                        layout="intrinsic"
                        width="641"
                        height="190"
                      />
                    </div>
                    <div className={styles.contentI}>
                      <h6>
                        Learn Fundamentals Of SQL With Practical Implementations{" "}
                      </h6>
                      <p>
                        <BiTime className={styles.eIcon} />{" "}
                        <strong>Start time:</strong>
                        6:00 PM to 8:00 PM
                      </p>
                      <p>
                        <MdEvent className={styles.eIcon} />{" "}
                        <strong>Start date:</strong> 26th July 2022
                      </p>
                      <p>
                        <AiOutlineFieldTime className={styles.eIcon} />
                        <strong>Duration:</strong> 4 Hours
                      </p>
                      <div className={styles.line} />
                      <div className={styles.footer}>
                        <p>
                          <strong>1545</strong> people have registered
                        </p>

                        <span
                          className={styles.expire}
                          style={{ marginTop: "10px" }}
                        >
                          Event Ended
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          {fullstack ? (
            <>
              <div className={styles.gridPanel}>
                {FullStackDetails.map((data) => {
                  const {
                    id,
                    title,
                    eventDate,
                    eventTime,
                    Duration,
                    eventEnd,
                    register,
                    img,
                  } = data;
                  let today = new Date();
                  let eventDateInfo = new Date(eventEnd);
                  const compare = today > eventDateInfo;
                  const url = `/event/${id}`;
                  return (
                    <div className={styles.leftSide} key={id}>
                      <Link href={url} passHref>
                        <div className={styles.contentBox}>
                          <div className={styles.headImg}>
                            <Image
                              alt={title}
                              src={img}
                              layout="intrinsic"
                              width="641"
                              height="190"
                            />
                          </div>
                          <div className={styles.contentI}>
                            <h6>{title}</h6>
                            <p>
                              {" "}
                              <BiTime className={styles.eIcon} />
                              <strong>Start time:</strong> {eventTime}
                            </p>
                            <p>
                              <MdEvent className={styles.eIcon} />
                              <strong>Start date:</strong> {eventDate}
                            </p>
                            <p>
                              <AiOutlineFieldTime className={styles.eIcon} />
                              <strong>Duration:</strong> {Duration}
                            </p>
                            <div className={styles.line} />
                            <div className={styles.footer}>
                              <p>
                                <strong>{register}</strong> people have
                                registered
                              </p>
                              {compare ? (
                                <span
                                  className={styles.expire}
                                  style={{ marginTop: "10px" }}
                                >
                                  Event Ended
                                </span>
                              ) : (
                                <button>
                                  <Link href={url} passHref>
                                    Register Now
                                  </Link>
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            ""
          )}
          {dataScience ? (
            <div className={styles.gridPanel}>
              {dataScienceDetails.map((data) => {
                const {
                  id,
                  title,
                  eventDate,
                  eventTime,
                  Duration,
                  eventEnd,
                  register,
                  img,
                } = data;
                let today = new Date();
                let eventDateInfo = new Date(eventEnd);
                const compare = today > eventDateInfo;
                const url = `/event/${id}`;
                return (
                  <div className={styles.leftSide} key={id}>
                    <div className={styles.headImg}>
                      <Image
                        alt={title}
                        src={img}
                        layout="intrinsic"
                        width="641"
                        height="190"
                      />
                    </div>
                    <Link href={url} passHref>
                      <div className={styles.contentBox}>
                        <h6>{title}</h6>
                        <p>
                          {" "}
                          <BiTime className={styles.eIcon} />
                          <strong>Start time:</strong> {eventTime}
                        </p>
                        <p>
                          <MdEvent className={styles.eIcon} />
                          <strong>Start date:</strong> {eventDate}
                        </p>
                        <p>
                          <AiOutlineFieldTime className={styles.eIcon} />
                          <strong>Duration:</strong> {Duration}
                        </p>
                        <div className={styles.line} />
                        <div className={styles.footer}>
                          <p>
                            <strong>{register}</strong> people have registered
                          </p>
                          {compare ? (
                            <span
                              className={styles.expire}
                              style={{ marginTop: "10px" }}
                            >
                              Event Ended
                            </span>
                          ) : (
                            <button>
                              <Link href={url} passHref>
                                Register Now
                              </Link>
                            </button>
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
              <div className={styles.leftSide}>
                <div className={styles.contentBox}>
                  <div className={styles.headImg}>
                    <Image
                      alt="NodeJS Event"
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/event/python-workshop-9-august-2022.webp"
                      layout="intrinsic"
                      width="641"
                      height="190"
                    />
                  </div>
                  <div className={styles.contentI}>
                    <h6>
                      Understanding The Concepts Of Python For Data Science
                    </h6>
                    <p>
                      <BiTime className={styles.eIcon} />{" "}
                      <strong>Start time:</strong>
                      6:00 PM to 8:00 PM
                    </p>
                    <p>
                      <MdEvent className={styles.eIcon} />{" "}
                      <strong>Start date:</strong> 9th August 2022
                    </p>
                    <p>
                      <AiOutlineFieldTime className={styles.eIcon} />
                      <strong>Duration:</strong> 4 Hours
                    </p>
                    <div className={styles.line} />
                    <div className={styles.footer}>
                      <p>
                        <strong>3245</strong> people have registered
                      </p>

                      <span
                        className={styles.expire}
                        style={{ marginTop: "10px" }}
                      >
                        Event Ended
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.leftSide}>
                <div className={styles.contentBox}>
                  <div className={styles.headImg}>
                    <Image
                      alt="NodeJS Event"
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/event/SQL-workshop-26th-july-2022.webp"
                      layout="intrinsic"
                      width="641"
                      height="190"
                    />
                  </div>
                  <div className={styles.contentI}>
                    <h6>
                      Learn Fundamentals Of SQL With Practical Implementations{" "}
                    </h6>
                    <p>
                      <BiTime className={styles.eIcon} />{" "}
                      <strong>Start time:</strong>
                      6:00 PM to 8:00 PM
                    </p>
                    <p>
                      <MdEvent className={styles.eIcon} />{" "}
                      <strong>Start date:</strong> 26th July 2022
                    </p>
                    <p>
                      <AiOutlineFieldTime className={styles.eIcon} />
                      <strong>Duration:</strong> 4 Hours
                    </p>
                    <div className={styles.line} />
                    <div className={styles.footer}>
                      <p>
                        <strong>1545</strong> people have registered
                      </p>

                      <span
                        className={styles.expire}
                        style={{ marginTop: "10px" }}
                      >
                        Event Ended
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default EventTab;
