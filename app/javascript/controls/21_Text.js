

const Text = ({
    children,
    style = {},    
    className = '',  
    light = false, 
    w100 = false,
    ...props }) => {

    className += " TEXT"
    if(light) className += ' TEXT--LIGHT'
    if(w100) style['width'] = '100%'

    return (
        <p {...props} {...{className, style}}>
            {children}
        </p>
    )
}

import {string, object, bool} from 'prop-types'
Text.propTypes = {
    style: object,
    className: string,
    light: bool,
    w100: bool,
}

export default Text