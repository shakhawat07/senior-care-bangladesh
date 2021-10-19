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
            <h2 className="text-primary mt-5 text-center">Our Services</h2>
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