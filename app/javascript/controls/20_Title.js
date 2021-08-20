

const Title = ({
    children,
    style = {},
    className = '',
    align = '',
    light = false,
    w100 = false,    
    ...props }) => {

    className += ' TITLE'
    if(light) className += ' TITLE--LIGHT'
    
    style['textAlign'] = align
    if(w100) style['width'] = '100%'    
    
    return (
        <h1 {...props} {...{ className, style }}>
            {children}
        </h1>
    )
}

import { string, object, bool} from 'prop-types'
Title.propTypes = {
    style: object,
    className: string,
    align: string,
    light: bool,
    w100: bool,    
}

export {Title}