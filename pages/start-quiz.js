import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import { useRouter } from 'next/router';
import * as moment from 'moment'
import { useSelector, useDispatch } from "react-redux";
import _ from 'lodash';
import { getQuizData, postQuiz } from '../store/slice/quizSlice'
// import { Checkbox } from "@mui/material";

const QuizSkillPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [data, setData] = useState();
    const [respondedAnswer, setRespondedAnswer] = useState();
    const [detail, setDetail] = useState();
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [correct, setCorrect] = useState(0);
    const [buttonText, setButtonText] = useState("Next");
    const [checked, setChecked] = useState(false);
    const [index, setIndex] = useState(0);
    const [indexTo, setIndexTo] = useState(1);
    const [sample, setSample] = useState(false);
    const [name, setName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [email, setEmail] = useState("");
    const [submit, setSubmit] = useState();

    const [errors, setErrors] = useState({ name: ''});
    const initialState = { 
        name :"",
        phoneNum :"",
        email :"",
    };
    const [formData, setFormData] =  useState(initialState);
    const [successMessage, setSuccessMessage] = useState('');

    const [results, setResults] = useState({
        name: "",
        phonenum: "",
        email: "",
        marks: ""
    });
    const IdentifyLastQuestion = data?.length;    
    useEffect(() => {
        let localData = localStorage.getItem('currentQuizSkill');
        if(localData){
            dispatch(getQuizData(JSON.parse(localData)));
        }
        
    }, []);
    const { quizInfo, getQuizDataLoading } = useSelector( (state) => state.quiz);
    useEffect(() => {
        setData(quizInfo)
    }, [quizInfo])

    useEffect(() => {
        if(data)
        setDetail(data?.slice(index, indexTo))
    }, [data, index, indexTo])

    const handelQuizResponse = (e) => {
        setRespondedAnswer(e)
        if (index != IdentifyLastQuestion - 1 && indexTo != IdentifyLastQuestion) {
            setIndex(index + 1)
            setIndexTo(indexTo + 1)
            const newScrollPosition = window.scrollY;
            setTimeout(() => {
                window.scrollTo(0, newScrollPosition);
            }, 0);
        } else {
            setTimeout(() => {
                const newScrollPosition = window.scrollY;
                setTimeout(() => {
                    window.scrollTo(0, newScrollPosition);
                }, 0);
                const a = window.confirm("Do you want to close your test");
                if (a === true) {
                    setSample(true)
                }
            }, "2000")
        }
      }
    
      const handelSkipPage = () => {
        setIndex(index + 1);
        setIndexTo(indexTo + 1);
        const newScrollPosition = window.scrollY;
        setTimeout(() => {
            window.scrollTo(0, newScrollPosition);
        }, 0);
      };
    
      const closeQuiz = () => {
        router.push(`/skill-quiz`);
      };
    
      const onClicker = (e) => {
        setSelectedAnswer(e.target.value)
        const newScrollPosition = window.scrollY;
        setTimeout(() => {
            window.scrollTo(0, newScrollPosition);
        }, 0);
      }
    
      useEffect(() => {
        if (respondedAnswer == selectedAnswer) {
          setCorrect(correct + 1)
        }
      }, [respondedAnswer, selectedAnswer])
    
      useEffect(() => {
        if (IdentifyLastQuestion === indexTo) {
          setButtonText("Submit");
        } else if (IdentifyLastQuestion !== indexTo) {
          setButtonText("Next");
        }
      }, [indexTo, index])
    
      const endTest = (e) => {
        setIndex(IdentifyLastQuestion - 1);
        setIndexTo(IdentifyLastQuestion);
        const newScrollPosition = window.scrollY;
        setTimeout(() => {
            window.scrollTo(0, newScrollPosition);
        }, 0);
      }
    
      const handleToggle = (e) => {
        setChecked(e.target.checked)
      }
    
      const finalResult = `${correct}/${IdentifyLastQuestion}`
    
      const handleForm = async(e) => {
        e.preventDefault();
        let payload = {...formData, marks: finalResult}
        let response = await dispatch(postQuiz(payload))
        if(response == 'OK'){
            handleReset();
            const newScrollPosition = window.scrollY;
            setTimeout(() => {
                window.scrollTo(0, newScrollPosition);
            }, 0);
            router.push(`/skill-quiz`);
        }
      }

    const handleReset = () => {
        setFormData(initialState);
    };

    const handleChange = async (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
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
                activePageText="Skill Quiz" 
            />  
            <div className="about-area pt-100 pb-100  bg-fef8ef">
                <div className="container">
                    <div className="row align-items-center">
                    {!sample && <div className="main-quiz--conatiner">
                        {detail?.map((obj) => (<div key={obj?.SlNo} className="quiz-questions">
                        <div className="quiz-questions--header">
                            <div className="quiz-question-container">
                            <h2 className="sub-title" style={{ textAlign: "center", paddingBottom: "15px"}}> Question {indexTo}</h2>
                            </div>
                        </div>
                        <div className="row" style={{ textAlign: "center"}}>
                            <div className="col-lg-12 col-md-12 col-xs-12">
                                <meter style={{ width: '50%', margin: "0 auto"}}
                                    min="0"
                                    max={IdentifyLastQuestion}
                                    value={index + 1}
                                    className="meter-scale"
                                ></meter>
                            </div>
                        </div><br/>
                        <h2 className="sub-title" style={{ textAlign: "center", paddingBottom: "15px"}}>{obj?.Stem}</h2>
                        {obj.Image != "NA" && <div>
                                <img src={`${obj.Image}`} alt="" className="quiz-Question_Image" />
                            </div>}
                            <div className="option--container">
                                <label className="question-option">
                                <input
                                    type="radio"
                                    value={1}
                                    key={obj.distractor1}
                                    name="quizOption"
                                    onClick={onClicker}
                                ></input>
                                <p>{obj.distractor1}</p>
                                </label>
                                <label className="question-option">
                                <input
                                    type="radio"
                                    value={2}
                                    key={obj.distractor2}
                                    name="quizOption"
                                    onClick={onClicker}
                                ></input>
                                <p>{obj.distractor2}</p>
                                </label>
                                <label className="question-option">
                                <input
                                    type="radio"
                                    value={3}
                                    key={obj.distractor3}
                                    name="quizOption"
                                    onClick={onClicker}
                                ></input>
                                <p>{obj.distractor3}</p>
                                </label>
                                <label className="question-option">
                                <input
                                    type="radio"
                                    value={4}
                                    key={obj.distractor4}
                                    name="quizOption"
                                    className="question-option-input"
                                    onClick={onClicker}
                                ></input>
                                <p>{obj.distractor4}</p>
                                </label>
                            </div>
                            <div className="row" style={{ textAlign: "center"}}>
                                <div className='next-btn' style={{ margin: "0 auto"}}>
                                    <button className={buttonText} onClick={() => handelQuizResponse(obj.Key)}>
                                        {buttonText}
                                    </button>
                                </div>                                
                            </div>                            
                            <div className="row" style={{ width: '85%', margin: '0 auto'}}>
                                <div className='col-lg-6 col-md-6 col-xs-12 skip-btn' style={{ textAlign: "left"}}>
                                    <button onClick={handelSkipPage} className="Skip-btn"> Skip </button>
                                </div>
                                <div className='col-lg-6 col-md-6 col-xs-12 end-btn' style={{ textAlign: "right"}}>
                                    <button className="Endtest-btn" onClick={endTest}>  End Test  </button>
                                </div>
                            </div>
                            </div>))}
                        </div>}
                    </div>
                </div>
            </div>

            {!!sample && <>
                <div className="blog-area ptb-100 view-all-courses-area-two bg-fef8ef">
                    <div className="container">
                        <h2 className="sub-title" style={{ textAlign: "center", paddingBottom: "15px"}}> Submit your results </h2>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 register-form">
                                <form>
                                    <div className="row">
                                        <div className="form-group p-1 col-lg-6 col-md-6 col-xs-12">
                                            <div className="form-group ">
                                                <label> Name <span className='field-required'>*</span> </label>
                                                <input type="text" onChange={handleChange} name="name" value={formData.name} className="form-control" placeholder="Enter Your Name" />
                                                {errors.name && (
                                                    <div className="error-message">{errors.name}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="form-group p-1 col-lg-6 col-md-6 col-xs-12">
                                            <div className="form-group ">
                                                <label>Phone Number <span className='field-required'>*</span> </label>
                                                <input type="text" onChange={handleChange} name="phoneNum" value={formData.phoneNum} className="form-control" placeholder="Last Name" />
                                                {errors.phoneNum && (
                                                    <div className="error-message">{errors.phoneNum}</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group p-1 col-lg-6 col-md-6 col-xs-12">
                                            <div className="form-group ">
                                                <label>Email <span className='field-required'>*</span></label>
                                                <input onChange={handleChange} type="text" name="email" value={formData.email} className="form-control" placeholder="Email Address (ex: 123@gmail.com)" />
                                                {errors.email && (
                                                    <div className="error-message">{errors.email}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="form-group p-1 col-lg-6 col-md-6 col-xs-12">
                                            <h4>
                                                Final Marks: {`${correct}/${IdentifyLastQuestion}`}
                                            </h4>
                                        </div>
                                    </div>
                                    {successMessage && <p style={{ color: "green", fontWeight: "700"}}>{successMessage}</p>}
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-xs-12">
                                            <button type="submit" className={buttonText} onClick={handleForm}>Submit</button>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-xs-12">
                                            <button onClick={closeQuiz} className="next-button_Result">Retake Quiz</button>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>}
            <Footer />
        </React.Fragment>
    )
}

export default QuizSkillPage;