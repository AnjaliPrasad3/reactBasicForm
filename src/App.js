import React from 'react';
import './App.css';
import Header from './components/Header';
import Registration from './components/Registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Registration />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
