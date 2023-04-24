import { BUTTON, EVENTS } from '../consts'

export function navigate (href) {
  window.history.pushState({}, '', href)

  // Crear un evento personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  // Enviar el evento. para quien lo quiera escuchar
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = () => {
    // Eliminamos el comportamiento por defecto del ancor, para que no se actialice toda la pagina

    // Agregamos comportamiento de accecivilidad por teclado
    // const isMainEvent = event.button === 0 // clic principal (clik derecho)
    const isMainEvent = event.button === BUTTON.primary
    const isModifiedEvent = event.metaKey || event.altKey || event.shiftKey || event.ctrlKey // Evento modificado por las teclas meta/alt/shift
    const isManageableEvent = target === undefined || target === '_self' // Target atrivuto que indica donde se abre la pagina. Evento cuando la pagina se abre asi misma (evitar volver a abrir)

    if (isMainEvent && isManageableEvent && isModifiedEvent) {
      // eslint-disable-next-line no-undef
      event.preventDefault()
      navigate(to)
    }
  }
  return <a onClick={handleClick} href={to} target={target} {...props} />
}

/*
    OTRA FORMA DE APLICAR LA PROPS CHILDREN
    <a onClick={handleClick} href={to} target={target} children={props.children} />
    <a onClick={handleClick} href={to} target={target} > {props.children} </a>
*/