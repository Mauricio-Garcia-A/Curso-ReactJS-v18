import React from 'react'
import './Tablero.css'

export default function Cuadrado({ index, children, actualizarTablero }) {
    const handleClick = () => {
        actualizarTablero(index)
    }

    return (
        <div className='contenedor-cuadado' onClick={handleClick}>
            {children}
        </div>
    )
}