import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from "react-redux";
import { getEvents } from "../store/slice/commonSlice";
import * as moment from 'moment'
const MainCourse = () => {
    const router = useRouter();
    const { eventsList, loader } = useSelector((state)=>state.common);
    const dispatch = useDispatch()
    
    useEffect(() => {    
        getAllData();
    },[]);   

    const getAllData = async() => {
        await dispatch( getEvents() );
    }

    const handleEventClick = async (productId) => {
        try {
            await localStorage.setItem('currentProductId', productId);
            router.push(`/single-events`);
        } catch (error) {
            console.error('Error setting currentProductId in localStorage:', error);
        }
    }
    

    useEffect(() => {
        const cleanup = () => {
          if (typeof destroy === 'function') {
            destroy();
          }
        };    
        return cleanup;
      }, []);

    return (
        <div className="courses-area courses-section pt-100 pb-70">
            <div className="container">              
                <div style={{textAlign: "center"}}> <h2>Top Events</h2><br/><br/> </div>
                <div className="row">
                    {eventsList && eventsList.map((list, key) => {
                        if(key <= 5){
                            const base64String = btoa(
                            new Uint8Array(list?.eventImage?.data?.data)
                                .reduce((data, byte) => data + String.fromCharCode(byte), '')
                            );
                            let contType = list?.eventImage?.contentType
                            return (
                                <div className="col-lg-4 col-md-6" key={key}>
                                    <div className="single-courses-box">
                                        <div className="courses-image" style={{ "width": '100% !important', "height": "200px", 'overflow': 'hidden'}}>
                                            <div onClick={() => { handleEventClick(list._id); }} >
                                                <img src={`data:${contType};base64,${base64String}`} alt="image" />
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <div className="course-author d-flex align-items-center">
                                                {/* <img src="/images/user6.jpg" className="rounded-circle" alt="image" /> */}
                                                <span>{list?.author}</span>
                                            </div>
                                            <h3 style={{ minHeight: "50px"}}>
                                                <div onClick={() => { handleEventClick(list._id); }} >
                                                    <a>{list.eventName}</a>
                                                </div>                                                   
                                            </h3>        
                                            <p style={{ minHeight: "120px"}}>{list.eventDescription}</p>
                                            <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <i className='flaticon-agenda'></i> {list?.eventDate}
                                                </li>
                                                <li>
                                                    <i className='flaticon-people'></i> {list?.eventTime}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default MainCourse;