import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const AboutUsContentThree = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <React.Fragment>
            <div className="about-area-two pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="about-content-box">
                                <span className="sub-title">LearnPlusPlus.com</span>
                                <h2>LPP Learning Technology Solutions</h2>
                                <p>Welcome to the home page of Learning Technology Solutions Private Limited - LearnPlusPlus.com, a knowledge-based digital technology platform offering educational products and services to enable learners at all levels to explore and craft their learning paths.</p>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="about-video-box">
                                <div className="image">
                                    <img src="/images/about-img6.jpg" alt="image" />
                                </div>
 
                                {/* <Link href="#play-video">
                                    <a
                                        onClick={e => {e.preventDefault(); openModal()}}
                                        className="video-btn popup-youtube"
                                    > 
                                        <i className="flaticon-play"></i>
                                    </a>
                                </Link> */}

                                <div className="shape10">
                                    <img src="/images/shape9.png" alt="image" />
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
                </div>
                <div className="shape2">
                    <img src="/images/shape2.png" alt="image" />
                </div>
            </div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
        </React.Fragment>
    )
}

export default AboutUsContentThree;