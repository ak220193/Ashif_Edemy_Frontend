import React, { useEffect, useState } from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import CoursesDetailsSidebar from '../components/SingleCourses/CoursesDetailsSidebar';
import YouMightLikeTheCourses from '../components/Courses/YouMightLikeTheCourses';
import Footer from '../components/_App/Footer';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from "react-redux";
import { getEvents } from "../store/slice/commonSlice";

const SingleEventDetails = () => {

    const router = useRouter();
    const dataId = router.query['data-id'];
    const { eventsList, loader } = useSelector((state)=>state.common);
    const [currentItem, setCurrentItem] = useState({});
    const [currentBanner, setBanner] = useState('');
    const [contentType, setContentType] = useState('');


    useEffect(() => {    

        if(eventsList && eventsList.length){
            console.log('==========')
            eventsList.map((list) => {
                if(list._id == localStorage.getItem('currentProductId')){ 

                    console.log('=== list ', list)
                    const base64String = btoa(
                    new Uint8Array(list?.eventImage?.data?.data)
                        .reduce((data, byte) => data + String.fromCharCode(byte), '')
                    );
                    setBanner(base64String);
                    setContentType(list?.eventImage?.contentType)
                    setCurrentItem(list)
                }
            })
        }
    },[]);

    // useEffect(async () => {    
    //     const base64String = btoa(
    //     new Uint8Array(currentItem?.eventImage?.data?.data)
    //         .reduce((data, byte) => data + String.fromCharCode(byte), '')
    //     );
    //     setBanner(base64String);
    //     setContentType(currentItem?.eventImage?.contentType)
    // },[currentBanner]);


    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle= {(currentItem && currentItem.eventName) ? currentItem.eventName : "Single Event"}
                homePageUrl="/" 
                homePageText="Home" 
                activePageText={(currentItem && currentItem.eventName) ? currentItem.eventName : "Single Event"}
            />  

            <div className="courses-details-area pb-100">
                <div className="courses-details-image">
                    <img src={`data:${contentType};base64,${currentBanner}`} alt="image" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="courses-details-desc">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <YouMightLikeTheCourses />

            <Footer />
        </React.Fragment>
    )
}

export default SingleEventDetails;