import { useId } from 'react'
import useFlilters from '../../hooks/useFliters'

import './Filters.css'

export default function Filters () {
  const { setFilters, filters } = useFlilters() // Estado Global

  // const [minPrice, setMinPrice] = useState(0) // Estado Local (eliminamos la fueste de verdad LOCAL)
  const minPriceFliterId = useId()
  const categoryFliterId = useId()

  const handleChangeMinPrice = (event) => {
    // Ademas Tenemos DOS FUENTES DE LA VERDAD (minPrice es un estado local, y es distinto al minPrice del contexto)
    // setMinPrice(event.target.value)  // Eliminamos la fuente de la verdad LOCAL, dejando solo la GLOBAL
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeMinCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFliterId}>Precio a partir de</label>
        <input
          type='range'
          id={minPriceFliterId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
          // Se agrega el value para que halla una sola fuente de la verdad, y sea la GLOBAL
          value={filters.minPrice}
        />
        <span>$ {filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFliterId}>Categorias</label>
        <select id={categoryFliterId} onChange={handleChangeMinCategory}>
          <option value='all'>Todas las Categorias</option>
          <option value='smartphones'>Celulares</option>
          <option value='laptops'>Notebooks</option>
        </select>
      </div>
    </section>
  )
}
