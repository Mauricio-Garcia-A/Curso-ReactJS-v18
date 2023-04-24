import { Link } from '../components/Link'

export default function AboutPage () {
  return (
    <>
      <button onClick={() => window.history.back()}>{'<'}</button>
      <h1>Sobre Nosotros</h1>
      <p>Hola, Soy Mauro y Esto es un Clon de React Router</p>
      <img src='https://pbs.twimg.com/profile_images/537756088049737728/D2UXJUq-_400x400.jpeg' alt='imagen-perfil' />
      <br />
      <Link to='/'> Ir al Home </Link>
    </>
  )
}
