import React from 'react';
import { useForm } from "react-hook-form";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { Typography } from '@mui/material';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import swal from '@sweetalert/with-react';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const Review = () => {
    const {user} = useAuth();
    const [value, setValue] = React.useState(3);
    const [hover, setHover] = React.useState(0);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.rating = value;
        data.name = user.name;
        data.img = user.img;
        fetch('https://thawing-sea-96510.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                reset();
                swal("Good job!", "Thank U for your feedback!", "success");
            }
        })
        console.log(data)
    };
    return (
        <div className="container">
            <div className="container">
                <h2 className="fw-bolder">Review Us</h2>
                <Box
                    className="mt-5"
                    sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Typography className="me-3">Ratting</Typography>
                    <Rating
                        name="hover-feedback"
                        value={value}
                        precision={0.5}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                        setHover(newHover);
                        }}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                </Box>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="text-start w-75 w-sm-100 w-md-75">
                        <Form.Label>Message <span className="text-danger">*</span></Form.Label>
                        <Form.Control as="textarea" rows={5} {...register("message", { required: true })} />
                        {errors.message && <p className="text-danger">This field is required *</p>}
                        <Button variant="danger rounded-0 px-5 mt-4" type="submit">Submit</Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default Review;