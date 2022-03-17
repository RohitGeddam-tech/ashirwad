import React, { useEffect, useState } from "react";
// import { NavHashLink } from "react-router-hash-link";
import useWindowSize from "../layout/useWindowSize";
import banner from "../Photos/deskcover.jpg";
import mob from "../Photos/mobcover.png";
import "./Banner.scss";
import CustomSlider from "./Slider";
import axios from "axios";
import Popup from "./Popup";

const bannerDetails1 = [
  {
    image: banner,
    title: "Banner Title",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
  },
];

const bannerDetails = [
  {
    image: mob,
    title: "Banner Title",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
  },
  {
    image: mob,
    title: "Banner Title",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
  },
  {
    image: mob,
    title: "Banner Title",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
  },
];

const Banner1 = ({ image, attributes }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="banner">
      <img src={image} alt="banner" loading="lazy" />
      <div className="bannerBox">
        <h1>{attributes.title}</h1>
        <p>{attributes.description}</p>
        <div className="bottom">
          <button className="btn" onClick={() => setOpen(true)}>
            book an appointment
          </button>
        </div>
      </div>
      <Popup open={open} setOpen={setOpen} />
    </div>
  );
};

const BannerSlider = () => {
  const [width] = useWindowSize();
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_PUBLIC_URL}banner-components?populate=*`)
      .then((res) => {
        // console.log(res.data.data);
        setState(res.data.data);
      })
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="bannerSlider">
      {width < 960 ? (
        <CustomSlider>
          {state.map((item, index) => (
            <div key={index}>
              {/* <Banner1 {...item} image={mob} /> */}
              <Banner1
                {...item}
                image={`https://api.aashirwadlab.co.in${item.attributes.mobile_image.data.attributes.url}`}
              />
            </div>
          ))}
        </CustomSlider>
      ) : (
        <CustomSlider>
          {state.map((item, index) => (
            <div key={index}>
              {/* <Banner1 {...item} image={banner} /> */}
              <Banner1
                {...item}
                image={`https://api.aashirwadlab.co.in${item.attributes.image.data.attributes.url}`}
              />
            </div>
          ))}
        </CustomSlider>
      )}
    </div>
  );
};

export default BannerSlider;
