import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Header from '../Shraed/Header/Header';
import { Button, Form, Spinner} from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import swal from '@sweetalert/with-react';

const OrderCar = () => {
    const [car, setCar] = useState([]);
    const {id} = useParams();
    const history = useHistory();
    const {user} = useAuth();
    
    useEffect( ()=> {
        fetch(`https://thawing-sea-96510.herokuapp.com/all-cars/${id}`)
        .then(res => res.json())
        .then(data => setCar(data))
    }, [])

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.img = car.img;
        data.carName = car.name;
        data.price = car.price;
        data.status = "Pending";
        data.id = car._id;
        data.colour = car.colour;
        console.log(data)
        
        fetch('https://thawing-sea-96510.herokuapp.com/all-bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                reset();
                swal("Good job!", "You booked the car successfully", "success");
                history.push('/dashboard')
            }
        })
    };
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row my-5">
                    {
                        car.length === 0 ? 
                        <Button variant="danger" disabled>
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
                        <div className="col-lg-7">
                            <div>
                                <img className="img-fluid" src={car.img} alt="" />
                                <div className="mt-4 d-flex align-item-center justify-content-between">
                                    <div className="text-start">
                                        <h2 className="fw-bolder">{car?.name}</h2>
                                        <h6 className="text-secondary pt-2"><i className="fas fa-map-marker-alt"></i> {car?.location}</h6>
                                    </div>
                                    <div className="text-start">
                                        <small className="d-block">Excellent</small>
                                        <small className="d-block">Ratting: <i className="text-danger fas fa-star"></i> {car?.ratting}</small>
                                        <small className="d-block">{car?.review} Review</small>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="mt-2 d-flex align-items-center">
                                                        <h3 className="text-danger mb-0"><i className="me-3 fas fa-road"></i></h3>
                                                        <div>
                                                            <p className="mb-0 fw-bolder">Mileage</p>
                                                            <small className="mb-0 text-secondary">{car.mileage}</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="mt-2 d-flex align-items-center">
                                                        <h3 className="text-danger mb-0"><i className="me-3 fas fa-gamepad"></i></h3>
                                                        <div>
                                                            <p className="mb-0 fw-bolder">Moad</p>
                                                            <small className="mb-0 text-secondary">{car?.mode}</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="mt-2 d-flex align-items-center">
                                                        <h3 className="text-danger mb-0"><i className="me-3 fas fa-gas-pump"></i></h3>
                                                        <div>
                                                            <p className="mb-0 fw-bolder">Fuel Type</p>
                                                            <small className="mb-0 text-secondary">{car.fuelType}</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="mt-2 d-flex align-items-center">
                                                        <h3 className="text-danger mb-0"><i className="me-3 fas fa-palette"></i></h3>
                                                        <div>
                                                            <p className="mb-0 fw-bolder">Colour</p>
                                                            <small className="mb-0 text-secondary">{car.colour}</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="my-4">
                                    <h1 className="fw-bolder text-start">Overview</h1>
                                    <p className="text-secondary" style={{textAlign: "justify"}}>{car?.description}</p>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="col-lg-5">
                        <div className="px-4 py-4 shadow">
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <h2 className="fw-bolder mb-4">BOOK THIS CAR</h2>
                                <Form.Group className="mb-3">
                                    <Form.Control type="Text" defaultValue={user.displayName} placeholder="Your full name" {...register("name", { required: true })}/>
                                    {errors.name && <span className="text-danger">Required *</span>}
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="email" defaultValue={user.email} placeholder="Enter email" {...register("email", { required: true })}/>
                                    {errors.email && <span className="text-danger">Required *</span>}
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="Address" {...register("address", { required: true })}/>
                                    {errors.address && <span className="text-danger">Required *</span>}
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="number" placeholder="Phone" {...register("phone", { required: true })}/>
                                    {errors.phone && <span className="text-danger">Required *</span>}
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Select {...register("paymentOption", { required: true })}>
                                        <option>Payment Option</option>
                                        <option>Cash on delivery</option>
                                        <option>Bank EMI</option>
                                    </Form.Select>
                                    {errors.paymentOption && <span className="text-danger">Required *</span>}
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Select {...register("engineType", { required: true })}>
                                        <option>Engine Type</option>
                                        <option>Single Engine</option>
                                        <option>Dual Engine</option>
                                    </Form.Select>
                                    {errors.engineType && <span className="text-danger">Required *</span>}
                                </Form.Group>
                                <Form.Group className="mb-3 text-start">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={5} {...register("message")}/>
                                </Form.Group>
                                <div className="btn-colour">
                                    <Button variant="danger rounded-0 text-white px-4" type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </Form>                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCar;