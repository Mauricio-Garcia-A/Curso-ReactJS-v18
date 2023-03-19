// FORMA NATIVA DE FORMULARIO MULTIPLE EN REACT (Es una forma mas recomendada porque es Nativa HTML/JS, sin depender de react)
// Resuelto con HTML/JS

export default function SearchBarMultiple () {
  // FUNCION PARA UN SOLO INPUT
  /*
  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = new window.FormData(event.target)
    const query = fields.get('query')
    console.log(query)
  }
  */
  const handleSubmit = (event) => {
    event.preventDefault()
    // const {query, actor} = Object.fromEntries(new window.FormData(event.target))
    // console.log({query,actor})
    const fields = Object.fromEntries(
      new window.FormData(event.target)
    )
    console.log(fields)
  }

  return (
    <form
      className='form'
      onSubmit={handleSubmit}
    >
      <div>
        <label>Nombre Pelicula:</label>
        <input
          name='query'
          placeholder='Avengers, Matrix, ...'
        />
      </div>
      <div>
        <label>Nombre Actor:</label>
        <input
          name='actor'
          placeholder='DiCaprio, Deniro, ...'
        />
      </div>
      <button
        type='submit'
      >
        Buscar
      </button>
    </form>
  )
}
