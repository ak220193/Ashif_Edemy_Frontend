import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import { getAdvertisement  } from "../store/slice/universitiesSlice";
import { getProgramDetails  } from "../store/slice/learningHubSlice";
import { useRouter } from 'next/router';
import * as moment from 'moment'
import { useSelector, useDispatch } from "react-redux";
import _ from 'lodash';
// import '../styles/boxcomponent';

const TopUniversitiesPage = () => {
    const router = useRouter();
    const { advertisementLists } = useSelector((state)=>state.university);
    const { programList } = useSelector((state)=>state.learning);
    const dispatch = useDispatch()
    const [adImages, setAdImages] = React.useState([]);
    const [adTitle, setAdTitle] = React.useState([]);
    const [dataList, setConceptList] = React.useState([]);
    const [conceptTitle, setConceptTitle] = React.useState('');
    const [data, setData] = useState([]);
    const [domain, setDomain] = useState([]);
    const [subDomain, setSubDomain] = useState([]);
    const [selectedDomain, setSelectedDomain] = useState("");
    const [programData, setProgramData] = useState([]);  
    const [levels, setLevels] = useState([]);
    const [selectedSubDomain, setSelectedSubDomain] = useState("");
    const [selectDomain, setSelectDomain] = useState("");
    const [selectSubDomain, setSelectSubDomain] = useState("");
    const [finalLevel, setFinalLevel] = useState("");
    const [expanded, setExpanded] = useState(false);
    const [expandedStates, setExpandedStates] = useState(Array(data.length).fill(false));
    const [isFilterActive, setIsFilterActive] = useState(false);

    const [states, setStates] = useState([
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jarkhand",
        "Karnataka",
        "kerala",
        "Madya Pradesh",
        "Maharashtra",
        "Manipur",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Sikkim",
        "Punjab",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttarkhand",
        "Uttar Pradesh",
        "West Bengal",
    ])

    const filterSubDomainOptions = (e) => {
        return (e?.programmeDomain == selectDomain)
    }

    const filterBysubDomain = (e) => {
        return (e?.programmeSubDomain == selectSubDomain)
    }
    
     
    useEffect(() => {
    if(programList.length != 0){
        setData(programList)
        const forDomain = programList.map((i) => i.programmeDomain)
        const uniqueDomain = [...new Set(forDomain)]
        setDomain(uniqueDomain)
        const forSubDomain = (selectedDomain == "" ? programList.map((i) => i.programmeSubDomain) : programList.filter(filterSubDomainOptions).map((i) => i.programmeSubDomain))
        const uniqueSubDomain = [...new Set(forSubDomain)]
        setSubDomain(uniqueSubDomain)
        const forLevels = (selectedSubDomain == "" ? programList.map((i) => i.programmeLevel) : programList.filter(filterBysubDomain).map((i) => i.programmeLevel))
        const uniqueLevels = [...new Set(forLevels)]
        setLevels(uniqueLevels)
    }
    }, [programList, selectedDomain, selectedSubDomain])

    useEffect(() => {    
        getAllData();
    },[]); 

    const getAllData = async() => {        
        await dispatch( getProgramDetails() )
        await dispatch( getAdvertisement() );
    }  
    
    const handleConceptChange = async(event) => {
        event.preventDefault();        
        await setConceptTitle(event.target.value)
        await dispatch( getConceptDetails(event.target.value) );
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

    const settingState = (e) => {
        e.preventDefault()        
        const newScrollPosition = window.scrollY;

        setSelectDomain(e.target.value);
        setSelectSubDomain("")
        setFinalLevel("")
        setTimeout(() => {
            console.log('==== select domain After ', newScrollPosition);
            window.scrollTo(0, newScrollPosition);
        }, 0);
    };

    const settingSubDomain = (e) => {
        setIsFilterActive(!isFilterActive);
        setSelectSubDomain(e.target.value)   
        setFinalLevel('') 
        const newScrollPosition = window.scrollY;
        setTimeout(() => {
            window.scrollTo(0, newScrollPosition);
        }, 0);    
    }
    const settingFinalLevel = (e) => {
        setFinalLevel(e.target.value)
        const newScrollPosition = window.scrollY;
        setTimeout(() => {
            console.log('==== select domain After ', newScrollPosition);
            window.scrollTo(0, newScrollPosition);
        }, 0);
    }

    const handleToggle = (index, event) => {
        console.log('Toggle Clicked', event, index);
        event.preventDefault();
        event.stopPropagation();
        const newScrollPosition = window.scrollY;
        setExpandedStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });

        setTimeout(() => {
            console.log('==== select domain After ', newScrollPosition);
            window.scrollTo(0, newScrollPosition);
        }, 0);
    
        return false;
    };
    
    const filterByLevels = (e) => {
        if(selectSubDomain != ""){
          return (e?.programmeSubDomain == selectSubDomain && e?.programmeLevel == finalLevel)
        }else {
          return (e?.programmeLevel == finalLevel)
        }
    }

    return (
        <React.Fragment>
            <Navbar style={{ overflow: 'hidden'}}/>
            <PageBanner style={{ overflow: 'hidden'}}
                pageTitle="Program++" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Program++" 
            />  
            <div className="gallery-area pt-100 pb-70" >
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
            <div className="courses-area courses-section pt-50 pb-70">
                <div className="container">
                    <div className="row" >
                        <h2 className="sub-title" style={{ textAlign: "center", paddingBottom: "15px"}}> Program List</h2>
                        <div className="edemy-grid-sorting row align-items-center filter-box" style={{ background: '#f8f9fa', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', padding: '15px', borderRadius: '8px' }}>
                            <div className="col-lg-4 col-md-6 ordering float-right">
                                <div className="select-box float-right">
                                    <div className='text-left' style={{ textAlign:"left"}} > <label> Filter By State Level</label> </div>                                
                                    <select className="form-control" onChange = { (event) => {settingState(event)}} value={selectDomain}>
                                        <option value="">Filter By State Level</option>
                                        {domain && domain.map((i, index) => {
                                            return (
                                                <option key={index} value={i}>{i}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                            { selectDomain && <div className="col-lg-4 col-md-6 ordering float-right">
                                <div className="select-box float-right">
                                    <div className='text-left' style={{ textAlign:"left"}} > <label> Filter By SubType</label> </div>                                
                                    <select className="form-control" onChange = { (event) => {settingSubDomain(event)}} value={selectSubDomain}>
                                        <option value="">Filter By SubType </option>
                                        {subDomain && subDomain.map((i, index) => {
                                            return (
                                                <option key={index} value={i}>{i}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div> }
                            { selectDomain && selectSubDomain && <div className="col-lg-4 col-md-6 ordering float-right">
                                <div className="select-box float-right">
                                    <div className='text-left' style={{ textAlign:"left"}} > <label> Filter By Select Exam</label> </div>                                
                                    <select className="form-control" onChange = { (event) => {settingFinalLevel(event)}} value={finalLevel}>
                                        <option value="">Select Exam</option>
                                        {levels.map((i, index) => {
                                            return (
                                            <option key={index} value={i}>{i}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div> }
                        </div>
                    </div>
                    {/* <div className="row"> */}
                    {data.length > 0 ? (
                        selectDomain === '' && selectSubDomain === '' && finalLevel === '' ? (
                            <div className="row" style={{ minHeight: "275px"}}>
                                {data.reduce((acc, cur, index) => {
                                    const existing = acc.find((i) => i.programmeDomain === cur.programmeDomain);
                                    if (existing) {
                                        existing.children.push(cur);
                                    } else {
                                        acc.push({ programmeDomain: cur.programmeDomain, children: [cur] });
                                    }
                                    return acc;
                                }, []).map((i, index) => (
                                    <div className="col-lg-4 col-md-6" key={index}>
                                        <div className="single-courses-box">
                                            <div className="courses-content">
                                                <div className="course-author d-flex align-items-center">
                                                    <span>{`Top ${i.programmeDomain} programmes`}</span>
                                                </div>
                                                {i.children.map((child, childIndex) => (
                                                    <div key={childIndex}>
                                                        {expandedStates[index] ? (
                                                            <div className="course_Options">
                                                                {child.degreeFullName}
                                                            </div>
                                                        ) : (
                                                            <div className="course_Options" key={childIndex}>
                                                                {childIndex < 4 ? child.degreeFullName : ''}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                               <button
                                                    className="toggle-button"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        handleToggle(index, event);
                                                        return false;
                                                    }}
                                                    
                                                >
                                                    {expandedStates[index] ? 'Collapse' : 'Expand'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : ((selectSubDomain == "" && finalLevel == "") ? 
                        <div className="row" style={{ minHeight: "275px"}}>
                        {data.filter(filterSubDomainOptions).reduce((acc, cur) => {
                            const existing = acc.find(i => i.programmeDomain === cur.programmeDomain);
                            if (existing) {
                              existing.children.push(cur);
                            } else {
                              acc.push({ programmeDomain: cur.programmeDomain, children: [cur] });
                            }
                            return acc;
                          }, []).map((i, index) => {
                            return (
                                <div className="col-lg-4 col-md-6" key={index}>
                                <div className="single-courses-box">
                                    <div className="courses-content">
                                        <div className="course-author d-flex align-items-center">
                                            <span>{`Top ${i.programmeDomain} programmes`}</span>
                                        </div>
                                        {i.children.map((child, childIndex) => (
                                            <div key={childIndex}>
                                                {expandedStates[index] ? (
                                                    <div className="course_Options">
                                                        {child.degreeFullName}
                                                    </div>
                                                ) : (
                                                    <div className="course_Options" key={childIndex}>
                                                        {childIndex < 4 ? child.degreeFullName : ''}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                       <button
                                            className="toggle-button"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                handleToggle(index, event);
                                                return false;
                                            }}
                                            
                                        >
                                            {expandedStates[index] ? 'Collapse' : 'Expand'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            );
                          })}
                        </div>:
                        ((finalLevel == "" && selectSubDomain != "") ? 
                        <div className="row">
                        {data.filter(filterBysubDomain).reduce((acc, cur) => {
                            const existing = acc.find(i => i.programmeDomain === cur.programmeDomain);
                            if (existing) {
                              existing.children.push(cur);
                            } else {
                              acc.push({ programmeDomain: cur.programmeDomain, children: [cur] });
                            }
                            return acc;
                          }, []).map((i, index) => {
                            return (
                                <div className="col-lg-4 col-md-6" key={index}>
                                <div className="single-courses-box">
                                    <div className="courses-content">
                                        <div className="course-author d-flex align-items-center">
                                            <span>{`Top ${i.programmeDomain} programmes`}</span>
                                        </div>
                                        {i.children.map((child, childIndex) => (
                                            <div key={childIndex}>
                                                {expandedStates[index] ? (
                                                    <div className="course_Options">
                                                        {child.degreeFullName}
                                                    </div>
                                                ) : (
                                                    <div className="course_Options" key={childIndex}>
                                                        {childIndex < 4 ? child.degreeFullName : ''}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                       <button
                                            className="toggle-button"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                handleToggle(index, event);
                                                return false;
                                            }}
                                            
                                        >
                                            {expandedStates[index] ? 'Collapse' : 'Expand'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            );
                          })}
                        </div>:
                        <div className="row" style={{ minHeight: "275px"}}>
                        {data.filter(filterByLevels).reduce((acc, cur) => {
                            const existing = acc.find(i => i.programmeDomain === cur.programmeDomain);
                            if (existing) {
                              existing.children.push(cur);
                            } else {
                              acc.push({ programmeDomain: cur.programmeDomain, children: [cur] });
                            }
                            return acc;
                          }, []).map((i, index) => {
                            return (
                                <div className="col-lg-4 col-md-6" key={index}>
                                <div className="single-courses-box">
                                    <div className="courses-content">
                                        <div className="course-author d-flex align-items-center">
                                            <span>{`Top ${i.programmeDomain} programmes`}</span>
                                        </div>
                                        {i.children.map((child, childIndex) => (
                                            <div key={childIndex}>
                                                {expandedStates[index] ? (
                                                    <div className="course_Options">
                                                        {child.degreeFullName}
                                                    </div>
                                                ) : (
                                                    <div className="course_Options" key={childIndex}>
                                                        {childIndex < 4 ? child.degreeFullName : ''}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                       <button
                                            className="toggle-button"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                handleToggle(index, event);
                                                return false;
                                            }}
                                            
                                        >
                                            {expandedStates[index] ? 'Collapse' : 'Expand'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            );
                          })}
                        </div>))
                        ) : (
                        'loading'
                    )}
                </div>
            </div>
     
            <Footer />
        </React.Fragment>
    )
}

export default TopUniversitiesPage;