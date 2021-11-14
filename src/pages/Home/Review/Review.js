import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( () => {
        fetch("https://thawing-sea-96510.herokuapp.com/reviews")
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <div className="container text-start my-5">
            <h1 className="fw-bolder pt-4 pb-5 text-center">Clients <span className="text-danger">Review</span></h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gy-4 gx-3 gx-md-5">
                {
                    reviews.map(review => <SingleReview review={review} key={review._id}></SingleReview>)
                }
            </div>
        </div>
    );
};

export default Review;