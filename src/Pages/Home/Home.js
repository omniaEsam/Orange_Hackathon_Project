import React from 'react' ;
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Testimonials from './Components/Testimonials/Testimonials';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';

export default function Home() {
  return (
    <div>
        <Header/>
        <About/>
        <Services/>
        <Testimonials/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}
