const API_KAY = 'ebffc562'

export const searchMovies = async ({ search }) => {
  // Si 'search' es vacio no hago el fech
  if (search === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KAY}&s=${search}`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster
    }))
  } catch (e) {

  }
}
