//En este caso no lo estamos utilizando a este achivo
export const saveGameToStorage = ({ board, turn}) => {
    // guardar aqui partida
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
  }
  
  export const resetGameStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }