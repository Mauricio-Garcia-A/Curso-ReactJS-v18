import { Link } from '../components/Link.jsx'

export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una pagina de ejemplo para crear un React Router</p>
      <Link to='/about'>Ir a Sobre Nosotros </Link>
    </>
  )
}
