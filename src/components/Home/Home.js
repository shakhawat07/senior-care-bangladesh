import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import ExpertsHome from '../ExpertsHome/ExpertsHome';
import OurGoals from '../OurGoals/OurGoals';
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
            <h1 className="text-center mt-5 fw-bold">Our <span className="text-primary">Services</span></h1>
            <hr />
            {/* our services  */}
            <section className="home-service-container">
                {
                    services.map(service => <ServicesHome
                        key={service.id}
                        service={service}
                    ></ServicesHome>
                    )
                }
            </section>
            <h1 className="text-center fw-bold mt-4">Our <span className="text-primary">Experts</span></h1>
            <hr />
            {/* our experts */}
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
            <h1 className="text-center fw-bold mt-4">Our <span className="text-primary">Goals</span></h1>
            <hr />
            {/* our goals  */}
            <section className="container-fluid">
                <OurGoals></OurGoals>
            </section>
        </div>
    );
};

export default Home;