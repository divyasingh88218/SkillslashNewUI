import React, { useState, useEffect } from "react";
import styles from "./BatchDetails.module.css";
import { IoCalendarOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";

function BatchDetails({
  BatchHeader,
  weekEndBatch,
  weekDayBatch,
  weekDayBatchDate,
  weekEndBatchDate,
  weekDayBatchDate1,
  weekEndBatchDate1,
  weekDayBatchTime,
  weekDayBatchTime1,
  dataScience,
  weekEndBatchTime,
  weekEndBatchTime1,
  redirectDs,
  redirectFs,
  redirectDSA,
  redirectDe,
  redirectBa,
  redirectBl,
  BatchName1,
  BatchName2,
  BatchName3,
}) {
  const [popups, setPopups] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 641) {
      setMobile(true);
    }
  });
  const popupShow = () => {
    setPopups(true);
  };
  return (
    <section className={styles.BatchDetails}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <p>Fill the below Details to get started</p>
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
        </div>
      </Popup>
      <div>
        <p className="pTop">Batch Details</p>
        <h4>Program Cohorts</h4>
        <div className={styles.Batchp}>
          <p className={styles.BHeader}>{BatchHeader}</p>

          <div className={styles.hrLine} />

          <div className={styles.BatchI}>
            <div>
              <div className={styles.BatchType}>
                <br />

                {weekDayBatch && BatchName1 != "" ? (
                  <p
                    style={{
                      fontWeight: "600",
                      margin: "0",
                      marginTop: "30px",
                      marginBottom: "10px",
                      color: "#FF0000",
                    }}
                  >
                    <RiNumber1 className={styles.icons} />
                    {BatchName1}
                  </p>
                ) : (
                  ""
                )}
                {weekEndBatch && BatchName2 != "" ? (
                  <p
                    style={
                      redirectDs ||
                      redirectBa ||
                      dataScience ||
                      redirectFs ||
                      redirectDSA
                        ? {
                            marginTop: "40px",
                            fontWeight: "600",
                            margin: "0",
                            color: "#676767",
                          }
                        : {
                            marginTop: "40px",
                            fontWeight: "600",
                            margin: "0",
                            color: "#FF0000",
                          }
                    }
                  >
                    <RiNumber2 className={styles.icons} />

                    {BatchName2}
                  </p>
                ) : (
                  ""
                )}
                {weekDayBatchDate1 ? (
                  <p
                    style={{
                      fontWeight: "600",
                      margin: "0",
                      marginTop: "10px",
                      color: "#FF0000",
                    }}
                  >
                    <RiNumber3 className={styles.icons} />

                    {BatchName3}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div>
              <div className={styles.details}>
                <p
                  className={styles.detailsHeading}
                  style={{ marginBottom: "20px" }}
                >
                  <IoCalendarOutline className="bIcon" />
                  Date
                </p>
                {weekDayBatch ? (
                  <p
                    style={
                      redirectDs ||
                      redirectBa ||
                      dataScience ||
                      redirectFs ||
                      redirectDSA
                        ? {
                            // marginTop: "40px",

                            margin: "0",
                            marginTop: "15px",
                            // color: "#676767",
                            color: "#FF0000",
                          }
                        : {
                            margin: "0",
                            marginTop: "10px",
                            color: "#676767",
                          }
                    }
                  >
                    {weekDayBatchDate}
                  </p>
                ) : (
                  ""
                )}

                {weekEndBatch ? (
                  <p
                    style={
                      redirectDs || redirectBa || dataScience || redirectFs
                        ? {
                            margin: "0",
                            marginTop: "10px",
                            color: "#676767",
                          }
                        : {
                            margin: "0",
                            marginTop: "10px",
                            color: "#676767",
                          }
                    }
                  >
                    {weekEndBatchDate}
                  </p>
                ) : (
                  ""
                )}
                {dataScience ||
                redirectDs ||
                redirectFs ||
                redirectBa ||
                redirectDSA ? (
                  <>
                    <p
                      style={{
                        color: "#FF0000",
                        margin: 0,
                        marginTop: "10px",
                      }}
                    >
                      {weekDayBatchDate1}
                    </p>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div>
              <div className={styles.details}>
                <p
                  className={styles.detailsHeading}
                  style={{ marginBottom: "20px" }}
                >
                  <AiOutlineClockCircle className="bIcon" />
                  Time
                </p>
                {weekDayBatch ? (
                  <p
                    style={
                      redirectDs || redirectBa || dataScience || redirectFs
                        ? {
                            // marginTop: "40px",

                            // margin: "0",
                            color: "#FF0000",
                          }
                        : {
                            // marginTop: "40px",
                            // margin: "0",
                            color: "#676767",
                          }
                    }
                  >
                    {weekDayBatchTime}
                  </p>
                ) : (
                  ""
                )}
                {weekEndBatch ? (
                  <p
                    style={{
                      marginTop: "40px",
                      margin: "0",
                      color: "#FF0000",
                    }}
                  >
                    {weekEndBatchTime}
                  </p>
                ) : (
                  ""
                )}
                {dataScience ||
                redirectDs ||
                redirectFs ||
                redirectBa ||
                redirectDSA ? (
                  <>
                    <p
                      style={{
                        color: "#676767",
                        margin: "0",
                        marginTop: "10px",
                      }}
                    >
                      {weekDayBatchTime1}
                    </p>
                    <p
                      style={{
                        color: "#FF0000",
                        margin: "0",
                        marginTop: "10px",
                      }}
                    >
                      {weekEndBatchTime1}
                    </p>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div>
              <div className={styles.details}>
                <p
                  className={styles.detailsHeading}
                  style={{ marginBottom: "20px" }}
                >
                  <AiOutlineUnorderedList className="bIcon" />
                  Batch Type
                </p>
                <p
                  style={
                    redirectDs ||
                    redirectBa ||
                    dataScience ||
                    redirectFs ||
                    redirectDSA
                      ? {
                          // marginTop: "40px",

                          // margin: "0",
                          marginTop: "15px",
                          // color: "#676767",
                          color: "#FF0000",
                        }
                      : {
                          // marginTop: "40px",

                          // margin: "0",
                          color: "#676767",
                        }
                  }
                >
                  {BatchName1}
                </p>
                <p
                  style={
                    redirectDs ||
                    redirectBa ||
                    dataScience ||
                    redirectFs ||
                    redirectDSA
                      ? {
                          marginTop: "40px",

                          margin: "0",
                          color: "#676767",
                        }
                      : {
                          marginTop: "40px",

                          margin: "0",
                          color: "#FF0000",
                        }
                  }
                >
                  {BatchName2}
                </p>
                {weekDayBatchDate1 ? (
                  <p
                    style={{
                      margin: "0",
                      marginTop: "10px",
                      color: "#FF0000",
                    }}
                  >
                    {BatchName3}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div>
              <div>
                {mobile && BatchName2 === "" ? (
                  ""
                ) : (
                  <>
                    <br />
                    <br />
                    <br />
                    <br />
                  </>
                )}

                <button className={styles.button} onClick={popupShow}>
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BatchDetails;
