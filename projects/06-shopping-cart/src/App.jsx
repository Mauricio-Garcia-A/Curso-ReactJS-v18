import { useState } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import useFlilters from './hooks/useFliters'
import { products as initialProducts } from './mocks/products.json'
import { IS_DEVELOPMENT } from './config.js'
import Cart from './components/Cart/Cart'
import { CartProvider } from './context/cart'

function App () {
  const [products] = useState(initialProducts)

  const { filterProducts } = useFlilters({ products })

  const filteredProducts = filterProducts(products)

  return (
    <>
      <CartProvider>
        <Cart />
        <Header />
        <Products products={filteredProducts} />
        {
        // El futer solo se muestra en Desarrollo (no en produccion)
          IS_DEVELOPMENT && <Footer />
        }
      </CartProvider>

    </>

  )
}

export default App
