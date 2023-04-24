import { useState, useEffect, Children } from 'react'
import { EVENTS } from '../consts'
import { match } from 'path-to-regexp'

export function Router ({ routes = [], defaultComponent: DefaultComponent = () => <h1>ERROR 404</h1>, children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSATATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSATATE, onLocationChange)
    }
  }, [])

  // console.log(children)
  // Recupero las rutas que llegan del children (solo elementos <Route />)
  const routesFromChildren = Children.map(children, ({ type, props }) => {
    const { name } = type
    const isRoute = name === 'Route'

    // if (isRoute) return null
    // return props
    return isRoute ? props : null
  })

  // Rutas que vamos a usar- las que trae por PROPS y las que trae por CHILDRENS
  const routesToUse = routes.concat(routesFromChildren) // concatenos las rutas por Props con las childrens

  let routeParams = {}

  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true

    // Usamos el path-to-regexp para detectar rutas dinamicas como por ejemplo '/search/:query' <-- :query es dinamico
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if (!matched) return false

    // Guardamos los parametros de la url que son dinamicos y emos extraido con path-to-regexp
    // '/search/javascrip' <-- ( matched.params.query === 'javascrip' )
    routeParams = matched.params
    return true // el find nesesita que le devolvamos un true para que sepa que ese elemento es el que tiene que renderizar
  })?.Component

  return Page
    ? <Page routeParams={routeParams} />
    : <DefaultComponent routeParams={routeParams} />
}
