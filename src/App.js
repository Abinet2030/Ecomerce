import React from 'react';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Mans from './pages/Mans';
import Women from './pages/Women';
import Navigation from './component/Navigation';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div>
        <Navigation />
      </div>
       
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Mans" element={<Mans />} />
      
    </Routes>
 
    </div>
      
  );
}

export default App;
