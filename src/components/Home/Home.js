import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import ExpertsHome from '../ExpertsHome/ExpertsHome';
import ServicesHome from '../ServicesHome/ServicesHome';

const Home = () => {
    const [services, setServices] = useState([]);
    const [experts, setExperts] = useState([]);
    useEffect(() => {
        fetch('./servicesData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    // console.log(services);

    useEffect(() => {
        fetch('./expertsData.json')
            .then(res => res.json())
            .then(data => setExperts(data));
    }, []);
    // console.log(experts);
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-center my-3">Our <span className="text-primary">Services</span></h1>
            <hr />
            {/* services  */}
            <section className="home-service-container mb-5">
                {
                    services.map(service => <ServicesHome
                        key={service.id}
                        service={service}
                    ></ServicesHome>
                    )
                }
            </section>
            <h1 className="text-center my-3">Our <span className="text-primary">Experts</span></h1>
            <hr />
            {/* experts 
             */}
            <section className="home-expert-container mb-5 container-fluid">
                <div className="row p-5">
                    {
                        experts.slice(0, 4).map(expert => <ExpertsHome
                            key={expert.id}
                            expert={expert}
                        ></ExpertsHome>
                        )
                    }
                </div>

            </section>
        </div>
    );
};

export default Home;