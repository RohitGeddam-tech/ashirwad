import React, { useEffect, useState } from "react";
import Header from "../layout/NewHeader";
import Footer from "../layout/Footer";
import "./Path.scss";
import PathData from "./Pathdata";
import axios from "axios";

const DeskPath = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_PUBLIC_URL}equipments?populate=*`)
      .then((res) => {
        // console.log(res.data.data);
        setState(res.data.data);
      })
      .catch((err) => console.warn(err));
  }, []);
  return (
    <>
      <Header />
      <div className="path" style={{ paddingTop: "70px" }}>
        <div className="pathContainer">
          <div className="pathHeading">
            <h1>PATHOLOGICAL EQUIPMENTS</h1>
          </div>
          <div className="pathData">
            {state.length > 0 ? (
              <>
                {state.map((doc, i) => (
                  <div key={i} className="dataBox">
                    <img
                      loading="lazy"
                      src={`https://api.aashirwadlab.co.in${doc.attributes.image.data.attributes.url}`}
                      alt={doc.attributes.name}
                    />
                    <h1>{doc.attributes.name}</h1>
                    <p>{doc.attributes.description}</p>
                  </div>
                ))}
              </>
            ) : null}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DeskPath;
