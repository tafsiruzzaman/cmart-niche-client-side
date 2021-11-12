import React from 'react';
import { Button, Card, Col} from 'react-bootstrap';
import { useHistory } from 'react-router';

const Car = (props) => {
    const {name, img, location, mileage, mode, manufacturerYear, type, colour, fuelType, _id, price} = props.car;
    const history = useHistory();
    const handleClick = ()=> {
        history.push(`/ordercar/${_id}`);
    };
    return (
        <Col>
        <Card>
            <Card.Img variant="top img-fluid" src={img} />
            <Card.Body className="text-start p-4">
                <h4 className="text-danger fw-bolder">{name}</h4>
                <small className="text-secondary fw-bold"><i className="fas fa-map-marker-alt"></i> {location}</small>
                <div className="d-flex justify-content-between">
                    <p className="my-2"><i className="text-danger fas fa-road"></i> {mileage} km</p>
                    <p className="my-2"><i className="text-danger fas fa-calendar-alt"></i> {manufacturerYear}</p>
                    <p className="my-2"><i className="text-danger fas fa-gamepad"></i> {mode}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="my-2"><i className="text-danger fas fa-gas-pump"></i> {fuelType}</p>
                    <p className="my-2"><i className="text-danger fas fa-palette"></i> {colour}</p>
                    <p className="my-2"><i className="text-danger fas fa-car"></i> {type}</p>
                </div>
                <div className="mt-3 d-flex justify-content-between">
                    <h4 className="fw-bolder">Price <span className="text-danger">${price}K</span></h4>
                    <Button onClick={handleClick} variant="danger rounded-0 px-3"><i className="fas fa-plus-square"></i> Book Now</Button>
                </div>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default Car;