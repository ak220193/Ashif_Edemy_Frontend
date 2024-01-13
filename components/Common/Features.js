import React from 'react';
import Link from 'next/link';

const Features = () => {
    return (
        <div className="features-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    {/* <span className="sub-title">LearnPlusPlus.com</span> */}
                    {/* <h2>LPP Learning Technology Solutions</h2>                     */}
                   
                </div>

                <div className="row">
                    <div className="col-lg-6 col-sm-6 col-md-6">
                        <div className="single-features-box without-padding1">
                            <div className="icon">
                                <i className="flaticon-computer"></i>
                            </div>
                            <h3>Go at Your Own Pace</h3>
                            <p>We serve the educational software industry with products and services including online programme management, training, and student services. Primarily we assist students pursuing or planning to pursue higher education in finding suitable schools/ colleges/ universities and programmes and provide content for learning and competitive examinations. Further, the industry can also search our portal for competent learners to support with their internship and placement offers.</p>                           
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-features-box without-padding1">
                            <div className="icon">
                                <i className="flaticon-shield-1"></i>
                            </div>
                            <h3>Career Effort</h3>
                            <p>After 12th grade, every learner is engaged in identifying a suitable programme of study to continue learning and build a better career. Many learners are unaware of the options open to them based on their interests and hence face difficulty in choosing the programmes or courses they want to pursue after the 12th grade. It is always preferable to understand various facts of relevant programmes of study based on one’s interest and then choose a discipline based on the learners' preferences and abilities. This kind of career planning will help to choose the correct programme, and this will ensure learners achieve their life goals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;