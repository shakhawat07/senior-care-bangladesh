import React from 'react';
import './Expert.css'

const Expert = ({ expert }) => {
    const { name, age, phone, email, img } = expert;
    // console.log(expert);

    // expert image style 
    const expertImgStyle = {
        width: '400px',
        height: '250px',
        borderRadius: '15px'
    }
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-4">
            <div className="card h-100 border border-light shadow-lg expert-card-background">
                <div className="card-body expert-img">
                    <img className="p-2 img-fluid" style={expertImgStyle} src={img} alt="" />
                    <h3 className="card-title py-3 fs-3 text-black text-center mt-2">{name}</h3>
                    <p className="card-details p-2 text-center"><span className="text-black fw-bolder">Age: </span>{age}</p>
                    <p className="card-details p-2 text-center"><span className="text-black fw-bolder">Phone: </span>{phone}</p>
                    <p className="card-details p-2 text-center"><span className="text-black fw-bolder">Email: </span>{email}</p>
                </div>
                <div className="card-footer d-flex align-items-center justify-content-center">
                    <button className="btn btn-danger px-3"
                    > <span className="px-2">Show Details</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Expert;