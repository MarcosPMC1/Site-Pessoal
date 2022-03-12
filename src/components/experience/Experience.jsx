import React from 'react'
import "./experience.css"
import {AiFillHtml5} from 'react-icons/ai'
import {SiCss3} from 'react-icons/si'
import {DiJavascript1} from 'react-icons/di'
import {FaReact} from 'react-icons/fa'
import {SiPhp} from 'react-icons/si'
import {SiPython} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skils</h5>
      <h2>Habilidades</h2>
      <div className='container experience__container'>
        <div className='experience__cards'>
        <h3>Linguagens</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon' size={48} />
              <h4>HTML</h4>
            </article>
            <article className='experience__details'>
              <SiCss3 className='experience__details-icon' size={48} />
              <h4>CSS</h4>
            </article>
            <article className='experience__details'>
              <DiJavascript1 className='experience__details-icon' size={48} />
              <h4>JavaScript</h4>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details-icon' size={48} />
              <h4>React JS</h4>
            </article>
            <article className='experience__details'>
              <SiPhp className='experience__details-icon' size={48} />
              <h4>PHP</h4>
            </article>
            <article className='experience__details'>
              <SiPython className='experience__details-icon' size={48} />
              <h4>Python</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience