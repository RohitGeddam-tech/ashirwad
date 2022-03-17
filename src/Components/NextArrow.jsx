import React from "react";
import next from "../Photos/arrowLeft.svg";

const SliderNextArrow = (props) => {
  const { onClick } = props;

  return (
    <button
      type="button"
      aria-label='nextArrow'
      data-role="none"
      className={`${props.className} slickNext`}
      // style={{ display: "block" }}
      onClick={onClick}
    >
      {/* <span> */}
        <img src={next} alt="banner" />
      {/* </span> */}
    </button>
  );
};

export default SliderNextArrow;
