import React from "react";
// import flag from "./Photos/flag.jpg";
// import vision from "./Photos/vision.jpg";
import "./css/FirstAbout.scss";
// import axios from "axios";

const FirstAbout = ({ data }) => {
  // const [state, setState] = useState([]);
  const state = data[0];

  return (
    <div className="about">
      <div className="aboutContainer">
        <div className="aboutHeading">
          <h1>About Us</h1>
        </div>
        <div className="outerbox">
          {state.length > 0 ? (
            <>
              {state.map((doc, i) => (
                <div className="innerbox1" key={i}>
                  <img
                    loading="lazy"
                    src={`https://api.aashirwadlab.co.in${doc.attributes.image.data.attributes.url}`}
                    alt="flag"
                  />
                  <h2 className="boxtitle">{doc.attributes.title}</h2>
                  <p className="boxtext">{doc.attributes.description}</p>
                </div>
              ))}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default FirstAbout;
