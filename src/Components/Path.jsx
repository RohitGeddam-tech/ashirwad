import React, { useEffect, useState } from "react";
import Header from "../layout/NewHeader";
import Footer from "../layout/Footer";
import "./Path.scss";
// import PathData from "./Pathdata";
import axios from "axios";
import { NavHashLink } from "react-router-hash-link";

const DeskPath = () => {
  const [state, setState] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`${process.env.REACT_APP_PUBLIC_URL}equipments?populate=*`)
        .then((res) => {
          // console.log(res.data.data);
          setState(res.data.data);
          setError(false);
        })
        .catch((err) => setError(true));
    }
    fetchData();
  }, []);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {error ? (
        <div className="error">
          <h1>404. Page not found.</h1>
          <p>
            Unfortunately something went wrong with the url request, please{" "}
            <button>reload</button> or return back to{" "}
            <NavHashLink smooth to="/">
              Home Page
            </NavHashLink>
          </p>
        </div>
      ) : (
        <>
          {state.length > 0 ? (
            <>
              <Header />
              <div className="path" style={{ paddingTop: "70px" }}>
                <div className="pathContainer">
                  <div className="pathHeading">
                    <h1>PATHOLOGICAL EQUIPMENTS</h1>
                  </div>
                  <div className="pathData">
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
                  </div>
                </div>
              </div>
              <Footer />
            </>
          ) : (
            <div className="load">
              <div className="loader"></div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default DeskPath;
