
import React, { useState } from 'react';


function ItemCount() {

    const [count, setcount] = useState(0);

    const increment = () => {

        setcount(count + 1);
    }

    const resta = () => {

        setcount(count - 1);
    }

    return (
        <>
            <div className="divcountgral">
                <div>
                    <p className="pcountcarrito">Añadir al carrito</p>
        
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