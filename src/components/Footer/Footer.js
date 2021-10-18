import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-black text-white py-3 px-1">
                <div className="col-lg-8 col-md-12 cl-sm-12 col-12 px-5 d-flex justify-items-center align-items-center">
                    <h3> © 2021 sCare Bangladesh</h3>
                </div>
                <div className="col-lg-4 col-md-12 cl-sm-12 col-12 text-start pe-5">
                    <h2 className="pb-2">Contact Us</h2>
                    <p><span className="fw-lighter">Location:</span> H #33, R #2, B #F, Banasree, Dhaka-1219</p>
                    <p><span className="fw-lighter">Mobile:</span> 0197666****</p>
                    <p><span className="fw-lighter">Email: </span>scarebangladesh@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;