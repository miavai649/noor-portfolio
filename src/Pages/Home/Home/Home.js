import React from 'react';
import AboutMe from '../AboutME/AboutMe';
import Banner from '../Banner/Banner';
import Projects from '../Porjects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;