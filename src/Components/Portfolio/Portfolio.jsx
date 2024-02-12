import React from "react";
import "./portfolio.css";
import "../../index.css";
import {useState} from "react";
import {useEffect} from "react";
import Modal from "../Modal/Modal";
import Footer from "../FooterComponent/Footer";
const Portfolio = () => {
  const [myImgsrc, setMyImgsrc] = useState("");
  const toggle = (src) => {
    setMyImgsrc(src);
    console.log(myImgsrc);
  };
  const images = [
    "../../images/poert1.png",
    "../../images/port2.png",
    "../../images/port3.png",
    "../../images/poert1.png",
    "../../images/port2.png",
    "../../images/port3.png",
  ];
  return (
    <>
      {" "}
      <div className="container">
        <div className="mian-hiding  mx-auto">
          <h1>PORTFOLIO COMPONENT</h1>
        </div>
        <div className="row g-4 mb-4 ">
          {/* --------------------------------------------map--------------------------------------------- */}
          {images.map((imageSrc, index) => {
            return (
              <div
                className=" col-md-4"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                key={index}
                onClick={() => toggle(imageSrc)}
              >
                <div className="bg-danger">
                  <div className="port-img cursor">
                    <img src={imageSrc} alt="" className="w-100" />
                    <span className="port-layer">
                      <i className="fa-solid fa-plus fa-2xl"></i>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          {/* --------------------------------------------map--------------------------------------------- */}
        </div>
      </div>
      <Modal img={myImgsrc} />
    </>
  );
};

export default Portfolio;
