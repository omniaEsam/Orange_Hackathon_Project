import React from 'react'
import item1 from '../../../../Shared/Assests/Images/Atm-cash.png'
import item2 from '../../../../Shared/Assests/Images/nearest-atm.png'
import item3 from'../../../../Shared/Assests/Images/online-shopping.png'
import './LandingFeature.css'
export default function LandingFeature() {
  return (
    <div className='landing-feature-bg'>
     <h2 className='landing-feature-title'>Features</h2>
     <div className='feature-line'></div>
     <div className='feature-item1'>
        <img src={item1} alt='Atm-feature' />
     </div>
     <div className='feature-item2'>
        <img src={item2} alt='Nearest-Atm-feature' />
     </div>
     <div className='feature-item3'>
     <img src={item3} alt='online-shopping-feature' />
     </div>
     <div className='feature-item'></div>
    </div>
  )
}
