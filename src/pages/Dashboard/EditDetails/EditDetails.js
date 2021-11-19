import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import swal from '@sweetalert/with-react';

const EditDetails = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [car, setCar] = useState({});
    const {id}  = useParams();
    const history = useHistory();

    useEffect( () => {
        fetch(`https://thawing-sea-96510.herokuapp.com/all-cars/${id}`)
        .then(res => res.json())
        .then(data => setCar(data))
    }, [])

    const onSubmit = data => {

        fetch(`https://thawing-sea-96510.herokuapp.com/all-cars/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                swal("Update Successful!", "", "success");
                reset();
                history.push("/dashboard/manage-products")

            }
        })
    };
    return (
        <div className="container my-3 my-lg-5">
            <div className="container">
                {
                    !car.name ? 
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
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className="d-md-flex text-start fw-bold">
                            <div className="w-100 px-3">
                                <Form.Group className="mb-3 me-2">
                                    <Form.Label>Car Name <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" defaultValue={car.name} placeholder="Car name" {...register("name", { required: true })} />
                                    {errors.name && <span className="text-danger">required *</span>}
                                </Form.Group>
                                <Form.Group className="mb-3 me-2">
                                    <Form.Label>Car Image <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" defaultValue={car.img} placeholder="Car Image" {...register("img", { required: true })} />
                                    {errors.img && <span className="text-danger">required *</span>}
                                </Form.Group>
                                <div className="d-flex">
                                    <Form.Group className="mb-3 me-2 w-50">
                                        <Form.Label>Mileage (km) <span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="number" defaultValue={car.mileage} placeholder="Mileage" {...register("mileage", { required: true })} />
                                        {errors.mileage && <span className="text-danger">required *</span>}
                                    </Form.Group>
                                    <Form.Group className="mb-3 me-2 w-50">
                                        <Form.Label>Manufacture Year <span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="number" defaultValue={car.manufacturerYear} placeholder="Manufacture Year" {...register("manufacturerYear", { required: true })} />
                                        {errors.manufacturerYear && <span className="text-danger">required *</span>}
                                    </Form.Group>
                                </div>
                                <div className="d-flex">
                                    <Form.Group className="mb-3 me-2 w-50">
                                        <Form.Label>Mode <span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" defaultValue={car.mode} placeholder="ex: Auto" {...register("mode", { required: true })} />
                                        {errors.mode && <span className="text-danger">required *</span>}
                                    </Form.Group>
                                    <Form.Group className="mb-3 me-2 w-50">
                                        <Form.Label>Fuel Type <span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" defaultValue={car.fuelType} placeholder="ex: Petrol" {...register("fuelType", { required: true })} />
                                        {errors.fuelType && <span className="text-danger">required *</span>}
                                    </Form.Group>
                                </div>
                                <div className="d-flex">
                                    <Form.Group className="mb-3 me-2 w-50">
                                        <Form.Label>Color <span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" defaultValue={car.colour} placeholder="Color" {...register("colour", { required: true })} />
                                        {errors.colour && <span className="text-danger">required *</span>}
                                    </Form.Group>
                                    <Form.Group className="mb-3 me-2 w-50">
                                        <Form.Label>Type <span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" defaultValue={car.type} placeholder="ex: Sports" {...register("type", { required: true })} />
                                        {errors.type && <span className="text-danger">required *</span>}
                                    </Form.Group>
                                </div>
                                <div className="d-flex">
                                    <Form.Group className="mb-3 me-2 w-50">
                                        <Form.Label>Average Ratting <span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="Text" defaultValue={car.ratting} placeholder="Average Ratting" {...register("ratting", { required: true })} />
                                        {errors.ratting && <span className="text-danger">required *</span>}
                                    </Form.Group>
                                    <Form.Group className="mb-3 me-2 w-50">
                                        <Form.Label>Total Ratting <span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" defaultValue={car.review} placeholder="Total Ratting" {...register("review", { required: true })} />
                                        {errors.review && <span className="text-danger">required *</span>}
                                    </Form.Group>
                                </div>
                                <div className="d-flex">
                                    <Form.Group className="mb-3 me-2 w-50">
                                        <Form.Label>Price (k) <span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="Text" defaultValue={car.price} placeholder="Price" {...register("price", { required: true })} />
                                        {errors.price && <span className="text-danger">required *</span>}
                                    </Form.Group>
                                    <Form.Group className="mb-3 me-2 w-50">
                                        <Form.Label>Location <span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" defaultValue={car.location} placeholder="Location" {...register("location", { required: true })} />
                                        {errors.location && <span className="text-danger">required *</span>}
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="w-100 px-3 btn-colour">
                                <Form.Group className="mb-3 me-2">
                                    <Form.Label>Package Description <span className="text-danger">*</span></Form.Label>
                                    <Form.Control as="textarea" defaultValue={car.description} placeholder="Description" rows={10} {...register("description", { required: true })} />
                                    {errors.description && <span className="text-danger">required *</span>}
                                </Form.Group>
                                <Button variant="danger text-white px-5 rounded-0" type="submit">
                                    Update
                                </Button>
                            </div>
                        </div>
                    </Form>
                }
                
            </div>
        </div>
    );
};

export default EditDetails;