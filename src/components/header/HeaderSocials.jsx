import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/matheusraimundo/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Mathiore" target="_blank"><BsGithub/></a>
        <a href="https://www.instagram.com/mhi.mundo/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials