import React from 'react';
import imgAbout from '../../../../Shared/Assests/Images/illustration 1 (home section).png';
import icon1 from '../../../../Shared/Assests/Images/Group 17.png';
import icon2 from '../../../../Shared/Assests/Images/Group 18.png';
import icon3 from '../../../../Shared/Assests/Images/Group 19.png';
import QRimage from'../../../../Shared/Assests/Images/QR Code 1.png'
import ATMimage from'../../../../Shared/Assests/Images/ATM 2.png'
import DailyTips from'../../../../Shared/Assests/Images/Daily Tips 1.png'
import './About.css';
export default function About() {
  return (
<div className='about-contant' >
          <div className='bg-about'>
        <div className="container">
      <div className='row g-1'>
      <div className="col-sm-12 col-md-5">
      <img className="img-fluid  img-about" src= {imgAbout} alt="AboutImage"/>
        </div>
        <div className="col-sm-12 col-md-6 offset-1 ">
          <div className='title'>
           <h2>Our new features are based on extensive user research</h2>
          </div>
          <div className='desc-icon d-flex'>
            <img className='img-size' src={icon1} alt='icon'/>
            <p className='desc-about'>offers faster, more convenient, and more cost-effective Alternatives Banking and Payments to Traditional Methods.</p>
          </div>
          <div className='desc-icon d-flex'>
          <img className='img-size' src={icon2} alt='icon'/>
            <p className='desc-about'>changes the way People borrow and lend Money allow Individuals to lend Money directly to other Individuals.</p>
          </div>
          <div className='desc-icon d-flex'>
          <img className='img-size' src={icon3} alt='icon'/>
            <p className='desc-about'>provides real-Time Insights into Their spending Habits, helping Them set and track financial Goals</p>
          </div>
        </div>
        </div>
    </div>
    </div>
    <div className='about-section'>
             <div className='container'>
             <div className='upcoming-title text-center'>
              <h6>Enjoy Our Special Updates</h6>
              <h4>Upcoming Features</h4>
              </div>
              <div className='d-flex '>
               <div className='upcoming me-4'>
                <img src={QRimage} alt='Qr-card' />
                 <h6>Scan QR Code</h6>
                 <p>Get ready to shop smarter by using your smartphone to scan a QR code to purchase products in seconds.</p>
               </div>
               <div className='upcoming me-4'>
               <img src={ATMimage} alt='ATM-card' />
                 <h6>Nearest ATM</h6>
                 <p>Don't waste time use our ATM locator to easily find the nearest cash withdrawal point.</p>
               </div>
               <div className='upcoming'>
               <img src={DailyTips} alt='DailyTips-card' />
                 <h6>Daily Tips</h6>
                 <p>Provides educational resources that help  users improve their financial literacy including articles, videos, and webinars.... </p>
               </div>
              </div>
             </div>
        </div>
    </div>
  )
}
