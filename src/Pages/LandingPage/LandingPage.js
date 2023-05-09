import React from 'react'
import LandingHeader from './Components/LandingHeader/LandingHeader'
import LandingAbout from './Components/LandingAbout/LandingAbout'
import LandingAboutUs from './Components/LandingAboutUs/LandingAboutUs'
import LandingFeature from './Components/LandingFeature/LandingFeature'
import Footer from '../Home/Components/Footer/Footer'
export default function LandingPage() {
  return (
    <div>
         <LandingHeader/>
         <LandingAbout/>
         <LandingAboutUs/>
         <LandingFeature/>
        <Footer/>
    </div>
  )
}
