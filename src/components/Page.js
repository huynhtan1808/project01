import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Page.css';
import { Button } from './Button';
import logo1 from '../images/amazon.png';
import logo2 from '../images/github.png';
import logo3 from '../images/stripe.png';
import logo4 from '../images/shopify.png';
import logo5 from '../images/invision.png';
import logo6 from '../images/ycombinator.png';
import logo7 from '../images/easyjet.png';


function Page({alt}) {   
    return (
        <div className="page">
            <div className="page-container">
                <a className="page-items">
                    <p>👉 Hiring remotely? Reach 1,000,000+ remote workers on the 🏆 #1 Remote Jobs board</p>
                    <Link to='/sign-up' className="btn-banner">
                        <Button buttonStyle="btn--outline" buttonColor='green'>
                                    Hire me
                        </Button>
                    </Link>
                </a>
                <a className="featured-clients">
                    <p>trusted by</p>
                    <img src={logo1} alt={alt}/>
                    <img src={logo2} alt={alt}/>
                    <img src={logo3} alt={alt}/>
                    <img src={logo4} alt={alt}/>
                    <img src={logo5} alt={alt}/>
                    <img src={logo6} alt={alt}/>
                    <img src={logo7} alt={alt}/>
                </a>
            </div>
        </div>
    )
}

export default Page