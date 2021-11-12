import React, { useEffect, useState } from 'react';
import { Button, Row, Spinner } from 'react-bootstrap';
import Car from '../../Shraed/Car/Car';

const HomeCars = () => {
    const [cars, setCars] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/homecars')
        .then(res => res.json())
        .then(data => setCars(data))
    }, [])
    return (
        <div className="container my-5">
            <h1 className="fw-bolder pt-4 pb-5">Latest <span className="text-danger">Cars</span></h1>
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
    );
};

export default HomeCars;