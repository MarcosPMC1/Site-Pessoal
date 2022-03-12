import React from 'react'
import "./contact.css"
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Entre em contato</h5>
      <h2>Contatos</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>marcospmc@outlook.com</h5>
            <a href="mailto:marcospmc@outlook.com">Mandar mensagem!</a>
          </article>
          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>(19) 9 9976-5732</h5>
            <a href="https://api.whatsapp.com/send?phone=+5519999765732">Mandar mensagem!</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact