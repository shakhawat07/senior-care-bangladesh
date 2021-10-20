import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';
import './Experts.css'

const Experts = () => {
    const [experts, setExperts] = useState([]);
    useEffect(() => {
        fetch('./expertsData.json')
            .then(res => res.json())
            .then(data => setExperts(data));
    }, []);
    // console.log(experts);
    return (
        <div className="container-fluid experts-container">
            <h1 className="text-center fw-bold mt-5">Our <span className="text-primary">Experts</span></h1>
            <hr />
            <div className="row p-5">
                {
                    experts.map(expert =>
                        <Expert
                            key={expert.id}
                            expert={expert}
                        ></Expert>
                    )
                }
            </div>
        </div>
    );
};

export default Experts;