// --- Forma de cargar formulario con React (FORMA "CONTROLADA") --- Facilita la validacion especificas del formulario
// GESTIONAR EL FORMULARIO CON REACT (Se utiliza cuando hay que hacer validaciones muy particulares)
/*  -El valor del formulario se controla mediante un ESTADO.
    -Es mas lenta, utilizarla en caso puntuales. React controla que se escrive en los input, cuando lo hace, como validarlos, ect.
*/

import { useEffect, useState } from 'react'

export default function FromControlado () {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    //console.log({ query })
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    // PreValidacion - No permite espacio vacio
    if (newQuery.startsWith(' ')) return
    setQuery(newQuery)
  }

  useEffect(() => {
    console.log(query)
    // --Validaciones Especificas -- Muentras escribis en el input

    if (query === '') {
      setError('No se puede buscar la pelicula vacia')
      return
    }

    if (query.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [query])

  return (
    <>
      <form
        className='form'
        onSubmit={handleSubmit}

      >
        <label>Nombre Pelicula:</label>
        <input
          onChange={handleChange}
          value={query}
          name='query'
          placeholder='Avengers, Matrix, ...'
        />
        <button
          type='submit'
        >
          Buscar
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  )
}
