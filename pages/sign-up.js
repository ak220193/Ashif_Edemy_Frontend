
import React, { useState, useEffect, useCallback } from "react";
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../components/_App/Footer';
import { useSelector, useDispatch } from "react-redux";
import { postLogin } from "../store/slice/auth";


const RegisterForm = () => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({ userFirstName: ''});
    const initialState = { 
        userFirstName: '', 
        userLastName: '', 
        userEmail: '',
        userAffiliationId: '', 
        userPassword: '', 
        userAffiliation: '', 
        verified: false 
    };
    const [formData, setData] =  useState(initialState);
    const [successMessage, setSuccessMessage] = useState('');

    // update the form data 
    const handleChange = async (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        const newScrollPosition = window.scrollY;
        setTimeout(() => {
            window.scrollTo(0, newScrollPosition);
        }, 0);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        let newErrors = {};

        if (!formData.userFirstName) {
            newErrors.userFirstName = 'User FirstName is required';
        }

        if (!formData.userPassword) {
            newErrors.userPassword = 'User Password is required';
        }

        if (!formData.userLastName) {
            newErrors.userLastName = 'User LastName is required';
        }

        if (!formData.userEmail) {
            newErrors.userEmail = 'User Email is required';
        }else if(formData.userEmail ){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let isEmail = emailRegex.test(formData.userEmail);
            if(!isEmail){
                newErrors.userEmail = 'Please give the valid email';
            }
        }

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) { 
            console.log('== formData ', formData)
            let response = await dispatch( postLogin(formData) );
            if( response && response.response && response.response == "waiting"){
                setSuccessMessage(response.message);                
                setTimeout(() => {
                    handleReset();
                    setSuccessMessage('');
                }, 3000);
            }else if (response && response.response && response.response == "Email Exits") {
                newErrors.userEmail = response.message
                setErrors(newErrors);
            }
        }

        const newScrollPosition = window.scrollY;
        setTimeout(() => {
            window.scrollTo(0, newScrollPosition);
        }, 0);

    }
    
    const handleReset = () => {
        setData(initialState);
    };


    return (

        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Sign Up" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Sign Up" 
            />  

            <div className="blog-area ptb-100 view-all-courses-area-two bg-fef8ef">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 col-md-12">
                            <div className="view-all-courses-image">
                                <img src="/images/banner-img3.png" alt="image" />

                                <div className="shape11" data-speed="0.06" data-revert="true">
                                    <img src="/images/shape10.png" alt="image" />
                                </div>
                                <div className="shape12" data-speed="0.06" data-revert="true">
                                    <img src="/images/shape11.png" alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 register-form">
                            <form>
                                <div className="row">
                                    <div className="form-group p-1 col-lg-6 col-md-6 col-xs-12">
                                        <div className="form-group ">
                                            <label>First Name <span className='field-required'>*</span> </label>
                                            <input type="text" onChange={handleChange} name="userFirstName" value={formData.userFirstName} className="form-control" placeholder="First Name" />
                                            {errors.userFirstName && (
                                                <div className="error-message">{errors.userFirstName}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="form-group p-1 col-lg-6 col-md-6 col-xs-12">
                                        <div className="form-group ">
                                            <label>Last Name <span className='field-required'>*</span> </label>
                                            <input type="text" onChange={handleChange} name="userLastName" value={formData.userLastName} className="form-control" placeholder="Last Name" />
                                            {errors.userLastName && (
                                                <div className="error-message">{errors.userLastName}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group p-1 col-lg-6 col-md-6 col-xs-12">
                                        <div className="form-group ">
                                            <label>Email <span className='field-required'>*</span></label>
                                            <input onChange={handleChange} type="text" name="userEmail" value={formData.userEmail} className="form-control" placeholder="(ex: 123@gmail.com)" />
                                            {errors.userEmail && (
                                                <div className="error-message">{errors.userEmail}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="form-group p-1 col-lg-6 col-md-6 col-xs-12">
                                        <div className="form-group ">
                                            <label>ID Card Number</label>
                                            <input onChange={handleChange} type="text" name="userAffiliationId" value={formData.userAffiliationId} className="form-control" placeholder="University/College/School" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group p-1 col-lg-6 col-md-6 col-xs-12">
                                        <div className="form-group ">
                                            <label>Select Your Affiliation</label>
                                            {/* { onChange={handleSelectChange} value={seletedState}} */}
                                            <select className="form-control" id="exampleSelect" onChange={handleChange} name="userAffiliation" value={formData.userAffiliation} > 
                                                <option value="">Select Your Affiliation</option>
                                                <option value="Student">Student</option>
                                                <option value="School">School</option>
                                                <option value="College">College</option>
                                                <option value="University">University</option>
                                                <option value="Industrial">Industrial</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group p-1 col-lg-6 col-md-6 col-xs-12">
                                        <div className="form-group ">
                                            <label>Password <span className='field-required'>*</span></label>
                                            <input onChange={handleChange} type="password" name="userPassword" value={formData.userPassword} className="form-control" placeholder="Password" />
                                            {errors.userPassword && (
                                                <div className="error-message">{errors.userPassword}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {successMessage && <p style={{ color: "green", fontWeight: "700"}}>{successMessage}</p>}
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-xs-12">
                                        <button type="submit" onClick={handleFormSubmit} >Register</button>
                                    </div>
                                </div>
                                {/* <p className="description">The password should be at least eight characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & )</p> */}

                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>        
    )
}

export default RegisterForm;