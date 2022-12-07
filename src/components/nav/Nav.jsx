/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css'
import {GoHome} from 'react-icons/go'
import {SlUser} from 'react-icons/sl'
import {BiBook} from 'react-icons/bi'
import {MdWorkOutline} from 'react-icons/md' 
import {HiOutlineMail} from 'react-icons/hi'
import {useState} from 'react'
 
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav("#")} className= {activeNav === '#' ? 'active' : ''}><GoHome/></a>
      <a href="#about" onClick={()=> setActiveNav("#about")} className= {activeNav === '#about' ? 'active' : ''}><SlUser/></a>
      <a href="#experience" onClick={()=> setActiveNav("#experience")} className= {activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#portfolio" onClick={()=> setActiveNav("#portfolio")} className= {activeNav === '#portfolio' ? 'active' : ''}><MdWorkOutline/></a>
      <a href="#contact" onClick={()=> setActiveNav("#contact")} className= {activeNav === '#contact' ? 'active' : ''}><HiOutlineMail/></a>
    </nav>
  )
}

export default Nav