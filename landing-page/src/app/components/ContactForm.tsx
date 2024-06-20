'use client'
import React, { useState } from 'react';
import Modal from 'react-modal'
import axios from 'axios';

Modal.setAppElement('#__next');

interface ContactData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submittedData, setSubmittedData] = useState<ContactData | null>(null);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateName = (name: string) => {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(name);
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateName(name)) {
      setError('Nome deve conter apenas letras e espaços.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Email inválido.');
      return;
    }

    const formData: ContactData = {
      name,
      email,
      message,
    };

    try {
      const response = await axios.post('http://localhost:8000/api/contactform/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        setSubmittedData(response.data);
        setError('');
        setIsModalOpen(true); // Abre o modal
        // Limpa os campos do formulário
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setError(response.data.message || 'Erro ao enviar mensagem.');
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setError('Erro ao enviar mensagem. Verifique sua conexão.');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className='title'>Entre em Contato</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
<div className='modal'>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel='Formulário de contato'
      >
        <div>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Dados Enviados com Sucesso</h2>
            <p>Nome: {submittedData?.name}</p>
            <p>Email: {submittedData?.email}</p>
            <p>Mensagem: {submittedData?.message}</p>
        </div>
        </Modal>
        </div>
    </>
 
  );
};

export default ContactForm;

