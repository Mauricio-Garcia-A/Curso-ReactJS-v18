import { Link } from "../components/Link";

export default function Page404 () {
  return (
    <>
      <h1>ERROR 404: No se a encontrado la ruta deseada ;D</h1>
      <img src='https://midu.dev/images/this-is-fine-404.gif' alt='imagen-error' />
      <br />
      <Link to='/'> volver a la Home </Link>
    </>
  )
}
