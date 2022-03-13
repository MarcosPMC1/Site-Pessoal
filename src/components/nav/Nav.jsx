import React from 'react'
import "./nav.css"
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsJournalCode} from 'react-icons/bs'
import {MdOutlineHandyman} from 'react-icons/md'
import {BiMessageDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header')
  return (
    <nav>
      <a href='#header' onClick={() => setActiveNav('#header')} className={activeNav === '#hearder' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsJournalCode /></a>
      <a href='#portifolio' onClick={() => setActiveNav('#portifolio')} className={activeNav === '#portifolio' ? 'active' : ''}><MdOutlineHandyman /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail /></a>
    </nav>
  )
}

export default Nav