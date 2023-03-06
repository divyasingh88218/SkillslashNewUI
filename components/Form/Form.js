import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useRouter } from "next/router";
import { BsArrowRightCircleFill } from "react-icons/bs";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import addDays from "date-fns/addDays";
import subDays from "date-fns/subDays";
import getDay from "date-fns/getDay";

const Form = ({
  popup,
  redirectZoom,
  link,
  setTrigger,
  downloadBrochure,
  event,
  dataScience,
  redirectDs,
  redirectFs,
  redirectDe,
  redirectBa,
  redirectBl,
  redirectWd,
  syllabus,
  redirectDSA,
}) => {
  const router = useRouter();
  const [startDate, setStartDate] = useState();
  let today = new Date();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  //offset to maintain time zone difference
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState();
  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
    workExperience: "",
    dateTime: "",
    url: router.asPath,
  });

  useEffect(() => {
    setQuery({ ...query, phone: value, dateTime: startDate });
  }, [value, startDate]);

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  let endPoint = "https://getform.io/f/f52ff3a0-cf37-4e7e-9bb7-27786de78fd7";
  if (event) {
    endPoint = "https://getform.io/f/e0b3b3f6-1515-4536-aa9c-36af5d4196cd";
  }
  if (redirectFs || redirectDSA) {
    endPoint = "https://getform.io/f/e11a9831-3aef-43af-9b1a-93b36c58f7fb";
  }

  // Form Submit function
  const formSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log("submit");

    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    fetch(`${endPoint}`, {
      method: "POST",
      body: formData,
    }).then(() => {
      setQuery({
        name: "",
        email: "",
        phone: "",
        workExperience: "",
        dateTime: "",
        url: "",
      });
      setValue();
      setStartDate();
      setIsLoading(false);
    });

    if (popup) {
      const off = () => {
        setTrigger(false);
      };
      off();
    }

    if (dataScience) {
      router.push("/Thankyou/data-science");
      console.log(dataScience);
    }
    if (redirectDs) {
      router.push("/Thankyou/data-science");
    }
    if (redirectFs) {
      router.push("/Thankyou/full-stack");
    }
    if (redirectDSA) {
      router.push("/Thankyou/dsa");
    }
    if (redirectDe) {
      router.push("/Thankyou/data-engineering");
    }
    if (redirectBa) {
      router.push("/Thankyou/business-analytics");
      return;
    }
    if (redirectBl) {
      router.push("/Thankyou/blockchain");
      return;
    }
    if (redirectWd) {
      router.push("/Thankyou/blockchain");
      return;
    }

    if (event) {
      router.push(link);
    }
  };

  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0;
  };
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };
  let btnText = "Apply Now";
  if (event) {
    btnText = "Register Now";
  }
  return (
    <div className={styles.App}>
      <form onSubmit={formSubmit}>
        <div
          className={styles.formWrapper}
          style={event ? { width: "100%" } : { width: "80%" }}
        >
          <fieldset style={syllabus ? { color: "white" } : { color: "black" }}>
            <legend>Full Name*</legend>
            <input
              type="text"
              name="name"
              className={popup ? styles.NameInputs : styles.NameInput}
              style={syllabus ? { color: "white" } : { color: "black" }}
              required
              value={query.name}
              onChange={handleParam()}
            />
          </fieldset>
        </div>
        <div
          className={styles.formWrapper}
          style={event ? { width: "100%" } : { width: "80%" }}
        >
          <fieldset style={syllabus ? { color: "white" } : { color: "black" }}>
            <legend>Email*</legend>
            <input
              type="email"
              name="email"
              required
              style={syllabus ? { color: "white" } : { color: "black" }}
              className={popup ? styles.EmailInputs : styles.EmailInput}
              value={query.email}
              onChange={handleParam()}
            />
          </fieldset>
        </div>
        <div
          className={styles.formWrapper}
          style={event ? { width: "100%" } : { width: "80%" }}
        >
          <fieldset style={syllabus ? { color: "white" } : { color: "black" }}>
            <legend>Phone Number*</legend>
            <PhoneInput
              style={
                popup
                  ? {
                      height: "35px",
                      borderRadius: "8px",
                      color: "#646464",
                      padding: "10px",
                    }
                  : {
                      border: "0",
                      height: "35px",

                      borderRadius: "3px",
                    }
              }
              name="phone"
              rules={{ required: true }}
              defaultCountry="IN"
              className={
                popup
                  ? styles.Phones
                  : syllabus
                  ? styles.syllabusPhone
                  : styles.Phone
              }
              value={value}
              required
              onChange={setValue}
            />
          </fieldset>
        </div>
        <div
          className={popup ? styles.formWrappers : styles.formWrapper}
          style={event ? { width: "100%" } : { width: "80%" }}
        >
          <fieldset style={syllabus ? { color: "white" } : { color: "black" }}>
            <legend>Work Experience*</legend>
            <select
              name="workExperience"
              required
              style={syllabus ? { color: "white" } : { color: "black" }}
              value={query.workExperience}
              onChange={handleParam()}
            >
              <option value=""></option>
              {event ? (
                ""
              ) : (
                <option value="College Students">College Students</option>
              )}

              <option value="Fresher ( less than 1 year)">
                Fresher ( less than 1 year)
              </option>
              <option value="1 to 3 year">1 to 3 year</option>
              <option value="3 to 7 year">3 to 7 year</option>
              <option value="7 to 12 year">7 to 12 year</option>
              <option value="12+ year">12+ year</option>
            </select>
          </fieldset>
        </div>
        <input type="hidden" id="url" name="url" value={router.asPath}></input>
        {downloadBrochure || event ? (
          ""
        ) : (
          <div className={popup ? styles.formWrappers : styles.formWrapper}>
            <div className={styles.inner}>
              <fieldset
                style={syllabus ? { color: "white" } : { color: "black" }}
              >
                <legend>Schedule Date & Time*</legend>
                <DatePicker
                  selected={startDate}
                  name="dateTime"
                  id="dateTime"
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  timeIntervals={15}
                  includeDateIntervals={[
                    {
                      start: subDays(new Date(), 1),
                      end: addDays(new Date(), 5),
                    },
                  ]}
                  filterDate={isWeekday}
                  filterTime={filterPassedTime}
                  wrapperClassName={syllabus ? styles.dateS : styles.date}
                  className={styles.datePicker}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  required
                  popperPlacement="top"
                  popperModifiers={[
                    {
                      name: "offset",
                      options: {
                        offset: [5, 10],
                      },
                    },
                    {
                      name: "preventOverflow",
                      options: {
                        rootBoundary: "viewport",
                        tether: false,
                        altAxis: true,
                      },
                    },
                  ]}
                  minTime={setHours(setMinutes(new Date(), 0), 10)}
                  maxTime={setHours(setMinutes(new Date(), 0), 20)}
                />
              </fieldset>
            </div>
          </div>
        )}

        <p
          className={syllabus ? styles.FormTextS : styles.FormText}
          style={{ fontSize: "10px" }}
        >
          By submitting the form, you agree to our Terms and Conditions and our
          Privacy Policy.
        </p>
        {isLoading ? (
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        ) : (
          <button
            type="submit"
            className={syllabus ? styles.buttonS : styles.button}
          >
            {downloadBrochure ? "Download Now" : btnText}{" "}
            <BsArrowRightCircleFill />
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
