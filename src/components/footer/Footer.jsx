import React from 'react'
import "./footer.css"
import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <section id='footer'>
      <div className='links__container'>
        <a href="#">Home</a>
        <a href="#about">Sobre</a>
        <a href="#experience">Habilidades</a>
        <a href="#portifolio">Projetos</a>
        <a href="#contact">Contatos</a>
      </div>
      <div className='socials__container'>
        <article className='socials__links'>
          <a href="http://" name='github'><AiFillGithub size={64} /><h3 className='socials_label'>Github</h3></a>
        </article>
        <article className='socials__links'>
          <a href="http://" name='linkedin'><AiFillLinkedin size={64} /><h3 className='socials_label'>Linkedin</h3></a>
        </article>
        <article className='socials__links'>
          <a href="http://" name='instagram'><AiFillInstagram size={64} /><h3 className='socials_label'>Instagram</h3></a>
        </article>
      </div>
      <div className='about__container'>
        <h5>Site publicado - 2022 - React JS</h5>
        <h5>Marcos Paulo Muniz Cardoso</h5>
      </div>
    </section>
  )
}

export default Footer