import React from 'react'
import './LandingAboutUs.css'
import savingtime from '../../../../Shared/Assests/Images/saving-time.png';
import datasafety from '../../../../Shared/Assests/Images/data-safty.png';
import tips from'../../../../Shared/Assests/Images/tips.png' ;
import tracking from '../../../../Shared/Assests/Images/traking.png';
import { Link } from 'react-router-dom';
export default function LandingAboutUs() {
  return (
    <div className='aboutus-bg'>
     <div className='container'>
        <div className='aboutus-title text-center'>
        <h6>Enjoy Our Special Features</h6>
        <h2>Why Choose Use</h2>
        </div>
        <div className='d-flex ms-5 mt-5'>
          <div className='aboutus-card'>
            <div className='d-flex icon-contant'>
            <img src={savingtime} alt='saving-time-card'/>
            <h5>Saving Time</h5>
            </div>
            <p className='landing-abouts-desc'>Get ready to shop smarter using your smartphone by scanning a QR code to purchase products in seconds or by shopping online.</p>
          </div>
          <div className='aboutus-card'>
          <div className='d-flex icon-contant'>
            <img src={datasafety} alt='data-safety-card'/>
            <h5>Data Safety</h5>
            </div>
            <p className='landing-abouts-desc'>designed with your safety and security in mind. We use the latest encryption and authentication technologies to ensure that your data is always protected.</p>
          </div>
        </div>
        <div className='d-flex ms-5 mt-3'>
          <div className='aboutus-card'>
            <div className='d-flex icon-contant'>
            <img src={tips} alt='financial-tips-card'/>
            <h5>Financial Tips</h5>
            </div>
            <p className='landing-abouts-desc'>Provides educational resources that help  users improve their financial literacy including articles, videos, and webinars.... </p>
          </div>
          <div className='aboutus-card'>
          <div className='d-flex icon-contant'>
            <img src={tracking} alt='tracking-system-card'/>
            <h5>Tracking System</h5>
            </div>
            <p className='landing-abouts-desc'>offers a range of additional features to make your life easier. such as tracking your spending, history of your Transactions....</p>
          </div>
        </div>
        <p className='learn-more text-center'>Learn More about Our Features & Upcoming Updates From Our Website Click 
          <span><Link  to='/home' style={{color:'#ABC3C0'}}> Here </Link></span>
        </p>
     </div>
    </div>
  )
}
