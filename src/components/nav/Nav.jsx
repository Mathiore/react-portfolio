import React from 'react'
import './nav.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {FaUserCircle, FaKeyboard} from 'react-icons/fa'
import {ImBook} from 'react-icons/im'
import {BsFillChatLeftTextFill} from 'react-icons/bs'
import {useState} from 'react'


const Nav = () => {

  const[activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav ==='#' ? 'active' : ''}><AiTwotoneHome/></a>
      <a href="#sobre" onClick={()=> setActiveNav('#about')} className={activeNav ==='#about' ? 'active' : ''}><FaUserCircle/></a>
      <a href="#experiencia" onClick={()=> setActiveNav('#experiencia')} className={activeNav ==='#experiencia' ? 'active' : ''}><ImBook/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav ==='#services' ? 'active' : ''}><FaKeyboard/></a>
      <a href="#contatos" onClick={()=> setActiveNav('#contatos')} className={activeNav ==='#contatos' ? 'active' : ''}><BsFillChatLeftTextFill/></a>
    </nav>
  )
}

export default Nav