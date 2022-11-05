import React from 'react'
import { useContext } from 'react'
import { RecipeContext } from '../../components/context'


export default function Breakfast() {
  const { globalRecipes }= useContext(RecipeContext)

  return (
          <div> 
             Breakfast are here:
                {globalRecipes?.post?.map((item, idx) => 
                <Breakfast key={idx} globalRecipes={item.fields.category}/>
                )}
          </div>
  )

}
