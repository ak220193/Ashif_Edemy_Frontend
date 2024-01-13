import React from 'react';
import Link from 'next/link';

const PageBanner = ({pageTitle, homePageUrl, homePageText, activePageText}) => {
    return (
        <div className="page-title-area" style={{ zIndex: -1}}>
            <div className="container">
                <div className="page-title-content">
                    <ul>
                        <li>
                            <Link href={homePageUrl} >
                                <a style={{ color: "#fff"}}> <b>{homePageText} </b></a>
                            </Link>
                        </li> 
                        <li className="active" style={{ color: "#fff"}}> <b> {activePageText} </b></li>
                    </ul>

                    <h2 style={{ color: "#fff"}}>{pageTitle}</h2>
                </div>
            </div>

            <div className="shape9">
                <img src="/images/shape8.svg" alt="image" />
            </div>
        </div>
    );
}

export default PageBanner;