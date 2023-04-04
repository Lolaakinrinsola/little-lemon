import React from 'react'
import './footer.scss';
import footer from '../image/footer.png'
const Footer = () => {
  return (
    <footer className='p-[2em] gap-[4em] md:px-[7em] md:py-[5em]'>
        <img src={footer} alt="" className='rounded-[16px]'/>
        <ul>
            <li>Navigation</li>
            <li>Home</li>
            <li>Reservations</li>
            <li>Book</li>
        </ul>
        <ul>
            <li>Contact</li>
            <li>instagram</li>
            <li>facebook</li>
            <li>LinkedIn</li>
        </ul>
        <ul>
            <li>Contact</li>
            <li>meals</li>
            <li>menu</li>
            <li>yamm</li>
        </ul>
    </footer>
  )
}

export default Footer
