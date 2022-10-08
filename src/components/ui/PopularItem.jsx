import React from 'react'
import "./PopularItem.css"

function PopularItem({ category, image, rating }) {
  return (
    <div className='popularItem'>
        <h2>{category}</h2>
        <img src={image} alt="" />
        
        <div className="rating">
            <h3>Rating: {rating}</h3>
            <p><span className='blue'>Shop Now</span></p>
        </div>
    </div>
  )
}

export default PopularItem