import React from "react";
import line from "./Photos/Line3.jpg";
// import doc from "./Photos/doc.jpg";
import "./css/Middle.scss";
// import axios from "axios";

const Middle = ({ data }) => {
  // const [state, setState] = useState([]);
  const state = data[0];
  return (
    <div className="middle">
      {Object.keys(state).length > 0 ? (
        <div className="middleContainer">
          <div className="left">
            <div className="middleHeading">
              <h1>DOCTOR’S MESSAGE</h1>
              <img loading="lazy" src={line} alt="line" />
            </div>
            <p>{state.attributes.message}</p>
            <p className="para">{state.attributes.name}</p>
          </div>
          <div className="right">
            <img
              loading="lazy"
              src={`https://api.aashirwadlab.co.in${state.attributes.image.data.attributes.url}`}
              alt="doc"
            />
            <h2>{state.attributes.name}</h2>
          </div>
          <div className="mobDown">
            <p>{state.attributes.message}</p>
            <p className="para">{state.attributes.name}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Middle;
