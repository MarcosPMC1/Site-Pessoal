import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../assets/me.png'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I`m</h5>
        <h1>Marcos Cardoso</h1>
        <h5 className="text-light">Desenvolvedor Web</h5>
        <CTA />

        <div className='header__socials'>
          <article>
            <a href="https://www.linkedin.com/in/marcos-cardoso-1931161b0/"><AiOutlineLinkedin size={64} /></a>
            <label>Linkedin</label>
          </article>
          <article>
            <a href="https://github.com/MarcosPMC1"><AiOutlineGithub size={64} /></a>
            <label>Github</label>
          </article>
        </div>

        <div className='me'>
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  )
}

export default Header