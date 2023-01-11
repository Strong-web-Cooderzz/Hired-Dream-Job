import React from 'react';
import FeaturedCities from './FeaturedCities/FeaturedCities';
import Articles from './Articles/Articles';
import Hero from './Hero/Hero';

const Home = () => {
    return (
        <div>
            <Hero />
            <Articles></Articles>
            <FeaturedCities />
        </div>
    );
};

export default Home;
