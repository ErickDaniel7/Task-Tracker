import React, { useState } from 'react';
import './TaskComponent.css';

function TaskComponent() {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({title, status});
    // Lógica para enviar os dados ao backend
  };

  return (
    <div className="form-container">
      <h2>Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={ title } onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <input type="text" id="status" value={ status } onChange={(e) => setStatus(e.target.value)} required />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default TaskComponent;
