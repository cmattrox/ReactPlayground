import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact';
import Error from './components/error';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} exact/>
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route component={Error} />
      </Routes>
    </main>
  )
}

export default App;
