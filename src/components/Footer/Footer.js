import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="text-center text-lg-start text-dark bg-footer red-border-top">
            <section className="py-3">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                    

                        {/* help */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold metal-font footer-title mb-4">Help</h6>

                            <p>
                                <NavLink to="/events" className="description text-decoration-none">
                                Search
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/events" className="description text-decoration-none">
                                Blog
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/events" className="description text-decoration-none">
                                Store Location
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/events" className="description text-decoration-none">
                                Testimonials
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/events" className="description text-decoration-none">
                                Sitemap
                                </NavLink>
                            </p>
                        </div>

                        {/* support */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold metal-font footer-title mb-4">Support</h6>

                            <p>
                                <NavLink to="/events" className="description text-decoration-none">
                                Search
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/events" className="description text-decoration-none">
                                Blog
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/events" className="description text-decoration-none">
                                Store Location
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/events" className="description text-decoration-none">
                                Testimonials
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/events" className="description text-decoration-none">
                                Sitemap
                                </NavLink>
                            </p>
                        </div>

                        {/* collection */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold metal-font footer-title mb-4">Collection</h6>
                           
                            <p>
                                <NavLink to="/" className="description text-decoration-none">Our History</NavLink>
                            </p>

                            <p>
                                <NavLink to="/donation" className="description text-decoration-none">
                                Our Core Values
                                </NavLink>
                            </p>

                          

                            <p>
                                <NavLink to="/blog" className="description text-decoration-none">
                                Awards
                                </NavLink>
                            </p>
                            <p>
                                <NavLink to="/blog" className="description text-decoration-none">
                                Looptail
                                </NavLink>
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 ">
                            <h6 className="text-uppercase fw-bold metal-font footer-title mb-4">Contact Us</h6>
                          
                            <p className="description">Dhaka, Gulshan 1212, Bangladesh</p>
                            <p className="description">info@Sumi.com</p>
                            <p className="description"> +880 199 999 888</p>
                            <p className="description"> +880 199 333 777</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Copyright */}
            <div
                className="text-center p-3"
                style={{ backgroundColor: "#1E1E1E" }}
            >
                <span className="me-2 gallery-title copy-title">Copyright © 2021, Made By</span>

                <NavLink to="/" className=" banner-title name-hover text-decoration-none metal-font" href="https://mdbootstrap.com/">
                   SAIFUN NAHAR SUMI
                </NavLink>
            </div>
        </footer>
    );
};

export default Footer;