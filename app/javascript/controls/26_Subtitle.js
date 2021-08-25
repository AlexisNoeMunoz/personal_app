
import { string, object, bool} from 'prop-types'

const Subtitle = ({
    children,
    style = {},
    className = '',
    align = '',
    light = false,
    w100 = false,    
    ...props }) => {

    className += ' SUBTITLE'
    if(light) className += ' SUBTITLE--LIGHT'
    
    style['textAlign'] = align
    if(w100) style['width'] = '100%'    
    
    return (
        <h2 {...props} {...{ className, style }}>
            {children}
        </h2>
    )
}

Subtitle.propTypes = {
    style: object,
    className: string,
    align: string,
    light: bool,
    w100: bool,    
}

export {Subtitle}