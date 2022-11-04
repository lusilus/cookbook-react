import React from 'react'
import './CommunityRecipes.css';
import Card from './Card'
import cockingLove from '../assets/cocking-love.svg'

export default function CommunityRecipes({globalRecipes}) {

const filteredRecipes = globalRecipes?.post?.filter(item => item).sort((a, b) => b.fields.rating - a.fields.rating )

  return (
    <section aria-label="Community recommendations">
    <div id="communityRecommendations" className="container">
        <h2>Dishes loved by our community</h2> 
        <img className="cockingImage" src={cockingLove} alt="no imga" />
        <div className="slider-container">
            <div className="slider">
                <div className="slides">
                    <div id="slides__1" className="slide">
                            {filteredRecipes?.map((item, idx) => {
                                if(idx < 4 ) { return <div key={idx} className="cardWrapper"><Card globalRecipes={item}/></div>}
                                })}
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
