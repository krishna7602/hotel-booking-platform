import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signin from './Pages/Signin';
import Details from './Pages/Details';

const App = () => {
  return (
  
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/hotel/:id" element={<Details />} />
      </Routes>
  
  );
};

export default App;
