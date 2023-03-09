import React, { useState } from 'react';
import './scroll.css'
import {IoIosArrowDown} from 'react-icons/io'
import {IoIosArrowUp} from 'react-icons/io'

function Scroll() {
  const secoes = ["home", "location", "about"];
  const [indexAtual, setIndexAtual] = useState(0);

  function botaoAnterior() {
    if (indexAtual > 0) {
      setIndexAtual(indexAtual - 1);
    }
  }

  function botaoProximo() {
    if (indexAtual < secoes.length - 1) {
      setIndexAtual(indexAtual + 1);
    }
  }

  function scrollToSection() {
    const secaoAtual = document.getElementById(secoes[indexAtual]);
    if (secaoAtual) {
      secaoAtual.scrollIntoView({ behavior: "smooth" });
    }
  }

  scrollToSection();

  return (
    <div className="scroll">
      <button className="prev" onClick={botaoAnterior}>
        <IoIosArrowUp/>
      </button>
      <button className="next" onClick={botaoProximo}>
        <IoIosArrowDown/>
      </button>
    </div>
  );
}

export default Scroll;