import React, { useState } from "react";
import {
  Modal,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  Input,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import clear from "../Photos/clear.png";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import axios from "axios";
import moment from "moment";

const Popup = ({ open, setOpen }) => {
  // console.log(offerName);
  const [email, setEmail] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [nameInvalid, setNameInvalid] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneInvalid, setPhoneInvalid] = useState(false);
  const [selected, setSelected] = useState([]);
  const [selectInvalid, setSelectInvalid] = useState(false);
  const [selectData, setSelectData] = useState([]);
  const [selectedArray, setSelectedArray] = useState([]);
  const [roomArray, setRoomArray] = useState([]);
  const [valid, setValid] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [show, setShow] = useState(false);

  // React.useEffect(() => {
  //   console.log("value: ", selected);
  // }, [selected]);

  const handleChange = (e) => {
    // setInvalid(false);
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        setNameInvalid(!e.target.validity.valid);
        break;
      case "email":
        setEmail(e.target.value);
        // setEmailInvalid(!e.target.validity.valid);
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
          // console.log("matched");
          setEmailInvalid(false);
        } else {
          setEmailInvalid(true);
        }
        break;
      case "phone":
        setPhone(e.target.value);
        // setPhoneInvalid(!e.target.validity.valid);
        if (/^[0-9]{10}$/.test(e.target.value)) {
          setPhoneInvalid(false);
        } else {
          setPhoneInvalid(true);
        }
        break;
      default:
        break;
    }
    setSelectInvalid(false);
    setInvalid(false);
  };

  const handleSelect = (e) => {
    setSelectData(e.target.value);
    setSelectInvalid(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected.length > 0) {
      setSelectInvalid(false);
    } else {
      setSelectInvalid(true);
    }
    if (
      !(nameInvalid || phoneInvalid || emailInvalid || selected.length === 0)
    ) {
      // console.log(
      //   "data: ",
      //   name,
      //   phone,
      //   email,
      //   date.toISOString(),
      //   "selected: ",
      //   selected
      // );
      setInvalid(false);
      setValid(true);
      setBtnLoading(true);
    }
  };

  React.useEffect(() => {
    async function fetchData() {
      await axios
        .get(`${process.env.REACT_APP_PUBLIC_URL}test-offers?populate=*`)
        .then((res) => {
          // console.log(res.data.data);
          // console.log("seleceetd: ", selected);
          setRoomArray(res.data.data);
        })
        .catch((err) => console.warn(err));
    }
    fetchData();
  }, []);

  React.useEffect(() => {
    if (roomArray.length > 0) {
      setSelectedArray(
        roomArray.map((doc) => ({
          value: doc.id,
          label: doc.attributes.name,
        }))
      );
      // setSelected(offerName);
      // console.log(offerName);
    }
  }, [roomArray, setRoomArray]);

  React.useEffect(() => {
    if (selectData.length > 0 && valid) {
      const form = {
        data: {
          name: name,
          mobile_number: phone,
          email: email,
          appointment_date: date.toISOString(),
          test_offers: selected,
        },
      };
      axios
        .post(`${process.env.REACT_APP_PUBLIC_URL}appointments`, form)
        .then((res) => {
          // console.log(res);
          setName("");
          setEmail("");
          setPhone("");
          setSelected([]);
          setSelectData([]);
          setShow(true);
          setOpen(false);
          setValid(false);
          setBtnLoading(false);
        })
        .catch((err) => {
          console.warn(err);
          setBtnLoading(false);
          setInvalid(true);
        });
    }
  }, [valid]);

  React.useEffect(() => {
    var common = [];
    selectedArray.map((doc) => {
      selectData.map((val) => {
        // console.log(doc.value === val, doc, val);
        if (doc.label === val) {
          // console.log("doc: ", doc.value);
          common.push(doc.value);
        }
      });
    });
    // console.log("coomon: ", common);
    setSelected([...common]);
  }, [selectData]);

  return (
    <>
      <Modal
        className="modalPop"
        open={open}
        onClose={() => {
          setName("");
          setEmail("");
          setPhone("");
          setSelected([]);
          setSelectData([]);
          setOpen(false);
        }}
      >
        <div className="popup">
          <form className="modalForm" onSubmit={handleSubmit}>
            <div className="head">
              <img
                className="img"
                src={clear}
                alt="cancel"
                onClick={() => {
                  setName("");
                  setEmail("");
                  setPhone("");
                  setSelected([]);
                  setSelectData([]);
                  setOpen(false);
                }}
              />
              <div className="title">
                <h2>BOOK AN APPOINTMENT</h2>
                <p>by filling in your details</p>
              </div>
            </div>
            {/* <div className={`textInput ${nameInvalid ? "errorInput" : ""}`}> */}
            <div className={`textInput`}>
              <input
                className="input"
                value={name}
                type="text"
                name="name"
                pattern="^(?! )[A-Za-z ]*(?<! )$"
                required
                autoComplete="off"
                onChange={handleChange}
              />
              <label htmlFor="name">
                Name <span style={{ color: "red" }}>*</span>
              </label>
              {nameInvalid ? (
                <p className="error-text">Please provide a valid name.</p>
              ) : null}
            </div>
            {/* <div className={`textInput ${emailInvalid ? "errorInput" : ""}`}> */}
            <div className={`textInput`}>
              <input
                className="input"
                value={email}
                type="email"
                name="email"
                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$"
                required
                onChange={handleChange}
              />
              <label htmlFor="email">
                Email <span style={{ color: "red" }}>*</span>
              </label>
              {emailInvalid ? (
                <p className="error-text">
                  We will need your email address to get in touch
                </p>
              ) : null}
            </div>
            {/* <div className={`textInput ${phoneInvalid ? "errorInput" : ""} `}> */}
            <div className={`textInput`}>
              <input
                className="input"
                value={phone}
                type="number"
                name="phone"
                // type="tel"
                inputMode="numeric"
                required
                autoComplete="off"
                onChange={handleChange}
              />
              <label htmlFor="phone">
                Phone No. <span style={{ color: "red" }}>*</span>
              </label>
              {phoneInvalid ? (
                <p className="error-text">
                  Please provide a valid 10 digit number.
                </p>
              ) : null}
            </div>
            {selectedArray.length > 0 ? (
              <div className="select">
                <label className={`${selectData.length > 0 ? "labTop" : ""}`}>
                  Select a Test/Package <span>*</span>
                </label>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={selectData}
                  multiple
                  onChange={handleSelect}
                  className={`${selectData.length > 0 ? "selTop" : ""}`}
                  label="Select offers"
                  input={<Input />}
                  renderValue={(selected) => selected.join(", ")}
                  // renderValue={
                  //   selectData.length > 0
                  //     ? undefined
                  //     : () => <em>Placeholder</em>
                  // }
                >
                  {selectedArray.map((doc, i) => (
                    <MenuItem value={doc.label} key={i}>
                      {/* {doc.label} */}
                      <Checkbox checked={selectData.indexOf(doc.label) > -1} />
                      <ListItemText primary={doc.label} />
                    </MenuItem>
                  ))}
                </Select>
                {selectInvalid ? (
                  <p className="error-text">Please select a test/package.</p>
                ) : null}
              </div>
            ) : null}
            <div className="date">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateTimePicker
                  disablePast={true}
                  label={`Select Date & Time *`}
                  minDate={new Date()}
                  inputVariant="outlined"
                  //   format="E, dd MMM"
                  value={date}
                  onChange={setDate}
                  animateYearScrolling
                />
              </MuiPickersUtilsProvider>
            </div>
            <div className="bottom">
              <button type="submit" className="btn" disabled={btnLoading}>
                Submit
              </button>
              {invalid ? <p className="error-text">Please try again!</p> : null}
              <h1>OR</h1>
              <p>
                Call us on:<a href="+919876509876"> +91 98765 09876</a>
              </p>
            </div>
          </form>
        </div>
      </Modal>
      <Modal
        className="modalPop"
        open={show}
        onClose={() => {
          setShow(false);
        }}
      >
        <div className="popup">
          <div className="thanks">
            <img
              className="img"
              src={clear}
              alt="cancel"
              onClick={() => {
                setShow(false);
              }}
            />
            <h3>Appointment Booked Successfully.</h3>
            <p>
              Your appointment for {moment(date).format("DD MMMM YYYY")} at{" "}
              {moment(date).format("h:mm a")} has been placed successfully. For
              more details please call{" "}
              <a href="tel:+919876509876">+91 98765 09876</a>
            </p>
            <div className="bottom">
              <button
                className="btn emptyBtn"
                onClick={() => {
                  setShow(false);
                  // window.location.href = "/#top";
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Back to current page
              </button>
              {/* <button
              className="btn blueBtn"
              onClick={() => {
                setShow(false);
                navigate("/Client", { replace: true });
              }}
            >
              View Our Portfolio
            </button> */}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Popup;
