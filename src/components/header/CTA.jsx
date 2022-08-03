import React from 'react'
import CV from '../../assets/matheus2022.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contatos" className='btn btn-dark'>Fale Comigo</a>
    </div>
  )
}

export default CTA