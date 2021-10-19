import React from 'react';
import { useHistory } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {

    const { id, name, description, img } = service;
    const history = useHistory();
    // console.log(service);

    // course image style 
    const serviceImgStyle = {
        width: '400px',
        height: '250px',
        border: '2px solid black',
        borderRadius: '15px'
    }

    const handleShowDetails = () => {
        history.push(`/service/${id}`);
    }
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="card h-100 border border-light shadow-lg service-card-background">
                <div className="card-body service-img">
                    <img className="p-2 img-fluid" style={serviceImgStyle} src={img} alt="" />
                    <h3 className="card-title py-3 fs-3 text-black text-center mt-2">{name}</h3>
                    {/* <p>{description}</p> */}
                    <p className="card-details p-2">{description}</p>

                    {/* <p><span className="text-black fw-bolder">Course Cost:</span> {price}</p> */}
                </div>
                <div className="card-footer d-flex align-items-center justify-content-center">
                    <button onClick={handleShowDetails} className="btn btn-danger px-3"
                    > <span className="px-2">Show Details</span>
                    </button>
                </div>
            </div>
        </div >


    );
};

export default Service;