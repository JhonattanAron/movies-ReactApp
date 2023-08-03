import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MostrarPeliculas from './views/MostrarPeliculas';
import Blog from './views/Blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MostrarPeliculas />} />
        <Route path='/blog' element={<Blog />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

