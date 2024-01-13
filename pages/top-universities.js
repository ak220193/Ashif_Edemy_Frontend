import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import { getAdvertisement, getUniversityData  } from "../store/slice/universitiesSlice";
import { useRouter } from 'next/router';
import * as moment from 'moment'
import { useSelector, useDispatch } from "react-redux";
import _ from 'lodash';

const TopUniversitiesPage = () => {
    const router = useRouter();
    const { universityList, advertisementLists, loader } = useSelector((state)=>state.university);
    const dispatch = useDispatch()
    const [state, setStateList] = useState([]);
    const [districtList, setDistrictList] = useState([]);
    const [seletedState, setSelectedState] = useState('');
    const [seletedDistrict, setSelectedDistrict] = useState('');
    const [uniList, setUniversityList] = useState([])
    const [photoIndex, setPhotoIndex] = React.useState(0);
    const [isOpenImage, setIsOpenImage] = React.useState(false);
    const [adImages, setAdImages] = React.useState([]);
    const [adTitle, setAdTitle] = React.useState([]);


    useEffect(() => {    
        getAllData();
    },[]); 

    useEffect(() => {    
        let uniList = []
        setUniversityList(universityList)
        universityList.forEach((element) => {
            if (!state.includes(element.State)) {
                uniList.push(element.State)
            }
        });
        uniList = _.uniq(uniList)        
        setStateList(uniList)
    },[universityList]); 

    useEffect(() => {    
        let adImages = []
        let adTitle = []
        // console.log('== =advertisementLists ', advertisementLists.length)
        advertisementLists.forEach((element) => {
            if(element.catagory && element.catagory == "Universities"){
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
        await dispatch( getUniversityData() );
        await dispatch( getAdvertisement() );
    }

    const handleSelectChange = async (event) => {
        event.preventDefault();
        const value = event.target.value;
        const filteredDistricts = getFilteredDistricts(value);

        let uniList = []
        universityList.forEach((element) => {
            if (element.State == value) {
                uniList.push(element)
            }
        });
        uniList = _.uniq(uniList)        
        setUniversityList(uniList)

        // Update state values
        setSelectedState(value);
        setDistrictList(filteredDistricts);
    
        // Reset district value
        setSelectedDistrict('');
        const newScrollPosition = window.scrollY;
        setTimeout(() => {
            console.log('==== select domain After ', newScrollPosition);
            window.scrollTo(0, newScrollPosition);
        }, 0);
    };

    const getFilteredDistricts = (state) => {
        const filteredDistricts = _.chain(universityList)
            .filter({ 'State': state })
            .map('District')
            .uniq()
            .value();

        return filteredDistricts;
    };
    

    const handleDistrictChange = async(event) => {
        event.preventDefault();
        const value = event.target.value;
        let uniList = []
        universityList.forEach((element) => {
            if (element.State == seletedState &&  element.District == value) {
                uniList.push(element)
            }
        });
        uniList = _.uniq(uniList)        
        setUniversityList(uniList)
        setSelectedDistrict(value)

        const newScrollPosition = window.scrollY;
        setTimeout(() => {
            window.scrollTo(0, newScrollPosition);
        }, 0);
    }

    const handleEventClick = async (universityId) => {
        await localStorage.setItem('currentUniversityId', universityId);
        router.push(`/single-university`);
    }
    

    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Top Universities" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Top Universities" 
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
                <h2 className="sub-title" style={{ textAlign: "center", paddingBottom: "15px"}}>Universities List</h2>
                    <div className="edemy-grid-sorting row align-items-center" style={{ background: '#f8f9fa', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', padding: '15px', borderRadius: '8px' }}>
                        <div className="col-lg-4 col-md-6 ordering float-right">
                            <div className="select-box float-right">
                                <div className='text-left' style={{ textAlign:"left"}} > <label> Filter By State</label> </div>                                
                                <select multiple={false} className="form-control" onChange={handleSelectChange} value={seletedState}>
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
                                <select multiple={false} className="form-control" onChange={handleDistrictChange} value={seletedDistrict}>
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
                            uniList && uniList.length && uniList.map( (list, listIndex) => {
                                return <div className="col-lg-4 col-md-6" key={listIndex}>
                                            <div className="single-courses-box">
                                                <div className="courses-image" style={{ "width": '100% !important', "height": "200px", 'overflow': 'hidden', "cursor": "pointer"}}>
                                                    <div onClick={() => { handleEventClick(list._id); }} >
                                                        <img src={list?.Image} alt="image" />
                                                    </div>
                                                    <div className="price shadow" style={{ top: '0', right: '0'}} ><img src={list?.Logo} /></div>
                                                </div>
                                                <div className="courses-content" onClick={() => { handleEventClick(list._id); }}>
                                                    <div className="course-author d-flex align-items-center" style={{ cursor: 'pointer'}}>
                                                        <span> { list.Univ_name} </span><br/>                                                        
                                                    </div>
                                                    <p style={{ cursor: 'pointer'}} > {  list.District } - { list.State} </p>     
                                                    <p style={{ cursor: 'pointer'}}> Specialisation: {list.Specialised} </p>    
                                                </div>
                                            </div>
                                        </div>
                                })                          
                        }                       
                    </div>
                </div>
            </div>
     
            <Footer />
        </React.Fragment>
    )
}

export default TopUniversitiesPage;