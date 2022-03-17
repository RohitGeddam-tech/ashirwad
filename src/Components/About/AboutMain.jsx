import React from "react";
// import "./App.scss";
import Header from "../../layout/NewHeader";
import Footer from "../../layout/Footer";
import Top from "./FirstAbout";
import Mid from "./Middle";
import Last from "./Bottom";

function AboutMain() {
  return (
    <>
      <div className="App">
        <Header />
        <div style={{ paddingTop: "65px" }}>
          <Top />
          <Mid />
          <Last />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AboutMain;
