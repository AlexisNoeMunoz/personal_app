
import { string, object } from "prop-types"

const Divisor = ({ className = '', style = {}, space = '' }) => {
    
    style['marginTop'] = space
    style['marginBottom'] = space
    
    className += ' DIVISOR'
    return <div className={className} style={style} />
}

Divisor.propTypes = {
    className: string,
    style: object,
    space: string,
}
export { Divisor }