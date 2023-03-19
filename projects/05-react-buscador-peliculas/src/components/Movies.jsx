export function ListOfMovies ({ movies }) {
  return (
    <ul className='movies'>
      {movies.map(movie => (
        <li className='movie' key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.image} alt={`image-${movie.id}`} />
        </li>
      ))}
    </ul>
  )
}

export function RederNoResults () {
  return (
    <div>No se han encontrado Resultados de peliculas para tu busqueda</div>
  )
}

export function MovieSearchResults ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    <div>
      {hasMovies
        ? <ListOfMovies movies={movies} />
        : <RederNoResults />}
    </div>
  )
}
