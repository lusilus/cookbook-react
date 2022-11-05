import { createContext, useState, useReducer } from "react";
 import {useCallback, useEffect } from 'react'
 import { client } from '../client'
//import Test from './Test'

export const RecipeContext = createContext();

console.log(RecipeContext)

 export default function Context({children}) {
    
   const reducer = (state, action) => {
     switch (action.type) {

       case 'FETCH_SUCCESS':


            return {
             
             loading: false,
             post: action.payload,
             error: ''
            }

<<<<<<< HEAD
        case 'add':
            return {...state, recipes:[state.recipes, action.payload] }
=======
>>>>>>> f49b3d3f2db52312412ecdf2ce82ee426098c6dc


            default:
             return state

      
  }
 }

<<<<<<< HEAD
// const initialState = {
//    loading: true,
//    error: '',
//    post:{},

//  }
=======
const initialState = {
   loading: true,
   error: '',
   post:{},

 }
>>>>>>> f49b3d3f2db52312412ecdf2ce82ee426098c6dc


const [globalRecipes, dispatchRecipes] = useReducer(reducer,{
 
<<<<<<< HEAD
//     recipes:{
//         title:'',
//         ingredients:'',
//         method:'',
//         category:'',
//         cookingtime:''
//    },
 
=======
 /*   recipes:{
        title:'',
        ingredients:'',
        method:'',
        category:'',
        cookingtime:''
   },
 */
>>>>>>> f49b3d3f2db52312412ecdf2ce82ee426098c6dc
  

  })
 


       
//the initial value in the state needs to be the data (clean Data)
   // getData()
   // const [recipes setRecipe] = useState([])

    return <RecipeContext.Provider value={{globalRecipes, dispatchRecipes}}>

         {children}

    </RecipeContext.Provider>
} 