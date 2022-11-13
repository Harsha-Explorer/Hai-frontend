import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import React,{Suspense} from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Favourites from './components/Favourites';
import Errorpage from './components/Errorpage';

const App = () => {
  return (
    <>
    <div className='Main'>
    
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/favourites" element={<Favourites/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/logout" element={<Logout/>} />
          <Route path="*" element={<Errorpage/>}/>
        </Routes>
      </Suspense>      
    </Router>
    </div>
    </>
  );
}

export default App;
