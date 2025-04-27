import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand"><h1>Web Productos</h1></Link>
        <ul className="nav">
            <li className='nav-item'><Link className="nav-link" to="/">Inicio</Link></li>
            <li className='nav-item'><Link className="nav-link" to="/productos">Productos</Link></li>
            <li className='nav-item'><Link className="nav-link" to="/productos/medias">Medias</Link></li>
            <li className='nav-item'><Link className="nav-link" to="/productos/pantalones">Pantalones</Link></li>
            <li className='nav-item'><Link className="nav-link" to="/productos/remeras">Remeras</Link></li>
            <li className='nav-item'><Link className="nav-link" to="/productos/buzos">Buzos</Link></li>

        </ul>
        <CartWidget/>
    </nav>



)
}

export default Navbar