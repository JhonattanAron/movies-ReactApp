import './App.css';
import peliculasX from './peliculas.json';
import Pelicula from './pelicula';
import { useState } from 'react';
import { Pagination } from '@mui/material';

function App() {
  const [paginaActual, setPaginaActual] = useState(1);
  const TOTAL_POR_PAGINA = 2;

  let peliculas = peliculasX;

  const handlePaginaCambio = (event, numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  const cargarPeliculas = () =>{
    const indiceInicio = (paginaActual - 1) * TOTAL_POR_PAGINA;
    const indiceFin = Math.min(indiceInicio + TOTAL_POR_PAGINA, peliculas.length);
    const peliculasPaginaActual = peliculas.slice(indiceInicio, indiceFin);
    return peliculasPaginaActual
  }
  const totalPaginas = () => Math.ceil(peliculas.length / TOTAL_POR_PAGINA);

  return (
    <>
      <div className="page-wrapper">
        {cargarPeliculas().map((pelicula) => (
          <Pelicula
            key={pelicula.id}
            titulo={pelicula.titulo}
            calificacion={pelicula.calificacion}
          >
            {pelicula.descripcion}.
          </Pelicula>
        ))}
      </div>

      {/* Mostrar el componente Pagination de Material-UI */}
      <Pagination
        count={totalPaginas()}
        page={paginaActual}
        onChange={handlePaginaCambio}
      />
    </>
  );
}

export default App;

