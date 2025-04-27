import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

const CartWidget = () => {
return (
    <div className="text-white position-relative">
    <i className="bi bi-cart4 fs-4"></i>
    <span className="badge bg-danger position-absolute top-0 start-100 translate-middle"> 3 </span>
    </div>
)
}

export default CartWidget