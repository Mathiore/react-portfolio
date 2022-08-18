import React from 'react'
import './services.css'
import {BsCheckAll} from 'react-icons/bs'

const Services = () => {
  return (
    <section id="services">
      <h5>Oque Ofereço</h5>
      <h2>Serviços</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheckAll className='service_icon'/>
              <p>Design de interface pensando no usuário </p>
            </li>
            <li>
              <BsCheckAll className='service_icon'/>
              <p>Lorem ipsum dolor sit amet imperium consectur delas notches</p>
            </li>
            <li>
              <BsCheckAll className='service_icon'/>
              <p>Lorem ipsum dolor sit amet imperium consectur delas notches</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Desenvolvimento Web</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheckAll className='service_icon'/>
              <p>Criação de sites utilizando frameworks</p>
            </li>
            <li>
              <BsCheckAll className='service_icon'/>
              <p>Desenvolvimento de sites utilizando ferramentas NoCode</p>
            </li>
            <li>
              <BsCheckAll className='service_icon'/>
              <p>Otimização e aperfeiçoamento do projeto</p>
            </li>
            <li>
              <BsCheckAll className='service_icon'/>
              <p>Design responsivo para diferentes dispositivos</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Artes Gráficas</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheckAll className='service_icon'/>
              <p>Processo Criativo</p>
            </li>
            <li>
              <BsCheckAll className='service_icon'/>
              <p>Soluções para comunicação visual</p>
            </li>
            <li>
              <BsCheckAll className='service_icon'/>
              <p>Criação de logotipos</p>
            </li>
            <li>
              <BsCheckAll className='service_icon'/>
              <p>Criação de identidade visual</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services