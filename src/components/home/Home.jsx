import React from 'react'
import './home.css'
import {BsWhatsapp} from 'react-icons/bs'
import Imagem1 from '../../assets/imagem1.jpg'
import Imagem2 from '../../assets/imagem2.jpg'
import Imagem3 from '../../assets/imagem3.jpg'
import Imagem4 from '../../assets/imagem4.jpg'
import Imagem5 from '../../assets/imagem5.jpg'

const Home = () => {

  return (
    <section className='section' id='home'>
        <div className="homeinfo">

        <h1>Bem-vindo à Faccia Odontologia</h1>
        <br />
        <p>Uma clínica com estrutura moderna e aconchegante, equipada com a mais alta tecnologia e seguindo os mais rigorosos protocolos de segurança e higiene.</p>
        <br />
        <p>Localizada no charmoso bairro do Altiplano em João Pessoa, a Faccia Odontologia é um espaço avançado que oferece serviços de qualidade para a saúde bucal. Com uma incrível vista panorâmica do mar de Cabo Branco, a Faccia espera a sua visita no 16º andar do Altiplex José Olímpio.</p>
        <br />
            
            
        </div>

        <div className="right-side">
          {/*<div className="carousel">
              {/*<img src="https://pr0.nicelocal.br.com/mfjCxisVXAB3NAlDVtPPnA/1120x700,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2Syx1kZnfvBqgmDxsKErNxbZUS7P5SO9H5XmpdQ9x9QGd3tRhbH1Or0I1j7cBHGlww" alt="" />

          </div>*/}

          <div className="carousel">
            <div className="slide">
              <img src={Imagem1} alt=""/>
            
              <img src={Imagem2} alt=""/>
            
              <img src={Imagem3} alt=""/>

              <img src={Imagem4} alt=""/>

              <img src={Imagem5} alt=""/>
            </div>
          </div>

          <p>Agende agora mesmo sua avaliação e descubra como podemos transformar seu sorriso em uma obra-prima!</p>

          <a href="https://api.whatsapp.com/send?phone=5583991035666&text=" target="_blank" rel="noreferrer"><BsWhatsapp/><span>Agendar Consulta</span></a>
        </div>

        
    </section>
  )
}

export default Home