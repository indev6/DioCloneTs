// eslint-disable-next-line no-unused-vars
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Home } from './pages/home';
import { GlobalStyle } from './styles/global';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login';
import { Feed } from './pages/feed';
import { Teste } from './pages';
import { Cadastro } from './pages/cadastro';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/teste" element={<Teste />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);