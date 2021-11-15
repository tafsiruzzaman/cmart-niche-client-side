import React, { useEffect, useState } from 'react';
import SingleOrder from './SingleOrder';
import swal from '@sweetalert/with-react';

const ManageAllOrders = () => {
    const [all_bookings, setAll_bookings] = useState([])
    useEffect(() => {
        fetch('https://thawing-sea-96510.herokuapp.com/all-bookings')
        .then(res => res.json())
        .then (data => {
            setAll_bookings(data);
        })
    }, []);

    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "You want to delete this record?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                const url = `https://thawing-sea-96510.herokuapp.com/all-bookings/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingBookings = all_bookings.filter(event => event._id !== id);
                        setAll_bookings(remainingBookings);
                        swal("Record deleted successfully!", "", "success");
                    }
                });
            }
        });
    }
    return (
        // http://localhost:5000/all-bookings
        <div className="container my-5">
            <h3 className="text-center mb-3 header-text-colour">All Bookings</h3>
            <div className="table-responsive">
            <table className="table table-striped table-bordered">
                <thead>
                <tr className="bg-light text-drak">
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Package Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        all_bookings.map(singleBooking =>
                            <SingleOrder key={singleBooking._id} handleDelete={handleDelete} singleBooking={singleBooking}></SingleOrder>
                        )
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;