import React, { useState } from 'react';
import './CadastrarTaskComponent.css';

function CadastrarTaskComponent() {
  const [taskName, setTaskname] = useState('');
  const [dueDate, setDuedate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({taskName, dueDate});
    // Lógica para enviar os dados ao backend
  };

  return (
    <div className="form-container">
      <h2>Cadastrar Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="taskName">Taskname:</label>
          <input type="text" id="taskName" value={ taskName } onChange={(e) => setTaskname(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Duedate:</label>
          <input type="text" id="dueDate" value={ dueDate } onChange={(e) => setDuedate(e.target.value)} required />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default CadastrarTaskComponent;
