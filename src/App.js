import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutUs from './Pages/AboutUs/AboutUs';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/AboutUs" element={ <AboutUs/> } />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
