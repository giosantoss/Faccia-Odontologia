import React from 'react'
import './about.css'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'
import Doutor1 from '../../assets/doutor1.jpg'
import Doutor2 from '../../assets/doutor2.jpg'
import Doutor3 from '../../assets/doutor3.jpg'

const About = () => {
  return (
    
    <section className='section' id='about'>
      <h1>Sobre Nós</h1>
      <div className=" about-container">
        <div className="about-left">
          <div className="about">
            <img src={Doutor1} alt="" />
          </div>
          <ul>
            <li><a href="https://www.instagram.com/andreaugusto_/" rel="noreferrer" target={'_blank'}><span><BsInstagram/></span>@andreaugusto_</a></li>
          </ul>
        </div>
        <div className="about-content">
          <h1>Dr. André Augusto</h1>
          
          <p>Formado pelo Unipê em João Pessoa, o Dr. André Augusto possui vasta experiência na área, tendo atuado como cirurgião bucomaxilo de emergência no Hospital de Trauma Humberto Lucena, no Trauminha e no CEO da torre. Seu compromisso com a excelência na prestação de serviços de saúde é evidenciado pela dedicação que tem demonstrado em cada atendimento prestado.</p>

          <p>Com o objetivo de aprimorar ainda mais suas habilidades, o Dr. André Augusto especializou-se em implantodologia e próteses com essa técnica, o que o torna um profissional altamente qualificado e atualizado no mercado. Além disso, é nome de referência no Estado para traumas e emergências odontológicas, o que comprova a confiança que os pacientes depositam em seu trabalho.</p>

          <p>A dedicação e o comprometimento que o Dr. André Augusto dedica à em sua atuação, fazem dele um profissional excepcional e respeitado por toda a comunidade.</p>
          
          <div className="skills">
            <div className="about-cards">
              <article className='about-card bucomax'>
                <span className="material-symbols-outlined">
                  surgical
                </span>
                <h3>Cirurgia Bucomaxilofacial</h3>
              </article>
            </div>
            <div className="about-cards">
              <article className='about-card'>
                <span className="material-symbols-outlined">
                  dentistry
                </span>
                <h3>Implantodontia</h3>
              </article>
            </div>
          </div>
        </div>
      </div>
      <div className=" about-container">
        <div className="about-left">
          <div className="about">
            <img src={Doutor2} alt="" />
          </div>

          <ul>
            <li><a href="https://www.instagram.com/drmatheusmadruga/" rel="noreferrer" target={'_blank'}><span><BsInstagram/></span>@drmatheusmadruga</a></li>
          </ul>

          <ul>
          <li><a href="https://www.facebook.com/Drmatheusmadruga" rel="noreferrer" target={'_blank'}><span><FaFacebookSquare/></span>Facebook</a></li>
          </ul>
        </div>
        <div className="about-content">
          <h1>Dr. Matheus Madruga</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, expedita quia exercitationem laborum quis minus nisi maiores praesentium quam temporibus inventore dolores magnam cupiditate voluptas. Perspiciatis molestias inventore distinctio provident? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cum aspernatur doloribus sit quam tempore ullam ducimus soluta. Et culpa earum nulla veniam laudantium odio ipsum quas eligendi, debitis neque.</p>

          <div className="skills">
            <div className="about-cards">
              <article className='about-card'>
                <span className="material-symbols-outlined">
                  surgical
                </span>
                <h3>Reabilitação Oral</h3>
              </article>
            </div>
            <div className="about-cards">
              <article className='about-card'>
                <span className="material-symbols-outlined">
                  dentistry
                </span>
                <h3>Implantodontia</h3>
              </article>
            </div>
          </div>
        </div>
      </div>
      <div className=" about-container">
        <div className="about-left">
          <div className="about">
            <img src={Doutor3} alt="" />
          </div>

          <ul>
            <li><a href="https://www.instagram.com/marinacastrorocha/" rel="noreferrer" target={'_blank'}><span><BsInstagram/></span>@marinacastrorocha</a></li>
          </ul>
        </div>
        <div className="about-content">
          <h1>Dra. Marina Castro</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, expedita quia exercitationem laborum quis minus nisi maiores praesentium quam temporibus inventore dolores magnam cupiditate voluptas. Perspiciatis molestias inventore distinctio provident? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cum aspernatur doloribus sit quam tempore ullam ducimus soluta. Et culpa earum nulla veniam laudantium odio ipsum quas eligendi, debitis neque.</p>
          
          <div className="skills">
            <div className="about-cards">
              <article className='about-card'>
                <span className="material-symbols-outlined">
                  dentistry
                </span>
                <h3>Ortodontia</h3>
              </article>
            </div>
          </div>
        </div>
    
      </div>
    </section>
    
  )
}

export default About