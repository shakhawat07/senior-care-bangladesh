import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    // const [services] = useServices();
    // console.log([services]);
    return (
        <div className="">
            {/* {
                services.map(service =>
                    console.log(service.id)
                )
            } */}
            {/* if({serviceId} === {id}){
                <h1>{name}</h1>
            } */}
            <h1>Service {serviceId}</h1>
            {/* <h1>{services.length}</h1> */}

        </div>
    );
};

export default ServiceDetails;