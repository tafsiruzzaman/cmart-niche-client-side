import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const SingleProduct = (props) => {
    const {img, name, _id} = props.singleProduct;
    const {handleDelete} = props;
    return (
        <div className="col-lg-6">
            <div className="row">
                <div className="col-md-6 col-lg-5">
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="col-md-6 col-lg-7 text-start">
                    <div className="row">
                        <h5 className="fw-bolder mt-2 mt-md-0">{name}</h5>
                        <div className="col-6 col-md-12">
                            <div className="d-flex align-item-center">
                             <Link to={`edit-details/${_id}`} className="text-decoration-none">
                                <Button variant="text"><i className="fas fa-edit me-2"></i> edit</Button>
                             </Link>
                             <Button onClick={() => handleDelete(_id)} variant="text"><i className="far fa-trash-alt me-2"></i> delete</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;