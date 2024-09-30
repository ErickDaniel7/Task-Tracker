import React, { useState } from 'react';
import './LoginComponent.css';
import { loginService } from '../services/loginService';

function LoginComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginService(username, password);
      if (response.success) {
        // Redirecionar para a página principal após login bem-sucedido
        window.location.href = '/';
      } else {
        setErrorMessage('Credenciais inválidas, tente novamente.');
      }
    } catch (error) {
      setErrorMessage('Erro ao tentar fazer login. Por favor, tente mais tarde.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginComponent;
