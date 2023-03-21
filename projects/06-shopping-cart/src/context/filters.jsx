// CONTEXTO DINAMICO (estado gloval)
import { createContext, useState } from 'react'

// 1. Crear el Contexto
// Este es el que tenemos que cosumir
export const FiltersContext = createContext()

// 2. Crear el Provider, para proveer el contexto
// Este es el que no provee de acceso al contexto
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}

// 3. Consumir Contexto
/* esta es la manera de consumirlo, en donde la constante 'filter' va a tener el valos del values del Provider
  const filters = useContext(FiltersContext)
*/
