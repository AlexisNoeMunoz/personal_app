
const Icon = ({
    icon = '',    
    className = '',
    type = '',
    deg = '',
    style = {},
    ...props }) => {

    className += ` ICON ICON--${icon}`
    if(type !== '') className += ` ICON--STYLE--${type}`
    
    style['transform'] = `rotateZ(${deg}deg)`

    return (
        <div {...props} {...{className, style}} />
    )
}

import { number, object, string } from "prop-types"
Icon.propTypes = {
    icon: string,
    className: string,
    type: string,
    deg: number,
    style: object,
}

export default Icon