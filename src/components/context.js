
import { Title } from "@mui/icons-material";
import { createContext, useContext, useReducer, useState } from "react";
// import {useCallback, useEffect } from 'react'
// import { client } from '../client'
//import Test from './Test'


export const RecipeContext = createContext();

console.log(RecipeContext)








export default function Context({children}) {
     const reducer = (state, action) => {

      }





//the initial value in the state needs to be the data (clean Data)
   // getData()
   const [recipes, setRecipes] = useReducer(reducer,{
   
     recipe:{
          title:'',
          ingredients:'',
          method:'',
          category:'',
          cookingtime:''
     }

    })
    console.log('the reducer is',recipes)

    return <RecipeContext.Provider value={{recipes, setRecipes}}>

         {children}

    </RecipeContext.Provider>
}
