import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './Pages/LandingPage/LandingPage';
import Home from './Pages/Home/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="/home" element={ <Home/> } />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
