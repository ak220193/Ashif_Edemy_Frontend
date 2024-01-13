import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="banner-wrapper jarallax">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="banner-wrapper-text">
                            <h1>Be led by the <span style={{ color: '#0281fe'}}> dreams </span> in your <span style={{ color: '#e15354'}}> heart</span></h1>
                            <p>Success is not how high you have climbed, but how you make a positive difference to the world</p>

                            <Link href="/about-us">
                                <a className="default-btn">
                                    <i className="flaticon-user"></i>Know More<span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="banner-shape11">
                <img src="/images/banner-shape12.png" alt="image" />
            </div>
            <div className="banner-shape12">
                <img src="/images/banner-shape13.png" alt="image" />
            </div>
            <div className="banner-shape13">
                <img src="/images/banner-shape14.png" alt="image" />
            </div>
        </div>
    )
}

export default MainBanner;