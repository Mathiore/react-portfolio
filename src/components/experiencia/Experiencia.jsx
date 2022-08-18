import React from 'react'
import './experiencia.css'
import {HiBadgeCheck} from 'react-icons/hi'

const Experiencia = () => {
  return (
    <section id="experiencia">
      <h5>Minhas Habilidades</h5>
      <h2>Conhecimentos</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Desenvolvimento Front-End</h3>
          <div className="experience_content">
            <article className="experience_details">
            <HiBadgeCheck className='experience_details-icon'/>
            <div>
              <h4>HTML</h4>
              <small>Experiente</small>
            </div>
            </article>
            <article className="experience_details">
            <HiBadgeCheck className='experience_details-icon'/>
            <div>
              <h4>CSS</h4>
              <small>Experiente</small>
            </div>
            </article>
            <article className="experience_details">
            <HiBadgeCheck className='experience_details-icon'/>
            <div>
              <h4>JavaScript</h4>
              <small>Intermediário</small>
            </div>
            </article>
            <article className="experience_details">
            <HiBadgeCheck className='experience_details-icon'/>
            <div>
              <h4>Bootstrap</h4>
              <small>Experiente</small>
            </div>
            </article>
            <article className="experience_details">
            <HiBadgeCheck className='experience_details-icon'/>
            <div>
              <h4>React</h4>
              <small>Intermediário</small>
            </div>
            </article>
            <article className="experience_details">
            <HiBadgeCheck className='experience_details-icon'/>
            <div>
              <h4>VueJS</h4>
              <small>Básico</small>
            </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Desenvolvimento Back-End</h3>
          <div className="experience_content">
          <article className="experience_details">
            <HiBadgeCheck className='experience_details-icon'/>
            <div>
              <h4>NodeJs</h4>
              <small>Intermediário</small>
            </div>
            </article>
            <article className="experience_details">
            <HiBadgeCheck className='experience_details-icon'/>
            <div>
              <h4>MongoDB</h4>
              <small>Básico</small>
            </div>
            </article>
            <article className="experience_details">
            <HiBadgeCheck className='experience_details-icon'/>
            <div>
              <h4>PHP</h4>
              <small>Básico</small>
            </div>
            </article>
            <article className="experience_details">
            <HiBadgeCheck className='experience_details-icon'/>
            <div>
              <h4>MySQL</h4>
              <small>Básico</small>
            </div>
            </article>
            <article className="experience_details">
            <HiBadgeCheck className='experience_details-icon'/>
            <div>
              <h4>Python</h4>
              <small>Intermediário</small>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section> 
  )
}

export default Experiencia