import style from "./NewPricingTable.module.css";
import React, { useEffect, useState } from "react";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
const NewPricingTable = ({
  changeFee,
  desc,
  desc1,
  BasicPrice,
  BasicDesc,
  ProPrice,
  ProDesc,
  ProMaxPrice,
  ProMaxDesc,
  dataScience,
  redirectDSA,
  redirectDs,
  redirectFs,
  redirectDe,

  redirectBl,
  redirectBa,

  redirectWeb,

  redirectAI,
  price,
  emi,
  price1,
  emi1,
}) => {
  const [popups, setPopups] = useState(false);
  const [changeText, setChangeText] = useState(false);
  const [heading, setHeading] = useState("Apply For Counselling");

  const popupShow = (pro, proMax, changeText) => {
    setChangeText(changeText);
    if (pro) setHeading("Apply for Pro");
    if (proMax) setHeading("Apply for Pro-Max");
    setPopups(true);
  };

  return (
    <div className={style.wrapper}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          {changeText ? (
            <h4>Compare difference between Pro and Pro-Max course</h4>
          ) : (
            <h5>{heading}</h5>
          )}

          <p>Fill the below Details to get started</p>
          <Form
            popup={true}
            setTrigger={setPopups}
            dataScience={redirectDs}
            changeText={changeText}
            redirectDs={redirectDs}
            redirectFs={redirectFs}
            redirectBa={redirectBa}
            redirectBl={redirectBl}
            redirectDe={redirectDe}
            redirectDSA={redirectDSA}
            redirectWeb={redirectWeb}
            redirectAI={redirectAI}
          />
        </div>
      </Popup>
      <h5>Program Fee</h5>
      <div className={style.wrapperPara}>
        <p>
          We are driven by the idea of program affordability. So, we give
          several financial options to manage and budget the expenses of your
          upskilling.
        </p>
      </div>

      <div className={style.wrapperCard}>
        <span>Pro</span>
        <div className={style.Fee}>
          <p>Program Fees</p>
          <p>
            <b>₹ 59,000 + GST</b>
          </p>
        </div>
        <hr />
        <div className={style.Apply}>
          <div className={style.Fee}>
            <p>
              EMI starting from:
              <span>
                <b>₹ 5,801/month</b>
              </span>
            </p>
            <button
              className={style.btn}
              onClick={() => popupShow(true, false, false)}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <div className={style.wrapperCard}>
        <span>Pro-Max</span>
        <div className={style.Fee}>
          <p> Program Fees</p>

          <p>
            <b>₹ 59,000 + GST</b>
          </p>
        </div>
        <hr />
        <div className={style.Apply}>
          <div className={style.Fee}>
            <p>
              EMI Starting from:
              <span>
                <b>₹ 5,801/month</b>
              </span>
            </p>
            <button
              className={style.btn}
              onClick={() => popupShow(false, true, false)}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <button
        className={style.btnBottom}
        onClick={() => popupShow(false, false, true)}
      >
        Pro vs Pro-Max
      </button>
    </div>
  );
};

export default NewPricingTable;
