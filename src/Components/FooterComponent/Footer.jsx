import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <div className="mainFooter w-100">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-4">
                            <div className="location">
                                <h4 className=" text-uppercase fs-2">Location</h4>
                                <span>2215 John Daniel Drive</span>
                                <br />
                                <span>Clark, MO 65243</span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="around">
                                <h4 className=" text-uppercase fs-2">Around the web</h4>
                                <div className="d-flex justify-content-center gap-4 mt-4">
                                    <span>
                                        <i _ngcontent-ctd-c21="" className="fa-brands fa-facebook mx-1 icon"></i>
                                    </span>
                                    <span>
                                        <i _ngcontent-ctd-c21="" className="fa-brands fa-twitter mx-1 icon"></i>
                                    </span>
                                    <span>
                                        <i _ngcontent-ctd-c21="" className="fa-brands fa-linkedin-in mx-1 icon"></i>
                                    </span>
                                    <span>
                                        <i _ngcontent-ctd-c21="" className="fa-solid fa-globe mx-1 icon"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="aboutF">
                                <h4 className=" text-uppercase fs-2">About Freelancer</h4>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subFooter">
                <div>
                    <span> Copyright &copy; Your Website 2021</span>
                </div>
            </div>
        </>
    );
};

export default Footer;
