function Productodestacado(props) {
    return (
        <>
            <h3>{props.nombre}</h3>
            <div>{props.que} </div>
            <div>Autor: {props.autor} </div>
        </>
    );
}

export default Productodestacado;