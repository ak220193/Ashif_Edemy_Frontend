import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import { getAdvertisement, getUniversityData  } from "../../store/slice/universitiesSlice";
import { getSchoolsDetails  } from "../../store/slice/schoolSlice";
import { getCollegeDetails  } from "../../store/slice/collegeSlice";
import { useRouter } from 'next/router';
const AboutArea = () => {
    const pageIndex = 1;
    const pageSize = 2000;
    const dispatch = useDispatch();
    const [instType, setInstType] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [forFilterData, setForFilterData] = useState([]);
    const [showType, setShowType] = useState(0);
    const { universityList, advertisementLists, loader } = useSelector((state)=>state.university);
    const { schoolList } = useSelector((state)=>state.school);
    const { collegeList } = useSelector((state)=>state.college);
    const [state, setState] = useState([]);
    const [showSearch, setShowSearch] = useState(0);
    const [district, setDistrict] = useState([]);
    const [limit, setLimit] = useState(10);
    const router = useRouter();

    const filterDesiredData = (e) => {
        if (instType === "university") {
          if (e.State === selectedState && e.District === selectedDistrict) {
            return e
          }
        } else if (instType === "school") {
          if (e.state === selectedState && e.district === selectedDistrict) {
            return e
          }
        } else if (instType === "college") {
          if (e.State === selectedState && e.college_District === selectedDistrict) {
            return e
          }
        }
    }
    
    const filteredDistrict = (e) => {
        if (instType === "university" || instType === "college") {
            if (e.State === selectedState) {
            return e
            }
        } else if (instType === "school") {
            if (e.state === selectedState) {
            return e
            }
        }
    }

    useEffect(() => {
        console.log('=== instType ', instType)
        if (instType === "school") {
            setShowType(1)
            dispatch(getSchoolsDetails());
        } else if (instType === "college") {
            setShowType(2)
            dispatch(getCollegeDetails());
        } else if (instType === "university") {
            setShowType(3)
            dispatch(getUniversityData({ pageIndex, pageSize }));
        } else if (instType === "") {
          setShowType(0)
        }
    }, [instType])

    const handleType = async(e) => {
        await setInstType(e.target.value)
        await setSelectedState("")
        await setSelectedDistrict("")
        await setForFilterData([])
    }
    
    const handleState = async(e) => {
        await setSelectedState(e.target.value)
        await setSelectedDistrict("")
    }
    
    const handleDistrict = async(e) => {
        await setSelectedDistrict(e.target.value)
    }

    useEffect(() => {
        if (showType === 1) {
          setForFilterData(schoolList)
        } else if (showType === 2) {
          setForFilterData(collegeList)
        } else if (showType === 3) {
          setForFilterData(universityList)
        }
    }, [showType, schoolList, collegeList, universityList])

    useEffect(() => {
        if (forFilterData.length > 0) {
          if (showType === 1) {
            const forSchoolState = forFilterData.map((i) => i.state)
            const uniqueSchoolState = [...new Set(forSchoolState)]
            setState(uniqueSchoolState)
          } else if (showType === 2) {
            const forCollegeState = forFilterData.map((i) => i.State)
            const uniqueCollegeState = [...new Set(forCollegeState)]
            setState(uniqueCollegeState)
          } else if (showType === 3) {
            const forUnivState = forFilterData.map((i) => i.State)
            const uniqueUnivState = [...new Set(forUnivState)]
            setState(uniqueUnivState)
          }
        }
    }, [forFilterData])

    useEffect(() => {
        if (showType === 1 && selectedState !== "") {
          const forSchoolDistrict = forFilterData.filter(filteredDistrict).map((i) => i.district)
          const uniqueSchoolDistrict = [...new Set(forSchoolDistrict)]
          setDistrict(uniqueSchoolDistrict)
        } else if (showType === 2 && selectedState !== "") {
          const forCollegeDistrict = forFilterData.filter(filteredDistrict).map((i) => i.college_District)
          const uniqueCollegeDistrict = [...new Set(forCollegeDistrict)]
          setDistrict(uniqueCollegeDistrict)
        } else if (showType === 3 && selectedState !== "") {
          const forUnivDistrict = forFilterData.filter(filteredDistrict).map((i) => i.District)
          const uniqueUnivDistrict = [...new Set(forUnivDistrict)]
          setDistrict(uniqueUnivDistrict)
        }
    }, [state, showType, selectedState])
    
    useEffect(() => {
        if (selectedDistrict !== "" && selectedState !== "" && instType !== "") {
          setShowSearch(1)
        } else {
          setShowSearch(0)
        }
    }, [selectedDistrict, selectedState, instType])

    const handleEventClick = async(id, type) => {

        if(type === 'school'){
            await localStorage.setItem('currentSchoolId', id);
            router.push(`/single-school`)
        }else if( type === 'college'){
            await localStorage.setItem('currentCollegeId', id);
            router.push(`/single-college`);
        }else if (type === 'university'){
            await localStorage.setItem('currentUniversityId', id);
            router.push(`/single-university`);
        }

    }
    
    return (
        <div className="about-area-three">
             <div className="courses-area courses-section pt-100 pb-70">
                <div className="container">
                <h2 className="sub-title" style={{ textAlign: "center", paddingBottom: "15px"}}>Filter List</h2>
                    <div className="edemy-grid-sorting row align-items-center" style={{ background: '#f8f9fa', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', padding: '15px', borderRadius: '8px' }}>
                        <div className="col-lg-4 col-md-6 ordering float-right">
                            <div className="select-box float-right">
                                <div className='text-left' style={{ textAlign:"left"}} > <label> Filter By State</label> </div>                                
                                <select multiple={false} className="form-control" onChange={handleType} value={instType} id="instiType">
                                    <option value="">Select the type</option>
                                    <option value="school">School</option>
                                    <option value="college">College</option>
                                    <option value="university">University</option>
                                </select>
                            </div>
                        </div>
                        {(showType !== 0 && forFilterData.length > 0) ?
                        <div className="col-lg-4 col-md-6 ordering">
                            <div className="select-box float-right">
                            <div className='text-left' style={{ textAlign:"left"}}> <label>Select State</label> </div> 
                                <select multiple={false} className="form-control" onChange={handleState}  value={selectedState} >
                                    <option value="">Select State</option>
                                    {state.map((i, index) => {
                                        return (<option key={index} value={i}>{i}</option>)
                                    })}
                                </select>
                            </div>
                        </div>
                        : <div></div>}
                        {(showType !== 0 && forFilterData.length > 0 && selectedState !== "") ?
                        <div className="col-lg-4 col-md-6 ordering">
                            <div className="select-box float-right">
                            <div className='text-left' style={{ textAlign:"left"}}> <label> Filter By District</label> </div> 
                                <select multiple={false} className="form-control" onChange={handleDistrict} value={selectedDistrict}  >
                                    <option disabled value="">Select District</option>
                                    {district.map((i, index) => {
                                        return (<option key={index} value={i}>{i}</option>)
                                    })}
                                </select>
                            </div>
                        </div>
                        : <div></div>}
                    </div>
                    

                    <div className="row" style= {{  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        { forFilterData.filter(filterDesiredData).length >= 10 ? 
                            <h2 className="sub-title" style={{ textAlign: "center", paddingBottom: "15px"}}>{`Top ${limit} results from your search`}</h2>
                            :
                            <h2 className="sub-title" style={{ textAlign: "center", paddingBottom: "15px"}}>{`Top results from your search`}</h2>
                        }
                        {  (showSearch === 1 & instType === "school") ? 
                       
                            <div className="after_search-results">
                                { forFilterData.filter(filterDesiredData).slice(0, limit).map((i) => {
                                    return (
                                        <div className="col-lg-4 col-md-6" key={i?._id} onClick={() => { handleEventClick(i?._id, 'school'); }}>
                                            <div className="single-courses-box">
                                                <div className="courses-image" style={{ "width": '100% !important', "height": "200px", 'overflow': 'hidden', "cursor": "pointer"}}>
                                                    {i?.Image ? <img src={`${i?.Image}`} alt="" /> : <img src='images/substitute.png' alt="" />}
                                                </div>
                                                <div className="courses-content">
                                                    <div className="course-author d-flex align-items-center">
                                                        <span> {i?.name} </span><br/>                                                        
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>   
                                    )
                                })}                                    
                            </div>
                        
                            : 
                            (showSearch === 1 && instType === "college") ?
                                <div className="after_search-results">
                                    { forFilterData.filter(filterDesiredData).slice(0, limit).map((i) => {
                                        return (
                                            <div className="col-lg-4 col-md-6" key={i?._id} onClick={() => { handleEventClick(i?._id, 'college'); }}>
                                                <div className="single-courses-box">
                                                    <div className="courses-image" style={{ "width": '100% !important', "height": "200px", 'overflow': 'hidden', "cursor": "pointer"}}>
                                                        {i?.Logo ? <img src={`${i?.Logo}`} alt="" /> : <img src='images/substitute.png' alt="" />}
                                                    </div>
                                                    <div className="courses-content">
                                                        <div className="course-author d-flex align-items-center">
                                                            <span> {i?.College_Name} </span><br/>                                                        
                                                        </div> 
                                                    </div>
                                                </div>
                                            </div>   
                                        )
                                    })}                                    
                                </div>
                            :
                            (showSearch === 1 && instType === "university") ?
                                <div className="after_search-results">
                                    { forFilterData.filter(filterDesiredData).slice(0, limit).map((i) => {
                                        return (
                                            <div className="col-lg-4 col-md-6" key={i?._id} onClick={() => { handleEventClick(i?._id, 'university'); }}>
                                                <div className="single-courses-box">
                                                    <div className="courses-image" style={{ "width": '100% !important', "height": "200px", 'overflow': 'hidden', "cursor": "pointer"}}>
                                                        {i?.Image ? <img src={`${i?.Image}`} alt="" /> : <img src='images/substitute.png' alt="" />}
                                                    </div>
                                                    <div className="courses-content">
                                                        <div className="course-author d-flex align-items-center">
                                                            <span> {i?.Univ_name} </span><br/>                                                        
                                                        </div> 
                                                    </div>
                                                </div>
                                            </div>   
                                        )
                                    })}                                    
                                </div>
                                :
                                <div></div>
                        }                   
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="edemy-grid-sorting row align-items-center">
                    <div className="col-lg-8 col-md-6 result-count">
                        {/* <p>We found <span className="count">12</span> courses available for you</p> */}
                    </div>
                </div><br></br>
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12">
                        <div className="about-content-box">
                            <span className="sub-title">Learning</span>
                            <h2>We Make You Learn ++</h2>
                            <p>Welcome to highereducationupdates.com©, your one-stop destination for all your higher education needs. We are a part of LPP Learning Technology Solutions Pvt. Ltd. and are committed to promoting transparency in the quality of education offered by institutions and universities in India and abroad.</p>
                            <p>Our mission is to empower prospective students with comprehensive and up-to-date information about the various career options available in India and around the world. In today's competitive world, education and career choices are crucial to success, and we strive to provide accurate and reliable information that can help students make informed decisions about their future.</p>

                            <Link href="/sign-up">
                                <a className="default-btn">
                                    <i className="flaticon-user"></i> Join Us <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className="about-img">
                            <div className="image">
                                <img src="/images/about-img7.png" alt="image" />
                                {/* <img src="/images/about-img8.png" alt="image" /> */}
                            </div>

                            <div className="shape17">
                                <img src="/images/shape16.png" alt="image" />
                            </div>
                            <div className="shape18">
                                <img src="/images/shape17.png" alt="image" />
                            </div>
                            <div className="shape19">
                                <img src="/images/shape18.png" alt="image" />
                            </div>
                            <div className="shape20">
                                <img src="/images/shape19.png" alt="image" />
                            </div>
                            <div className="shape21">
                                <img src="/images/shape20.png" alt="image" />
                            </div>
                            <div className="shape22">
                                <img src="/images/shape21.png" alt="image" />
                            </div>
                            <div className="shape23">
                                <img src="/images/shape22.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape3">
                <img src="/images/shape3.png" alt="image" />
            </div>
            <div className="shape4">
                <img src="/images/shape4.png" alt="image" />
            </div><br/><br/>
        </div>
    )
}

export default AboutArea;