import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home/Home';
import Tabela from './pages/Tabela/Tabela';
import Cadastro from './pages/Cadastro/Cadastro';
import Login from './pages/Login/login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="tabela" element={<Tabela />} />
          <Route path='cadastro' element={<Cadastro />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);