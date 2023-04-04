import React from 'react'
import './rating.scss';

const RatingCard = (props) => {
  return (
    <div id='rating' className='gap-[2em]'>
      <div className='grid gap-[1em]'>
        <img src={props.image} alt="" className='max-h-[5em] w-full' />
        <div className='flex justify-between'>
      <h3>{props.star}</h3>
        <h3 className='font-bold'>{props.name}</h3>

        </div>
      </div >
      <p className='mt-[1em]'>{props.text}</p>
    </div>
  )
}

export default RatingCard
