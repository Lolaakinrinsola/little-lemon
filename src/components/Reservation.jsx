import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import {Link} from "react-router-dom";
import './reservation.scss'
const Reservation = () => {
  return (
    <div>
      <Nav/>
        <div>
            <form action="POST">
                <h1>RESERVE A TABLE</h1>
                <input type="date" name="" id="" />
                <input type="datetime" name="" id="" />
                <select name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                </select>
                <select name="ocassion" id="" placeholder='OCASSION'>
                    <option value="">Anniversary</option>
                    <option value="">Birthday</option>
                    <option value="">Engagement</option>
                </select>
            <button><Link to='/reservations/customer-details' className=''>BOOK</Link></button>
            </form>
        </div>
      <Footer/>
    </div>
  )
}

export default Reservation
