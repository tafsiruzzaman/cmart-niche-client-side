import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="containe">
            <div style={{height: "300x"}}>
                <h1 className="mt-5 py-5">404! Page not found</h1>
                <Link to="/"><Button variant="danger my-5 px-5 rounded-0">Go Back Home</Button></Link>
            </div>
        </div>
    );
};

export default NotFound;