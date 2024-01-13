import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Features from '../components/Common/Features';
import AboutUsContentThree from '../components/About/AboutUsContentThree';
import Footer from '../components/_App/Footer';

const About3 = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="About Us" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="About Us" 
            />   <br/>           
            <br/>           
            <AboutUsContentThree />
            <Features />
            <Footer />
        </React.Fragment>
    )
}

export default About3;