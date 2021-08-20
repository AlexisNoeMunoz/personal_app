
import { string } from "prop-types"
import { useButtonPropTypes, useButtonHandler, useWidthPropTypes, useWidthStyle } from 'controls/hooks'

const ButtonClean = ({
    children,
    className = '',        
    pad = '',    
    ...preProps }) => {    

    const {style, props: preProps1} = useWidthStyle(preProps)
    const {Element, styleClassName, props} = useButtonHandler(preProps1)
    
    className += ' BUTTON_CLEAN' + styleClassName
    style['padding'] = pad

    return (
        <Element {...props} {...{ className, style }}>
            {children}
        </Element>
    )
}

ButtonClean.propTypes = {    
    className: string,
    pad: string,
    ...useButtonPropTypes(),
    ...useWidthPropTypes(),     
}
export { ButtonClean }