import React from 'react'
import './footer.css'
import {TfiEmail} from 'react-icons/tfi'
import {TfiInstagram} from 'react-icons/tfi'
import {BsLinkedin} from 'react-icons/bs'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'><h1>Agustin</h1></a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="mailto:agustinbaezignacio@gmail.com"><TfiEmail/></a>
        <a href="https://www.instagram.com/agustin_baez_developer/"><TfiInstagram/></a>
        <a href="https://www.linkedin.com/in/agus-baez/"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;BeCustom. All rights reserved.  </small>
      </div>
    </footer>
  )
}

export default Footer