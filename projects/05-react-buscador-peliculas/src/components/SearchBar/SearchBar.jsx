// FORMULARIO EN REACT UTILIZANDO useRef (Esta Opcion no es recomendable si el formulario tiene muchos campos, porque hay que hacer muchas referencias los elementos)
import { useRef } from 'react'

export default function SearchBar () {
  const inputRef = useRef()

  const handleSubmit = (event) => {
  // Elimino comportamiento del formulario por defecto
    event.preventDefault()
    // Se extrae el valor del input
    //   const inputElement = inputRef.current
    //   const value = inputElement.value
    const value = inputRef.current.value

    console.log(value)
  }

  return (
    <form
      className='form'
      onSubmit={handleSubmit}
    >
      <label>Nombre Pelicula:</label>
      <input
        ref={inputRef}
        placeholder='Avengers, Matrix, ...'
      />
      <button
        type='submit'
      >
        Buscar
      </button>
    </form>
  )
}
