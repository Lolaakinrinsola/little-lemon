import React from 'react'
import './card.scss'
const Card = (props) => {
  return (
    <div id='menu'>
      <img src="" alt="" />
      <div>
        <h3>{props.title}</h3>
        <h3>{props.price}</h3>
      </div>
      <div>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis voluptatum quibusdam, ducimus fuga modi doloribus odio similique, amet asperiores expedita molestiae hic, quis sed cum quam maxime. In, asperiores architecto.</p>
      </div>

      <div>
        <p>dessss</p>
      </div>
    </div>
  )
}

export default Card
