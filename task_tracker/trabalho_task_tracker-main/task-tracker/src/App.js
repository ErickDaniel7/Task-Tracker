import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginComponent from './components/LoginComponent';
import CadastrarHabitoComponent from './components/CadastrarHabitoComponent';
import CadastrarTaskComponent from './components/CadastrarTaskComponent';
import CadastroUsuarioComponent from './components/CadastroUsuarioComponent';
import HabitoComponent from './components/HabitoComponent';
import TaskComponent from './components/TaskComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<h1>Bem-vindo ao Task Tracker</h1>} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/cadastrar-habito" element={<CadastrarHabitoComponent />} />
          <Route path="/cadastrar-task" element={<CadastrarTaskComponent />} />
          <Route path="/cadastro-usuario" element={<CadastroUsuarioComponent />} />
          <Route path="/habito" element={<HabitoComponent />} />
          <Route path="/task" element={<TaskComponent />} />
          {/* Outras rotas serão adicionadas aqui conforme os componentes forem migrados */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
