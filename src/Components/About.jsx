import React, { useEffect, useState } from "react";
import useWindowSize from "../layout/useWindowSize";
import line from "../Photos/Line2.jpg";
import about from "../Photos/offers.jpg";
import "./About.scss";
import { NavHashLink } from "react-router-hash-link";
import axios from "axios";

const About = () => {
  const [width] = useWindowSize();
  const [array, setArray] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_PUBLIC_URL}about-us?populate=*`)
      .then((res) => {
        // console.log(res.data.data);
        setArray(res.data.data);
      })
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="about">
      {width < 820 ? (
        <>
          {array.length !== 0 ? (
            <>
              <div className="container">
                <h2>{array.attributes.title}</h2>
                <img src={`https://api.aashirwadlab.co.in${array.attributes.image.data.attributes.url}`} alt="about us" />
                <p>{array.attributes.description}</p>
                <div className="bottom">
                  <NavHashLink to="/About#top" className="btn">
                    Read More
                  </NavHashLink>
                </div>
              </div>
            </>
          ) : null}
        </>
      ) : (
        <>
          {array.length !== 0 ? (
            <>
              <div className="container">
                <div className="shade">
                  <img src={`https://api.aashirwadlab.co.in${array.attributes.image.data.attributes.url}`} alt="about us" />
                </div>
                <div className="desk">
                  <h2>
                    {array.attributes.title}
                    <img src={line} alt="line" />
                  </h2>
                  <p>{array.attributes.description}</p>
                  <div className="bottom">
                    <NavHashLink to="/About#top" className="btn">
                      Read More
                    </NavHashLink>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </>
      )}
    </div>
  );
};

export default About;
