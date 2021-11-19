import React from 'react';
import { Button } from 'react-bootstrap';

const SingleItem = (props) => {
    const {img, carName, colour, engineType,  price, status, _id} = props.singleItem;
    const {handleDelete} = props;
    return (
        <div className="col-lg-6">
            <div className="row">
                <div className="col-md-6 col-lg-5">
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="col-md-6 col-lg-7 text-start">
                    <div className="row">
                        <h5 className="fw-bolder mt-2 mt-md-0">{carName}</h5>
                        <div className="col-6 col-md-12">
                            <small className=" d-block fw-bold">Color: {colour}</small>
                            <small className=" d-block fw-bold">{engineType}</small>
                            <small className=" d-block fw-bold">Price: ${price}K</small>
                            <small className=" d-block fw-bold orange-text">Status: {status}</small>
                        </div>
                        <div className="col-6 col-md-12">
                            <div className="d-flex align-item-center">
                                <Button onClick={()=> handleDelete(_id)} variant="danger rounded-0 text-white px-4 mt-2">Cancel</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;