import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetail.css'

const ServiceDetail = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/servicesData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    // console.log(services);
    const { serviceId } = useParams();
    // console.log(typeof serviceId);
    return (
        <div>
            {/* <h1>Service {serviceId}</h1> */}
            {
                services.filter(service => service.id === parseInt(serviceId)).map(filtered => (
                    < div className="container-fluid" key={filtered}>
                        <div className="row m-5 service-detail-container">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center">
                                <h1 className="fw-5 my-3 text-primary">{filtered.name}</h1>
                                <img className="img-fluid border border-secondary rounded p-4" style={{ width: '620px', height: '380px' }} src={filtered.img} alt="" />
                                <p className="w-50 my-3 fs-5">{filtered.description}</p>
                            </div>
                        </div>

                    </div>

                ))
            }
        </div >
    );
};

export default ServiceDetail;