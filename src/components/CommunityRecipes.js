import React from 'react'
import './CommunityRecipes.css';
import Card from './Card'
export default function CommunityRecipes({globalRecipes}) {

  //console.log(globalRecipes?.post[2]);
  return (
    <section aria-label="Community recommendations">
    <div id="communityRecommendations" className="container">
        <h2>Dishes loved by our community</h2> 
        <img className="cockingImage" src=".././assets/cocking-love.svg" alt="no imga" />
        <div className="slider-container">
            <div className="slider">
                <div className="slides">
                    <div id="slides__1" className="slide">
                        {/*sorting needs to be done */}
                            {globalRecipes?.post?.map((item, idx) => <div className="cardWrapper"><Card key={idx} globalRecipes={item}/></div>)}
                        
                        <div className="sliderArrows">
                            <a className="slide__prev" href="#" title="Next"></a>
                            <a className="slide__next" href="#" title="Next"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
