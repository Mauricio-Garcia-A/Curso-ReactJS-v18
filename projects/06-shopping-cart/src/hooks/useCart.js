import { useContext } from 'react'
import { CartContext } from '../context/cart'

export const useCart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext)

  if (cart === undefined) {
    throw new Error('useCart debe usarse dentro de un CartProvider')
  }

  return { cart, addToCart, removeFromCart, clearCart }
}
