import React,{useState} from 'react'
import './reservation.scss'
import {Link} from "react-router-dom";

const BookingForm = (props) => {
    
    const [reservation, setReservation]= useState({
        enteredDate:'',
        enteredTime:'',    
    })
    

    const dateChange=(event)=>{
        setReservation((prevState)=>{
            return{
                ...prevState,
                enteredDate:event.target.value
            }
        });
    }
        console.log(reservation)

    const updateTimes=(event)=>{
        reservation.enteredDate=event.target.value
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        const bookingInfo={
            date: new Date(enteredDate),
            time: enteredTime,
        };
    
        props.onAddTime(bookingInfo)
        const newdata={
        date: new Date(reservation.enteredDate)}
        console.log (`the date of your reservation is ${newdata.date}`)
    }

  return (
    <div>
      <form action="POST" onSubmit={submitHandler}>
                <h1>RESERVE A TABLE</h1>
                <label htmlFor="date">DATE: <input type="date" name="date" id="date" onChange={dateChange}/>
                </label>
                <label htmlFor="time">TIME: <select name="time" id="" onChange={updateTimes}>
                    {props.name.map((times)=>{
                        return <option value="">{times}</option>
                    })}
                    </select></label>
                    <label for="guests">Number of guests
                        <input type="number" placeholder="1" min="1" max="10" id="guests"/>
                    </label>
                <select name="ocassion" id="" placeholder='OCASSION'>
                    <option value="">Anniversary</option>
                    <option value="">Birthday</option>
                    <option value="">Engagement</option>
                </select>
            <button><Link to='/reservations/customer-details' className=''>BOOK</Link></button>
            </form>
    </div>
  )
}

export default BookingForm
