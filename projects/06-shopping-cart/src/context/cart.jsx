import { createContext } from 'react'
import { useCartReducer } from '../hooks/useCartReducer'

// 1. Crear Contexto
export const CartContext = createContext()

// 2. Crear Provider
export function CartProvider ({ children }) {
  const { state, addToCart, clearCart, removeFromCart } = useCartReducer()
  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      clearCart,
      removeFromCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
