// --- Forma de cargar formulario en JS (es mas optima al ser nativa)- (HTML/JS)
/* GESTIONAR EL FORMULARIO DE FORMA "NO CONTROLADA" por React (controlarlo desde el arbol de elemento del DOM)
      - Es la forma mas sencilla y la mas optima
      - cuanta con siertas validaciones predefinidad por defecto(required, pattern, ...)
*/

export default function FormNoControlado () {
  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = new window.FormData(event.target)
    const query = fields.get('query')
    //console.log(query)

    // -- Validaciones basicas --
    if (query === '') {
      // Error si no se ha ingresado el nombre de la pelicula
    }
  }
  return (
    <form
      className='form'
      onSubmit={handleSubmit}
    >
      <label>Nombre Pelicula:</label>
      <input
        name='query'
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
