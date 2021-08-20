
import { string } from "prop-types"

const ListItem = ({
    children,
    className = '',
    ...props }) => {
    
    
    className += ' LIST_ITEM'
    
    return (
        <li {...props} {...{className}} >
            {children}
        </li>
    )
}

ListItem.propTypes = {
    className: string,
}

export {ListItem}