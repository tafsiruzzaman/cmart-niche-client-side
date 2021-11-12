import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Agent = () => {
    return (
        <div className="container my-5">
            <h1 className="fw-bolder pt-4 pb-5">Our <span className="text-danger">Agent</span></h1>
            <Row xs={1} md={2} lg={4} className="gx-sm-0 gx-md-2 gx-lg-4 gy-4" >
                <Col>
                    <Card className="mx-start text-start rounded-0">
                        <Card.Img variant="top w-100 img-fluid" src="https://storage.googleapis.com/theme-vessel-items/checking-sites/cmart-2-html/HTML/main/img/avatar/avatar-10.jpg"/>
                        <Card.Body className="bg-danger">
                        <Card.Text className="text-white">Agent</Card.Text>
                            <Card.Title><h4 className="text-white fw-bold">Lee Kung</h4></Card.Title>
                            <div className="text-end fs-3 text-dark">
                                <i className="me-3 fab fa-facebook"></i>
                                <i className="me-3 fab fa-instagram"></i>
                                <i className="me-3 fab fa-twitter"></i>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="mx-start text-start rounded-0">
                        <Card.Img variant="top w-100 img-fluid" src="https://storage.googleapis.com/theme-vessel-items/checking-sites/cmart-2-html/HTML/main/img/avatar/avatar-9.jpg"/>
                        <Card.Body className="bg-danger">
                        <Card.Text className="text-white">Agent</Card.Text>
                            <Card.Title><h4 className="text-white fw-bold">Mark Wood</h4></Card.Title>
                            <div className="text-end fs-3 text-dark">
                                <i className="me-3 fab fa-facebook"></i>
                                <i className="me-3 fab fa-instagram"></i>
                                <i className="me-3 fab fa-twitter"></i>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="mx-start text-start rounded-0">
                        <Card.Img variant="top w-100 img-fluid" src="https://storage.googleapis.com/theme-vessel-items/checking-sites/cmart-2-html/HTML/main/img/avatar/avatar-11.jpg"/>
                        <Card.Body className="bg-danger">
                        <Card.Text className="text-white">Agent</Card.Text>
                            <Card.Title><h4 className="text-white fw-bold">Ben Dunk</h4></Card.Title>
                            <div className="text-end fs-3 text-dark">
                                <i className="me-3 fab fa-facebook"></i>
                                <i className="me-3 fab fa-instagram"></i>
                                <i className="me-3 fab fa-twitter"></i>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="mx-start text-start rounded-0">
                        <Card.Img variant="top w-100 img-fluid" src="https://storage.googleapis.com/theme-vessel-items/checking-sites/cmart-2-html/HTML/main/img/avatar/avatar-12.jpg"/>
                        <Card.Body className="bg-danger">
                        <Card.Text className="text-white">Agent</Card.Text>
                            <Card.Title><h4 className="text-white fw-bold">Billy Young</h4></Card.Title>
                            <div className="text-end fs-3 text-dark">
                                <i className="me-3 fab fa-facebook"></i>
                                <i className="me-3 fab fa-instagram"></i>
                                <i className="me-3 fab fa-twitter"></i>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Agent;