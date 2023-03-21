// import { useCart } from '../../hooks/useCart'
import useFlilters from '../../hooks/useFliters'
import './Footer.css'

export default function Footer () {
  const { filters } = useFlilters()
  // const { cart } = useCart()
  return (
    <footer className='footer'>
      <h4> Valor de los Filtros Utilizados </h4>
      <p>Precion Min: &nbsp;<span>{`$ ${filters.minPrice}`}</span></p>
      <p>Categoria: &nbsp;<span>{`${filters.category}`}</span></p>

      {
        // JSON.stringify(filters, null,2)
      }
      {
         // JSON.stringify(cart, null, 2)
      }
    </footer>
  )
}
