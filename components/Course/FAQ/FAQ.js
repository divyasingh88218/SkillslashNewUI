import React, { useState } from "react";
import styles from "./FAQ.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function FAQ({ FaqData, desc }) {
  const [state, setState] = useState(FaqData);

  const handleChange = (index) => {
    setState(
      state.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <section className={styles.FAQ}>
      <div className={styles.headWrap}>
        <h4 style={{ marginBottom: "20px" }}>Frequently Asked Questions</h4>

        <p className={styles.pBot} style={{ marginBottom: "20px" }}>
          {desc}
        </p>
      </div>
      <div className={styles.quesWrap}>
        {state.map((data, index) => {
          const { id, ques, ans, open, link, linkText, ansAfter, linkURL } =
            data;

          return (
            <div
              key={id}
              className={styles.FaqWrapper}
              onClick={() => handleChange(index)}
            >
              {open ? (
                <div className={styles.quesO}>
                  <h2>{ques}</h2>

                  <span>
                    {open ? (
                      <AiOutlineMinus className={styles.icon} />
                    ) : (
                      <AiOutlinePlus className={styles.icon} />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>{ques}</h2>

                  <span>
                    {open ? (
                      <AiOutlineMinus className={styles.icon} />
                    ) : (
                      <AiOutlinePlus className={styles.icon} />
                    )}
                  </span>
                </div>
              )}

              {open ? (
                <div className={styles.ans}>
                  {link ? (
                    <p>
                      {ans}

                      <a href={linkURL} target="_blank">
                        {linkText}
                      </a>
                      {ansAfter}
                    </p>
                  ) : (
                    <p>{ans}</p>
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;
