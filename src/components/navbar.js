function Navbar() {
    return (
        
            <nav className="navbar navbar-dark bg-dark">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Quienes somos</a>
                    </li>
                      
                </ul>
            </nav>
        
    );
}

export default Navbar;