import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner2.jpg';
import banner3 from '../../../images/banner3.jpg';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src={banner1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h6 className="d-sm-block d-md-none fw-bolder fs-4">FIND YOUR DREAM CAR</h6>
                <h1 className="fs-1 fw-bolder d-none d-md-block">FIND YOUR DREAM CAR</h1>
                <div className="">
                <Link to="/explore"><Button variant="danger px-4 rounded-0"><small>GET STARTED NOW</small></Button></Link>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={banner3}
                alt="First slide"
                />
                <Carousel.Caption>
                <h6 className="d-sm-block d-md-none fw-bolder fs-4">FIND YOUR DREAM CAR</h6>
                <h1 className="fs-1 fw-bolder d-none d-md-block">FIND YOUR DREAM CAR</h1>
                <div className="">
                <Link to="/explore"><Button variant="danger px-4 rounded-0"><small>GET STARTED NOW</small></Button></Link>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={banner2}
                alt="First slide"
                />
                <Carousel.Caption>
                <h6 className="d-sm-block d-md-none fw-bolder fs-4">FIND YOUR DREAM CAR</h6>
                <h1 className="fs-1 fw-bolder d-none d-md-block">FIND YOUR DREAM CAR</h1>
                <div className="">
                <Link to="/explore"><Button variant="danger px-4 rounded-0"><small>GET STARTED NOW</small></Button></Link>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;