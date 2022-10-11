import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './HomePage';
import Header from './components/Header'
import Footer  from './components/Footer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
  </Routes>
  <Footer/>
</BrowserRouter>
   
    
  
);


