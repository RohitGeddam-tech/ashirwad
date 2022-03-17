import React from "react";
import "./App.scss";
import Header from "./layout/NewHeader";
import Footer from "./layout/Footer";
import BannerSlider from "./Components/Banner";
import About from "./Components/About";
import Service from "./Components/Service";
import Offers from "./Components/Offers";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div style={{ paddingTop: "65px" }}>
          <BannerSlider />
          <About />
          <Service />
          <Offers />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
