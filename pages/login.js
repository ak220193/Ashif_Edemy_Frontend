import React, { useState, useEffect } from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../components/_App/Footer';
import { getBlogData } from "../store/slice/blogSlice";
import { useSelector, useDispatch } from "react-redux";
import BlogDetailsMain from './single-blog';
const LoginForm = () => {

    // const { blogList, loader } = useSelector((state)=>state.blog);
    // const dispatch = useDispatch();

    // useEffect(() => {    
    //     getAllBlogs();
    // },[]);   

    // const getAllBlogs = () => {
    //     dispatch( getBlogData() );
    // }
    
   

    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Login" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Login" 
            />  
            <div className="blog-area ptb-100 view-all-courses-area-two bg-fef8ef">
                <div className="container">
                    <div className="row display-flex">
                        <div className="col-lg-6 col-md-12">
                            <div className="view-all-courses-image">
                                <img src="/images/banner-img2.png" alt="image" />

                                <div className="shape11" data-speed="0.06" data-revert="true">
                                    <img src="/images/shape10.png" alt="image" />
                                </div>
                                <div className="shape12" data-speed="0.06" data-revert="true">
                                    <img src="/images/shape11.png" alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 login-form">
                            <form>
                                <div className="form-group">
                                        <label>Username or email</label>
                                        <input type="text" className="form-control" placeholder="Username or email" />
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>

                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
                                            <p>
                                                <input type="checkbox" id="test2" />
                                                <label htmlFor="test2">Remember me</label>
                                            </p>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
                                            <Link href="#">
                                                <a className="lost-your-password">Lost your password?</a>
                                            </Link>
                                        </div>
                                    </div>

                                <button type="submit">Log In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default LoginForm;