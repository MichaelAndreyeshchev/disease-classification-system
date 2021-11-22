import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';

import Home from './pages/Home/Home';
import ImageDetection from './pages/imageScanner/ImageDetection';
import Loading from './pages/Loading/Loading';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/image/detection' element={<ImageDetection />} />
        <Route path='/loading' element={<Loading />} />
      </Routes>
    </Router>
  );
}

export default App;
