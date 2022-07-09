import React from "react";
import "./Service.scss";
import line from "../Photos/Line3.jpg";
// import lung from "../Photos/lung.svg";
// import axios from "axios";
import CustomSlider from "./CustomSlider";

const Service = ({ data }) => {
  const state = data[0];
  console.log(data[0]);

  // useEffect(async () => {
  //   await axios
  //     .get(
  //       `${process.env.REACT_APP_PUBLIC_URL}services-component?populate=services.image`
  //     )
  //     .then((res) => {
  //       // console.log(res.data.data);
  //       setState(res.data.data);
  //     })
  //     .catch((err) => console.warn(err));
  // }, []);

  return (
    <div className="service">
      {/* <CustomSlider></CustomSlider> */}
      <div className="container">
        <h2>
          <img src={line} alt="line" />
          Service
          <img src={line} alt="line" />
        </h2>
        {Object.keys(state).length > 0 ? <p>{state.attributes.description}</p> : 
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit,.
        </p>}
        {/* <div className="slider">
          <div className="slide">
            <div className="box">
              <img src={lung} alt="lungs" />
              <p>CARDIOLOGY</p>
            </div>
            <div className="box">
              <img src={lung} alt="lungs" />
              <p>CARDIOLOGY</p>
            </div>
            <div className="box">
              <img src={lung} alt="lungs" />
              <p>CARDIOLOGY</p>
            </div>
            <div className="box">
              <img src={lung} alt="lungs" />
              <p>CARDIOLOGY</p>
            </div>
            <div className="box">
              <img src={lung} alt="lungs" />
              <p>CARDIOLOGY</p>
            </div>
          </div>
        </div> */}
        {Object.keys(state).length > 0 ? (
          <div className="wrap">
            <CustomSlider>
              {state.attributes.services.map((doc, i) => (
                <div className="box" key={i}>
                  <img
                    src={`https://api.aashirwadlab.co.in${doc.image.data.attributes.url}`}
                    alt="lungs"
                  />
                  <p>{doc.name}</p>
                </div>
              ))}
              {/* <div className="box">
                <img src={lung} alt="lungs" />
                <p>Lungs</p>
              </div> */}
            </CustomSlider>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Service;
