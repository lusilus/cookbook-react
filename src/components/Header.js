import  { useContext, useEffect , useReducer} from 'react';
import {Link} from 'react-router-dom'
import { RecipeContext } from './context'
import { client } from '../client'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import '../CSS/Header.css'
import logo from '../assets/logo.png'
import menu from '../assets/menu_FILL0_wght400_GRAD0_opsz48.svg'


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function SearchAppBar() {

   

const {dispatchRecipes} = useContext(RecipeContext)

useEffect(()=>{
  const getData = async() => {
    try {
      const response = await client.getEntries({ content_type: 'breakfastRecipe'})
      const responseData = response.items
      console.log(responseData)
     
      dispatchRecipes({ type: 'FETCH_SUCCESS', payload: responseData})
      
  } catch (error) {
      console.log(error)
  }

  }
  getData()
},[])


  return (
   

    <Box sx={{ flexGrow: 1 }}  >
      <AppBar position="static" >
        <Toolbar>
        
          <div>
            <img src={logo} alt='logo' className='logo'/>
          </div>
          
            <a>
              <img src={menu} alt='menu' className='menuButton'/>
            </a>
        
            <div className='pages flex justify-between gap-[20px] m-5 sm:column sm:flex sm:justify-center '>
              <Link to='/' className='links text-2xl'>
                Home Page 
              </Link>
              <Link to='/Breakfast' className='links text-2xl'>
                  Breakfast 
              </Link>
              <Link to='/Lunch' className='links text-2xl'>
                  Lunch 
              </Link>
              <Link to='/Dinner' className='links text-2xl'>
                  Dinner
              </Link>
              <Link to='/Soup' className='links text-2xl'>
                  Soup 
              </Link>
              <Link to='/Sweet' className='links text-2xl'>
                 Sweet 
              </Link>
              <Link to='/kitchenacks' className='links text-2xl'>
                 Kitchen hacks 
              </Link>
              <Link to='/AddNew' className='addNew text-2xl'>
                 Add Your Recipe 
              </Link>
              <Search className='searchbox'>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
            </div>
        </Toolbar>
      </AppBar>
    </Box>


  );
}