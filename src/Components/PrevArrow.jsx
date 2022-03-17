import React from "react";
import prev from "../Photos/arrowRight.svg";

const SliderPrevArrow = (props) => {
  const { onClick } = props;
  // console.log(props);

  return (
    <button
      type="button"
      aria-label="prevArrow"
      data-role="none"
      className={`${props.className} slickPrev`}
      // style={{ display: "none" }}
      onClick={onClick}
    >
      {/* <span> */}
      <img src={prev} alt="banner" />
      {/* </span> */}
    </button>
  );
};

export default SliderPrevArrow;
