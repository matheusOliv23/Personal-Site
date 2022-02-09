import React from 'react';
import { FormContainer, Input, TextArea } from './styles';

export default function Form() {
  return (
    <FormContainer>
      <Input placeholder="Nome" required />
      <Input placeholder="Email" type="email" required />
      <TextArea placeholder="Por favor, digite sua mensagem" required />
      <button type="submit">Enviar</button>
    </FormContainer>
  );
}
