import React from 'react';

const Banner = () => {
  return (
    <section className="banner">
      <h2>Bem-vindo ao nosso site de Psiquiatria</h2>
      <p>Oferecemos serviços especializados para ajudar no tratamento de doenças mentais.</p>
      <button>Agende uma consulta</button>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </section>
  );
};

export default Banner;
