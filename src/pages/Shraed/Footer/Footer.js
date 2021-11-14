import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo1.png';
import banner from '../../../images/payment.png';

const Footer = () => {
    return (
        <div style={{backgroundColor: "#262339"}}>
            <div className="container text-white text-start py-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 text-center">
                                <img className="mx-start img-fluid" src={logo} alt="" />
                                <h4 className="mt-2 mt-md-4 pt-3">Follow US:</h4>
                                <h4 className="text-danger mt-4">
                                    <i className="me-3 fab fa-facebook-f"></i>
                                    <i className="me-3 fab fa-instagram"></i>
                                    <i className="me-3 fab fa-twitter"></i>
                                    <i className="me-3 fab fa-youtube"></i>
                                </h4>
                            </div>
                            <div className="col-md-6 text-center">
                                <h3 className="fw-bolder mb-0 mt-3 mt-md-2">Contact Us</h3>
                                <div className="d-flex justify-content-center">
                                    <div>
                                        <div className="mt-3 mt-md-5 d-flex align-items-center">
                                            <h3 className="text-danger mb-0"><i className="me-4 fas fa-phone-alt"></i></h3>
                                            <div>
                                                <p className="mb-0">+880171489578</p>
                                                <p className="mb-0">+880198726588</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 d-flex align-items-center">
                                            <h3 className="text-danger mb-0"><i className="me-4 fas fa-envelope-open-text"></i></h3>
                                            <div>
                                                <p className="mb-0">cmart@gamil.com</p>
                                                <p className="mb-0">cmart@email.com</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 d-flex align-items-center">
                                            <h3 className="text-danger mb-0"><i className="me-4 fas fa-map-marker-alt"></i></h3>
                                            <div>
                                                <p className="mb-0">Willison Street</p>
                                                <p className="mb-0">Eagan, US</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 text-center">
                                <h3 className="fw-bolder mb-0 mt-3 mt-md-2">Support</h3>
                                <div className="mt-3 mt-md-5">
                                    <p><Link className="text-decoration-none text-white" to="/about">About Us</Link></p>
                                    <p><Link className="text-decoration-none text-white" to="/contact">Contact Us</Link></p>
                                    <p><Link className="text-decoration-none text-white" to="/explore">Explore</Link></p>
                                    <p><Link className="text-decoration-none text-white" to="/">Blogs</Link></p>
                                </div>
                            </div>
                            <div className="col-md-6 text-center">
                                <h3 className="fw-bolder mb-0 mt-3 mt-md-2">We Accepts:</h3>
                                <div className="mt-3 mt-md-5">
                                    <img className="img-fluid" src={banner} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;