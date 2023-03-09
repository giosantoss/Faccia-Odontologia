import React from 'react'
import './header.css'
import Lfaccia from '../../assets/lfaccia.png'
import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlineLocationOn} from 'react-icons/md'
import {MdOutlineContactSupport} from 'react-icons/md'
import {useState} from 'react'
import {IoMdCloseCircleOutline} from 'react-icons/io'
import Button from './Button'
import {MdMenuOpen} from 'react-icons/md'


const Header = () => {
  const [activeNav, setActiveNav] = useState('#home')
  const [navStyle, setNavStyle] = useState({ display: 'flex' });

  function closeMenu() {
    setNavStyle({ animation: 'closeMenu 500ms ease-out forwards' });
  }

  function showMenu() {
    setNavStyle({ animation: 'showMenu 500ms ease-out forwards' });
  }
  
  // Armazena as seções em uma variável global
const sections = document.querySelectorAll('.section');

// Atualiza as informações das seções sempre que a janela for redimensionada
function updateSectionInfo() {
  sectionInfo.clear();
  sections.forEach(section => {
    sectionInfo.set(section.id, {
      top: section.offsetTop,
      height: section.clientHeight
    });
  });
}

// Armazena as informações das seções em um mapa global
const sectionInfo = new Map();
updateSectionInfo();

// Cria um mapa de links para seções
const linkToSection = new Map();
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  const sectionId = link.hash.slice(1);
  linkToSection.set(sectionId, link);
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  let activeLink = null;

  // Verifica cada seção para ver se está visível
  sectionInfo.forEach((info, sectionId) => {
    if (scrollPosition >= info.top - info.height / 3 && scrollPosition < info.top + info.height - info.height / 3) {
      activeLink = linkToSection.get(sectionId);
    }
  });

  // Adiciona a classe "active" apenas se o link ainda não a tiver
  navLinks.forEach(link => {
    if (link === activeLink) {
      if (!link.classList.contains('active')) {
        link.classList.add('active');
      }
    } else {
      link.classList.remove('active');
    }
  });
});

// Atualiza as informações das seções sempre que a janela for redimensionada
window.addEventListener('resize', () => {
  updateSectionInfo();
});


  return (
    <header>
      
      <a href='#home' className="logo"><img src={Lfaccia} alt=""/></a>

      <nav className='navmenu' style={navStyle}>

        <div className="close-btn">
          <Button onClick={closeMenu}>
            <IoMdCloseCircleOutline/>
          </Button>
        </div>

        <a href="#home" className="nav-link">
          <div onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome/><span> Início</span> </div>
        </a>

        <a href="#location" className="nav-link">
          <div onClick={() => setActiveNav('#location')} className={activeNav === '#location' ? 'active' : ''}><MdOutlineLocationOn/><span>Localização</span></div>
        </a>

        <a href="#about" className="nav-link">
          <div onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><MdOutlineContactSupport/><span>Sobre Nós</span></div>
        </a>

        
      </nav>

      <div className='menu-btn'>
          <Button onClick={showMenu}>
            <div className="menu-burger"></div>
            <MdMenuOpen/>
          </Button>
      </div>

      
    </header>
    
  )
}

export default Header