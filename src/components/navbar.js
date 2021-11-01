function Navbar() {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contacto</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Quienes somos</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;