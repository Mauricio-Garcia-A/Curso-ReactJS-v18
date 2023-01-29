import React from 'react'
import { TURNO } from '../constantes'

export default function IndicadorTurno({turnSelected}) {
    const TurnoSeleccionado = ({children, isSelected}) => {
        return(
            <article className={isSelected ? 'turno-seleccionado':'turno-esperando'  }>
                {children}
            </article>
        )
    }

    return (
        <section className='contenedor-turno'>
            <TurnoSeleccionado isSelected={turnSelected === TURNO.X}>
                {TURNO.X}
            </TurnoSeleccionado>
            <TurnoSeleccionado isSelected={turnSelected === TURNO.O}>
                {TURNO.O}
            </TurnoSeleccionado>
        </section>
    )
}
