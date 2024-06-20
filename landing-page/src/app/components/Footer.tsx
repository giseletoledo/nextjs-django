import React from 'react';
import ContactForm from './ContactForm';

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="footer-column">
        <a href="mailto:email@example.com">Email</a>
        <div>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
        </div>
      </div>
      <div className="footer-column">
        <a href="/partnership">Parcerias</a>
        {/* Outros links podem ser adicionados aqui */}
      </div>
      <div className="footer-column">
        <ContactForm />
      </div>
    </footer>
  );
};

export default Footer;
