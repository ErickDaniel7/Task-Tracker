import React, { useState } from 'react';
import './HabitoComponent.css';

function HabitoComponent() {
  const [name, setName] = useState('');
  const [progress, setProgress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({name, progress});
    // Lógica para enviar os dados ao backend
  };

  return (
    <div className="form-container">
      <h2>Habito</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={ name } onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="progress">Progress:</label>
          <input type="text" id="progress" value={ progress } onChange={(e) => setProgress(e.target.value)} required />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default HabitoComponent;
