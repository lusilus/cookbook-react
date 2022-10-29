import Test from './components/Test'
import './App.css';
import { useContext } from 'react';
import { RecipeContext } from './components/context'
import Card from './components/Card';
import CommunityRecipes from './components/CommunityRecipes';


function HomePage() {

 const { recipe }= useContext(RecipeContext)

  return (
      <div>
        <CommunityRecipes />
        <p>-------------------------------------------------</p>
        <p>hello from home page</p>
          {recipe?.map((item, idx) => <Card key={idx} recipe={item}/> )}
        
      </div>
  )
   
}

export default HomePage;
