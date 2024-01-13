import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import { getCollegeDetails  } from "../store/slice/collegeSlice";
import { getAdvertisement  } from "../store/slice/universitiesSlice";
import { useRouter } from 'next/router';
import * as moment from 'moment'
import { useSelector, useDispatch } from "react-redux";
import _ from 'lodash';

const TopCollegesPage = () => {
    const router = useRouter();
    const { collegeList, loader } = useSelector((state)=>state.college);
    const { advertisementLists } = useSelector((state)=>state.university);
    const dispatch = useDispatch()
    const [state, setStateList] = useState([]);
    const [districtList, setDistrictList] = useState([]);
    const [seletedState, setSelectedState] = useState('');
    const [seletedDistrict, setSelectedDistrict] = useState('');
    const [colList, setcollegeList] = useState([])
    const [photoIndex, setPhotoIndex] = React.useState(0);
    const [isOpenImage, setIsOpenImage] = React.useState(false);
    const [adImages, setAdImages] = React.useState([]);
    const [adTitle, setAdTitle] = React.useState([]);


    useEffect(() => {    
        getAllData();
    },[]); 

    useEffect(() => {    
        let colList = []
        setcollegeList(collegeList)
        collegeList.forEach((element) => {
            if (!state.includes(element.State)) {
                colList.push(element.State)
            }
        });
        colList = _.uniq(colList)        
        setStateList(colList)
    },[collegeList]); 

    useEffect(() => {    
        let adImages = []
        let adTitle = []
        advertisementLists.forEach((element) => {
            if(element.catagory && element.catagory == "Colleges"){
                if(element.adImage) {
                    const base64String = btoa(
                    new Uint8Array(element.adImage?.data?.data)
                        .reduce((data, byte) => data + String.fromCharCode(byte), '')
                    );
                    let contType = element.adImage?.contentType
                    adImages.push(`data:${contType};base64,${base64String}`)
                }
                if(element.Title) adTitle.push(element.Title)
            }            
        });      
        setAdImages(adImages)
        setAdTitle(adTitle)
    },[advertisementLists]); 


    const getAllData = async() => {
        await dispatch( getCollegeDetails() );
        await dispatch( getAdvertisement() );
    }

    const handleSelectChange = async (event) => {
        event.preventDefault();
        const value = event.target.value;
        const filteredDistricts = getFilteredDistricts(value);

        let colList = []
        collegeList.forEach((element) => {
            if (element.State == value) {
                colList.push(element)
            }
        });
        colList = _.uniq(colList)        
        setcollegeList(colList)

        // Update state values
        setSelectedState(value);
        setDistrictList(filteredDistricts);
    
        // Reset district value
        setSelectedDistrict('');
        const newScrollPosition = window.scrollY;
        setTimeout(() => {
            window.scrollTo(0, newScrollPosition);
        }, 0);
    };

    const getFilteredDistricts = (state) => {
        const filteredDistricts = _.chain(collegeList)
            .filter({ 'State': state })
            .map('District')
            .uniq()
            .value();

        return filteredDistricts;
    };
    

    const handleDistrictChange = async(event) => {
        event.preventDefault();
        const value = event.target.value;
        let colList = []
        collegeList.forEach((element) => {
            if (element.State == seletedState &&  element.District == value) {
                colList.push(element)
            }
        });
        colList = _.uniq(colList)        
        setcollegeList(colList)
        setSelectedDistrict(value)
        const newScrollPosition = window.scrollY;
        setTimeout(() => {
            window.scrollTo(0, newScrollPosition);
        }, 0);
    }

    const handleEventClick = async (universityId) => {
        await localStorage.setItem('currentCollegeId', universityId);
        router.push(`/single-college`);
    }
    

    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Top Colleges" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Top Colleges" 
            />  
            
            <div className="gallery-area pt-50 pb-70">
                {/* Lightbox */}
                {isOpenImage && (
                    <Lightbox
                        mainSrc={adImages[photoIndex]}
                        nextSrc={adImages[(photoIndex + 1) % adImages.length]}
                        prevSrc={adImages[(photoIndex + adImages.length - 1) % adImages.length]}
                        onCloseRequest={() => setIsOpenImage(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + adImages.length - 1) % adImages.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % adImages.length)
                        }
                    />
                )}

                <div className="container">
                {
                            adImages && adImages.length && adImages[0] && <div className='adverdesiment-0'>                            
                                <div className="" key={1}>
                                    <div className="single-gallery-item">
                                        <div style={{textAlign: 'center'}}> <h4> Advertisement </h4> </div>
                                        <a className="popup-btn">
                                            <img src={`${adImages[0]}`} alt="image" />
                                        </a>
                                        <p>{ adTitle && adTitle.length && adTitle[0] || ''}</p>
                                    </div>
                                </div>
                            </div> || <></>
                        }

                        {
                            adImages && adImages.length && adImages.length >= 2 && adImages[1] && <div className='adverdesiment-1'>                            
                                <div className="" key={1}>
                                    <div className="single-gallery-item">
                                        <div style={{textAlign: 'center'}}> <h4> Advertisement </h4> </div>
                                        <a className="popup-btn">
                                            <img src={`${adImages[1]}`} alt="image" />
                                        </a>
                                        <p>{ adTitle && adTitle.length && adTitle[1] || ''}</p>
                                    </div>
                                </div>
                            </div> || <></>
                        }
                </div>
            </div>
            <div className="courses-area courses-section pb-70">
                <div className="container">
                <h2 className="sub-title" style={{ textAlign: "center", paddingBottom: "15px"}}>Colleges List</h2>
                    <div className="edemy-grid-sorting row align-items-center" style={{ background: '#f8f9fa', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', padding: '15px', borderRadius: '8px' }}>
                        <div className="col-lg-4 col-md-6 ordering float-right">
                            <div className="select-box float-right">
                                <div className='text-left' style={{ textAlign:"left"}} > <label> Filter By State</label> </div>                                
                                <select className="form-control" onChange={handleSelectChange} value={seletedState}>
                                    <option disabled value="">Select State</option>
                                    {state && state.map((list) => (
                                        <option key={list} value={list}>{list}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 ordering">
                            <div className="select-box float-right">
                            <div className='text-left' style={{ textAlign:"left"}}> <label> Filter By District</label> </div> 
                                <select className="form-control" onChange={handleDistrictChange} value={seletedDistrict}>
                                    <option disabled value="">Select District</option>
                                    {districtList && districtList.map((dis) => (
                                        <option key={dis} value={dis}>{dis}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row" style= {{  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        {
                            colList && colList.length ? colList.map( (list, listIndex) => {
                                return <div className="col-lg-4 col-md-6" key={listIndex}>
                                            <div className="single-courses-box">
                                                <div className="courses-image" style={{ "width": '100% !important', "height": "200px", 'overflow': 'hidden', "cursor": "pointer"}}>
                                                    <div onClick={() => { handleEventClick(list._id); }} >
                                                        <img src={list?.Image_Gallery} alt="image" />
                                                    </div>
                                                    <div className="price shadow" style={{ top: '0', right: '0'}} ><img src={list?.Logo} /></div>
                                                </div>
                                                <div className="courses-content" onClick={() => { handleEventClick(list._id); }} >
                                                    <div className="course-author d-flex align-items-center" style={{ cursor: "pointer"}}>
                                                        <span> { list.College_Name} </span><br/>                                                        
                                                    </div>
                                                    <p  style={{ cursor: "pointer"}}> {  list.college_District } - { list.State} </p>     
                                                    <p  style={{ cursor: "pointer"}}> Specialisation: {list.Specialisation} </p>    
                                                </div>
                                            </div>
                                        </div>
                                })   : <div></div>                       
                        }                       
                    </div>
                </div>
            </div>
     
            <Footer />
        </React.Fragment>
    )
}

export default TopCollegesPage;