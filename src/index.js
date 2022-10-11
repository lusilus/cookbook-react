import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './HomePage';
import Header from './components/Header'
import Footer  from './components/Footer'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Material UI:
// import { ThemeProvider, CreateTheme } from '@mui/material/styles';
// import { red } from '@mui/material/colors';

// const color = red[900];


// const customTheme = CreateTheme({
//   //Theme settings:
//   palette:{
//     primary: {
//       main: color,
//     },
//     secondary: {
//       main: '#c62828',
//     },

//   }
// })


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<BrowserRouter>
  {/* <ThemeProvider theme={customTheme}> */}
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    
    </Routes>
    <Footer/>
  {/* </ThemeProvider> */}
</BrowserRouter>
   
    
  
);


