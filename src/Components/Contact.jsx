import React, { useEffect, useState } from "react";
import line from "../Photos/Line2.jpg";
// import call from "../Photos/call1.jpg";
// import email from "../Photos/email1.jpg";
// import location from "../Photos/location1.jpg";
import "./Contact.scss";
import axios from "axios";

const Contact = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_PUBLIC_URL}contact-us?populate=contact_us_component.image`
      )
      .then((res) => {
        // console.log(res.data.data);
        setState(res.data.data);
      })
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="contact">
      {Object.keys(state).length > 0 ? (
        <div className="container">
          <h2>
            <img src={line} alt="line" />
            Contact
            <img src={line} alt="line" />
          </h2>
          <p>{state.attributes.description}</p>
          <div className="contactDetails">
            {state.attributes.contact_us_component.map((doc, i) => (
              <a href={doc.information} className="inner" key={i}>
                <img
                  src={`https://api.aashirwadlab.co.in${doc.image.data.attributes.url}`}
                  alt="call"
                />
                <p>{doc.information}</p>
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Contact;
