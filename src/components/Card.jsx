import React from 'react'
import './card.scss'
const Card = (props) => {
  return (
    <div id='menu'>
      <img src={props.image} alt="specials" className='w-full max-h-[12em]'/>
      <div className='flex justify-between'>
        <h3 className='font-bold '>{props.title}</h3>
        <h3 className='text-[#efb6a8]'>{props.price}</h3>
      </div>
      <div>

        <p>{props.text}</p>
      </div>

      <div>
        <p className='font-medium'>order a delivery</p>
      </div>
    </div>
  )
}

export default Card
