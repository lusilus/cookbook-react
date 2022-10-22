import Test from './components/Test'
import './App.css';
import { useContext, useReducer } from 'react';
import { RecipeContext } from './components/context'
import Card from './components/Card';


function HomePage() {
 const reducer = (state, action) => {

  }

const [recipes, setRecipes] = useReducer(reducer, RecipeContext)


console.log("recipes are, ", recipes)
  return (
      <div>
        <p>hello from home page</p>
          {recipes?.map((item, idx) => <Card key={idx} recipes={item}/> )}
        
      </div>
  )
   
}

export default HomePage;
