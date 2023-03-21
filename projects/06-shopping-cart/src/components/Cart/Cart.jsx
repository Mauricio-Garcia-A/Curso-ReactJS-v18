import { useId } from 'react'
import { useCart } from '../../hooks/useCart'
import { CartIcon, ClearCartIcon } from '../Icons'
import './Cart.css'

function CartItem ({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - U$D {price}
      </div>
      <footer>
        <small>
          Cantidad: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export default function Cart () {
  const cartCheckboxId = useId()
  const { clearCart, cart, addToCart } = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <button
          onClick={clearCart}
          style={{ backgroundColor: 'red' }}
        >
          <ClearCartIcon />
        </button>
        <ul>
          {
            cart.map(product => {
              return (
                <CartItem
                  key={product.id}
                  addToCart={() => addToCart(product)}
                  thumbnail={product.thumbnail}
                  price={product.price}
                  title={product.title}
                  quantity={product.quantity}
                />
              )
            })
          }

        </ul>
      </aside>

    </>
  )
}
