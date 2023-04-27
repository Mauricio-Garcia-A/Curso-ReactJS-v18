import { type TodoId, type Todo as TodoType } from "../types"

//type Props = TodoType
interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId)=> void
  onToggleCompleteTodo: ({ id, completed}: Pick<TodoType, 'id' | 'completed'> ) => void

}
// En este caso estamos haciendo "props drilling"


export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleteTodo}) => {
  
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompleteTodo({
      id, 
      completed: event.target.checked
    })
  }
  
  return (
    <div className="view">
        <input 
            className="toggle"
            checked={completed}
            type="checkbox"
            /*onChange={(event) => {
              onToggleCompleteTodo({id, completed: event.target.checked})
            }}*/
            onChange={ handleChangeCheckbox}
        />
        <label>{title}</label>
        <button 
        className="destroy"
        onClick={() => onRemoveTodo({ id })}
        />
    </div>
  )
}
