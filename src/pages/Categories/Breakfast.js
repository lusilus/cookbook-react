import React from 'react'
import { useContext, useCallback, useState } from 'react'
import { RecipeContext } from '../../components/context'
import {useEffect} from 'react'
import { client } from '../../client'
import Card from '../../components/Card'


export default function Breakfast() {
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

    <div>
      <p>
      Breakfast are here:{dispatchRecipes?.post?.map((item,idx) =>  
                <Card key={idx} globalRecipes={item}/> )}

      
      </p>
          

    </div>
           
  )

}
