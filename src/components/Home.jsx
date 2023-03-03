import React from 'react'
import {Link} from "react-router-dom";
import Card from './Card'
import './home.scss'
import RatingCard from './RatingCard'
const Home = () => {
  return (
    <div className='header'>
      <header>
        <div>
            <h1>LITTLE LEMON</h1>
            <h2>CHICAGO</h2>
            <p>Little lemon is a charming neighborhood bistro
                that serves simple food and classic cocktails in a lively
                but casual environment. The restaurant features a locally-soured 
                menu with daily specials
            </p>
            <button>RESERVATION</button>
        </div>
        <div>
            <img src="" alt="" />
        </div>
      </header>

      <body>
        <div className='specials'>
                <h2>SPECIALS</h2>
                <div>
                    <button>RESERVATION</button>
                </div>
        </div>
        <div id='menuCard'>
            <Card title='salad'/>
            <Card/>
            <Card/>
        </div>

        <div id='ratings'>
          <h1>TESTIMONIALS</h1>
          <div id='ratingcard'>
            <RatingCard/>
            <RatingCard/>
            <RatingCard/>
            <RatingCard/>
          </div>
        </div>
        <header className='headerbody'>
        <div>
            <h1>LITTLE LEMON</h1>
            <h2>CHICAGO</h2>
            <p>Little lemon is a charming neighborhood bistro
                that serves simple food and classic cocktails in a lively
                but casual environment. The restaurant features a locally-soured 
                menu with daily specials
            </p>
            <button><Link to='/reservations' className='drawerLink'>RESERVATION</Link></button>
        </div>
        <div>
            <img src="" alt="" />
        </div>
      </header>
      </body>
    </div>
  )
}

export default Home
