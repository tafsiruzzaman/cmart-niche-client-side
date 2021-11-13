import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import swal from '@sweetalert/with-react'
const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://thawing-sea-96510.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    swal("Good job!", "Admin added successfully", "success");
                }
                else {
                    swal({
                        title: "Failed!",
                        text: "User not exist or may input a wrong email!",
                        icon: "warning",
                        dangerMode: true,
                    })
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <h2 className="mt-3 mb-4 fw-bolder">Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained" style={{backgroundColor: "#dc3545", borderRadius: 0}}>
                    Make Admin
                </Button>
            </form>
        </div>
    );
};

export default MakeAdmin;