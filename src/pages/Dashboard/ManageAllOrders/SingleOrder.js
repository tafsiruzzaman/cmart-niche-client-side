import React, { useEffect, useState } from 'react';
import swal from '@sweetalert/with-react';

const SingleOrder = (props) => {
    const [approved, setApproved] = useState(false);
    const [status, setStatus] = useState(props.singleBooking.status);
    const {_id, name, email, phone, carName, date} = props.singleBooking;
    const handleDelete = props.handleDelete;
    
    const handleApproveBtn = () => {
        
        const bookingInfo = props.singleBooking;
        bookingInfo.status = "Shipping";
        const url = `https://thawing-sea-96510.herokuapp.com/all-bookings/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                setStatus("Shipping");
                swal("Good job!", "Approve Successful", "success");
            }
        })
    }
    
    useEffect(()=> {
        if(status === "Shipping") {
            setApproved(true);
        }
    }, [status]);
    return (
        <tr key={_id}>
            <th scope="row">{_id}</th>
            <th>{name}</th>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{carName}</td>
            <td>{date}</td>
            <td>{status}</td>
            <td>
                <button onClick={()=> handleDelete(_id)} className="border border-0"><i className="text-danger far fa-trash-alt"></i> </button>
                {
                    !approved && <button onClick={handleApproveBtn}>Approve</button>
                }
            </td>
        </tr>
    );
};

export default SingleOrder;