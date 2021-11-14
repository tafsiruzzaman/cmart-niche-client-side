import React from 'react';
import Footer from '../../Shraed/Footer/Footer';
import Header from '../../Shraed/Header/Header';
import Agent from '../Agent/Agent';
import Banner from '../Banner/Banner';
import HomeCars from '../HomeCars/HomeCars';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div className="bg_image">
            <Header></Header>
            <Banner></Banner>
            <HomeCars></HomeCars>
            <Agent></Agent>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;