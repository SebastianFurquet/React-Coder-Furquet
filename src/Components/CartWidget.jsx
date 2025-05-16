import React, { useContext } from 'react'
import { Link,  } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {

    const{cantidadEnCarrito} = useContext(CartContext)

  return (
    <div className="text-white position-relative">

        <Link className="nav-link bi bi-cart4 fs-4" to="/carrito">
            🛒
            <span className="badge bg-danger position-absolute top-0 start-100 translate-middle"> {cantidadEnCarrito()} </span>
        </Link>

    </div>


/*     <div className="text-white position-relative">
    <i className="bi bi-cart4 fs-4"></i>
    <span className="badge bg-danger position-absolute top-0 start-100 translate-middle"> 3 </span>
    </div> */

    
  )
}

export default CartWidget