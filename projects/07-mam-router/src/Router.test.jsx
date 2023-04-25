import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { Router } from './components/Router.jsx'
import { getCurrentPath } from './utils.js'

vi.mock('./utils.js', () => ({
  getCurrentPath: vi.fn()
}))

describe('Router', () => {
  // Limpia la pantalla antes de cada test
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  // Algo tiene que funcionar (TEST 1)
  it('debería renderizar sin problemas', () => {
    // expect(1).toBe(1)
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })
  // TEST 2
  it('debería renderizar 404 si no machea ninguna ruta', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
    // console.log(screen.debug())
    expect(screen.getByText('404')).toBeTruthy()
  })

  // TEST 3
  it('debería renderizar el componente de la primera ruta que machea', () => {
    getCurrentPath.mockReturnValue('/')

    const routes = [
      {
        path: '/',
        Component: () => <h1>Home</h1>
      },
      {
        path: '/about',
        Component: () => <h1>About</h1>
      }
    ]

    render(<Router routes={routes} />)
    expect(screen.getByText('Home')).toBeTruthy()
  })
})
