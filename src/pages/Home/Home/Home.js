import React from 'react';
import Header from '../../Shraed/Header/Header';
import Agent from '../Agent/Agent';
import Banner from '../Banner/Banner';
import HomeCars from '../HomeCars/HomeCars';

const Home = () => {
    return (
        <div className="bg_image">
            <Header></Header>
            <Banner></Banner>
            <HomeCars></HomeCars>
            <Agent></Agent>
        </div>
    );
};

export default Home;