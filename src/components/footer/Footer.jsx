import React from 'react'
import './footer.css'
import {FaLinkedinIn, FaInstagram, FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>MATHEUS RAIMUNDO</a>
      <ul className='permalinks'>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/matheusraimundo/"><FaLinkedinIn/></a>
        <a href="https://www.instagram.com/mhi.mundo/"><FaInstagram/></a>
        <a href="https://www.facebook.com/matheus.raimundo.378"><BsFacebook/></a>
        <a href="https://github.com/Mathiore"><FaGithub/></a>
      </div>
    </footer>
  )
}

export default Footer