import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
      <div className='header__socials'>
          <a href="https://www.linkedin.com/in/agus-baez/" target="_black" ><BsLinkedin/></a>
          <a href="https://github.com/AgusBaez" target="_black" ><BsGithub/></a>
          <a href="https://www.instagram.com/agustin_baez_developer/" target="_black" ><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials