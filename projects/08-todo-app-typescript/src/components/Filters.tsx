import { FILTERS_BUTTONS } from "../consts"
import { type FilterValue } from "../types"

interface Props {
    // filterSelected: 'all' | 'active' | 'completed'
    // filterSelected: typeof TODO_FILTERS['ALL'| 'ACTIVE' | 'COMPLETED']
    // filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
    filterSelected: FilterValue
    onFilterChange: (filter: FilterValue) => void

    //onClearCompleted: (filter: FilterValue) => void
}


export const Filters: React.FC<Props> = ({filterSelected, onFilterChange }) => {
    const handleClick = (filter: FilterValue) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        onFilterChange(filter)
    }

    return (
        <ul className="filters">
            { // traformar OBJETO en Array (FILTERS_BUTTONS)
            Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }])=>{
                // className={`${filterSelected === key ? 'selected' : ''}`}
                const isSelected = key === filterSelected
                const className = isSelected ? 'selected' : ''

                return (
                <li key={key}>
                    <a 
                        className={className} 
                        href={href}
                        onClick={handleClick(key as FilterValue)}
                    >
                        {literal}
                    </a>
                </li>
               ) 
            })}
            <li>

            </li>
        </ul>
    )
}