import React, { useState } from 'react'
import confetti from 'canvas-confetti'
import { TURNO, COMBO_GANADOR } from '../constantes.jsx'
import './Tablero.css'
import Cuadrado from './Cuadrado.jsx'
import IndicadorTurno from '../IndicadorTurno/IndicadorTurno.jsx'
import { chequearGanador } from '../../logica/Logica.js'
//import { saveGameToStorage, resetGameStorage } from '../../storage/storage.js'





export default function Tablero() {
    //const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null])
    //const [board, setBoard] = useState(Array(9).fill(null))     //Forma simplificada de la linea de arriba
    const [board, setBoard] = useState(() => {                     // Incialisar el tablero con lo del storage, y si es nul, inicialisarlo normalmente
        const boardFromLocalStorage = window.localStorage.getItem('board')
        return boardFromLocalStorage
            ? JSON.parse(boardFromLocalStorage)
            : Array(9).fill(null)
    })

    const [turn, setTurn] = useState(TURNO.X)
    /* ----------------------------------------  Otra forma de esrivir la forma de retornar el estado del storage
    const [turn, setTurn] = useState(() => {               
        const boardFromLocalStorage = window.localStorage.getItem('turn')
        if (boardFromLocalStorage) return JSON.parse(boardFromLocalStorage)
        return TURNO.X
    })

        const [turn, setTurn] = useState(() => {               
        const boardFromLocalStorage = window.localStorage.getItem('turn')
        return boardFromLocalStorage ?? TURNO.X
    })
    */


    const [ganador, setGanador] = useState(null)
    // null - no hay ganador (durante el juego)
    // false - hay empate
    // (X/Y) si hay ganador

    const updateBoard = (index) => {
        // Si la posicion en el tablero cuenta con un valor, no hacer nada
        // o si tenemos un ganador, fremanos el juego y devolvemos nada
        if (board[index] || ganador) return //(retorno nada)


        //Cambiar de TURNO
        const nuevoTurno = (turn === TURNO.X) ? TURNO.O : TURNO.X
        setTurn(nuevoTurno)

        //Actualizo el Tablero
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)

        //guardar partida en el LocalStorage
        window.localStorage.setItem('board', JSON.stringify(newBoard)) //Trasfoma el array en un string antes de guardarlo en el storage
        // window.localStorage.setItem('turn', JSON.stringify(nuevoTurno))

        /*
        // otra forma de guardar aqui partida extrayedo la logica en otro archivo
            saveGameToStorage({
                board: newBoard,
                turn: newTurn
            })
        
        
        */



        //revisar si hay un ganador
        const nuevoGanador = chequearGanador(newBoard)
        if (nuevoGanador) {
            confetti()
            setGanador(nuevoGanador)
        } else {                                        //si no tenemos ganador (empate), si a terminado el juego
            if (chequearGanador(newBoard)) {
                setGanador(false) //empate
            }
        }
    }

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        //setTurn(TURNO.X)
        setGanador(null)

        window.localStorage.removeItem('board')         //Rmovemos el valor del local storage
        // window.localStorage.removeItem('turn')
        /* otro forma de resetiar, extrayendo la logica en archivo externo
            resetGameStorage()
        */
    }

    return (
        <main>

            <section className='contenedor-tablero'>
                {board.map((square, i) => {
                    return (
                        <Cuadrado
                            key={`cuadrado-${i}`}
                            index={i}
                            actualizarTablero={updateBoard}
                        >
                            {square}
                        </Cuadrado>)
                })}
            </section>
            <section className='contenedor-turno'>
                <IndicadorTurno turnSelected={turn} />
            </section>
            <button onClick={resetGame} >Volver a Jugar</button>
            <section>
                {(ganador != null)
                    && <article>
                        GANADOR: {ganador}
                        <button onClick={resetGame} >Volver a Jugar</button>
                    </article>}
            </section>
        </main>
    )
}
