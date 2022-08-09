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
            <HiBadgeCheck/>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Desenvolvimento Back-End</h3>

        </div>
      </div>
    </section> 
  )
}

export default Experiencia