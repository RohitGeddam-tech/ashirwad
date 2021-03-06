import React from "react";
import { NavHashLink } from "react-router-hash-link";
import line from "../Photos/Line2.jpg";
import fb from "../Photos/fb.svg";
import linked from "../Photos/Linkedin.svg";
import insta from "../Photos/instagram.svg";
import copy from "../Photos/copy.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerLinks">
          <NavHashLink to="/Aboutus">ABOUT US</NavHashLink>
          <NavHashLink to="/Pathological_Equipments">
            PATHOLOGICAL EQUIPMENTS
          </NavHashLink>
          <NavHashLink to="/#contact">CONTACT US</NavHashLink>
          <p>PRIVACY POLICY</p>
          <p>TERMS & CONDITIONS</p>
        </div>
        <img loading="lazy" src={line} alt="line" />
        <div className="footerIcons">
          <img loading="lazy" src={fb} alt="fb" />
          <img loading="lazy" src={insta} alt="insta" />
          <img loading="lazy" src={linked} alt="linkedin" />
        </div>
        <div className="footerCopy">
          <p>
            Website by <a href="https://tech.sugarlogger.com/">Sugarlogger Technologies Pvt. Ltd.</a>
          </p>
        </div>
        <div className="footerCopy">
          <img loading="lazy" src={copy} alt="copyright" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
