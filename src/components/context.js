import { createContext, useState } from "react";
// import {useCallback, useEffect } from 'react'
// import { client } from '../client'
//import Test from './Test'

export const RecipeContext = createContext();

console.log(RecipeContext)

export default function Context({children}) {
       
//the initial value in the state needs to be the data (clean Data)
   // getData()
    const [recipe, setRecipe] = useState([])

    return <RecipeContext.Provider value={{recipe, setRecipe}}>

         {children}

    </RecipeContext.Provider>
}
