function Navbar() {
    return (
        
            <nav className="navbar navbar-dark bg-dark">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="Inicio">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="Productos">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="Contacto">Contacto</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="Quienes somos">Quienes somos</a>
                    </li>
                      
                </ul>
            </nav>
        
    );
}

export default Navbar;