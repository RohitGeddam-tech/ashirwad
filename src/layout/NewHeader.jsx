import React, { useState } from "react";
import "./Nav.scss";
// import { NavLink } from "react-router-dom";
import useWindowSize from "./useWindowSize";
import Ham from "./Hamburger";
import XHam from "./Xham";
import logo from "../Photos/logo.svg";
import { NavHashLink } from "react-router-hash-link";
import Popup from "../Components/Popup";

const NewHeader = () => {
  const [width] = useWindowSize();
  const [isActive, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const side = isActive ? "side active" : "side";
  return (
    <div className="new">
      {width < 1020 ? (
        <>
          <div className="header">
            <nav className="container-fullnav">
              <div className="nav-image">
                <NavHashLink to="/#top" onClick={() => setActive(false)}>
                  <img src={logo} alt="logo" />
                  {/* <h2 className="logo">SL Technologies</h2> */}
                </NavHashLink>
              </div>
            </nav>
            <div className="end">
              {/* <a href="tel:+919372705287" className="btn">
                Call Us
              </a> */}
              <div className="nav-links">
                {isActive ? (
                  <>
                    <XHam
                      ClickHandle={() => {
                        setActive(!isActive);
                      }}
                    />
                  </>
                ) : (
                  <Ham
                    ClickHandle={() => {
                      setActive(!isActive);
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <div className={side}>
            <div className="container">
              <li>
                <NavHashLink
                  to="/About#top"
                  className={`navfade ${
                    window.location.href.includes("About") ? "active" : ""
                  }`}
                  onClick={() => setActive(false)}
                >
                  About Us
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  to="/Path#top"
                  className={`navfade ${
                    window.location.href.includes("Path") ? "active" : ""
                  }`}
                  onClick={() => setActive(false)}
                >
                  Pathological Equipments
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  to="/#contact"
                  className={`navfade ${
                    window.location.href.includes("contact") ? "active" : ""
                  }`}
                  onClick={() => setActive(false)}
                >
                  Contact Us
                </NavHashLink>
              </li>
              <li>
                <button
                  className="btn"
                  onClick={() => {
                    setActive(false);
                    setOpen(true);
                  }}
                >
                  BOOK AN APPOINTMENT
                </button>
              </li>
            </div>
          </div>{" "}
        </>
      ) : (
        <>
          <div className="container">
            <NavHashLink to="/#top" className="logo">
              <img src={logo} alt="logo" />
              {/* <h2 className="logo">SL Technologies</h2> */}
            </NavHashLink>
            <div className="navDetails">
              <NavHashLink
                to="/About#top"
                // activeStyle={{ color: "#FFDD28", fontWeight: "bold" }}
                // className="navfade"
                className={`navfade ${
                  window.location.href.includes("About") ? "active" : ""
                }`}
              >
                About Us
              </NavHashLink>
              <NavHashLink
                to="/Path#top"
                // activeStyle={{ color: "#FFDD28", fontWeight: "bold" }}
                // className="navfade"
                className={`navfade ${
                  window.location.href.includes("products") ? "active" : ""
                }`}
              >
                Pathological Equipments
              </NavHashLink>
              <NavHashLink
                to="/#contact"
                // activeStyle={{ color: "#FFDD28", fontWeight: "bold" }}
                // className="navfade"
                className={`navfade ${
                  window.location.href.includes("contact") ? "active" : ""
                }`}
              >
                Contact Us
              </NavHashLink>
              <button
                // activeStyle={{ color: "#FFDD28", fontWeight: "bold" }}
                className="btn"
                onClick={() => setOpen(true)}
              >
                BOOK AN APPOINTMENT
              </button>
            </div>
          </div>
        </>
      )}
      <Popup open={open} setOpen={setOpen} />
    </div>
  );
};

export default NewHeader;
