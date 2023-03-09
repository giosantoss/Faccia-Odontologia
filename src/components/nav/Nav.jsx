import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlineLocationOn} from 'react-icons/md'
import {MdOutlineContactSupport} from 'react-icons/md'

const Nav = () => {
  return (
    <nav>
      <a href="#Home"><AiOutlineHome/><span> Início</span> </a>
      <a href="#Location"><MdOutlineLocationOn/><span>Localização</span></a>
      <a href="#Location"><MdOutlineContactSupport/><span>Sobre Nós</span></a>
    </nav>
  )
}

export default Nav