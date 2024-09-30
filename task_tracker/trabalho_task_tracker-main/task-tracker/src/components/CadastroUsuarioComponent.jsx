import React, { useState } from 'react';
import './CadastroUsuarioComponent.css';

function CadastroUsuarioComponent() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({username, email, password});
    // Lógica para enviar os dados ao backend
  };

  return (
    <div className="form-container">
      <h2>Cadastro Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={ username } onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" value={ email } onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" value={ password } onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default CadastroUsuarioComponent;
