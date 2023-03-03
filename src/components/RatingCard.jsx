import React from 'react'
import './rating.scss';

const RatingCard = (props) => {
  return (
    <div id='rating'>
      <h3>rating</h3>
      <div id='card'>
        <img src="" alt="" />
        <h3>{props.name}</h3>
      </div>
      <p>This is very good</p>
    </div>
  )
}

export default RatingCard
