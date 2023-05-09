import React from 'react';
import './LandingHeader.css';
import Landingnav from '../Landingnav/Landingnav';
import { Link } from 'react-router-dom';

export default function LandingHeader() {
  return (
    <div>
         <div className='landing-header' >
          <div className='landing-bg'>
        <Landingnav/>
        <div className="container">
          <div className='text-center landing-header-contant'>
          <h1>"Experience Safe, Fast, and Secure Payments"</h1>
          <p>Where Consumers can access their accounts, make payments, transfer money, and manage their finances.</p>
          <Link className='btn btn-bg btn-lg btn-about' to="/getstarted" role="button">Get Started</Link>
          </div>
         </div>
    </div>
    </div>
    </div>
  )
}
