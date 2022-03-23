import React, { useState } from "react";
import "./Offers.scss";
import line from "../Photos/Line2.jpg";
// import offer from "../Photos/offers2.jpg";
import CustomSlider from "./Custom";
// import axios from "axios";
import Popup from "./Popup";

const Offers = ({ data }) => {
  // const [state, setState] = useState([...data]);
  const state = data[0];
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="offer">
      <div className="container">
        <h2>
          <img src={line} alt="line" />
          Offers
          <img src={line} alt="line" />
        </h2>
        <div className="offerBox">
          {state.length > 0 ? (
            <CustomSlider>
              {state.map((doc, index) => {
                return (
                  <div style={{ width: "240px !important" }} key={index}>
                    <div className="offerDetails">
                      <img
                        src={`https://api.aashirwadlab.co.in${doc.attributes.image.data.attributes.url}`}
                        alt="offer"
                      />
                      <div className="details">
                        <h4>{doc.attributes.name}</h4>
                        <h5>{doc.attributes.amount}</h5>
                        <p>{doc.attributes.description}</p>
                        <div className="bottom">
                          <button
                            className="btn"
                            onClick={() => {
                              setSelected(doc.id);
                              setOpen(true);
                            }}
                          >
                            book now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </CustomSlider>
          ) : null}
        </div>
      </div>
      <Popup open={open} setOpen={setOpen} offerName={selected} />
    </div>
  );
};

export default Offers;
