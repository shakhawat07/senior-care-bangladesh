import React from 'react';
import './About.css'

const About = () => {
    return (
        <section className="m-5">
            <div className="py-4 container-fluid">
                <div className="row d-flex justify-content-start align-items-start py-3 mx-3 h-100 about-container rounded">
                    <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                        <div className="text-start p-4">
                            <h2 className="card-title fw-bold text-black">About Us</h2>
                            <p>Our sCare Bangladesh provide nutritional counseling, social work services, and recreational activities, as well as respite care, hospice care, and end-of-life care. We have in-house pharmacies as well as diagnostics such as laboratory services, radiology services in their facility. We mostly contract with programs in the community for these services. Care is tailored to what is needed based on state of health and skilled care needs. We serve the needs and requirements of senior citizens. Our care encompasses assisted living, adult daycare, long-term care, nursing homes (often called residential care), hospice care, and home care.</p>
                            <button className="btn btn-danger">Details</button>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 cl-sm-12 col-12">
                        <img className="img-fluid p-2" style={{ width: '620px', height: '420px' }} src="https://image.freepik.com/free-photo/elderly-female-smiling-with-young-female-doctor-visiting-senior-patient-woman-hospital-ward_1150-21714.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;