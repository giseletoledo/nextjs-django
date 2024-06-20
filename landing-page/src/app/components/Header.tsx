import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <h1>Minha Empresa</h1>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#items">Items</a></li>
          <li><a href="#cta">Call to Action</a></li>
          <li><a href="#footer">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;