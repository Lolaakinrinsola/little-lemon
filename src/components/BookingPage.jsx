import React,{useState} from 'react'
import Footer from './Footer'
import Nav from './Nav'
import BookingForm from './BookingForm';


const BookingPage = () => {
    const Time=[
        '18:00','19:00','20:00','21:00'
    ]
    const [availableTimes, setAvailableTimes]=useState(Time)

    const addAvailableTimes=(available)=>{
        setAvailableTimes((prevTimes)=>{
            return[available, ...prevTimes]
        })
        
    }

    
  return (
    <div>
      <Nav/>
        <div>
            <BookingForm onAddTime={addAvailableTimes} name={Time}/>
        </div>
      <Footer/>
    </div>
  )
}

export default BookingPage
