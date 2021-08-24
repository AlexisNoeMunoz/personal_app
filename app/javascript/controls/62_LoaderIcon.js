
import { bool, string } from "prop-types"

const LoaderIcon = ({ size, className = '', type = '' , loaded = false}) => {
    className += ' LOADER_ICON'
    if(type !== '')  className += ` LOADER_ICON--${type}`
    if(loaded) className += ' LOADER_ICON--loaded'
    return (
        <div className={className} style={{ '--size': size }} />
    )
}

LoaderIcon.propTypes = {
    className: string,
    type: string,
    loaded: bool,
}
export { LoaderIcon }