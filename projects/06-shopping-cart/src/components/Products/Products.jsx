import { useCart } from '../../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from '../Icons'
import './Products.css'

export default function Products ({ products }) {
  const { addToCart, cart, removeFromCart } = useCart()

  // Conprueba si el producto ya esta en carrito
  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {products
          .slice(0, 4) // Muestra solo 4 productos de la lista completa
          .map(product => {
            const isProductInCart = checkProductInCart(product)
            return (
              <li key={product.id}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                />
                <div>
                  <strong>{product.title}</strong> - ${product.price}

                </div>
                <div>
                  <button
                    style={{ backgroundColor: isProductInCart ? 'red' : 'blue' }}
                    onClick={() => {
                      isProductInCart
                        ? removeFromCart(product)
                        : addToCart(product)
                    }}
                  >
                    {isProductInCart
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />}
                  </button>

                </div>
              </li>
            )
          })}
      </ul>

    </main>
  )
}
