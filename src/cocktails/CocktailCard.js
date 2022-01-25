import React from 'react'
import { Link } from 'react-router-dom'


function CocktailCard({ image, name, cocktailId }) {
  return (
    <div>
      <Link to={`/cocktails/${cocktailId}`}>
        <img src={image} className="photo" alt={name}></img>
      </Link>
    </div>
  )
}

export default CocktailCard