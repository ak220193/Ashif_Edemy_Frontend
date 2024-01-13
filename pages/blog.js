import React, { useState, useEffect } from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../components/_App/Footer';
import { getBlogData } from "../store/slice/blogSlice";
import { useSelector, useDispatch } from "react-redux";
import BlogDetailsMain from './single-blog';
import { useRouter } from 'next/router';

const Blog = () => {
    const router = useRouter();
    const { blogList, loader } = useSelector((state)=>state.blog);
    const dispatch = useDispatch();

    useEffect(() => {    
        getAllBlogs();
    },[]);   

    const getAllBlogs = () => {
        dispatch( getBlogData() );
    }
    
    const handleEventClick = async (blogId) => {
        await localStorage.setItem('currentblogId', blogId);
        router.push(`/single-blog`);
    }

    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Blog" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog" 
            />  

            <div className="blog-area ptb-100">
                <div className="container">
                    <div className="row">
                        {blogList && blogList.map((list, key) => {
                        return (
                            <div className="col-lg-6 col-md-6" key={key}>
                            <div className="single-blog-post">
                                <div className="post-content">
                                <a className="category">{list?.Domain}</a>
                                <h3>{list?.title1}</h3>
                                <div className="limited-height-div">
                                    <p>{list?.body1}</p>
                                </div>
                                <div onClick={() => { handleEventClick(list._id); }} style={{ cursor: "pointer"}}>
                                    <a className="read-more-button" style={{ width: "100px", height: "100px", background: "red", color: '#fff', padding: '12px', borderRadius: "10px" }}>Read More</a>
                                </div>          
                                {/* <Link href={`/single-blog?data-id=${list._id}`} as="/single-blog" passHref>
                                    <a className="read-more-button" style={{ width: "100px", height: "100px", background: "red", color: '#fff', padding: '12px', borderRadius: "10px" }}>Read More</a>
                                </Link> */}
                                </div>
                            </div>
                            </div>
                        );
                        })}
                    </div>
                </div>
            </div>
    
            <Footer />
        </React.Fragment>
    )
}

export default Blog;