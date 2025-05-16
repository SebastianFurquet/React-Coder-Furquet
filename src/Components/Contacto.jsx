import React from 'react'

const Contacto = () => {
  return (
    <div className="container">
        <h1 className='main-title'>Contacto</h1>
        <form className='formulario' >
            <input type="text" placeholder='Ingresa tu nombre' />
            <input type="email" placeholder='Ingresa tu E-mail' />
            <button className='enviar' type="submit"> Enviar </button>
        </form>
    </div>
  )
}

export default Contacto