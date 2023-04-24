import { Link } from '../components/Link'
const i18n = {
  es: {
    title: 'Sobre Nosotros',
    description: 'Hola, Soy Mauro y Esto es un Clon de React Router',
    textButton: 'Ir al HOME'
  },
  en: {
    title: 'About Us',
    description: 'Hi, Im Mauro and I am creatong a Clone of React Router',
    textButton: 'Go to HOME'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')

  console.log(i18n)
  return (
    <>
      <button onClick={() => window.history.back()}>{'<'}</button>
      <h1>{i18n.title}</h1>
      <p>{i18n.description}</p>
      <img src='https://pbs.twimg.com/profile_images/537756088049737728/D2UXJUq-_400x400.jpeg' alt='imagen-perfil' />
      <br />
      <Link to='/'> {i18n.textButton} </Link>
    </>
  )
}
