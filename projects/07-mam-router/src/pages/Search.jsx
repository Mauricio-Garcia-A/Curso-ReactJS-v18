import { Link } from '../components/Link'

export default function SearchPage ({ routeParams }) {
  return (
    <div>
      <h1>BUSCARDOR</h1>
      <p>USTED A BUSCADO: <b style={{ color: 'red' }}>{routeParams.query}</b></p>
      <br />
      <Link to='/'> volver a la Home </Link>
    </div>
  )
}
