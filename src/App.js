import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from './Constants/Routes';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Loading from './pages/Loading/Loading';
import DropFileInput from './pages/imageScanner/ImageDragAndDrop';
import FolderDetection from './pages/imageScanner/folderDetection';
import TextDetection from './pages/textDetection/TextDetection';
import Result from './pages/Result/Result';
import Contact from './pages/Contact/Contact';
import Sidebar from './components/Sidebar';
import Credits from './pages/Credits/Credits';

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
        <Route path={ROUTES.IMAGE_INDIVIDUAL} element={<DropFileInput />} />
        <Route path={ROUTES.IMAGE_FOLDER} element={<FolderDetection />} />
        <Route path={ROUTES.TEXT_DETECTION} element={<TextDetection />} />
        <Route path={ROUTES.RESULT} element={<Result />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.CREDITS} element={<Credits />} />
      </Routes>
    </Router>
  );
}

export default App;
