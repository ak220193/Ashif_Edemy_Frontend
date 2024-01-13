import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import { getAdvertisement  } from "../store/slice/universitiesSlice";
import { getEntranceTypeDetails, getEntranceStateExamDetails, getEntranceSubDetails  } from "../store/slice/learningHubSlice";
import { useRouter } from 'next/router';
import * as moment from 'moment'
import { useSelector, useDispatch } from "react-redux";
import _ from 'lodash';

const TopUniversitiesPage = () => {
    const router = useRouter();
    const { advertisementLists } = useSelector((state)=>state.university);
    const dispatch = useDispatch()
    const [adImages, setAdImages] = React.useState([]);
    const [adTitle, setAdTitle] = React.useState([]);

    const NationalLevel = ["NEET", "JEE MAIN", "CMAT", "GPT", "JEE Advanced"]
    const StateLevel = ["Tamil Nadu", "Kerala", "Andhra Pradesh", "Telengana", "Karnataka"]
    const DisciplineBased = ["Arts & Science Entrance", "Law", "Medical", "Engineering", "Hotel Management"]
    const EmployemntExam = ["UPSC", "CDS", "PSC", "UGC-NET", "Civil Services Exam"]
    const stateExamForTamilNadu = ["TNPSC", "TNEB", "TNMRB"]
    const stateExamsforKerala = ["KLPSC", "KLEB"]
    const [mainType, setMainType] = useState("");
    const [subType, setSubType] = useState([]);
    const [stateExams, setStateExams] = useState([]);
    const [clickSubType, setClickSubType] = useState("");
    const [finalData, setFinalData] = useState([]);
    const [clickStatus, setClickStatus] = useState();
    const [type, setType] = useState([
        {
            option: "National Level",
            value: "National Level"
        },
        {
            option: "State Level",
            value: "State Level"
        },
        {
            option: "Discipline Based",
            value: "Discipline Based"
        },
        {
            option: "Employment Exam",
            value: "Employment Exam"
        }
    ]);
    

    useEffect(() => {    
        getAllData();
    },[]); 


    const getAllData = async() => {        
        await dispatch( getAdvertisement() );
    }  
    
    const handleConceptChange = async(event) => {
        event.preventDefault();  
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


    // filter functionas //

    const { entranceTypeList, entranceSubList, entranceStateExamList } = useSelector((state) => state.learning)
    // useEffect(() => {
    //     if(mainType === "National Level") {
    //         setSubType(NationalLevel)
    //     } else if (mainType === "State Level") {
    //         setSubType(StateLevel)
    //     } else if (mainType === "Discipline Based") {
    //         setSubType(DisciplineBased)
    //     } else if (mainType === "Employment Exam") {
    //         setSubType(EmployemntExam)
    //     }
    //     // const newScrollPosition = window.scrollY;
    //     // setTimeout(() => {
    //     //     console.log('************')
    //     //     window.scrollTo(0, newScrollPosition);
    //     // }, 0);
    // }, [mainType]);    


    const catagorySelector = async (event) => {  
        await setMainType(event.target.value)      
        dispatch(getEntranceTypeDetails(event.target.value))             
        if(event.target.value === "National Level") {
            setSubType(NationalLevel)
        } else if (event.target.value === "State Level") {
            setSubType(StateLevel)
        } else if (event.target.value === "Discipline Based") {
            setSubType(DisciplineBased)
        } else if (event.target.value === "Employment Exam") {
            setSubType(EmployemntExam)
        }   
        setClickStatus(0)     
        const newScrollPosition = window.scrollY;
        setTimeout(() => {
            window.scrollTo(0, newScrollPosition);
        }, 0);
        
    }
    

    const subTypeSelector = async(e) => {
        
        dispatch(getEntranceSubDetails(e.target.value))
        setClickSubType(e.target.value)   
        setClickStatus(1)     
        const newScrollPosition = window.scrollY;
        setTimeout(() => {
            window.scrollTo(0, newScrollPosition);
        }, 0);
    }

    const stateExamSelector = async (e) => {
        
        dispatch(getEntranceStateExamDetails(e.target.value))
        setStateExams(e.target.value)    
        setClickStatus(2)    
        const newScrollPosition = window.scrollY;
        setTimeout(() => {
            window.scrollTo(0, newScrollPosition);
        }, 0);
    }

    useEffect( () => {
        if(clickStatus === 0) {
            setFinalData(entranceTypeList)
        }else if (clickStatus === 1) {
                setFinalData(entranceSubList)
        }else if (clickStatus === 2) {
                setFinalData(entranceStateExamList)
        }
        const newScrollPosition = window.scrollY;
        setTimeout(() => {
            window.scrollTo(0, newScrollPosition);
        }, 0);
    }, [entranceTypeList, entranceSubList, entranceStateExamList])

    // useEffect(() => {

    //     if(clickStatus === 0) {
    //             setFinalData(entranceTypeList)
    //     }else if (clickStatus === 1) {
    //             setFinalData(entranceSubList)
    //     }else if (clickStatus === 2) {
    //             setFinalData(entranceStateExamList)
    //     }
    //     const newScrollPosition = window.scrollY;
    //     setTimeout(() => {
    //         window.scrollTo(0, newScrollPosition);
    //     }, 0);

    //     console.log('=== entranceTypeList ', entranceTypeList)
    // }, [mainType, clickSubType, clickStatus]);

    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Entrance++" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Entrance++" 
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
                    <h2 className="sub-title" style={{ textAlign: "center", paddingBottom: "15px"}}> Entrance List</h2>
                    <div className="edemy-grid-sorting row align-items-center">
                        <div className="col-lg-4 col-md-6 ordering float-right">
                            <div className="select-box float-right">
                                <div className='text-left' style={{ textAlign:"left"}} > <label> Filter By State Level</label> </div> 
                                <select multiple={false} className="form-control" onChange = { (event) => {catagorySelector(event)}} value={mainType} >
                                    <option value="">Filter By State Level</option>
                                    {type.map((i, index) => {
                                        return (
                                            <option value={i.value} key={index}> {i.option} </option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        { mainType && <div className="col-lg-4 col-md-6 ordering float-right">
                            <div className="select-box float-right">
                                <div className='text-left' style={{ textAlign:"left"}} > <label> Filter By SubType</label> </div>                                
                                <select multiple={false} className="form-control" onChange = { (event) => {subTypeSelector(event)}} value={clickSubType}>
                                    <option value="">Filter By SubType </option>
                                    {subType.map((i, index) => {
                                        return(
                                        <option value={i} key={index}>{i}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div> }
                        {(mainType === "State Level" && clickSubType) &&  <div className="col-lg-4 col-md-6 ordering float-right">
                            <div className="select-box float-right">
                                <div className='text-left' style={{ textAlign:"left"}} > <label> Filter By Select Exam</label> </div>                                
                                <select multiple={false} className="form-control" onChange = { (event) => {stateExamSelector(event)}} value = {stateExams}>
                                    <option value="">Select Exam</option>
                                    {stateExams.map((i, index) => {
                                        return(
                                            <option key={index} value={i}>{i}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div> }
                    </div>                    
                    <div className="row" style= {{  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        {
                            finalData && finalData.length ? finalData.map( (list, listIndex) => {
                                return <div className="col-lg-4 col-md-6" key={listIndex}>
                                    <div className="single-courses-box">
                                        <div className="courses-image" style={{ "width": '100% !important', "height": "200px", 'overflow': 'hidden', "cursor": "pointer"}}>
                                            <div >
                                                <img src='/images/man-with-laptop.png' alt="image" />
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <div className="course-author align-items-center">
                                                <table style={{ width: "100%"}}>
                                                    <tbody>
                                                        <tr style={{ lineHeight: "3"}}>
                                                            <td style={{ width: "50%"}}> Type </td>
                                                            <td style={{ width: "50%"}}> : {list.type} </td>
                                                        </tr>
                                                        <tr style={{ lineHeight: "3"}}>
                                                            <td style={{ width: "50%"}}> Sub Type </td>
                                                            <td style={{ width: "50%"}}> : {list.subType} </td>
                                                        </tr>
                                                        <tr style={{ lineHeight: "3"}}>
                                                            <td style={{ width: "50%"}}> Date </td>
                                                            <td style={{ width: "50%"}}> : {list.date} </td>
                                                        </tr>
                                                        <tr style={{ lineHeight: "3"}}>
                                                            <td style={{ width: "50%"}}> Exam Link </td>
                                                            <td style={{ width: "50%"}}> : <a href={list.examLink} className='table-col-btn'> Click Here </a> </td>
                                                        </tr>
                                                        <tr style={{ lineHeight: "3"}}>
                                                            <td style={{ width: "50%"}}> Description  </td>
                                                            <td style={{ width: "50%"}}>  : { list.content} </td>
                                                        </tr>
                                                    </tbody>
                                                </table>                                           
                                            </div>
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

export default TopUniversitiesPage;