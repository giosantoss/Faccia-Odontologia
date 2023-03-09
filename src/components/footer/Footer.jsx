import React from 'react'
import './footer.css'
import {TbMessageDots} from 'react-icons/tb'
import {MdOutlineLocationOn} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'

const Footer = () => {
  return (
    <div id="footer">
      <div className="contact">
        <h2> <span><TbMessageDots/></span> Fale Conosco</h2>
        <ul>
          <li> <a href="https://api.whatsapp.com/send?phone=5583991035666&text=" target={'_blank'} ><span><BsWhatsapp/></span>99103-5666</a></li>
          <li> <a href="https://www.instagram.com/facciaodontologiajp/" target={'_blank'}><span><BsInstagram/></span>@facciaodontologiajp</a></li>
          <li> <a href=""><span><FiMail/></span> E-mail</a></li>
        </ul>
      </div>
      <div className="endereco">
        <h2> <span><MdOutlineLocationOn/></span> Nosso Endereço</h2>
        <div className="adress">Av João Cirilo da silva, <br /> 221, Emp. Altiplex José Olimpio, <br /> Sala 1602 - 16º andar, <br /> João Pessoa - PB, 58046-005</div>
      </div>
    </div>
  )
}

export default Footer