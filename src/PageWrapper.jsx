export default function PageWrapper(props){
    return(
        <div>
            <h1>Peliculas</h1>
            {props.children}
        </div>
    )
}