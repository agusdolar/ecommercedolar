function Item ({item}) {
    return (
        <>
            <h3>{item.titulo}</h3>
            <div>{item.que} </div>
            <div>Autor: {item.autor} </div>
            <div>{item.pictureurl}</div>
            <p>{item.precio}</p>
        </>
    );
}

export default Item; 