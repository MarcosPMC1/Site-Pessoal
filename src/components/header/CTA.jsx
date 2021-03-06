import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Baixar CV</a>
        <a href='#contact' className='btn btn-primary'>Entre em Contato!</a>
    </div>
  )
}

export default CTA