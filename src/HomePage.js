
import Test from './components/Test'
import './App.css';
import { useContext } from 'react';
import { RecipeContext } from './components/context'
import Card from './components/Card';


function HomePage() {

 const { globalRecipes }= useContext(RecipeContext)
 console.log('test are here', globalRecipes)
  return (
      <div>
        <p>hello from home page</p>
          {globalRecipes?.post?.map((item, idx) => <Card key={idx} globalRecipes={item}/> )}
        
      </div>
  )
   
}

export default HomePage;