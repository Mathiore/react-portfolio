import React, {useRef} from 'react'
import './contatos.css'
import {MdEmail} from 'react-icons/md'
import {RiWhatsappFill} from 'react-icons/ri'
import emailjs from 'emailjs-com'

const Contatos = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fu7qu8p', 'template_tsegnl4', form.current, '7AvgxC4lgDUam5g08')

    e.target.reset();
  };

  return (
    <section id="contatos">
      <h5>Fale Comigo</h5>
      <h2>Contatos</h2>

      <div className="container contato_container">
        <div className="contato_options">
          <article className="contato_option">
            <MdEmail className='option-icon'/>
            <h4>Email</h4>
            <h5>matheus.costa.raimundo@gmail.com</h5>
            <a href="mailto:matheus.costa.raimundo@gmail.com">Envie uma Mensagem</a>
          </article>
          <article className="contato_option">
            <RiWhatsappFill className='option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+55 (47) 99698-3207</h5>
            <a href="https://api.whatsapp.com/send?phone=47996983207" target="_blank">Envie uma Mensagem</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Nome' required />
          <input type="email" name='email' placeholder='Email' required/>
          <textarea name="message" rows="7" placeholder='Sua Mensagem' required></textarea>
          <button type='submit' className='btn btn-dark'>Envie</button>
        </form>
      </div>
    </section>
  )
}

export default Contatos