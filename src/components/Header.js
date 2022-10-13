import  { useContext, useEffect} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom'
import './footer&header.css'
import { RecipeContext } from './context'
import { client } from '../client'


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
    // vertical padding + font size from searchIcon
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

const {setRecipe} = useContext(RecipeContext)

useEffect(()=>{
  const getData = async() => {
    try {
      const response = await client.getEntries({ content_type: 'breakfastRecipe'})
      const responseData = response.items
      console.log(responseData)
     
      setRecipe([...responseData])
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
        
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Hummus Salam
          </Typography>
            <div className='flex justify-between gap-[12px] m-5'>
              <Link to='/'>
                Home Page 
              </Link>
              <Link to='/Breakfast'>
                  Breakfast 
              </Link>
              <Link to='/Lunch'>
                  Lunch 
              </Link>
              <Link to='/Dinner'>
                  Dinner
              </Link>
              <Link to='/Soup'>
                  Soup 
              </Link>
              <Link to='/Sweet'>
                 Sweet 
              </Link>
              <Link to='/Kitchen hacks'>
                 Kitchen hacks 
              </Link>
              <Link to='/AddNew'>
                 Add Your Recipe 
              </Link>
            </div>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
   
  );
}







