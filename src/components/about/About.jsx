import React from 'react'
import "./about.css"
import ME from '../../assets/me.png'
import {GiDiploma} from 'react-icons/gi'
import {CgFolder} from 'react-icons/cg'

const About = () => {
  return (
    <section id='about'>
      <h5>Conhecer</h5>
      <h2>Sobre Mim</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="Imagem Sobre" />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <GiDiploma className='about__icon' size={48} />
              <h3>Concluido</h3>
              <h5>ETEC Polivalente Americana</h5>
              <small>Tecnico de Desenvolvimento de Sistemas</small>
            </article>
            <article className='about__card'>
              <GiDiploma className='about__icon' size={48} />
              <h3>Cursando</h3>
              <h5>FATEC Americana</h5>
              <small>Analise e desenvolvimento de Sistemas</small>
            </article>            
            <article className='about__card'>
              <CgFolder className='about__icon' size={48} />
              <h3>Projetos</h3>
              <h5>Github</h5>
              <small>Mais de 10 projetos</small>
            </article>
          </div>

          <p>
            Atualmente estudante da FATEC Americana cursando Analise e Desenvolvimento de sistemas, tenho formação tecnica em desenvolvimento de sistemas. Tenho alguns projetos publicados no Github além de projetos online como este!
          </p>

          <a href="#contact" className='btn btn-primary'>Fale Comigo!</a>
        </div>
      </div>
    </section>
  )
}

export default About