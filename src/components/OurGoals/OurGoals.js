import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import './OurGoals.css'

const OurGoals = () => {
    const faHeartbeatIcon = <FontAwesomeIcon icon={faHeartbeat} />;
    return (
        <section className="m-5">
            <div className="py-4 container-fluid">
                <div className="row d-flex justify-content-start align-items-start py-3 mx-3 h-100 goals-container rounded">
                    <div className="col-lg-7 col-md-7 cl-sm-12 col-12">
                        <img className="img-fluid p-2" style={{ width: '550px', height: '420px' }} src="https://image.freepik.com/free-vector/volunteers-helping-elderly-people_23-2148554195.jpg" alt="" />
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                        <div className="text-start p-4">
                            <h2 className="card-title fw-bold text-black pb-3">sCare Bangladesh Provide</h2>
                            <h5>{faHeartbeatIcon} Wound care</h5>
                            <h5>{faHeartbeatIcon} Speech therapy</h5>
                            <h5>{faHeartbeatIcon} Orthopedic care</h5>
                            <h5>{faHeartbeatIcon} Skilled nursing care</h5>
                            <h5>{faHeartbeatIcon} Intravenous therapy</h5>
                            <h5>{faHeartbeatIcon} Breathing treatments</h5>
                            <h5>{faHeartbeatIcon} Support after surgery</h5>
                            <h5>{faHeartbeatIcon} Physical, occupational therapy</h5>
                            <button className="btn btn-danger mt-3">Show Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurGoals;