import React from 'react';

const Service = ({ service }) => {

    const { name, description, img } = service;
    // console.log(service);

    // course image style 
    const serviceImgStyle = {
        width: '400px',
        height: '250px',
        border: '2px solid black',
        borderRadius: '15px'
    }
    return (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="card h-100 border border-light shadow-lg service-card-background">
                <div className="card-body service-img">
                    <img className="p-2 img-fluid" style={serviceImgStyle} src={img} alt="" />
                    <h3 className="card-title py-3 fs-3 text-black text-center mt-2">{name}</h3>
                    {/* <p>{description}</p> */}
                    <p className="card-details p-2">{description}</p>

                    {/* <p><span className="text-black fw-bolder">Course Cost:</span> {price}</p> */}
                </div>
                <div className="card-footer">
                    <button className="btn btn-danger px-3"
                    > <span className="px-2">Show Details</span>
                    </button>
                </div>
            </div>
        </div>


    );
};

export default Service;