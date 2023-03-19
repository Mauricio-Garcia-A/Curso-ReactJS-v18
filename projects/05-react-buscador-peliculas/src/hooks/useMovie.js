import { useCallback, useMemo, useState, useRef } from 'react'

import { searchMovies } from '../services/movies'

export default function useMovie ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  // Como estamos usando un input del form 'CONTROLADO' con React, el componete se renderiza cada vez que escrivimos en el imput de busqueda.
  // La funcion/metodo getMovies se esta descruyendo y creando, cada vez que cambia el estado 'seach' al escrivir una letra en el input. Y tambien cuando cambian otros estados como 'sortMovies'
  // Podemos resolver este tema con useMemo o con useCallback
  /* -- Foma sin useCallback --
  const getMovies = async () => {
    // Si 'search' es igual a lo buscado anteriormente no realiza ninguna tarea
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
      // setLoading(false)
    } catch (e) {
      setError(e.message)
      // setLoading(false)
    } finally {
      setLoading(false)
    }
  }
*/
  /* -- utilizando el useMemo que devuleve una funcion --
  const getMovies = useMemo(() => {
    // En lugar de depender del 'search' utilizado en este componente, utilizamos el 'search' pasado por parametro, solucionando asi el tema de que cambie cada vez que se modifica el estado global, y haciendo que solo se ejecute cuando cambie el 'search' pasado por parametro
    return async ({ search }) => {
    // Si 'search' es igual a lo buscado anteriormente no realiza ninguna tarea
      if (search === previousSearch.current) return

      try {
        setLoading(true)
        setError(null)
        previousSearch.current = search
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
      // setLoading(false)
      } catch (e) {
        setError(e.message)
      // setLoading(false)
      } finally {
        setLoading(false)
      }
    }
  }, [])
*/
  // utilizando useCallback (memoriza una funcion), que es como el useMemo pero pensado para funciones (facilita la sintaxis, ya que por debajo utiliza useMemo)
  const getMovies = useCallback(async ({ search }) => {
    // Si 'search' es igual a lo buscado anteriormente no realiza ninguna tarea
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
      // setLoading(false)
    } catch (e) {
      setError(e.message)
      // setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [])

  // lo que esta aqui, en el cuerpo de la funcion, tambien es parte del render de APP y se vuelve a renderizar
  // Por esta razon usamos useMemo (utilizar useMemo para memorizar alguna cosa para no volver a renderizarlo)
  /* -- forma sin useMemo --
  const sortedMovies = sort
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies

  */
  // otra forma de hacelo ... idem a la anterior pero dentro de una funcion
  /*
  const getSortedMovies = () => {
    const sortedMovies = sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }
  */
  // Muchas veces se evita usar el useMemo cuando los calculos, con pequeños calculos de mimicrosegundos (no hay que utilizarlo en todos los sitios, solo con calculos grandes - Asegurarse que hay un problema de rendimiento)
  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading, error }
}
