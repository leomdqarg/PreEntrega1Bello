import { Link } from 'react-router-dom';
import logo from './logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css'

const NavBar = (params) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">

                <Link className="navbar-brand" to='/'>
                    <img alt="logo" src={logo} />
                    La Tiendita
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><Link className="nav-link" to='/nosotros'>Nosotros</Link></li>
                        <li className="nav-item"><Link className="nav-link" to='/lo-mas-vendido'>Lo mas vendido</Link></li>
                        <li className="nav-item"><Link className="nav-link" to='/ofertas'>Ofertas</Link></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Comprar</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/">Todos los productos</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/">Pantalones</a></li>
                                <li><a className="dropdown-item" href="/">Remeras</a></li>
                                <li><a className="dropdown-item" href="/">Gorros</a></li>
                                <li><a className="dropdown-item" href="/">Medias</a></li>
                            </ul>
                        </li>
                    </ul>
                    {false ? <CartWidget /> : 'Sin cartWidget'}
                </div>
            </div>
        </nav>
    );
  }

export default NavBar;

