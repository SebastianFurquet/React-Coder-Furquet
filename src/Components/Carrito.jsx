import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito()
    }

    return (
        <div className="container">
            <h1 className="main-title">Carrito</h1>

        {carrito.map((prod) => (
            <div key={prod.id} className="producto-detalle">
                <img src={prod.imagen} alt={prod.titulo} />
                <div>
                <h3 className="titulo">{prod.titulo}</h3>
                <p className="descripcion">{prod.descripcion}</p>
                <p className="categoria">Categoria: {prod.categoria}</p>
                <p className="precio">${prod.precio}</p>
                <p className="cantidad">Cantidad: {prod.cantidad}</p>
                <p className="subtotal">Subtotal: ${prod.precio * prod.cantidad}</p>

                </div>
            </div>
            ))
        }

        {
        carrito.length > 0 ? 
            <>
                <h2>Precio Total: $ {precioTotal()} </h2>   
                <button className="btn btn-danger" onClick={handleVaciar}>Vaciar Carrito</button>
            </> :
            <h2>El carrito esta vacio</h2>
        }



        </div>
    );
}

export default Carrito