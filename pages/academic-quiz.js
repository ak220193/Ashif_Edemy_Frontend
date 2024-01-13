import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import { useRouter } from 'next/router';
import * as moment from 'moment'
import { useSelector, useDispatch } from "react-redux";
import _ from 'lodash';
import { getQuizData } from '../store/slice/quizSlice'

const QuizSkillPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [typeOf, setType] = useState();
    const [selectedType, setSelectedType] = useState();
    const [allValues, setAllValues] = useState({
        difficulty: "",
        mainDomain: "",
        typeOf: ""
    })
    const [difficulty, setDifficulty] = useState("");
    const [mainDomain, setMainDomain] = useState("");

    const difficultyOption = [
        { option: "Beginner", value: "Beginner" },
        { option: "Intermediate", value: "Intermediate" },
        { option: "Advanced", value: "Advanced" }
    ]
    
    const domain = [
        { option: "Medical", value: "Medical"},
        { option: "Engineering", value: "Engineering"},
        { option: "Agriculture", value: "Agriculture" },
        {  option: "Law", value: "Law" },
        { option: "Dental",  value: "Dental"}
    ]
    const { TypesofQuiz, quizInfo, getQuizDataLoading  } = useSelector((state) => state.quiz)
    useEffect(() => {
        setType(TypesofQuiz)
    }, [])

    const startQuiz = () => {
        if((mainDomain == "" || mainDomain == undefined) && (difficulty == "" || difficulty == undefined)){
          alert(`Please select main domain and difficulty level`)
        }else if (mainDomain.length > 0 && difficulty.length > 0) {
            let payload = {...allValues}
            payload['typeOf'] = 'Academic'
            localStorage.setItem('currentQuizSkill', JSON.stringify(payload));
            dispatch(getQuizData(payload));
            const newScrollPosition = window.scrollY;
            setTimeout(() => {
                window.scrollTo(0, newScrollPosition);
            }, 0);
            setTimeout(() => {
                router.push(`/start-quiz`);
            }, "1500")
        }else {
          alert(`the value is not passed`)
        }
    }
    
      useEffect(() => {
        allValues.difficulty = difficulty
        allValues.mainDomain = mainDomain
        allValues.typeOf = typeOf
      }, [startQuiz])

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth()+1;
    let year = newDate.getFullYear();
    const todayDate = `${date}/${month < 10?`0${month}`:`${month}`}/${year}`

    const handleChangeDomain = async (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setMainDomain(value);
        const newScrollPosition = window.scrollY;
        setTimeout(() => {
            window.scrollTo(0, newScrollPosition);
        }, 0);
    }

    const handleChangeDifficulty = async (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setDifficulty(value)
        const newScrollPosition = window.scrollY;
        setTimeout(() => {
            window.scrollTo(0, newScrollPosition);
        }, 0);
    };

    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Quiz" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Academic Quiz" 
            />  
            
            <div className="courses-area courses-section pt-100 pb-70">
                <div className="container">
                <h2 className="sub-title" style={{ textAlign: "center", paddingBottom: "15px"}}>Quiz</h2>
                    <div className="edemy-grid-sorting row align-items-center" style={{ background: '#f8f9fa', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', padding: '15px', borderRadius: '8px' }}>
                        <div className="col-lg-4 col-md-6 ordering float-right">
                            <div className="select-box float-right">
                                <div className='text-left' style={{ textAlign:"left"}} > <label> Select Difficulty</label> </div>                                
                                <select className="form-control" onChange={handleChangeDifficulty} value={difficulty} >
                                    <option value="">Select Quiz Level</option>
                                    {difficultyOption && difficultyOption.map( (option, key) => {
                                       return  <option key={key} value={option.value}>{option.option}</option>
                                    })}                                    
                                </select>                                
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 ordering">
                            <div className="select-box float-right">
                            <div className='text-left' style={{ textAlign:"left"}}> <label> Select Domain </label> </div> 
                                <select multiple={false} className="form-control" onChange={handleChangeDomain} value={mainDomain}>
                                    <option value="">Select Domain</option>
                                    {domain && domain.map( (domainOption, index) => {
                                       return  <option key={index} value={domainOption.value}> {domainOption.option} </option>
                                    })} 
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-area pt-50 pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image text-center">
                                <img src="/images/quiz.svg" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <span className="sub-title"></span>
                                <h2>Selected Quiz Type</h2>
                                <ul className="features-list">
                                    <li><span><i className="flaticon-time-left"></i> Date: {todayDate} </span></li>     
                                    <li><span><i className="flaticon-tutorials"></i> Domain: {mainDomain == "" || mainDomain == undefined ? "-": mainDomain} </span></li>
                                    <li><span><i className="flaticon-experience"></i> Difficulty:  {difficulty == "" || difficulty == undefined ? "-": difficulty} </span></li>                                                                   
                                    <li><span><i className="flaticon-self-growth"></i> Type: {typeOf || 'Academic'} </span></li>
                                </ul>

                                <div onClick={() => startQuiz()} >
                                    <a className="default-btn">
                                        <i className="flaticon-user"></i> Start <span></span>
                                    </a>
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

export default QuizSkillPage;