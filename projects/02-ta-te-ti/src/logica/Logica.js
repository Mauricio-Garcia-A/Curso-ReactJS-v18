import { COMBO_GANADOR } from "../componentes/constantes"


export const chequearGanador = (boardToCheck) => {
    // Se revisan todas la combinaciones ganadoras
    for (const combo of COMBO_GANADOR) {
        const [a, b, c] =combo

        if (
            boardToCheck[a] &&
            boardToCheck[a]===boardToCheck[b] &&
            boardToCheck[a]===boardToCheck[c] 
        ){
            return boardToCheck[a]
        }
    }

    //si no hay ganador todavia
    return null
}


export const chequearFinJuego =()=>{
    return newBoard.every(c=> c===null)
}