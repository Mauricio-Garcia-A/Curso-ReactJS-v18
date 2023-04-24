import { lazy, Suspense } from 'react'
import './App.css'

import { Router } from './components/Router.jsx'
import Page404 from './pages/404'
import SearchPage from './pages/Search'
import { Route } from './components/Route.jsx'
// import HomePage from './pages/home.jsx'
// import AboutPage from './pages/about.jsx'
const LazyHomePage = lazy(() => import('./pages/home.jsx'))
const LazyAboutPage = lazy(() => import('./pages/about.jsx'))

const appRoutes = [
  /*
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  */
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      <h1>MAM-ROUTER</h1>
      <Suspense fallback={<div>Cargando...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>

    </main>
  )
}

export default App
