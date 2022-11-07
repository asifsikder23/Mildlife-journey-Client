import React from 'react';
import Destinations from '../Destinations/Destinations';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Destinations></Destinations>
        </div>
    );
};

export default Home;