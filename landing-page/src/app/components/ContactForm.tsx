'use client'
import React, { useState } from 'react';

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
      const response = await fetch('http://localhost:8000/api/contactform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:8000/',
          'Access-Control-Allow-Headers': '*'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data: ContactData = await response.json();
        setSubmittedData(data);
        setError('');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Erro ao enviar mensagem.');
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setError('Erro ao enviar mensagem. Verifique sua conexão.');
    }
  };

  if (submittedData) {
    return (
      <div>
        <h2>Dados Enviados com Sucesso:</h2>
        <p>Nome: {submittedData.name}</p>
        <p>Email: {submittedData.email}</p>
        <p>Mensagem: {submittedData.message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} method='POST'>
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
  );
};

export default ContactForm;
