import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                        alt=""
                    />
                    <Carousel.Caption>
                        <h1 className="fw-bolder">Welcome to</h1>
                        <h1 className="fw-bolder">sCare Bangladesh</h1>
                        <h5>We offer you the best support for senior nursing care.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1587556930799-8dca6fad6d41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt=""
                    />
                    <Carousel.Caption>
                        <h1 className="fw-bolder">Welcome to</h1>
                        <h1 className="fw-bolder">sCare Bangladesh</h1>
                        <h5>We offer you the best support for senior nursing care.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1543333995-a78aea2eee50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                        alt=""
                    />
                    <Carousel.Caption>
                        <h1 className="fw-bolder">Welcome to</h1>
                        <h1 className="fw-bolder">sCare Bangladesh</h1>
                        <h5>We offer you the best support for senior nursing care.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;