import React, { useEffect, useState } from "react";
import line from "./Photos/Line2.jpg";
import "./css/Bottom.scss";
import last from "./Photos/lastpage.jpg";
import windowSize from "../../layout/useWindowSize";
import CustomSlider from "./Custom";
import axios from "axios";

const Bottom = () => {
  const [width] = windowSize();
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_PUBLIC_URL}certificates?populate=*`)
      .then((res) => {
        // console.log(res.data.data);
        setState(res.data.data);
      })
      .catch((err) => console.warn(err));
  }, []);
  return (
    <div className="foot">
      <div className="bottomContainer">
        <div className="bottomHeading">
          <h1>CERTIFICATES & ACCOMPLISHMENTS</h1>
          <img src={line} alt="line" />
        </div>
        {state.length > 0 ? (
          <>
            {width < 950 ? (
              <CustomSlider>
                {state.map((doc, i) => (
                  <div className="imag" key={i}>
                    <img
                      loading="lazy"
                      style={{ padding: "0 15px" }}
                      src={`https://api.aashirwadlab.co.in${doc.attributes.image.data.attributes.url}`}
                      alt="last"
                    />
                  </div>
                ))}
              </CustomSlider>
            ) : (
              <div className="slider">
                <div className="imgOverflow">
                  {state.map((doc, i) => (
                    <img
                      key={i}
                      loading="lazy"
                      src={`https://api.aashirwadlab.co.in${doc.attributes.image.data.attributes.url}`}
                      alt="last"
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Bottom;
