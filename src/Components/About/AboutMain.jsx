import React, { useEffect, useState } from "react";
// import "./App.scss";
import Header from "../../layout/NewHeader";
import Footer from "../../layout/Footer";
import Top from "./FirstAbout";
import Mid from "./Middle";
import Last from "./Bottom";
import axios from "axios";
import { NavHashLink } from "react-router-hash-link";

function AboutMain() {
  const [first, setFirst] = useState({ current: false, data: [] });
  const [second, setSecond] = useState({ current: false, data: [] });
  const [third, setThird] = useState({ current: false, data: [] });
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`${process.env.REACT_APP_PUBLIC_URL}about-us-pages?populate=*`)
        .then((res) => {
          // console.log(res.data.data);
          setFirst({ current: true, data: [res.data.data] });
          setError(false);
        })
        .catch((err) => setError(true));
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`${process.env.REACT_APP_PUBLIC_URL}doctors-message?populate=*`)
        .then((res) => {
          // console.log(res.data.data);
          setSecond({ current: true, data: [res.data.data] });
          setError(false);
        })
        .catch((err) => setError(true));
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`${process.env.REACT_APP_PUBLIC_URL}certificates?populate=*`)
        .then((res) => {
          // console.log(res.data.data);
          setThird({ current: true, data: [res.data.data] });
          setError(false);
        })
        .catch((err) => setError(true));
    }
    fetchData();
  }, []);

  useEffect(() => {
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
          {first.current && second.current && third.current ? (
            <div className="App">
              <Header />
              <div style={{ paddingTop: "65px" }}>
                <Top data={first.data} />
                <Mid data={second.data} />
                <Last data={third.data} />
              </div>
              <Footer />
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

export default AboutMain;
