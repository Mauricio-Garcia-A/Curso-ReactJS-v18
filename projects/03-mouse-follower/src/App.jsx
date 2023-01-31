import { useEffect, useState } from 'react'
import './App.css'

function FollowMouse () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  //  Efecto Pointer Move
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    } else {
      setPosition({ x: 50, y: 50 })
    }
    //  Es Return devuelve una funcion que se ejecuta cuando el componente se desmonta o cuando cuambia la dependencia
    //  llamado CLEANUP METHOD (se ejecuta cuando el componente se desmonta o cuando cambian las dependencias, antes de ejecutar el efecto de nuevo)
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  //  Efecto Cambia className body
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)
    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <>
      <div className='puntero-mouse' style={{ transform: `translate(${position.x}px, ${position.y}px)` }} />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'}
      </button>
    </>
  )
}

function App () {
  return (
    <main>
      <h1>Puntero del Mouse</h1>
      <p className='read-the-docs'>
        Click para activar efecto en el Puntero del mouse
      </p>
      <FollowMouse />
    </main>
  )
}

export default App
