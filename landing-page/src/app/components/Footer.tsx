import React from 'react';
import ContactForm from './ContactForm';
import { FaFacebookSquare } from "react-icons/fa"
import { BsEnvelope, BsLinkedin, BsInstagram, BsYoutube, BsGithub, BsTwitterX, BsWhatsapp } from "react-icons/bs"
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="footer-column email">
        <div>
          <BsEnvelope /><span className='footer-section'>Email</span>
          <p><a href="mailto:email@example.com">
            empresa@email.com</a>
          </p>
        </div>
      </div>
      <div className='footer-column whatsapp'>
        <div>
          <BsWhatsapp />
          <span className='footer-section'> WhatsApp</span></div>
        <p>
          <a href="#">landing-page</a></p>
      </div>
      <div className="footer-column parcerias">
        Parcerias
        <a href="#">
        <p>Empresa 1</p>
        <p>Empresa 1</p>
        <p>Empresa 1</p>
        <p>Empresa 1</p>
        </a>
      </div>

      <div className="footer-column contato">
        <ContactForm />
      </div>
      <div className='footer-column social-media'>
        <Link href="https://facebook.com" target="_blank">
          <FaFacebookSquare />
        </Link >
        <Link href="https://twitter.com" target="_blank">
          <BsTwitterX />
        </Link >
        <Link href="https://github.com" target="_blank">
          <BsGithub />
        </Link >
        <Link href="https://www.linkedin.com" target="_blank">
          <BsLinkedin/>
        </Link >
        <Link href="https://www.youtube.com" target="_blank">
          <BsYoutube/>
        </Link >
      </div>
      <hr />
      Copyright
    </footer>

  );
};

export default Footer;
