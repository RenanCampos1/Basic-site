import React from 'react';

const Services = () => {
  return (
    <section className="services">
      <h2>Nossos Serviços</h2>
      <div className="service">
        <h3>Sessões de Terapia Individual</h3>
        <p>Oferecemos sessões de terapia individual personalizadas para tratar uma variedade de condições mentais.</p>
      </div>
      <div className="service">
        <h3>Aconselhamento Familiar</h3>
        <p>Realizamos aconselhamento familiar para ajudar a resolver conflitos e melhorar a dinâmica familiar.</p>
      </div>
      <div className="service">
        <h3>Tratamento de Transtornos Psiquiátricos</h3>
        <p>Dispomos de uma equipe especializada no tratamento de transtornos psiquiátricos, como depressão, ansiedade e transtorno bipolar.</p>
      </div>
      <button>Agende uma consulta</button>
    </section>
    
  );
};

export default Services;
