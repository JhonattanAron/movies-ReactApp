export default function Pelicula(props){
    return (
        <div className="card">
            <h1>
                {props.titulo}
            </h1><span>2021</span>
            <p>
               {props.children}
            </p>
            <h3>Calificacion</h3>
            <span>
                {
                    props.calificacion
                }
            </span>
            <h3>2023</h3>
        </div>
    )
}