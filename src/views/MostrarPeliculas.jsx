import '../App.css';
import Pelicula from './pelicula';
import { useEffect, useState } from 'react';
import { Pagination , Link } from '@mui/material';


function MostrarPeliculas() {
    const [paginaActual, setPaginaActual] = useState(1);
    const [peliculas, setPeliculas] = useState([]);
    const TOTAL_POR_PAGINA = 2;

    useEffect(() => {
        buscarPeliculas()
    }, [])

    const buscarPeliculas = async () => {
        let url = 'https://lucasmoy.dev/data/react/peliculas.json';
        let resultado = await fetch(url)
        let json = await resultado.json()
        setPeliculas(json)
    }

    const handlePaginaCambio = (event, numeroPagina) => {
        setPaginaActual(numeroPagina);
    };

    const cargarPeliculas = () => {
        const indiceInicio = (paginaActual - 1) * TOTAL_POR_PAGINA;
        const indiceFin = Math.min(indiceInicio + TOTAL_POR_PAGINA, peliculas.length);
        const peliculasPaginaActual = peliculas.slice(indiceInicio, indiceFin);
        return peliculasPaginaActual
    }
    const totalPaginas = () => Math.ceil(peliculas.length / TOTAL_POR_PAGINA);

    return (
        <>
        <Link className='link' href='/blog' underline='hover'>Blog</Link>
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

export default MostrarPeliculas;