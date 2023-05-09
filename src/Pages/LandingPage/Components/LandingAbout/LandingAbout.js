import React from 'react'
import './LandingAbout.css'
import landingabout from '../../../../Shared/Assests/Images/landing-about.png'

export default function LandingAbout() {
  return (
    <div className='landing-about'>
        <div className="container">
      <div className='row g-1'>
      <div className="col-sm-12 col-md-6">
      <img className="img-fluid " src= {landingabout} alt="AboutImage"/>
        </div>
        <div className="col-sm-12 col-md-6 ">
          <div className='landing-about-title'>
           <h2>Who We Are</h2>
           <ul>
            <li className='list'>ntroducing our new E-wallet app, the ultimate payment solution for your everyday needs.</li>
            <li className='list'>you can securely store your payment information, and make transactions with just a few taps on your phone.</li>
            <li className='list'>Say goodbye to carrying cash and cards around, and hello to a more convenient and hassle-free way of paying</li>
           </ul>
          </div>
          
        </div>
        </div>
    </div>
    </div>
  )
}
