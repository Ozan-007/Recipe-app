import React from 'react'
import './RecipeCard.css'

const RecipeCard = ({recipe}) => {
    return (
        <div>
            <img className='recipe-image' src={recipe["recipe"]["image"]}></img>
            <p className='recipe-name'>{recipe["recipe"]["label"]}</p>
        </div>
    )
}

export default RecipeCard
