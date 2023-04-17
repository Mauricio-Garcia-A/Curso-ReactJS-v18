
import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'

import { SortBy, type User } from './types.d'
import UsersList from './components/UsersList'

function App() {

  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCoutry] = useState<string | null>(null)

  // const [originalUsers, setOriginalUsers] = useState<User[]>([])      // esto funciona, pero manejar 2 estados con el mismo valor no es optimo
  const originalUsers = useRef<User[]>([])
  // useRef --> usamos el useRef para guardar el valor, que queremos que se comparta entre renderizados, pero al cambiar no vuelva a rendereizar el componente



  const toggleColor = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    const newSortingValue = sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSortingValue)
  }

  const handleDelete = (email: string) => {
    // En este caso tiene mas sentido usar un filter que un  splice o un slice (estos ultimos mutan el array)
    const filteredUsers = users.filter((users) => {
      return users.email != email
    })
    setUsers(filteredUsers)
  }
  const handleReset = () => {
    setUsers(originalUsers.current)
  }

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort)
  }


  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then(res => res.json())
      .then(res => {
        setUsers(res.results)
        originalUsers.current = res.results
      })
      .catch(err => {
        console.error(err)
      })
  }, [])


  /* --- PRIMERO FILTRAMOS Y LUEGO ORDENAMOS ---*/
  /*const filteredUsers = typeof filterCountry === 'string' && filterCountry.length > 0     // en este caso "typeof filterCountry === 'string'" es igual que "filterCountry != 'null'"
    ? users.filter(user => {
      return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
    })
    : users
  */
  const filteredUsers = useMemo(() => {
    console.log('Filtrar')
    return typeof filterCountry === 'string' && filterCountry.length > 0     // en este caso "typeof filterCountry === 'string'" es igual que "filterCountry != 'null'"
      ? users.filter(user => {
        return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
      })
      : users
  }, [users, filterCountry])


  /* ---- FORMA 1: Menos optima
  const sortedUsers = sortByCountry
    ? [...users].sort((a, b) => {                                    // UTILIZAR UN SORT esta mal, porque muta el array original, par ello hacemo una copia de user ([... users] o structuredClone(users))
      // a.location.country > b.location.country ? 1 : -1            // Forma menos optima de hacerlo, y es considerada como MALA SOLUCION
      return a.location.country.localeCompare(b.location.country)    // Forma correcta de hacerlo, ya que el localeCompare, compara strings tomando encuenta acentos y otros simbolos especiales
    })
    : users
    
  // --- FORMA 2:  Forma mas optima de hacerlo ----
  const sortedUsers = sortByCountry
    ? filteredUsers.toSorted((a, b) => {
      return a.location.country.localeCompare(b.location.country)
    })
    : filteredUsers
 */

  //--- FORMA 3:Utilizando useMemo para evitar que se ordenen cada vez que cambia un estado
  const sortedUsers = useMemo(() => {
    console.log('Ordenar')

    if (sorting === SortBy.NONE) return filteredUsers

    /*
    if (sorting === SortBy.COUNTRY) return filteredUsers.toSorted(
      (a, b) => a.location.country.localeCompare(b.location.country)
    )
    if (sorting === SortBy.NAME) return filteredUsers.toSorted(
      (a, b) => a.name.first.localeCompare(b.name.first)
    )
    if (sorting === SortBy.LAST) return filteredUsers.toSorted(
      (a, b) => a.name.last.localeCompare(b.name.last)
    )

  */

    // OTRA FORMA DE HACER LA BUSQUEDA, MAS EXTENCIBLE 
    const compareProperties: Record<string, (user: User) => any> = {
      [SortBy.COUNTRY]: user => user.location.country,
      [SortBy.NAME]: user => user.name.first,
      [SortBy.LAST]: user => user.name.last
    }

    return filteredUsers.toSorted((a, b) => {
      const extractProperty = compareProperties[sorting]
      return extractProperty(a).localeCompare(extractProperty(b))
    })


  }, [filteredUsers, sorting])


  return (
    <div className="App">
      <h1>Prueba Tecnica</h1>
      <header>
        <button onClick={toggleColor}>Color Filas</button>
        <button onClick={toggleSortByCountry}>
          {
            sorting === SortBy.COUNTRY ? 'Odenar por Pais' : 'No Ordenar por pais'
          }
        </button>
        <button onClick={handleReset}>Resetiar Usuarios</button>
        <input placeholder='Filtra por PAIS'
          onChange={(e) => {
            setFilterCoutry(e.target.value)
          }}
        />
      </header>
      <UsersList users={sortedUsers} showColors={showColors} deleteUser={handleDelete} changeSorting={handleChangeSort} />
    </div>
  )
}

export default App

