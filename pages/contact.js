import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/_App/Footer';
import GoogleMap from '../components/Contact/GoogleMap';

const Contact = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Contact" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Contact" 
            />  

            <div className="contact-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="contact-info">
                                <span className="sub-title">Contact Details</span>
                                <h2>Get in Touch</h2>
                                <p>LearnPlusPlus.com, a knowledge-based digital technology platform offering educational products and services to enable learners at all levels to explore and craft their learning paths.</p>
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-map'></i>
                                        </div>
                                        <h3>Our Address</h3>
                                        <p>LPP Learning Technology Solutions Private Limited (Incorporated as a Private Limited Company under the Companies Act, 2013 (18 of 2013))</p>
                                        <p><b>Regd. Office: </b> 26 Badrakaliamman Koil Street No. 3, Uppilipalayam, Coimbatore – 641 015, TamilNadu, India.</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-phone-call'></i>
                                        </div>
                                        <h3>Contact</h3>
                                        <p>Mobile: <a href="tel:+91-94421 10920">+91-94421 10920</a></p>
                                        <p>Mail: <a href="mailto:info@learnplusplus.com">info@learnplusplus.com</a></p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-time-five'></i>
                                        </div>
                                        <h3>Hours of Operation</h3>
                                        <p>Monday - Friday: 09:00 - 20:00</p>
                                        <p>Sunday & Saturday: 10:30 - 22:00</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>

            <GoogleMap />
     
            <Footer />
        </React.Fragment>
    )
}

export default Contact;