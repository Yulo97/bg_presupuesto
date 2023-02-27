function Navbar() {
    return (
        <nav className="navbar bg-dark" data-bs-theme="dark">
            <div className="container-fluid navbar-expand-lg">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Presupuestos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Clientes</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;