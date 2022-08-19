import React from 'react'
import './portfolio.css'

//posteriormente será substituido por um const data utilizando função map.

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Meus Projetos Recentes</h5>
      <h2>Portfólio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <h3>EM BREVE</h3>
          </div>
          <h3>Titulo</h3>
          <a href="#" className='btn btn-portfolio'>Github</a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <h3>EM BREVE</h3>
          </div>
          <h3>Titulo</h3>
          <a href="#" className='btn btn-portfolio'>Github</a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <h3>EM BREVE</h3>
          </div>
          <h3>Titulo</h3>
          <a href="#" className='btn btn-portfolio'>Github</a>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio
