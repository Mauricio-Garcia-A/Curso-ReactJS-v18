import { TodoTitle } from "../types"
import { CreateTodo } from "./CreateTodo"

interface Prop {
    onAddTodo: ({title}:TodoTitle) => void
}


export const Header: React.FC<Props> = ({onAddTodo}) => {
  return (
    <header className="header">
        <h1>ToDo-List TS</h1>
        <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}
