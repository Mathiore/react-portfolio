import React from 'react'
import './sobre.css'
import {FaAward, FaGraduationCap, FaUserCheck} from 'react-icons/fa'
import ANIMATION from '../../assets/anime.gif'

const Sobre = () => {
  return (
    <section id="sobre">
      <h5>Me Conheça</h5>
      <h2>Sobre Mim</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ANIMATION} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="card">
              <FaAward className='about_icon'/>
              <h5>Experiência</h5>
              <small>2 Anos de Trabalho</small>
            </article>
            <article className="card">
              <FaGraduationCap className='about_icon'/>
              <h5>Bacharel</h5>
              <small>Ciências da Computação</small>
            </article>
            <article className="card">
              <FaUserCheck className='about_icon'/>
              <h5>Qualidades</h5>
              <small>Comprometimento e Responsabilidade</small>
            </article>
          </div>

          <p>
            Olá, Sou um profissional de ciências da computação, muito interessado pela área de desenvolvimento web e todo o processo de criação
            de Front-End principalmente. Sempre procuro aprender sobre as novas tecnologias no mercado e no momento estou focado em ReactJS, tenho apenas alguns
            projetos feitos como Freelancer e principalmente projetos para estudos, porém tenho facilidade para aprender coisas novas e tecnologias diferentes.
          </p>

          <a href="#contatos" className='btn'>Converse Comigo</a>  
        </div>
      </div>

    </section>
  )
}

export default Sobre