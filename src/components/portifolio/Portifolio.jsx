import React from 'react'
import "./portifolio.css"

const Portifolio = () => {
  return (
    <section id='portifolio'>
      <h5>Projetos</h5>
      <h2>Portifolio</h2>
      <div className='container portifolio__container'> 
        <article className='portifolio__item'>
          <div className='portifolio__item-image'>
            <img src='../../assets/portifolio.png' alt='Imagem Portifolio'  />
          </div>
          <h3>Projeto #1</h3>
          <div className='portifolio__links'>
            <a href="#header" className='btn' target='_blank'>Github</a>
            <a href="#header" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
        <article className='portifolio__item'>
          <div className='portifolio__item-image'>
            <img src='../../assets/portifolio.png' alt='Imagem Portifolio'  />
          </div>
          <h3>Projeto #2</h3>
          <div className='portifolio__links'>
            <a href="#header" className='btn' target='_blank'>Github</a>
            <a href="#header" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
        <article className='portifolio__item'>
          <div className='portifolio__item-image'>
            <img src='src/assets/portifolio.png' alt='Imagem Portifolio'  />
          </div>
          <h3>Projeto #3</h3>
          <div className='portifolio__links'>
            <a href="#header" className='btn' target='_blank'>Github</a>
            <a href="#header" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
        <article className='portifolio__item'>
          <div className='portifolio__item-image'>
            <img src='../../assets/portifolio.png' alt='Imagem Portifolio'  />
          </div>
          <h3>Projeto #3</h3>
          <div className='portifolio__links'>
            <a href="#header" className='btn' target='_blank'>Github</a>
            <a href="#header" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
        <article className='portifolio__item'>
          <div className='portifolio__item-image'>
            <img src='../../assets/portifolio.png' alt='Imagem Portifolio' />
          </div>
          <h3>Projeto #3</h3>
          <div className='portifolio__links'>
            <a href="#header" className='btn' target='_blank'>Github</a>
            <a href="#header" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
        <article className='portifolio__item'>
          <div className='portifolio__item-image'>
            <img src='../../assets/portifolio.png' alt='Imagem Portifolio' />
          </div>
          <h3>Projeto #3</h3>
          <div className='portifolio__links'>
            <a href="#header" className='btn' target='_blank'>Github</a>
            <a href="#header" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portifolio