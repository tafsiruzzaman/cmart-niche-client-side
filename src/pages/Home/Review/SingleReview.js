import { Rating } from '@mui/material';
import React from 'react';
import emptyImg from '../../../images/blank-avatar.png';

const SingleReview = (props) => {
    const {name, img, rating, message} = props.review;
    let userImg;
    if(img) {
        userImg = img;
    }
    else {
        userImg = emptyImg;
    }

    return (
        <div className="col">
            <div className="card h-100">
                <div className="d-flex align-items-center justify-content-start pt-3 ps-3">
                    <div className="w-25">
                        <img src={userImg} className="w-75 img-fluid" alt="..."/>
                    </div>
                    <div>
                        <h6 className="fw-bolder m-0">{name}</h6>
                        <Rating name="read-only" value={rating} readOnly />
                    </div>
                </div>
                <div className="card-body">
                    <p>"{message}"</p>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;