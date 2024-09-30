import React, { useState } from 'react';
import './CadastrarHabitoComponent.css';

function CadastrarHabitoComponent() {
  const [habitoName, setHabitoname] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({habitoName, description});
    // Lógica para enviar os dados ao backend
  };

  return (
    <div className="form-container">
      <h2>Cadastrar Habito</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="habitoName">Habitoname:</label>
          <input type="text" id="habitoName" value={ habitoName } onChange={(e) => setHabitoname(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" value={ description } onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default CadastrarHabitoComponent;
