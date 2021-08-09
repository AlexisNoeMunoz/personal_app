
const ButtonClean = ({
    children,
    style = {},
    className = '',
    type = '',
    w100 = false,
    pad = '',
    ...props}) => {


    className += ' BUTTON_CLEAN'
    if(type !== '') className += ` BUTTON--STYLE--${type}`

    if(w100) style['width'] = '100%'
    style['padding'] = pad
    return (
        <button {...props} {...{className, style}}>
            {children}
        </button>
    )
}

import { bool, object, string } from "prop-types"
ButtonClean.propTypes = {
    style: object,
    className: string,
    type: string,
    w100: bool,
    pad: string,
}

export default ButtonClean