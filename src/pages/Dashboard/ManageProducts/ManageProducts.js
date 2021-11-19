import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';
import swal from '@sweetalert/with-react';

const ManageProducts = () => {
    const [cars, setCars] = useState([]);

    useEffect( () => {
        fetch('https://thawing-sea-96510.herokuapp.com/all-cars')
        .then(res => res.json())
        .then(data => setCars(data))
    }, [])


    const handleDelete = id => {
        swal({
            title: "Are you sure you want to delete this car?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                const url = `https://thawing-sea-96510.herokuapp.com/all-cars/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingBookings = cars.filter(event => event._id !== id);
                        setCars(remainingBookings);
                        swal("Poof! car deleted successfully!", {
                            icon: "success",
                        });
                    }
                });
            }
          });
    };

    return (
        <div className="my-3 my-md-5">
            <h2 className="fw-bold mb-5">Manage Products</h2>
            <div className="row gy-5 px-2">
                {
                    cars.map(singleProduct => 
                    <SingleProduct key={singleProduct._id} handleDelete={handleDelete} singleProduct={singleProduct}>
                    </SingleProduct>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;