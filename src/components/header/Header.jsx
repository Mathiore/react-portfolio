import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/teste.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Olá, me chamo</h5>
        <h1>Matheus Raimundo</h1>
        <h5 className="text-dark">Desenvolvedor Web</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contatos" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
