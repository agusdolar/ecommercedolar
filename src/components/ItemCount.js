
import React, { useState } from 'react';


function ItemCount(props) {

    const [count, setcount] = useState(0);

    const increment = () => {
     if (count < props.max) setcount(count + 1);
    }

    const resta = () => {

       if (count > 1 ) setcount(count - 1);
    }

    const agregar = () => {
    console.log("Se agrego al carrito", count, "productos")
    }

    return (
        <>
            <div className="divcountgral">
                <div>
                    <button onClick={agregar} className="btncount">Añadir al carrito</button>
        
                </div>
                <div className="divcount">
                    <button className="btncount" onClick={resta} >-</button> <div> <p className="pcount"> {count}</p> </div> <button className="btncount"  onClick={increment}>+</button>
                </div>
                <div className="divcount">
                <img className="carrito" src="https://cdn-icons-png.flaticon.com/128/3523/3523887.png" alt="imagen de carrito" />
                </div>

            </div>
        </>
    );
}


export default ItemCount;