import { SortBy, type User } from "../types.d"
interface Props {
    users: User[],
    showColors: boolean,
    deleteUser: (email: string) => void,
    changeSorting: (sort: SortBy) => void
}

export default function UsersList({ users, showColors, deleteUser, changeSorting }: Props) {

    // table, thead, tbody <--- Partes Importantes de una tabla (SON LA CLAVES)
    // tr  <--- Fila (row)
    // td  <--- Celda (column) 
    // th  <--- encabezado de filas

    return (
        <table width='100%'>
            <thead>
                <th>Foto</th>
                <th className="pointer" onClick={() => changeSorting(SortBy.NAME)}>Nombre</th>
                <th className="pointer" onClick={() => changeSorting(SortBy.LAST)}>Apellido</th>
                <th className="pointer" onClick={() => changeSorting(SortBy.COUNTRY)}>Pais</th>
                <th >Acciones</th>
            </thead>
            <tbody className={showColors ? 'table--showColors' : 'table'}>
                {
                    users.map((user) => {
                        return (
                            <tr key={user.email} >
                                <td><img src={user.picture.thumbnail} alt="img" /></td>
                                <td>{user.name.first}</td>
                                <td>{user.name.last}</td>
                                <td>{user.location.country}</td>
                                <td><button onClick={() => { deleteUser(user.email) }}>Borrar</button></td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
    )
}
