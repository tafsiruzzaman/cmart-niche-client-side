import React, { useEffect, useState } from 'react';
import { Button, Row, Spinner } from 'react-bootstrap';
import Car from '../Shraed/Car/Car';
import Footer from '../Shraed/Footer/Footer';
import Header from '../Shraed/Header/Header';

const Explore = () => {
    const [cars, setCars] = useState([]);
    useEffect( () => {
        fetch('https://thawing-sea-96510.herokuapp.com/all-cars')
        .then(res => res.json())
        .then(data => setCars(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="container mb-5">
                <h1 className="fw-bolder pt-5 pb-5">FIND YOUR DREAM <span className="text-danger">CAR</span></h1>
                {
                    cars.length === 0 ?
                    <Button variant="danger mt-5" disabled>
                    <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    />
                        Loading...
                    </Button>
                    :
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            cars.map(car => <Car key={car._id} car={car}></Car>)
                        }
                    </Row>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Explore;