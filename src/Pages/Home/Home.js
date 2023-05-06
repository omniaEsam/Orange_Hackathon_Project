import React from 'react' ;
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Services from './Components/Services/Services';

export default function Home() {
  return (
    <div>
        <Header/>
        <About/>
        <Services/>
    </div>
  )
}
