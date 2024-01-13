import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import { getAdvertisement  } from "../store/slice/universitiesSlice";
import { getConceptDetails  } from "../store/slice/learningHubSlice";
import { useRouter } from 'next/router';
import * as moment from 'moment'
import { useSelector, useDispatch } from "react-redux";
import _ from 'lodash';

const TopUniversitiesPage = () => {
    const router = useRouter();
    const { advertisementLists } = useSelector((state)=>state.university);
    const { conceptList } = useSelector((state)=>state.learning);
    const dispatch = useDispatch()
    const [adImages, setAdImages] = React.useState([]);
    const [adTitle, setAdTitle] = React.useState([]);
    const [dataList, setConceptList] = React.useState([]);
    const [conceptTitle, setConceptTitle] = React.useState('');


    useEffect(() => {    
        getAllData();
    },[]); 

    useEffect( () => {
        setConceptList(conceptList)
    }, [conceptList])

    const getAllData = async() => {        
        await dispatch( getAdvertisement() );
    }  
    
    const handleConceptChange = async(event) => {
        event.preventDefault();        
        setConceptTitle(event.target.value)
        dispatch( getConceptDetails(event.target.value) );
        const newScrollPosition = window.scrollY;
        setTimeout(() => {
            window.scrollTo(0, newScrollPosition);
        }, 0);
    }

    useEffect(() => {    
        let adImages = []
        let adTitle = []
        advertisementLists.forEach((element) => {
            if(element.adImage) {
                const base64String = btoa(
                new Uint8Array(element.adImage?.data?.data)
                    .reduce((data, byte) => data + String.fromCharCode(byte), '')
                );
                let contType = element.adImage?.contentType
                adImages.push(`data:${contType};base64,${base64String}`)
            }
            if(element.Title) adTitle.push(element.Title)
        });      
        setAdImages(adImages)
        setAdTitle(adTitle)
    },[advertisementLists]); 

    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Concept++" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Concept++" 
            />  
            <div className="gallery-area pt-100 pb-70">
                <div className="container">
                    <h2 className="sub-title" style={{ textAlign: "center", paddingBottom: "15px"}}>Advertisement</h2>
                    <div className="row">                    
                        { adImages && adImages.map ( (data, index) => {
                            if(index < 3)
                                return <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                    <div className="single-gallery-item">
                                        <a className="popup-btn">
                                            <img src={`${data}`} alt="image" />
                                        </a>
                                        <p>{ adTitle[index] }</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="courses-area courses-section pt-100 pb-70">
                <div className="container">
                    <h2 className="sub-title" style={{ textAlign: "center", paddingBottom: "15px"}}> Concepts List</h2>
                    <div className="edemy-grid-sorting row align-items-center" style={{ background: '#f8f9fa', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', padding: '15px', borderRadius: '8px' }}>
                        <div className="col-lg-4 col-md-6 ordering float-right"> 
                            <div className="select-box float-right">
                                <div className='text-left' style={{ textAlign:"left"}} > <label> Filter By Concepts</label> </div>                                
                                <select className="form-control" onChange = { (event) => {handleConceptChange(event)}}>
                                    <option value="">Select Concept</option>
                                    <option value="K-12">K-12</option>
                                    <option value="Undergraduate-engineering">Undergraduate-engineering</option>
                                    <option value="Undergraduate-commerce">Undergraduate-commerce</option>
                                    <option value="Undergraduate-Business-Administration">Undergraduate-Business-Administration</option>
                                    <option value="Physics">Physics</option>
                                    <option value="Chemistry">Chemistry</option>
                                    <option value="Biology">Biology</option>
                                    <option value="Mathematics">Mathematics</option>
                                    <option value="Computer-Science">Computer-Science</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row" style= {{  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        {/* {
                            // uniList && uniList.length && uniList.map( (list, listIndex) => {
                                return <div className="col-lg-4 col-md-6" key={listIndex}>
                                            <div className="single-courses-box">
                                                <div className="courses-image" style={{ "width": '100% !important', "height": "200px", 'overflow': 'hidden', "cursor": "pointer"}}>
                                                    <div onClick={() => { handleEventClick(list._id); }} >
                                                        <img src={list?.Image} alt="image" />
                                                    </div>
                                                    <div className="price shadow" style={{ top: '0', right: '0'}} ><img src={list?.Logo} /></div>
                                                </div>
                                                <div className="courses-content">
                                                    <div className="course-author d-flex align-items-center">
                                                        <span> { list.Univ_name} </span><br/>                                                        
                                                    </div>
                                                    <p> {  list.District } - { list.State} </p>     
                                                    <p> Specialisation: {list.Specialised} </p>    
                                                </div>
                                            </div>
                                        </div>
                                })                          
                        }                        */}
                    </div>
                </div>
            </div>
     
            <Footer />
        </React.Fragment>
    )
}

export default TopUniversitiesPage;