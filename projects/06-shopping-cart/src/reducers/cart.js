
export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

// Utilizando useReducer separamos 'la logica de actualizar el estado' en una funcion totalmente separada,
// --- Para el useReducer creo el ESTADO-INICIAL y el REDUCER ----------

export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

// Actuliza el LocalStorage con los estados de carrito
export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)

      // Si el prpducto esta en el carrito
      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        updateLocalStorage(newState)
        return newState
      }
      /* Otras formas de hacer esto:
       // 👀 (LA FORMA MAS LEGIBLE) usando structuredClone
      const newState = structuredClone(state)
      newState[productInCartIndex].quantity += 1

      // 👶(LA FORMA MAS FACIL) usando el map
       const newState = state.map(item => {
         if (item.id === id) {
           return {
             ...item,
             quantity: item.quantity + 1
           }
         }

         return item
       })

      // ⚡ (LA FORMA MAS RAPIDA, Y OPTIMA) usando el spread operator y slice
      const newState = [
        ...state.slice(0, productInCartIndex),
        { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
        ...state.slice(productInCartIndex + 1)
      ]
      */

      // Si el producto no esta en el carrito
      const newState = [
        ...state,
        {
          ...actionPayload, // producto
          quantity: 1
        }
      ]
      updateLocalStorage(newState)
      return newState
    }

    case CART_ACTION_TYPES.REMOVE_FROM_CART:{
      const { id } = actionPayload
      const newState = state.filter(item => item.id !== id)

      updateLocalStorage(newState)
      return newState
    }

    case CART_ACTION_TYPES.CLEAR_CART: {
      updateLocalStorage([])
      return []
      // return cartInitialState
    }
  }

  return state
}
/*  La ventaja de utilizar useReducer es que separamos 'la logica de actualizar estado', y esto nos facilita muchisimo la posibilidad e hacer test del estado.
    si utilisamos useState, esta logica esta dentro del componente y hacer test, y comprobar los estados cuesta mucho mas
    con el useState hay que renderizar el componente para testearlo, mientras que con el useReduce solo hay que llamar a la funcion
*/
// --------------------------------------------------------------
