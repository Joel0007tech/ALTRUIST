import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home'
import Careers from './components/Careers';
import Collaborate from './components/Collaborate';
import Community from './components/Community';
import Volunteers from './components/Volunteers';

const App = () => {
  return (
    <div>
       <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home/>}  />
     <Route path="/careers" element={<Careers/>} />
     <Route path="/collaborate" element={<Collaborate/>}  />
     <Route path="/community" element={<Community/>}  />
     <Route path="/volunteers" element={<Volunteers/>}  />
      </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App