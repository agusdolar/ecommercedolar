import { Link } from "react-router-dom";

function Navbar() {
    return (
        
            <nav className="navbar navbar-dark bg-dark">
                <ul className="nav nav-tabs">
                   
                   
                       
                    <li className="nav-item"><Link to='/Home'>
                       <a className="nav-link active" aria-current="page" href="Inicio">Inicio</a>
                       </Link>
                    </li>
                  
                    <li className="nav-item"><Link to='/productos'>
                        <a className="nav-link" href="Productos">Productos</a>
                        </Link>
                    </li>

                    <li className="nav-item"><Link to='/productosdestacados'>
                        <a className="nav-link" href="Productos">Productos Destacados</a>
                        </Link>
                    </li>
                   
                    <li className="nav-item"><Link to='/contacto'>
                        <a className="nav-link" href="Contacto">Contacto</a>
                        </Link>
                    </li>
                   
                    <li className="nav-item"><Link to='/quienesSomos'>
                        <a className="nav-link" href="Quienes somos">Quienes somos</a>
                        </Link>
                    </li>
                      
                </ul>
            </nav>
        
    );
}

export default Navbar;