import { TODO_FILTERS } from "./consts"

export interface Todo {
    id: string
    title:string
    completed: boolean
}

/* Se puede hacer de 2 formas, primero hacer la interface (contrato) y despues sacar lo que se presice (Pick), o tipar primeros los atibutos, y despues inyectarlos en la interface */
//export type TodoTitle = Todo['title']
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>
// export type TodoId = Pick<Todo, 'title' | 'completed'>
export type TodoId = Omit<Todo, 'id'>

// type ListOfTodo = Array<Todo>

export type ListOfTodo = Todo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
// keyof (puede ser cualquier key del objeto TODO_FILTERS)



//-------------------------------------------------------------------
// Partial, Pick, Omit (Son UtilityClass)