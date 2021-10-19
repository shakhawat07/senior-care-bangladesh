import React from 'react';
import './OurGoals.css'

const OurGoals = () => {
    return (
        <section className="m-5">
            <div className="py-4 container-fluid">
                <div className="row d-flex justify-content-start align-items-start py-3 mx-3 h-100 goals-container rounded">
                    <div className="col-lg-7 col-md-7 cl-sm-12 col-12">
                        <img className="img-fluid" style={{ width: '550px', height: '400px' }} src="https://image.freepik.com/free-vector/volunteers-helping-elderly-people_23-2148554195.jpg" alt="" />
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                        <div className="text-start p-4">
                            <h2 className="card-title fw-bold text-black pb-3">sCare Bangladesh provide</h2>
                            <h5>Skilled nursing care</h5>
                            <h5>Orthopedic care</h5>
                            <h5>Breathing treatments</h5>
                            <h5>Support after surgery</h5>
                            <h5>Physical, occupational therapy</h5>
                            <h5>Speech therapy</h5>
                            <h5>Intravenous therapy</h5>
                            <h5>Wound care</h5>
                            <button className="btn btn-danger mt-2">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurGoals;