import { string } from 'prop-types'
import {useWidthPropTypes, useWidthStyle, useButtonHandler, useButtonPropTypes} from 'controls/hooks'

const Button = ({    
    children,    
    className = '',      
    ...preProps }) => {
        
    const {props: preProps1, style} = useWidthStyle(preProps)
    const {Element, styleClassName, props} = useButtonHandler(preProps1)

    className += ' BUTTON' + styleClassName
    return (
        <Element {...props} {...{ className, style}} >
            {children}
        </Element>
    )
}

Button.propTypes = {    
    className: string,
    ...useButtonPropTypes(),
    ...useWidthPropTypes(),
}

export {Button}