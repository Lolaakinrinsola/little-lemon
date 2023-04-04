import React, { useState } from 'react'
import './nav.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../image/Logo.svg';
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [open, setopen] = useState(false)
  const [cart, setcart] = useState(false)
  const navigate = useNavigate();

  return (
    <div id='navbar'>
      <div className='hidden md:flex items-center justify-between w-full px-[7em]'>
        <img src={logo} alt="" />
        <ul className='navlist'>
            <li className='hover:text-primary-20 cursor-pointer' onClick={()=> navigate('/')}>HOME</li>
            <li className='hover:text-primary-20 cursor-pointer'>ABOUT</li>
            <li className='hover:text-primary-20 cursor-pointer' onClick={()=> navigate('/reservations')}>RESERVATIONS</li>
            <li className='hover:text-primary-20 cursor-pointer'>MENU</li>
            <li className='hover:text-primary-20 cursor-pointer'>ORDER ONLINE</li>
            <li className='hover:text-primary-20 cursor-pointer'>LOGIN</li>
        </ul>
      </div>
      <div className='md:hidden flex w-full px-[2em] justify-between'>
        {!open?<GiHamburgerMenu size='1.5em' onClick={()=>setopen(!open)}/>:
        <div>
        <div className='absolute bg-highlight-10 top-0 left-0 h-full w-1/2  '>
          <AiOutlineClose size='3.5em' onClick={()=>setopen(!open)} className=' pt-[2em]'/>
          <ul className='grid gap-[3em] font-bold text-[1.2em] font-sans p-[2em]'>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>RESERVATIONS</li>
            <li>MENU</li>
            <li>ORDER ONLINE</li>
            <li>LOGIN</li>
        </ul>
        </div>

        </div>
        }
        
        <MdOutlineAddShoppingCart size='1.5em' onClick={()=>setopen(true)}/>
      </div>
    </div>
  )
}

export default Nav
