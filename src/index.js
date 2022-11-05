import React from 'react';
import RecipeContextProvider from './components/context';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './HomePage';
import Header from './components/Header'
import Footer  from './components/Footer'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AddNew from './pages/AddNew';
import Breakfast from './pages/Categories/Breakfast'
import Lunch from './pages/Categories/Lunch'
import Dinner from './pages/Categories/Dinner'
import Soup from './pages/Categories/Soup'
import Sweet from './pages/Categories/Sweet'
import KitchenHacks from './pages/Categories/KitchenHacks'





//Material UI:
import { ThemeProvider,  createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


const color = red[900];


const customTheme =  createTheme({
  //Theme settings:
  palette:{
    primary: {
      main: color,
    },
    secondary: {
      main: '#c62828',
    },

  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RecipeContextProvider> 
  <BrowserRouter>
    <ThemeProvider theme={customTheme}>
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/addNew' element={<AddNew />}/>
          <Route path='/breakfast' element={<Breakfast />}/>
          <Route path='/lunch' element={<Lunch/>}/>
          <Route path='/dinner' element={<Dinner />}/>
          <Route path='/soup' element={<Soup />}/>
          <Route path='/sweet' element={<Sweet />}/>
          <Route path='/kitchenacks' element={<KitchenHacks />}/>

        </Routes>
      <Footer/>
    </ThemeProvider>
  </BrowserRouter>
 </RecipeContextProvider>
 
);


