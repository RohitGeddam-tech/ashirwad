import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./layout/NewHeader";
import Footer from "./layout/Footer";
import BannerSlider from "./Components/Banner";
import About from "./Components/About";
import Service from "./Components/Service";
import Offers from "./Components/Offers";
import Contact from "./Components/Contact";
import axios from "axios";
import { NavHashLink } from "react-router-hash-link";
// import Popup from "./Components/Popup";

function App() {
  const [banner, setBanner] = useState({ current: false, data: [] });
  const [aboutUs, setAboutUs] = useState({ current: false, data: [] });
  const [offer, setOffer] = useState({ current: false, data: [] });
  const [contacts, setContacts] = useState({ current: false, data: [] });
  const [service, setService] = useState({ current: false, data: [] });
  const [error, setError] = useState(false);

  // let myRef = useRef();

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`${process.env.REACT_APP_PUBLIC_URL}banner-components?populate=*`)
        .then((res) => {
          // console.log(res.data.data);
          setBanner({ current: true, data: [res.data.data] });
          setError(false);
        })
        .catch((err) => setError(true));
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`${process.env.REACT_APP_PUBLIC_URL}about-us?populate=*`)
        .then((res) => {
          // console.log(res.data.data);
          setAboutUs({ current: true, data: [res.data.data] });
          setError(false);
        })
        .catch((err) => setError(true));
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          `${process.env.REACT_APP_PUBLIC_URL}services-component?populate=services.image`
        )
        .then((res) => {
          // console.log(res.data.data);
          setService({ current: true, data: [res.data.data] });
          setError(false);
        })
        .catch((err) => setError(true));
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`${process.env.REACT_APP_PUBLIC_URL}test-offers?populate=*`)
        .then((res) => {
          const info = res.data.data;
          // console.log("offers: ", info);
          localStorage.setItem("offers", JSON.stringify(info));
          setOffer({ current: true, data: [res.data.data] });
          setError(false);
        })
        .catch((err) => setError(true));
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (!window.location.href.includes("contact")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          `${process.env.REACT_APP_PUBLIC_URL}contact-us?populate=contact_us_component.image`
        )
        .then((res) => {
          // console.log(res.data.data);
          setContacts({ current: true, data: [res.data.data] });
          setError(false);
        })
        .catch((err) => setError(true));
    }
    fetchData();
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
          {aboutUs.current &&
          banner.current &&
          service.current &&
          offer.current &&
          contacts.current ? (
            <div className="App">
              <Header />
              <div style={{ paddingTop: "65px" }}>
                <BannerSlider data={banner.data} />
                <About data={aboutUs.data} />
                <Service data={service.data} />
                <Offers data={offer.data} />
                <Contact data={contacts.data} />
              </div>
              <Footer />
              {/* <div style={{ display: "none" }}>
            <Popup
              open={open}
              setOpen={setOpen}
              offerName=""
              data={offer.data}
            />
          </div> */}
            </div>
          ) : (
            <div className="load">
              <div className="loader"></div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default App;
