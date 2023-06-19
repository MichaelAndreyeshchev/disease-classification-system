import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Loading from './pages/Loading/Loading';
import ImageDetection from './pages/imageDetection/ImageDetection';
import TextDetection from './pages/textDetection/TextDetection';
import Result from './pages/Result/Result';
import Contact from './pages/Contact/Contact';
import Sidebar from './components/Sidebar/Sidebar';
import Credits from './pages/Credits/Credits';

import * as ROUTES from './Constants/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOADING} element={<Loading />} />
        <Route path={ROUTES.IMAGE_DETECTION} element={<ImageDetection />} />
        <Route path={ROUTES.TEXT_DETECTION} element={<TextDetection />} />
        <Route path={ROUTES.RESULT} element={<Result />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.CREDITS} element={<Credits />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
