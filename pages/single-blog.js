import React, { useEffect, useState } from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../components/_App/Footer';
import { useRouter } from 'next/router';
import { getBlogData } from "../store/slice/blogSlice";
import { useSelector, useDispatch } from "react-redux";
import { submitQueryComments } from "../store/slice/blogSlice";

const BlogDetailsMain = () => {

    const router = useRouter();
    const dataId = router.query['data-id'];
    const { blogList, loader } = useSelector((state)=>state.blog);
    const dispatch = useDispatch();
    const [currentItem, setCurrentItem] = useState({});
    const [errors, setErrors] = useState({ userEmail: ''});
    const [successMessage, setSuccessMessage] = useState('');
    const initialState = { 
        userEmail: '',
        userQuery: '', 
        Domain: ''
    };
    const [formData, setData] =  useState(initialState);
    useEffect(() => {    
        getAllBlogs();
    },[]); 

    const getAllBlogs = () => {
        dispatch( getBlogData() );
    }
    
    useEffect(() => {    
        if(blogList && blogList.length){
            blogList.map((item) => {
                if(item._id == localStorage.getItem('currentblogId')){
                    setCurrentItem(item)
                }
            })
        }
    },[blogList]); 


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        let newErrors = {};
        if (!formData.userQuery) {
            newErrors.userQuery = 'User Query is required';
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

        const newScrollPosition = window.scrollY;
        setTimeout(() => {
            window.scrollTo(0, newScrollPosition);
        }, 0);
        if (Object.keys(newErrors).length === 0) { 
            let fullData = {...formData, Domain: currentItem?.Domain};
            let response = await dispatch( submitQueryComments(fullData) );
            console.log('=== response ', response)
            if( response && response.message){
                setSuccessMessage(response.message);    
                handleReset();            
                setTimeout(() => {                    
                    setSuccessMessage('');
                }, 6000);
                const newScrollPosition = window.scrollY;
                setTimeout(() => {
                    window.scrollTo(0, newScrollPosition);
                }, 0);
            }
        }
    }
    
    const handleReset = () => {
        setData(initialState);
    };

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

    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle={ currentItem && currentItem.Domain || "Blog Details" }
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog Details" 
            />  

            <div className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="blog-details-desc">
                                <h3>{currentItem && currentItem.subDomain }</h3>
                                
                                <div className="user-review">
                                    <span className="d-block sub-comment"> <b>{currentItem.title1} </b></span>
                                    <p>{currentItem.body1}</p>
                                    <hr></hr>
                                </div>

                                <div className="user-review">
                                    <span className="d-block sub-comment"> <b>{currentItem.title2} </b></span>
                                    <p>{currentItem.body2}</p>
                                    <hr></hr>
                                </div>

                                <div className="user-review">
                                    <span className="d-block sub-comment"> <b>{currentItem.title3} </b></span>
                                    <p>{currentItem.body3}</p>
                                    <hr></hr>
                                </div>

                                <div className="user-review">
                                    <span className="d-block sub-comment"> <b>{currentItem.title4} </b></span>
                                    <p>{currentItem.body4}</p>
                                    <hr></hr>
                                </div>

                                <div className="user-review">
                                    <span className="d-block sub-comment"> <b>{currentItem.title5} </b></span>
                                    <p>{currentItem.body5}</p>
                                    <hr></hr>
                                </div>

                                <div className="user-review">
                                    <span className="d-block sub-comment"> <b>{currentItem.title6} </b></span>
                                    <p>{currentItem.body6}</p>
                                    <hr></hr>
                                </div>

                                <div className="comments-area">
                                    <div className="comment-respond">
                                        <h3 className="comment-reply-title">Leave a Reply</h3>

                                        <form className="comment-form">
                                            <div className="comment-notes">
                                                <span id="email-notes">Your email address will not be published.</span>
                                                Required fields are marked 
                                                <span className="required">*</span>
                                            </div>
                                            <div className="comment-form-author">
                                                <label>Your Email <span style={{ color: "red"}}>*</span></label>
                                                <input type="text" onChange={handleChange} value={formData.userEmail} id="userEmail" placeholder="Your Email*"  name="userEmail"/>
                                                {errors.userEmail && (
                                                    <div className="error-message">{errors.userEmail}</div>
                                                )}
                                            </div>
                                            <div className="comment-form-comment">
                                                <label>Your Answer For FAQ <span style={{ color: "red"}}>*</span></label>
                                                <textarea name="userQuery" value={formData.userQuery} onChange={handleChange} id="userQuery" cols="45" placeholder="Your Answer For FAQ*" rows="5" maxLength="65525" ></textarea>
                                                {errors.userQuery && (
                                                    <div className="error-message">{errors.userQuery}</div>
                                                )}
                                            </div>
                                            {/* <div className="comment-form-cookies-consent">
                                                <input type="checkbox" value="yes" name="wp-comment-cookies-consent" id="wp-comment-cookies-consent" />
                                                <label>Save my name, email, and website in this browser for the next time I comment.</label>
                                            </div> */}
                                            
                                            <div className="form-submit">
                                            {successMessage && <div style={{ color: "green", fontWeight: "700"}}>{successMessage}</div>}
                                            <br/><br/>
                                                <input type="submit" name="submit" id="submit" onClick={handleFormSubmit} className="submit" value="Post A Comment" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                       
                    </div>
                </div>
            </div>
       
            <Footer />
        </React.Fragment>
    )
}

export default BlogDetailsMain;