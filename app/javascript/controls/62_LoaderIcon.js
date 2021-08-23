
import { string } from "prop-types"

const LoaderIcon = ({ size, className = '', type = ''}) => {
    className += ' LOADER_ICON'
    if(type !== '')  className += ` LOADER_ICON--${type}`
    return (
        <div className={className} style={{ '--size': size }} />
    )
}

LoaderIcon.propTypes = {
    className: string,
    type: string,
}
export { LoaderIcon }