import React from 'react';

const ExpertsHome = ({ expert }) => {
    const { name, phone, email, img } = expert;

    // course image style 
    const expertImgStyle = {
        width: '250px',
        height: '170px',
        // border: '2px solid black',
        borderRadius: '15px'
    }
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="card h-100 border border-light shadow-lg expert-card-background">
                <div className="card-body expert-img">
                    <img className="p-2 img-fluid" style={expertImgStyle} src={img} alt="" />
                    <h3 className="card-title py-3 fs-4 text-black text-center mt-2">{name}</h3>
                    <p className="card-details text-center">Phone: {phone}</p>
                    <p className="card-details text-center">Email: {email}</p>
                </div>

            </div>
        </div>
    );
};

export default ExpertsHome;