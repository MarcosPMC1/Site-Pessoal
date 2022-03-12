import React from 'react'
import "./portifolio.css"
import IMG1 from '../../assets/portifolio.png'

const Portifolio = () => {
  return (
    <section id='portifolio'>
      <h5>Projetos</h5>
      <h2>Portifolio</h2>
      <div className='container portifolio__container'> 
        <article className='portifolio__item'>
          <div className='portifolio__item-image'>
            <img src={IMG1} />
          </div>
          <h3>Projeto #1</h3>
          <div className='portifolio__links'>
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
        <article className='portifolio__item'>
          <div className='portifolio__item-image'>
            <img src={IMG1} />
          </div>
          <h3>Projeto #2</h3>
          <div className='portifolio__links'>
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
        <article className='portifolio__item'>
          <div className='portifolio__item-image'>
            <img src={IMG1} />
          </div>
          <h3>Projeto #3</h3>
          <div className='portifolio__links'>
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
        <article className='portifolio__item'>
          <div className='portifolio__item-image'>
            <img src={IMG1} />
          </div>
          <h3>Projeto #3</h3>
          <div className='portifolio__links'>
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
        <article className='portifolio__item'>
          <div className='portifolio__item-image'>
            <img src={IMG1} />
          </div>
          <h3>Projeto #3</h3>
          <div className='portifolio__links'>
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
        <article className='portifolio__item'>
          <div className='portifolio__item-image'>
            <img src={IMG1} />
          </div>
          <h3>Projeto #3</h3>
          <div className='portifolio__links'>
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portifolio