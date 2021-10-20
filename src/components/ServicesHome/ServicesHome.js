import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServicesHome.css'

const ServicesHome = ({ service }) => {
    const { id, img, name, description } = service;
    const history = useHistory();
    const handleShowDetails = () => {
        history.push(`/service/${id}`);
    }
    return (
        <div className="pb-4 container-fluid">
            <div className="row d-flex justify-content-start align-items-start py-3 mx-3 h-100 bg-white rounded  services-home-img">
                <div className="col-lg-4 col-md-12 cl-sm-12 col-12">
                    <img className="border border-dark border-2 rounded p-2 img-fluid" style={{ width: '300px', height: '170px' }} src={img} alt="" />
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                    <div className="text-start ps-2">
                        <h4 className="card-title fw-bold text-black">{name}</h4>
                        <p><span className="text-black fw-bolder"></span>{description}</p>
                        <button onClick={handleShowDetails} className="btn btn-danger px-3"
                        > <span className="px-2">Show Details</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesHome;