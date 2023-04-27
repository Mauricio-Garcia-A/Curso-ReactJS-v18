import { useState } from "react"
import { Todos } from "./components/Todos"
import { FilterValue, TodoTitle, type TodoId, type Todo as TodoType } from "./types"
import { Footer } from "./components/Footer"
import { TODO_FILTERS } from "./consts"
import { Header } from "./components/Header"

const mockTodos = [
  {
    id:'1',
    title:'Desayunar',
    completed: true,
  },
  {
    id:'2',
    title:'Ir al Gym',
    completed: false,
  },
  {
    id:'3',
    title:'Programar ful time',
    completed: false,
  }
]

const App = () : JSX.Element => {
  const [todos, setTodos ] = useState(mockTodos)
  const [filterSelected, setFilterSalected]=useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodo = todos.filter(todo => todo.id != id)
    setTodos(newTodo)
  }

  const handleCompleted = (
    {id, completed}: Pick<TodoType, 'id' | 'completed'>         // otra forma seria ({id, completed}:{id: TodoId, completed: TodoCompleted}). Otra puede ser ({id, completed}: Partial<Todo>)
  ): void => {
  
    const newTodos = todos.map(todo => {
      if (todo.id === id ) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSalected(filter)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const hadleRemoveAllCompleted = (): void => {
    const newTodo = todos.filter(todo => !todo.completed)
    setTodos(newTodo)
  }

  const handleAddTodo = ({title}: TodoTitle):void =>{
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }


  return (
    <>
      <Header onAddTodo={handleAddTodo} />
      <div className="todoapp">
        <Todos 
          todos={filteredTodos}
          onRemoveTodo={handleRemove}
          onToggleCompleteTodo={handleCompleted}
        />
        <Footer 
          activeCount={activeCount}
          completedCount={completedCount}
          onClearCompleted={hadleRemoveAllCompleted}
          filterSelected={filterSelected}
          handleFilterChange={handleFilterChange}
        />
        
      </div>
      
    </>
  )
}

export default App
