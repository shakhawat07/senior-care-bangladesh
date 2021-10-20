import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./servicesData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    // console.log(services);
    return (
        <div className="container-fluid service-container">
            <h1 className="text-center mt-5 fw-bold">Our <span className="text-primary">Services</span></h1>
            <hr />
            <div className="row p-5">
                {
                    services.map(service =>
                        <Service
                            key={service.id}
                            service={service}
                        ></Service>
                    )
                }
            </div>
        </div>
    );
};

export default Services;