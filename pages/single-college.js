import React, { useEffect, useState } from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from "react-redux";
import { getCollegeDetails, getSingleData, getAllRandomDataList  } from "../store/slice/collegeSlice";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SIngleCollegeDetailPage = () => {

    const router = useRouter();
    const { collegeList, loader, singleCollegeData, randomRecordsList, } = useSelector((state)=>state.college);
    const [currentItem, setCurrentItem] = useState({});
    const [currentBanner, setBanner] = useState('');
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('');
    const [relatedCollege, setRelatedCollege] = useState([]);
    const [visibleItems, setVisibleItems] = useState(12);

    const handleShowMore = () => {
        setVisibleItems(20);
        const newScrollPosition = window.scrollY;
        setTimeout(() => {
            window.scrollTo(0, newScrollPosition);
        }, 0);
    };

    const handleShowLess = () => {
        setVisibleItems(12);
        const newScrollPosition = window.scrollY;
        setTimeout(() => {
            window.scrollTo(0, newScrollPosition);
        }, 0);
    };

    useEffect(() => {    
        getAllRandomData(searchText,  "");
    },[]); 

    const getAllRandomData = async(searchText, affu_id) => {
        await dispatch( getAllRandomDataList(searchText, affu_id) )
    }

    useEffect(() => {    
        let currentId = localStorage.getItem('currentCollegeId');
        if(currentId && currentId != ''){
            getcurrentData(currentId)            
        }
    },[]); 

    useEffect(() => {   
        if(singleCollegeData && singleCollegeData._id){
            setBanner(singleCollegeData.Image);
            setCurrentItem(singleCollegeData)
            getAllRandomData(searchText,  singleCollegeData.affu_id);
        }
    },[singleCollegeData]); 
    

    const getcurrentData = async(currentId) => {
        await dispatch( getSingleData(currentId) )
    }

    useEffect(() => {    
        setRelatedCollege(randomRecordsList)
    },[randomRecordsList]); 


    const handleEventClick = async (universityId, affu_id) => {
        await localStorage.setItem('currentCollegeId', universityId);
        await setSearchText('');
        await getcurrentData(universityId);
        await getAllRandomData(searchText, affu_id)    
    }

    const handleSearchChange = async (e) => {
        setSearchText(e.target.value)
        getAllRandomData(e.target.value) 
        const newScrollPosition = window.scrollY;
        setTimeout(() => {
            window.scrollTo(0, newScrollPosition);
        }, 0);
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,       // Enable automatic sliding
        autoplaySpeed: 2000,  // Set the time between each slide in milliseconds (e.g., 2000ms = 2 seconds)
    };

    const CustomPrevArrow = ({ onClick }) => (
        <button className="custom-arrow custom-prev slick-arrow slick-prev" onClick={onClick}>
          Previous
        </button>
      );
    
      const CustomNextArrow = ({ onClick }) => (
        <button className="custom-arrow custom-next slick-arrow slick-next slick-disabled" onClick={onClick}>
          Next
        </button>
      );
    
      settings.prevArrow = <CustomPrevArrow />;
      settings.nextArrow = <CustomNextArrow />;

    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle= {(currentItem && currentItem.College_Name) ? currentItem.College_Name : "College"}
                homePageUrl="/" 
                homePageText="Home" 
                activePageText={(currentItem && currentItem.College_Name) ? currentItem.College_Name : "College"}
            />  
            <div className="courses-details-area pb-100">
                <div className="container">                    
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="courses-details-desc">
                                <Tabs>
                                    <TabList>
                                        <Tab>Overview</Tab>
                                        <Tab>Programmes Offered</Tab>
                                        <Tab>Placements</Tab>
                                        <Tab>Rating</Tab>
                                        <Tab>Infrastructure</Tab>
                                        {/* <Tab>Entrance Test</Tab> */}
                                    </TabList>
                                
                                    <TabPanel key={1}>
                                        <div className="courses-overview">
                                            <h3>Course Description</h3>
                                            <p>{currentItem.About}</p>
                                            <h6><b>Email</b>: {currentItem.Email} </h6>
                                            <h6> <b>Phone</b>: {currentItem.Phone}</h6>
                                        </div>
                                    </TabPanel>

                                    <TabPanel  key={2}>
                                        <div className="courses-curriculum">
                                            <table style={{ width:"100%"}}>
                                                <thead>
                                                    <tr>
                                                        <th> SNO </th>
                                                        <th> Course code </th>
                                                        <th> Course Name </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {currentItem && currentItem.coursesOffered && currentItem.coursesOffered.length ? currentItem.coursesOffered.map((i, index) => (
                                                    <tr className="table_Contents">
                                                        <td>{index+1}</td>
                                                        <td>{i?.value}</td>
                                                        <td>{i?.label}</td>
                                                    </tr>
                                                )) : <></>}
                                                </tbody>
                                            </table>
                                        </div>
                                    </TabPanel>

                                    <TabPanel  key={3}>
                                        <div className="courses-instructor">
                                            <div className="single-advisor-box">
                                            </div>
                                        </div>
                                    </TabPanel>

                                    <TabPanel  key={4}>
                                        <div className="courses-reviews">
                                            <h3>Course Rating</h3>
                                            <div className="rating">
                                                <span className="bx bxs-star checked"></span>
                                                <span className="bx bxs-star checked"></span>
                                                <span className="bx bxs-star checked"></span>
                                                <span className="bx bxs-star checked"></span>
                                                <span className="bx bxs-star"></span>
                                            </div>
                                            <div className="rating-count">
                                                <span>4.1 average based on 4 reviews.</span>
                                            </div>
                                            <div className="row">
                                                <div className="side">
                                                    <div>5 star</div>
                                                </div>
                                                <div className="middle">
                                                    <div className="bar-container">
                                                        <div className="bar-5"></div>
                                                    </div>
                                                </div>
                                                <div className="side right">
                                                    <div>02</div>
                                                </div>
                                                <div className="side">
                                                    <div>4 star</div>
                                                </div>
                                                <div className="middle">
                                                    <div className="bar-container">
                                                        <div className="bar-4"></div>
                                                    </div>
                                                </div>
                                                <div className="side right">
                                                    <div>03</div>
                                                </div>
                                                <div className="side">
                                                    <div>3 star</div>
                                                </div>
                                                <div className="middle">
                                                    <div className="bar-container">
                                                        <div className="bar-3"></div>
                                                    </div>
                                                </div>
                                                <div className="side right">
                                                    <div>04</div>
                                                </div>
                                                <div className="side">
                                                    <div>2 star</div>
                                                </div>
                                                <div className="middle">
                                                    <div className="bar-container">
                                                        <div className="bar-2"></div>
                                                    </div>
                                                </div>
                                                <div className="side right">
                                                    <div>05</div>
                                                </div>
                                                <div className="side">
                                                    <div>1 star</div>
                                                </div>
                                                <div className="middle">
                                                    <div className="bar-container">
                                                        <div className="bar-1"></div>
                                                    </div>
                                                </div>
                                                <div className="side right">
                                                    <div>00</div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>

                                    <TabPanel  key={5}>
                                        <div className="courses-instructor">
                                            <div className="single-advisor-box">
                                            </div>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="courses-details-info" style={{ marginTop: '-75px'}}>
                                <div className="image">
                                    <img style={{ width: "100%" }} src={`${currentItem.Image}`} alt="image" />
                                </div>

                                <ul className="info">
                                    <li className="price">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span><i className="flaticon-tag"></i> Year Of Starting</span>
                                            {currentItem.Yrofestab}
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span><i className="flaticon-teacher"></i> Campus Area</span>
                                            14
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span><i className="flaticon-time"></i> Faculty Strength</span>
                                            140
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span><i className="flaticon-distance-learning"></i> Student Strength </span>
                                            1440
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span><i className="flaticon-web"></i> College </span>
                                            Co-Education
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span><i className="flaticon-web"></i> College City </span>
                                            {currentItem.City}
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span><i className="flaticon-web"></i> College District </span>
                                            {currentItem.college_District}
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span><i className="flaticon-lock"></i> College State </span>
                                            { currentItem.State }
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>            
                    </div>
                    <div className='row'>
                    <div className='row pt-100'>
                        <div className="col-lg-12 col-md-12" style={{ paddingBottom: "25px"}}>                         
                                <div className='col-lg-4 col-md-4 widget-area' style={{ margin: '0 auto', textAlign: 'center'}}>
                                <div className="widget widget_search">
                                <h2> Related colleges</h2>
                                    {/* <div className="search-form">
                                        <label>
                                            <input type="search" name="searchText" onChange={handleSearchChange} value={searchText} className="search-field" placeholder="Search..." />
                                        </label>
                                        <button type="submit">
                                            <i className="bx bx-search-alt"></i>
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                        </div>   
                        <Slider {...settings}>
                        {
                            relatedCollege && relatedCollege.length ? (
                                relatedCollege.slice(0, visibleItems).map((list, listIndex) => (
                                    <div className="col-lg-3 col-md-4 cur-pointer" key={listIndex}>
                                        <div className='slider-box'>
                                            <div className='slider-header'>
                                                <div className='image-header cur-pointer' style={{minWidth: '115px'}} onClick={() => { handleEventClick(list._id, list.affu_id); }}>
                                                    {(list?.Image) ? <img className="popular-image" src={list?.Image} alt="image" /> : <img className="popular-image" src='/images/default-image.jpg' alt="image" />}
                                                </div>
                                                <div className='text-header cur-pointer'>
                                                    <div className="column-container">
                                                    <div className="column">
                                                        <h5 style={{fontWeight: 'bold', color: "red"}} onClick={() => { handleEventClick(list._id, list.affu_id); }}>{list.College_Name}</h5>
                                                        <h6 style={{color:'#959595'}} onClick={() => { handleEventClick(list._id, list.affu_id); }}>{list.college_District}</h6>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='slider-body cur-pointer'><br/>
                                                Contact Us: <br/><hr></hr>
                                                <h6 style={{color:'#959595'}}>University : {list.affiliatingUnivName}</h6><hr></hr>
                                                <h6 style={{color:'#959595'}}>Year : {list.Yrofestab}</h6><hr></hr>
                                                <h6 style={{color:'#959595'}}>Type : {list.Type}</h6>
                                            </div>
                                        </div>                                       
                                    </div>
                                ))
                              ) : (
                                <></>
                              )                       
                        } 
                         </Slider>
                         <div className="row pt-100 pb-50"> 
                            {
                                relatedCollege && relatedCollege.length ? (
                                    relatedCollege.slice(0, visibleItems).map((list, listIndex) => (
                                    <div className="col-lg-3 col-md-4" key={listIndex}>
                                        <div className='slider-box-1'  style={{ backgroundImage: `url(${list.Image ? list.Image : 'images/school-background.webp'})` }}>
                                        <div className="watermark-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',          backgroundColor: 'rgba(255, 255, 255, 0.8)'}}></div>
                                        <div className="org-name-all" style={{ position: 'relative', zIndex: 1, color: 'red', cursor: 'pointer' }} onClick={() => { handleEventClick(list._id, list.affu_id); }}>
                                            <h6>{list.College_Name}</h6>
                                            <h6>{list.Type}</h6>
                                            <h6>{list.affiliatingUnivName}</h6>
                                        </div>
                                        </div>
                                    </div>
                                    ))
                                ) : (
                                    <>No Data Found</>
                                )                       
                            } 
                        </div>                        
                        <div className="col-lg-12 col-md-12 pb-100">                                                 
                            <div className='col-lg-4 col-md-4 widget-area' style={{ margin: '0 auto', textAlign: 'center'}}>

                            {   relatedCollege && relatedCollege.length && relatedCollege.length > 8 && visibleItems == 12 &&
                                <button className='show-btn' onClick= {handleShowMore}>Show More</button>
                            }

                            {   relatedCollege && relatedCollege.length && relatedCollege.length > 8 && visibleItems == 20 &&
                                <button className='show-btn' onClick= {handleShowLess}>Show Less</button>
                            }

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

export default SIngleCollegeDetailPage;