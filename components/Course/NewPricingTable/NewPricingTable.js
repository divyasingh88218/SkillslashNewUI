import React from "react";
import style from "./NewPricingTable.module.css";
const NewPricingTable = () => {
  return (
    <div className={style.wrapper}>
      <h4>Program Fee</h4>
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
            <button className={style.btn}>Apply Now</button>
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
            <button className={style.btn}>Apply Now</button>
          </div>
        </div>
      </div>

      <button className={style.btnBottom}>Pro vs Pro-Max</button>
    </div>
  );
};

export default NewPricingTable;
