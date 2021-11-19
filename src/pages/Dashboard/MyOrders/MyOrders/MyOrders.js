import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import SingleItem from '../SingleItem/SingleItem';
import swal from '@sweetalert/with-react';


const MyOrders = () => {
    const {user} = useAuth();
    const [usersBookings, setUserBookings] = useState([]);

    useEffect( () => {
        fetch(`https://thawing-sea-96510.herokuapp.com/all-bookings/${user.email}`)
        .then(res => res.json())
        .then(data => setUserBookings(data))
    }, [])

    const handleDelete = id => {
        swal({
            title: "Are you sure you want to cancel this booking?",
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
                        const remainingBookings = usersBookings.filter(event => event._id !== id);
                        setUserBookings(remainingBookings);
                        swal("Poof! Your booking has been canceled!", {
                            icon: "success",
                        });
                    }
                });
            }
          });
    };

    return (
        <div className="my-3 my-md-5">
            <h2 className="fw-bold mb-5">You have booked {usersBookings.length} car</h2>
            {
                (usersBookings.length === 0) && <Link to="/"><Button variant="danger text-white rounded-0 my-5 px-5">Go back Home</Button></Link>
            }
            <div className="row gy-5 px-2">
                {
                    usersBookings.map(singleItem => <SingleItem key={singleItem._id} handleDelete={handleDelete} singleItem={singleItem}></SingleItem>)
                }
            </div>
        </div>
    );
};

export default MyOrders;