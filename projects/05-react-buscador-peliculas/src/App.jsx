import { useState, useEffect, useRef, useCallback } from 'react'
import './App.css'
import debounce from 'just-debounce-it'
import { MovieSearchResults } from './components/Movies'
import useMovie from './hooks/useMovie'

// CustomHook - useSearch
function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true) // es el primer input del usuario (banderita)

  useEffect(() => {
    // console.log(search)

    // Valida si es la primera busqueda del usuario
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      // console.log(isFirstInput.current)
      return
    }
    // --Validaciones Especificas -- Muentras escribis en el input

    if (search === '') {
      setError('No se puede buscar la pelicula vacia')
      return
    }

    if (search.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App () {
  const [sortMovies, setSortMovies] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovie({ search, sort: sortMovies })

  const debaunceGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search })
    }, 500) // 300 (300 milisegundos) es lo que un usuario promedio trada entre precionar una tecla y otra
    , [])

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log({ search })
    getMovies({ search })
  }

  const handleChange = (event) => {
    /*
    const newQuery = event.target.value
    // PreValidacion - No permite espacio vacio
    if (newQuery.startsWith(' ')) return
    updateSearch(newQuery)
*/
    // -- Busqueda automaticamentemente al escribir --
    const newSearch = event.target.value
    updateSearch(newSearch)
    debaunceGetMovies(newSearch)
  }
  const handleSort = () => {
    setSortMovies(!sortMovies)
  }

  useEffect(() => {
    console.log('render GetMuvies')
  }, [getMovies])
  return (
    <div className='page-App'>
      <header>
        <h1 style={{ color: '#FFF' }}> Buscador de Peliculas</h1>
        <form
          className='form'
          onSubmit={handleSubmit}
        >
          <label>Nombre Pelicula:</label>
          <input
            onChange={handleChange}
            value={search}
            name='query'
            placeholder='Avengers, Matrix, ...'
          />
          <input type='checkbox' onChange={handleSort} checked={sortMovies} />
          <label>A-Z</label>

          <button
            type='submit'
          >
            Buscar
          </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {loading
          ? <p>Cargando...</p>
          : <MovieSearchResults movies={movies} />}
      </main>
    </div>
  )
}

export default App
